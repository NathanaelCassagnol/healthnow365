//import { Auth, API, graphqlOperation } from 'aws-amplify';
import { format, differenceInYears } from 'date-fns';
import { signUp, signOut } from 'aws-amplify/auth';
import { uploadData } from 'aws-amplify/storage';
import { generateClient } from 'aws-amplify/api';
import { CreateUserInput } from 'app/API.service';
import { createUser } from 'graphql/mutations';

const client = generateClient();
interface CreateUserData {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  email: string;
  birth_date: Date;
  phone_number: string;

  profile_picture?: File;
  address_line_one?: string;
  address_line_two?: string;
  address_city?: string;
  address_state?: string;
  address_country?: string;
  address_zip_code?: string;
  gender?: string;
}
interface CreateUserResponse {
  successStatus: boolean;
  userID?: string;
}

/**
 * Creates a User for HealthNow
 * @remarks
 * This method signs the user into Auth, added their info to GraphQL, and adds their profile picture to S3
 * 
 * @param {CreateUserData} user_data
 * the user's information
 * 
 * @returns {Object}
 *  {
 *    successStatus: Boolean
 *    userID: String
 *  }
 */
export async function CreateUser(user_data: CreateUserData): Promise<CreateUserResponse> {
  try {
    // Initialize user data
    const temp_user_data: CreateUserInput = {
      first_name: user_data.first_name,
      last_name: user_data.last_name,
      username: user_data.username,
      email: user_data.email,
      birth_date: format(user_data.birth_date, 'yyyy-MM-dd'),
      phone_number: user_data.phone_number,
      address_line_one: user_data.address_line_one,
      address_line_two: user_data.address_line_two,
      address_city: user_data.address_city,
      address_state: user_data.address_state,
      address_country: user_data.address_country,
      address_zip_code: user_data.address_zip_code,
      age: differenceInYears(new Date(), new Date(user_data.birth_date)),
      gender: user_data.gender,
    };

    // Sign up user into auth
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: user_data.email,
      password: user_data.password,
      options: {
        userAttributes: {
          email: user_data.email,
          // phone_number: user_data.password // E.164 number convention
        },
        // optional
        autoSignIn: false // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      }
    });

    temp_user_data.id = userId;

    // Add profile picture to S3
    if (user_data.profile_picture) {
      let uri, extension;

      extension = user_data.profile_picture.type.substring(6);
      uri = `${self.crypto.randomUUID()}.${extension}`;

      const result = await uploadData({
        key: uri,
        data: user_data.profile_picture,
        options: {
          accessLevel: 'guest', // defaults to `guest` but can be 'private' | 'protected' | 'guest'
          contentType: user_data.profile_picture.type,
          metadata: { name: encodeURI(user_data.profile_picture.name) },
          // onProgress // Optional progress callback.
        }
      }).result;

      temp_user_data.profile_picture_URI = uri;
    }

    // Add user data to GraphQL
    const newUser = await client.graphql({
      query: createUser,
      variables: { input: temp_user_data }
    });

    return {
      successStatus: true,
      userID: temp_user_data.id,
    };

  } catch (error) {
    console.log('Error with Create User', error);
    return {
      successStatus: false,
    };
  }
}
async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

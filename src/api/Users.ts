//import { Auth, API, graphqlOperation } from 'aws-amplify';
import { format, differenceInYears } from 'date-fns';
import { signUp, signOut } from 'aws-amplify/auth';

import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

const client = generateClient();

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phone_number: string;
};

interface UserData {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  birth_date: Date;

  address_line_one?: String;
  address_line_two?: String;
  address_city?: String;
  address_state?: String;
  address_country?: String;
  address_zip_code?: String;
  age?: Number;
  gender?: String;
}

interface CreateUserResponse {
  successStatus: boolean;
  userID?: string;
  errorMessage?: string;
  err?: any;
}

async function handleSignUp({
  username,
  password,
  email,
  phone_number
}: SignUpParameters) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          phone_number // E.164 number convention
        },
        // optional
        autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      }
    });

    console.log(userId);
  } catch (error) {
    console.log('error signing up:', error);
  }
}
export async function CreateUser(user_data: UserData, profile_picture?: File[]): Promise<CreateUserResponse> {
  try {
    // Check for required fields
    const requiredFields = ['first_name', 'last_name', 'username', 'email', 'birth_date'];
    if (requiredFields.some(field => !user_data[field])) {
      throw new Error('Error with CreateUser: Required data missing');
    }

    // Initialize user data
    const temp_user_data = {
      id: '',
      first_name: user_data.first_name,
      last_name: user_data.last_name,
      username: user_data.username,
      email: user_data.email,
      birth_date: format(user_data.birth_date, 'yyyy-MM-dd'),
      // Add other fields similarly
    };

    // Sign up user
    const authUser = await Auth.signUp({
      username: user_data.email,
      password: user_data.password, // Ensure password is hashed before passing
      attributes: {
        email: user_data.email,
      },
      autoSignIn: {
        enabled: false,
      },
    });
    temp_user_data.id = authUser.userSub;

    // Upload profile picture if provided
    if (profile_picture && profile_picture.length > 0) {
      const put = await PutImage(profile_picture[0]); // Assuming PutImage is defined elsewhere
      if (put.successStatus) {
        temp_user_data.profile_picture_URI = put.uri;
      } else {
        throw new Error('Error with CreateUser: Error uploading profile picture');
      }
    }

    // Create user in API
    const newTodo = await client.graphql({
      query: mutations.createTodo,
      variables: { input: temp_user_data }
    });

    return {
      successStatus: true,
      userID: temp_user_data.id,
    };
  } catch (error) {
    return {
      successStatus: false,
      errorMessage: `Error with CreateUser: ${error.message}`,
      err: error,
    };
  }
}


/* 
    Function for creating user
    Refactored 8/11/2023

    Input :
        user_data: {
            first_name: String!
            last_name: String!
            username: String!
            email: AWSEmail!
            birth_date: AWSDate!
            address_line_one: String
            address_line_two: String
            address_city: String
            address_state: String
            address_country: String
            address_zip_code: String
            phone_number: String
            age: Int
            gender: String                  // options[Male, Female, [UserInput]]

            // pass in from user context
            language: String                #@default(value: 'en')
            font_size: String               #@default(value: medium)
            theme: String                   #@default(value: dark)
            can_view_filter: Boolean		#@default(value: true)
            age_restriction_filter: Boolean #@default(value: true)

            // TODO add policy agreement
        }
        profile_picture: FileList

    Output : {
        successStatus: Boolean
        errorMessage: String
        err: AWSErr

        userID: String          // On success returns the GraphQL and Auth ID for the user
    }

    User Definition 8/9
    User struct required fields:
        id: ID!
        first_name: String!
        last_name: String!
        username: String!
        email: AWSEmail!
        birth_date: AWSDate!
        role: String!

    User struct optional fields:
        address_line_one: String
        address_line_two: String
        address_city: String
        address_state: String
        address_country: String
        address_zip_code: String
        phone_number: String
        age: Int
        gender: String                  // options[Male, Female, [UserInput]]
        profile_picture_URI: String
        lastLogin: AWSDateTime
        number_of_logins: Int
        is_banned: Boolean
        account_balance: Float
        log_URI: String
        language: String                #@default(value: 'en')
        font_size: String               #@default(value: medium)
        theme: String                   #@default(value: dark)
        can_view_filter: Boolean		#@default(value: true)
        age_restriction_filter: Boolean #@default(value: true)
        num_comments_made: Int
        num_content_liked: Int
        num_content_saved: Int
        num_posts_liked: Int
        num_content_purchased: Int
        num_unread_notifications: Int
 */

export async function CreateUserOld(user_data, profile_picture) {
  // Create User
  // TODO add IP Log
  // //console.log('Entered CreateUser', user_data);

  // Check for required fields
  if (
    !user_data.first_name ||
    !user_data.last_name ||
    !user_data.username ||
    !user_data.email ||
    !user_data.birth_date
  ) {
    return {
      successStatus: false,
      errorType: 'Error with CreateUser: Required data missing',
      err: [],
    };
  }

  var progress = '';

  try {
    // initalize variables
    progress = 'Initalize Variables';

    let authUser;
    let uri = '';
    let extention = '';

    var temp_user_data = {
      // Required Variables
      id: '',
      first_name: user_data.first_name,
      last_name: user_data.last_name,
      username: user_data.username,
      email: user_data.email,
      birth_date: format(new Date(user_data.birth_date), 'yyyy-MM-dd'),
      role: 'User',

      // Default Values
      address_line_one: (user_data.address_line_one) ? user_data.address_line_one : undefined, // not entirely neccessary but forces all falsy values to undefined
      address_line_two: (user_data.address_line_two) ? user_data.address_line_two : undefined,
      address_city: (user_data.address_city) ? user_data.address_city : undefined,
      address_state: (user_data.address_state) ? user_data.address_state : undefined,
      address_country: (user_data.address_country) ? user_data.address_country : undefined,
      address_zip_code: (user_data.address_zip_code) ? user_data.address_zip_code : undefined,
      phone_number: (user_data.phone_number) ? user_data.phone_number : undefined,
      age: differenceInYears(new Date(), new Date(user_data.birth_date)),
      gender: (user_data.gender) ? user_data.gender : undefined,
      profile_picture_URI: (profile_picture) ? '' : undefined,
      lastLogin: new Date().toISOString(),
      number_of_logins: 1,
      is_banned: false,
      account_balance: 0.00,

      language: (user_data.language) ? user_data.language : 'en',
      font_size: (user_data.font_size) ? user_data.font_size : 'medium',
      theme: (user_data.theme) ? user_data.theme : 'dark',
      can_view_filter: (user_data.can_view_filter) ? user_data.can_view_filter : true,
      age_restriction_filter: (user_data.age_restriction_filter) ? user_data.age_restriction_filter : true,
      num_comments_made: 0,
      num_content_liked: 0,
      num_content_saved: 0,
      num_posts_liked: 0,
      num_content_purchased: 0,
      num_unread_notifications: 0,
    };

    //AUTH
    progress = 'User AUTH';
    authUser = await Auth.signUp({
      username: user_data.email,
      password: user_data.password,
      attributes: {
        // change to spread avalible attributes
        email: user_data.email, // optional
        // phone_number: temp_user_data.phone_number, // optional - E.164 number convention
        // other custom attributes
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: false,
      },
    });

    temp_user_data.id = authUser.userSub;

    //STORAGE
    progress = 'User STORAGE';

    if (profile_picture) {
      let put = await PutImage(profile_picture[0]);
      if (put.successStatus) {
        temp_user_data.profile_picture_URI = put.uri
      }
      else {
        return {
          successStatus: false,
          errorMessage: ('Error with CreateUser: ' + progress),
          //err: err,
        };
      }
    }

    // API
    progress = 'User GRAPHQL';

    await API.graphql(graphqlOperation(createUser, { input: temp_user_data }));

    return {
      successStatus: true,
      userID: temp_user_data.id,
    };
  }
  catch (err) {
    //console.log("CreateUser Input", user_data);
    //console.log("CreateUser Temp User", temp_user_data);
    //console.log("CreateUser Error", err);
    //console.log("CreateUser Progress", progress);
    return {
      successStatus: false,
      errorMessage: ('Error with CreateUser: ' + progress),
      err: err,
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

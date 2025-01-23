import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { trigger } from '@angular/animations';
import { fadeTransition, slideTransition } from 'app/shared/transitions';

import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../../../amplify/data/resource';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
  ],
  animations: [
    trigger("fade", fadeTransition(200)),
    trigger("moveUp", slideTransition(200, "0px", "100px"))
  ]
})
export class TestingComponent {
  private auth = inject(AuthService);

  async test() {

    // you tosser delete the bad code
    //const User = {
    //  id: id().required(),
    //  first_name: a.string().required(),
    //  last_name: a.string().required(),
    //  username: a.string().required(),
    //  email: a.string().required(),
    //  phone_number: a.string().required(),
    //  birth_date: a.date(),
    //  address: a.customType({
    //    line_one: a.string(),
    //    line_two: a.string(),
    //    city: a.string(),
    //    state: a.string(),
    //    country: a.string(),
    //    zip_code: a.string(),
    //  }),
    //  age: a.integer(),
    //  gender: a.string(),
    //};

    const client = generateClient<Schema>();

    const { errors, data: newTodo } = await client.models.Todo.create({
      content: "My new todo",
    })

    console.log(errors);
  }
}

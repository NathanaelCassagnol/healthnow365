import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { trigger } from '@angular/animations';
import { fadeTransition, slideTransition } from 'app/shared/transitions';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
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
export class CallbackComponent implements OnInit {
  private route = inject(ActivatedRoute);
  param1!: string;
  param2!: string;

  constructor(route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.param1 = params.get('param1')!;
      this.param2 = params.get('param2')!;
    });

    console.log('this', this.param1, this.param2);
  }
}

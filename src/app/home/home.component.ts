import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	dish: Dish;
	errmess: string;

  constructor(private dishservice: DishService,
  	          @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  	this.dishservice.getFeaturedDish()
  		.subscribe(dish => this.dish = dish,
  							 errmess => this.errmess = errmess);
  }

}

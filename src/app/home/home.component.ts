import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	dish: Dish;
	dishErrMess: string;

	promotion: Promotion;
	promotionErrMess: string;

  constructor(private dishservice: DishService,
  						private promotionservice: PromotionService,
  	          @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  	this.dishservice.getFeaturedDish()
  		.subscribe(dish => this.dish = dish,
  							 errmess => this.dishErrMess = errmess);

  	this.promotionservice.getFeaturedDish()
  		.subscribe(promotion => this.promotion = promotion,
  							 errmess => this.promotionErrMess = errmess);
  }

}

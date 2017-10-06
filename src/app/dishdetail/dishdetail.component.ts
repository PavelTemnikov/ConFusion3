import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

	dish: Dish;
	errMess: string;

	dishIds: number[];
	prevId: number;
	nextId: number;

  constructor(private route: ActivatedRoute,
  	          private dishservice: DishService,
  	          private location: Location,
  	          @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  	this.route.params
  		.switchMap(params => this.dishservice.getDish(+params.id))
  		.subscribe(dish => {

  			this.dish = dish;
  			this.dishservice.getDishIds()
  				.subscribe(dishIds => {

  					this.dishIds = dishIds;
  					this.setPrevNext(this.dish.id);

  				});

  		}, errMess => this.errMess = errMess);
  }

  setPrevNext(dishId: number) {
  	let index = this.dishIds.indexOf(dishId);

  	let prevIndex = (index + this.dishIds.length - 1) % this.dishIds.length;
  	let nextIndex = (index + this.dishIds.length + 1) % this.dishIds.length;

  	this.prevId = this.dishIds[prevIndex];
  	this.nextId = this.dishIds[nextIndex];
  }

  goBack() {
  	this.location.back();
  }

}

// index   prevIndex   nextIndex
// 0       3           1
// 1       0           2
// 2       1           3
// 3       2           0


// 0  % 4 = 0
// 1  % 4 = 1
// 2  % 4 = 2
// 3  % 4 = 3
//-------------------
// 4  % 4 = 0
// 5  % 4 = 1
// 6  % 4 = 2
// 7  % 4 = 3
//-------------------
// 8  % 4 = 0
// 9  % 4 = 1
// 10 % 4 = 2
// 11 % 4 = 3

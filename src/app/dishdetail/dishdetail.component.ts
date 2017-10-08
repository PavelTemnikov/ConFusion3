import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Location } from '@angular/common';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { flyInOut, expand, visibility } from '../animations/app.animation';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  host: {
    '[@flyInOut]': '',
    'style': 'display: block'
  },
  animations: [
    flyInOut(),
    expand(),
    visibility()
  ]
})
export class DishdetailComponent implements OnInit {

	dish;
	errMess: string;

	dishIds: number[];
	prevId: number;
	nextId: number;

  visibility: string;

	commentForm: FormGroup;

	formErrors = {
		author: {
			required: 'Author is required',
			minlength: 'Author must be at least 2 characters long'
		},

		comment: {
			required: 'Comment is required'
		}
	};

  constructor(private route: ActivatedRoute,
  	          private dishservice: DishService,
  	          private location: Location,
  	          private fb: FormBuilder,
  	          @Inject('BaseURL') private BaseURL) {

  	this.commentForm = this.fb.group({
  		author: ['', [Validators.required, Validators.minLength(2)]],
  		rating: 5, 
  		comment: ['', [Validators.required]]
  	});

  }

  ngOnInit() {
  	this.route.params
  		.switchMap(params => {

        this.visibility = 'hidden';
        return this.dishservice.getDish(+params.id);

      })
  		.subscribe(dish => {
        
  			this.dishservice.getDishIds()
  				.subscribe(dishIds => {

  					this.dishIds = dishIds;
  					this.setPrevNext(dish.id);

            this.dish = dish;
            this.visibility = 'shown';

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

  onSubmit() {
  	this.commentForm.value.date = new Date().toISOString();
  	this.dish.comments.push(this.commentForm.value);

  	this.dish.save();

  	this.commentForm.reset({
  		author: '',
  		rating: 5,
  		comment: ''
  	});
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

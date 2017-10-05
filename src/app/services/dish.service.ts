import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DishService {

  constructor(private restangular: Restangular) { }

  getDishes(): Observable<Dish[]> {
  	return this.restangular.all('dishes').getList();
  }

  getFeaturedDish(): Observable<Dish> {
  	return this.restangular.all('dishes').getList({ featured: true })
  		.map(dishes => dishes[0]);
  }

}

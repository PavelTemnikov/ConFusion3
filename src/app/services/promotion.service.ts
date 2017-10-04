import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular) { }

  getFeaturedPromotion(): Observable<Promotion> {
  	return this.restangular.all('promotions').getList({ featured: true })
  		.map(promotions => promotions[0]);
  }

}

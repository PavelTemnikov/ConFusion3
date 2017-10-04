import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getFeaturedLeader(): Observable<Leader> {
  	return this.restangular.all('leaders').getList({ featured: true })
  		.map(leaders => leaders[0]);
  }
}

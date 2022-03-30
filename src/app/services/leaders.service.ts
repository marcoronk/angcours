import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})


export class LeadersService {
  getLeaders(): Leader[] {
    return LEADERS;
  }



  getLeader(): Leader {
    return LEADERS.filter((Leader) => Leader.featured)[0];
  }
  constructor() { }
}
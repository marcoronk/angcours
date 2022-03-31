import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})


export class LeadersService {

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }
/*
  getLeader(id: number): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((Leader) => (Leader.id === id))[0]);
  }*/

  getLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((Leader) => Leader.featured)[0]);
  }


a
  constructor() { }
}
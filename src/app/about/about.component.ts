import { Component, OnInit, Input } from '@angular/core';
import { LeadersService } from '../services/leaders.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private leaderservice: LeadersService,
    private route: ActivatedRoute,
    private location: Location) { }
    leaders:Leader[];
  ngOnInit() {
    this.leaders = this.leaderservice.getLeaders();

  }

}

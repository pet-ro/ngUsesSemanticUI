import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
// Model related stuff
import { Team } from '../../type/team';
import { TeamsProviderService } from '../../service/teams-provider.service'
import { from } from 'rxjs';

@Component({
  selector: 'bm-team',
  templateUrl: './teams.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TeamsComponent implements OnInit {

  public  teams: Team[];
  
  constructor( 
      private teamsProvider : TeamsProviderService,
    ) { }

  ngOnInit() {

    this.teamsProvider.getAll()
    .subscribe(res => this.teams = res);  
  }

}

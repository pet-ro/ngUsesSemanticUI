

import { Team } from '../type/team';
import { from } from 'rxjs';

/*
 *  The ProductFactory adapts backend data
 *  to the dataformat given in 
 *  `model/type/product`.
 * 
 *  Currently no adaptation are done here.
 * 
 *  Example for adaptations are given in related classes
 *  like ProductBookFactory, which returns `ProductBook`
 *  which is a subclass of `Product`
 */ 
export class TeamsFactory {
    
    static empty(): Team {
      return new Team (
             '',  // id,
             '',  // position,
            [''], // members, 
             '',  // description
              );
    }

    static fromObject( rawTeam: any): Team {
      // Here we just forward the `rawTeam`
      return new Team(
          rawTeam.id,
          rawTeam.position,
          rawTeam.members,
          rawTeam.description
      )
    }
}
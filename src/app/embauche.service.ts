import { Injectable } from '@angular/core';
import {Personne} from './models/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes: Personne[] = [];
  constructor() {}

  getEmbauches(): Personne[]
  {
    return this.personnes; }

  // tslint:disable-next-line:typedef
    embaucher(personne: Personne)
    {
      if (this.personnes.length > 0)
      {
        const index = this.personnes.indexOf(personne) ;
        if ( index < 0) {
          this.personnes.push(personne);
        }
        else { alert(`${personne.name} est déjà selectionnée`) ; }
      }
      else {
        this.personnes.push(personne);
      }

    }

}

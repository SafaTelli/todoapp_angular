import { Injectable } from '@angular/core';
import {Personne} from './models/Personne';
import {Todo} from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class CvService {


  private personnes: Personne[];
  constructor() {
    this.personnes = [new Personne(1, 'Safa', 'Telli', 25, 'profile.jpg', 12, 'Mobile Dev'),
      new Personne(2, 'Safa', 'Telli', 25, 'profile.jpg', 12, 'Mobile Dev'),
      new Personne(3, 'Safa', 'Telli', 25, 'profile.jpg', 12, 'Mobile Dev'),
      new Personne(4, 'Safa', 'Telli', 25, 'profile.jpg', 12, 'Mobile Dev')];
  }



  getPersonnes(): Personne[]
{
  return this.personnes ;
}

  // tslint:disable-next-line:typedef
  deletePers(personne: Personne)
  {
    const index: number = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }


}

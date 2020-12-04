import { Injectable } from '@angular/core';
import {Personne} from './models/Personne';
import {Todo} from './models/todo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {


  private personnes: Personne[];
  link  = 'https://immense-citadel-91115.herokuapp.com/api/personnes';
  constructor(private http: HttpClient) {
    this.personnes = [new Personne(1, 'Safa', 'Telli', 25, 'profile.jpg', 12, 'Mobile Dev'),
      new Personne(2, 'Safa', 'Telli', 25, 'profile.jpg', 12, 'Mobile Dev'),
      new Personne(3, 'Safa', 'Telli', 25, 'profile.jpg', 12, 'Mobile Dev'),
      new Personne(4, 'Safa', 'Telli', 25, 'profile.jpg', 12, 'Mobile Dev')];
  }



  getFakePersonnes(): Personne[]
{
  return this.personnes ;
}

  getPersonnes(): Observable<Personne[]>
  {
    return this.http.get<Personne[]>(this.link) ;
  }

  // tslint:disable-next-line:typedef
  deletePers(personne: Personne)
  {
    const index: number = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }


}

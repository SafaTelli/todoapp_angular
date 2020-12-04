import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../models/Personne';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  @Input() personnes: Personne [];
  selectedPersonne: Personne ;
  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe((personnes) => {
        this.personnes = personnes;
      },
      (error) => {
        this.personnes = this.cvService.getFakePersonnes();
      });

  }

  // tslint:disable-next-line:typedef
  selectPersonne(selectedPersonne)
  {
    this.selectedPersonne = selectedPersonne ;
  }
}

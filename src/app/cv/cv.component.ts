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
    this.personnes = this.cvService.getPersonnes();
  }


  // tslint:disable-next-line:typedef
  selectPersonne(selectedPersonne)
  {
    this.selectedPersonne = selectedPersonne ;
  }
}

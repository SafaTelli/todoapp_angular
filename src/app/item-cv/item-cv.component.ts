import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../models/Personne';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() personne: Personne ;
  @Output() selectedPersonne  = new EventEmitter() ;
  constructor(private cvService: CvService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  selectPersonne()
  {
    this.selectedPersonne.emit(this.personne);
    // emmetre event et inject personne
  }


  // tslint:disable-next-line:typedef
  deletePersonne(personne: Personne)
  {
    this.cvService.deletePers(personne);
  }


}

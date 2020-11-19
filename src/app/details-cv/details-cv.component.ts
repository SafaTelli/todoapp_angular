import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../models/Personne';
import {EmbaucheService} from '../embauche.service';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent implements OnInit {

  @Input() personne: Personne ;

  constructor(private embauche: EmbaucheService) { }

  ngOnInit(): void {
  }

// tslint:disable-next-line:typedef
embaucher(personne: Personne)
{
  this.embauche.embaucher(personne);
}
}

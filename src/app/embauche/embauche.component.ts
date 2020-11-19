import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../models/Personne';
import {EmbaucheService} from '../embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  @Input() personnes: Personne[];

  constructor(private embaucheService: EmbaucheService) {
    this.personnes = embaucheService.getEmbauches();
  }

  ngOnInit(): void {

  }



}

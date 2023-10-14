import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss']
})
export class GenreCardComponent {
  
  @Input() picture!: string; 
  @Input() namecard!: string;

  constructor(){}
  
}

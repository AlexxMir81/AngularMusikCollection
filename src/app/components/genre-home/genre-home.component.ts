import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Datum } from 'src/app/models/datum';
import { DeezerGenre } from 'src/app/models/deezergenre';
import { ApideezerService } from 'src/app/services/apideezer.service';

@Component({
  selector: 'app-genre-home',
  templateUrl: './genre-home.component.html',
  styleUrls: ['./genre-home.component.scss']
})
export class GenreHomeComponent implements OnInit, OnChanges {
  genres:Array<Datum>=[];
  constructor(
    private _deezerService:ApideezerService){
  }
  async ngOnInit(){
    let response:any = await this._deezerService.getgenres();
    this.genres = response.data;

  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}

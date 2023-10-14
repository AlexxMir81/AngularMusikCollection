import { Component } from '@angular/core';
import { DeezerResponse } from 'src/app/models/deezerresponse';
import { ApideezerService } from 'src/app/services/apideezer.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {
  keyword:string = "";
  constructor(
    private _deezerService:ApideezerService
  ){}

  }



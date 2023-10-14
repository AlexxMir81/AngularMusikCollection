import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges{
  readonly _homeService: HomeService;
  constructor(homeService: HomeService){
    this._homeService = homeService;
  }

  ngOnInit(){
    this._homeService.changeImage();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this._homeService.changeImage();
  }
}


// document.addEventListener("DOMContentLoaded", () => {
//   let bg = this.bgImage;
//   let my = document.getElementById('mainPage');
//   if(my){
//     my.style.backgroundSize = "cover";
//     my.style.backgroundImage = bg;
//   } 
//   }
// )
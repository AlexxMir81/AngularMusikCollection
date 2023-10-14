import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  
  getRandomInt(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min) + min);
  }
  randomBgImage():string {
    let num = this.getRandomInt(1, 5);
    return 'url("/assets/images/'+myImages[num];
  }
  changeImage():void{
    document.addEventListener("DOMContentLoaded", () => {
      let bg = this.randomBgImage();
      let my = document.getElementById('mainPage');
      if(my){
         my.style.backgroundSize = "cover";
         my.style.backgroundImage = bg;
       } 
      }
    )
  }
}

enum myImages{
  "muz1.jpg",
  "muz2.jpg",
  "muz3.jpg",
  "muz4.jpg",
  "muz5.jpg"
}
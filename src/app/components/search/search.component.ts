import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormSearchComponent } from 'src/app/components/form-search/form-search.component';
import { Datum } from 'src/app/models/deezerdatum';
import { DeezerResponse } from 'src/app/models/deezerresponse';
import { ApideezerService } from 'src/app/services/apideezer.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  @HostListener('window:scroll') onScroll(e: any): void {
    //console.log(this.getYPosition(e));
    this.onScrollCards();
    
 }
 getYPosition(e: Event): number {
  return (e.target as Element).scrollTop;
}
  endOfSearch = false;
  response?:DeezerResponse;
  cards:Array<Datum>=[];
  next?:string;
  keyword:string|null = "";
  onScrolling:boolean = true;

  constructor(
    private _deezerService: ApideezerService,
    private route: ActivatedRoute
  ){}

  async ngOnInit() {
    this.keyword = this.route.snapshot.paramMap.get("keyword")??"";
    this.response = await this._deezerService.search(this.keyword);
  // console.log(this.response);
    this.cards = this.response.data; 
    this.next = this.response.next;
    if(!this.next)this.endOfSearch=true;
  }

  async onScrollCards(){
    if(this.next){
      this.endOfSearch = false;
      let scrollHeight = document.scrollingElement?.scrollHeight??0;
      let scrollY = window.scrollY??0; 
      let scrollWidth = document.scrollingElement?.scrollWidth??0;
      if((scrollY+scrollWidth)>scrollHeight&&this.onScrolling){
        this.onScrolling = false;
        this.response = await this._deezerService.search(this.keyword??"", this.next);
        this.next = this.response.next??undefined;
       for(let i = 0; i<this.response.data.length; i++)
       this.cards.push(this.response.data[i]);
        this.onScrolling = true;
      }     
    }else{
      this.endOfSearch=true;
    }
  }
}
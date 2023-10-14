import { Component, Input, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
declare var window: any;

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit{
  @Input() md5_image!: string;
  @Input() title!: string;
  @Input() artistName!: string;
  @Input() artistPicture!: string;
  @Input() duration!: number;
  @Input() preview!: string;

  formModal: any;

 // modalName: bootstrap.Modal | undefined
  cardModal: any;
  save(){
    this.cardModal?.toggle()
  }
  openModal(element: string | Element){
    this.cardModal = new bootstrap.Modal(element,{} ) 
    this.cardModal?.show()
  }

  
ngOnInit(): void {
 // this.formModal = new window.bootstrap.Modal(
 //   document.getElementById('myModal')
//  );
}

openFormModal() {
  this.formModal.show();
}


}

import { Component } from '@angular/core';
import { Page } from 'src/app/models/page';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  pages: Array<Page> = [
    {title: "Home", path: "home"},
    {title: "Privacy", path: "privacy"}
  ]
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { HomeService } from './services/home.service';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { GenreHomeComponent } from './components/genre-home/genre-home.component';
import { HttpClientModule } from '@angular/common/http';
import { ApideezerService } from './services/apideezer.service';
import { FormsModule } from '@angular/forms';
import { GenreCardComponent } from './components/genre-card/genre-card.component';
import { SearchCardComponent } from './components/search-card/search-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    PrivacyComponent,
    FormSearchComponent,
    GenreHomeComponent,
    GenreCardComponent,
    SearchCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HomeService,
    ApideezerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

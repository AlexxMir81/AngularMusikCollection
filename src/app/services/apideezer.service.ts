import { Injectable } from '@angular/core';
import { DeezerGenre } from '../models/deezergenre';
import { DeezerResponse } from '../models/deezerresponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApideezerService {
  genres?:DeezerGenre;
  deezerResponse?:DeezerResponse;

  constructor(
    private  _httpClient: HttpClient
  ) { }

  async getgenres(){
    const corsHeaders = new HttpHeaders({
    'Content-Type': "application/json", //В моем случае я получаю json
    // 'Access-Control-Allow-Origin': "*", //Либо конкретный хост (поддерживается группа в виде массива)
    // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE', //Необходимые типы запросов
    // 'Access-Control-Allow-Credentials': 'true', //Означает, что должен быть получен ответ
    // 'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
    });
    const requestoption = {headers: corsHeaders}
      this.genres= await this._httpClient.get('/genre',requestoption).toPromise() as DeezerGenre;

    return this.genres;
  }
  async search(keyword:string, url?:string) {
    let BaseUrl="deezerdevs-deezer.p.rapidapi.com";
    let ApiKey="0e2ab71894mshdc79f98d5127b9cp19cdc3jsnc739053375aa";
    if(!url) url = 'https://'+BaseUrl+'/search?q='+keyword;
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set("X-RapidAPI-Key", ApiKey)
      .set("X-RapidAPI-Host",BaseUrl);
      this.deezerResponse = await this._httpClient.get(url.replace("https://api.deezer.com",""), {'headers':headers}).toPromise() as DeezerResponse;
     return this.deezerResponse;
  }

}

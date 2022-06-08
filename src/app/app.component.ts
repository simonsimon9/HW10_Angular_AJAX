import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button (click)="getSomeData()">Test GET Request</button>
  <ul>
  <li *ngFor="let myData of namesArray">{{myData.first}}
  {{myData.last}}</li>
  </ul>`
})
export class AppComponent {
   namesArray!: Array<any>;
  _http:HttpClient;

  //since we are using a provider above we can recieve an 
  //instance through an instructor

  constructor(private http: HttpClient){
    this._http = http;
  }

  getSomeData(){
    this._http.get<any>('./assets/test.json')
      .subscribe(result=>{
        this.namesArray =result;
      },
      error=>{
        alert(error);
        console.log(error);
      }
      )
  }
}

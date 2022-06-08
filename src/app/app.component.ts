import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mouseLog = "";
  myMouseEnter() {
  console.log("Mouse entered!")
  this.mouseLog+= "entered!"
}
}
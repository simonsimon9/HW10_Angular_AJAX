import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myKeyDown(event:any) {
  console.log(event)
  console.log(event.key)
  }

  myKeyUp(event:any) {
    console.log(event)
    console.log(event.key)
    }
}
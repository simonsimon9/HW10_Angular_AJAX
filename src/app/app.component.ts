import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myContent='dfsdf';
  myPastedContent ='';
cutEvent(content:any) {
this.myContent = content;
console.log(content)
}
pasteContent(myContent:any) {
console.log(this.myContent);
this.myContent = ''
this.myPastedContent = myContent
} 
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Make-Me-Sustainable';
  flipDiv: boolean = false;
  flipCard() {
  console.log('flip'+this.flipDiv);
  if(this.flipDiv){
   this.flipDiv = false;
   
  }
   else
    {
    this.flipDiv = true;
    }   
  }
   cardData=
[
   {"img":"", "description":"1"  },
  { "img":"", "description":"2" },
  { "img":"", "description":"3"  }
 
]


}


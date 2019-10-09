import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { SideBarModule } from 'ng-sidebar' ;
import { FlipModule } from 'ngx-flip';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule ,
    FlipModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
private _opened: boolean = false;
flipDiv: boolean = false;
  private _toggleSidebar() {
    this._opened = !this._opened;
  }


}
/*
flipCard() {
   console.log('flip'+this.flipDiv);
   if(this.flipDiv){
    this.flipDiv = false;
    
   }
    else
{
  this.flipDiv = true;
}   */

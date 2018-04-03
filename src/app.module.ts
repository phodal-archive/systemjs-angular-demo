import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component';
import { ChildComponent } from './app-child-component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ChildComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
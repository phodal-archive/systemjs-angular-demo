

//our root app component
import {Component, VERSION} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
    </div>
    <app-child-component></app-child-component>
  `,
})
export class AppComponent {
  name:string;
  constructor() {
    this.name = `Angular! v${VERSION.full}`
  }
}
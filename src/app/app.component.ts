// This area converts a TypeScript class to Angular component
import { Component, Output } from '@angular/core';

@Component({
  // Slectors are used to render a component to different locations
  // 'app-root' - <app-root></app-root>
  // '.app-root' - <div class="app-root"></div>
  // '[app-root]' - <div app-root></div>
  selector: 'app-root, .app-root, [app-root]', // We can also specify multiple selectors for one component
  templateUrl: './app.component.html'
})
// End: This area converts a TypeScript class to Angular component

// TypeScript class
export class AppComponent {
  public title: string;

  constructor() {
    this.title = 'Angular Workshop';
  }

  // This method will be executed once emitted from child
  public recievedValue(value: string) {
    alert('Value recieved from child is ' + value);
  }
}

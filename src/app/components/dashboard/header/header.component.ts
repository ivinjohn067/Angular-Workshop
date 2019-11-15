// This area converts a TypeScript class to Angular component
import { Component, OnInit } from '@angular/core';

// Metadata
@Component({
  // Slectors are used to render a component to different locations
  // 'app-header' - <app-header></app-header>
  // '.app-header' - <div class="app-header"></div>
  // '[app-header]' - <div app-header></div>
  selector: 'app-header, .app-header, [app-header]', // We can also specify multiple selectors for one component
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// End: This area converts a TypeScript class to Angular component

// TypeScript class
export class HeaderComponent implements OnInit {

  public LoggedInUser = '';

  // A constructor will be invoked when you initialize a component.
  constructor() { }

  // OnInit will be invoked once the component is loaded in the browser. 
  ngOnInit() {
  }

}

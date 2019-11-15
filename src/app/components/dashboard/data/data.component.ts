import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  // Class parameters declaration
  public message: string;
  public hasChecked: boolean;
  public fullname: string;

  // Class methods declaration
  public reset: any;
  public authenticate: any;

  constructor() {
    // Now we are going to initialize values of the parameters
    this.message  = 'This is one-way binding';
    this.hasChecked = true; // To pre-select the checkbox

    // initialize methods
    // these methods are all binded to the HTML element by using (click)="reset($event)"
    this.reset = function(event: any) {
      // $event will be passed to the event parameter
      // It contains information about the event
      console.log(event);
      this.fullname = '';
    };
    this.authenticate = function() {
      alert('Name entered is ' + this.fullname);
    };
  }

  ngOnInit() {
  }

}

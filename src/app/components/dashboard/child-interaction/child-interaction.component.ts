import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-interaction',
  templateUrl: './child-interaction.component.html',
  styleUrls: ['./child-interaction.component.css']
})
export class ChildInteractionComponent implements OnInit {

  // Input decorator is used to recieve values from parent component.
  // It will be passed as an attribute while rendering the child component.
  // Eg: [title]="{{title}}"
  // Please have a look at the app.component (parent) for better clarity
  @Input() public title: string;

  // Output decorator is used to send values to the parent component.
  // While doing this we are invoking an event/method in the parent component.
  // Please have a look at the app.component (parent) for better clarity
  @Output() valueEmitter = new EventEmitter<string>();

  public shareData: string;
  public passValue: any;

  constructor() {
    this.shareData = '';
    this.passValue = function() {
      this.valueEmitter.emit(this.shareData);
    };
  }

  ngOnInit() {
  }

}

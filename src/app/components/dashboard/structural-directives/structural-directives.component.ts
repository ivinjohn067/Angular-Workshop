import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  // Class parameters declaration
  public toggleIf: boolean;
  public colorsArray: any;
  public color: string;

  // Class methods declaration
  public reset: any;
  public authenticate: any;

  constructor() {
    // Now we are going to initialize values of the parameters
    this.toggleIf = true;
    this.color = '';
    this.colorsArray = ['Blue', 'Red', 'Green', 'Yellow'];
  }

  ngOnInit() {
  }

}

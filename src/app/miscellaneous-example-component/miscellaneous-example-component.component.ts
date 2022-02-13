import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miscellaneous-example-component',
  templateUrl: './miscellaneous-example-component.component.html',
  styleUrls: ['./miscellaneous-example-component.component.css']
})
export class MiscellaneousExampleComponentComponent implements OnInit {
  itemQuantity = 0;
  selectedGender = "male";
  caseSpecificKey = 'caseSpecificKey';

  constructor() { }

  ngOnInit(): void {
  }

}

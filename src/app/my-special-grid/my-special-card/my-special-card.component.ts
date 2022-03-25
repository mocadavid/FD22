import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-special-card',
  templateUrl: './my-special-card.component.html',
  styleUrls: ['./my-special-card.component.css']
})
export class MySpecialCardComponent implements OnInit {

   @Input()
   element: any;

   imagePath: string = "";
   onClickHref: string = "";

  constructor() { }

  ngOnInit(): void {
     this.imagePath = this.element.imagePath;
     this.onClickHref = this.element.onClickHref;
  }
}

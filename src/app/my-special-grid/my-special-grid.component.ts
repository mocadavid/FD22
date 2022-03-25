import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-special-grid',
  templateUrl: './my-special-grid.component.html',
  styleUrls: ['./my-special-grid.component.css']
})
export class MySpecialGridComponent implements OnInit {

  @Input()
  page_size:number = 0;

  @Input()
  elements:any[] = [];

  buttonFirst:boolean = true;
  buttonPrev:boolean = true;
  buttonNext:boolean = true;
  buttonLast:boolean = true;

  first_page:number = 0;
  current_page:number = 0;
  first_id:number = 0;
  last_id:number = 0;
  last_page:number = 0;

  error:boolean = false;
  errorMsg:string = "";

  constructor() { }

  ngOnInit(): void {
    if(this.elements.length == 0){
       this.error = true;
       this.errorMsg = "Empty list!";
    }else if (this.page_size < 1) {
       this.error = true;
       this.errorMsg = "The page size should be at least 1!";
     }else if (this.page_size > this.elements.length) {
       this.error = true;
       this.errorMsg = "The page size exceeds the number of elements in the list!";
     }else {
       this.error = false;

       this.first_page = 1;
       this.current_page = 1;
       this.last_page = Math.round(this.elements.length / this.page_size);

       if (this.elements.length - (this.last_page * this.page_size) > 0) {
           this.last_page += 1;
       }
       this.computeIdsAndButtons();
     }
  }

   /**
    * updates the values of the pages so that they are correctly shown
    */
   computeIdsAndButtons(): void {
     // fist and last id -> the elements that are going to be displayed
     this.first_id = (this.current_page - 1) * this.page_size;
     this.last_id = Math.min(((this.current_page * this.page_size) - 1),this.elements.length - 1);

     // available buttons
     if(this.current_page == this.first_page){
       this.buttonFirst = true;
       this.buttonPrev = true;
     }
     else {
       this.buttonFirst = false;
       this.buttonPrev = false;
     }

     if(this.current_page == this.last_page){
       this.buttonNext = true;
       this.buttonLast = true;
     }
     else {
       this.buttonNext = false;
       this.buttonLast = false;
     }
   }

   /**
    * upon the selection of the first page
    */
   firstPage(): void {
     this.current_page = this.first_page;
     this.computeIdsAndButtons();
  }

   /**
    * upon the selection of the previous page
    */
   previousPage(): void {
     if(this.current_page > this.first_page){
       this.current_page -= 1;
       this.computeIdsAndButtons();
     }
   }

   /**
    * upon the selection of the next page
    */
   nextPage(): void {
     if(this.current_page < this.last_page){
       this.current_page += 1;
       this.computeIdsAndButtons();
     }
   }

   /**
    * upon the selection of the last page
    */
   lastPage(): void {
     this.current_page = this.last_page;
     this.computeIdsAndButtons();
   }

   /**
    * changes the page according to the page pressed
    * @param page the new current page
    */
   moveToPage(page: number): void {
     if(this.current_page != page){
       this.current_page = page;
       this.computeIdsAndButtons();
     }
   }

   /**
    * returns the list of indexes of the elements in the current page
    */
   arrayOfIndexes(): number[] {
     const result: number[] = [];
     for (let i = this.first_id; i <= this.last_id ; i++){
       result.push(i);
     }
     return result;
   }

   /**
    * returns the list of page numbers
    */
   arrayOfPages(): number[] {
     const result: number[] = [];
     for (let i = Math.max(this.first_page, this.current_page - 2) ; i <= Math.min(this.current_page + 2, this.last_page); i++){
       result.push(i);
     }
     return result;
   }

   /**
    * helper function to deactivate the current page button
    * @param page the page number
    */
   isPageCurrentPage(page: number) : boolean {
     return this.current_page == page;
   }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  hidden = true;
  // currentPage = 1;
  // previousPage = 0;
  // nextPage = 0;

  @Input() productSpirit: ProductType[];
  @Input() totalRecords: number;
  @Input() currentRecords: any;
  @Output() searchData = new EventEmitter();
  @Output() selectedList = new EventEmitter();

  showSelectedAmount(valu) {
    console.log(valu);
    this.selectedList.emit(valu);
  }
  // @Input() recordsPerPage = 50;
  // pageData = this.productSpirit ;
  // setActivePaginationPage(value) {
  //   this.currentPage = value;
  //   this.previousPage = this.currentPage - 1 ;
  //   this.nextPage = this.currentPage + 1;
  //   this.pageData = this.productSpirit.slice(this.previousPage * this.recordsPerPage , this.currentPage * this.recordsPerPage); 
  // }

  sendSearch(val) {
    console.log(val);
    this.searchData.emit(val);
  }


  displaySearch(): void {
    this.hidden = !this.hidden;
    // if (this.hidden === 'none') {
    //   this.hidden = 'inherit';
    //  } else {
    //   this.hidden = 'none'; }
}

  constructor() { }

  ngOnInit() {

  }
}

export interface ProductType {
  albumId: number;
  id: number;
  tiltle: string;
  url: string;
  thumbnailUrl: any; }

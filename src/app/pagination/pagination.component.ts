import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { initDomAdapter } from '@angular/platform-browser/src/browser';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

   hidden = true;
   pages = 4;
   pageSize = 20;
   pageNumber = 0;
   currentIndex = 1;
   filterSpirit: ProductType[];
   pagesIndex: Array<number>;
   pageStart = 1;

  @Input() productSpirit: ProductType[];
  // @Output() searchData = new EventEmitter();
  // @Output() selectedList = new EventEmitter();
  @Input() currentRecords: any;
  @Input() totalRecords: number;

  constructor() {
    this.filterSpirit = this.productSpirit;
  }

  ngOnInit() {
    this.currentIndex = 1;
    this.pageStart = 1;
    this.pages = 4;

    this.pageNumber = this.productSpirit.length / this.pageSize;

    if (this.productSpirit.length % this.pageSize !== 0) {
       this.pageNumber ++;
    }

    if (this.pageNumber  < this.pages) {
          this.pages =  this.pageNumber;
    }

    this.refreshItems();

    console.log('this.pageNumber :' + this.pageNumber);
}


  // Delete selected row
    deleteRow(value) {
       this.productSpirit.splice(value, 1);
       this.filterSpirit = this.productSpirit;
    }


    // Showing selected list of data
    showSelectedAmount(vale) {
      console.log(vale);
      this.filterSpirit = this.productSpirit;
      // let selection: any = this.filterSpirit.slice(0,vale);
      // this.filterSpirit = selection;
      // return this.filterSpirit;
      this.filterSpirit = this.filterSpirit.filter((filterSpirit, idx) => idx < vale);
    }

// Search the data on Input value
  searchInput(val: any) {
  this.filterSpirit = this.productSpirit.filter((x) => {
    const filter = Object.keys(x);
    return filter.some(element => x[element].toString().toLowerCase().trim().indexOf(val.toString().toLowerCase().trim()) !== -1);
    });
//   console.log(val);
//   if (!val) {
//    this.filterSpirit = this.spiritProducts;
//   } else {
//       this.filterSpirit = this.spiritProducts.filter((x) => {
//       const filter = Object.keys(x);
//       return filter.some(element => x[element].toString().toLowerCase().trim().indexOf(val.toString().toLowerCase().trim()) !== -1);
//       });
// }
}

   fillArray(): any {
      // this.myinput = !this.myinput;
      const obj = new Array();
      for ( let index = this.pageStart; index < this.pageStart + this.pages; index ++) {
                  obj.push(index);
      }
      return obj;
   }

 refreshItems() {
               this.filterSpirit = this.productSpirit.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
               this.pagesIndex =  this.fillArray();
               console.log(this.filterSpirit);
   }

   prevPage() {
      if (this.currentIndex > 1) {
         this.currentIndex --;
      }
      if (this.currentIndex < this.pageStart) {
         this.pageStart = this.currentIndex;
      }
      this.refreshItems();
   }
   nextPage() {
      if (this.currentIndex < this.pageNumber) {
            this.currentIndex ++;
      }
      if (this.currentIndex >= (this.pageStart + this.pages)) {
         this.pageStart = this.currentIndex - this.pages + 1;
      }
      this.refreshItems();
   }
    setPage(index: number) {
         this.currentIndex = index;
         this.refreshItems();
    }



// Showing selected list of data/output event
  // showSelectedAmount(valu) {
  //  console.log(valu);
  //  this.selectedList.emit(valu);
  // }

  // Search the data on Input value/output event
  // sendSearch(val) {
  //   console.log(val);
  //   this.searchData.emit(val);
  // }

  // Hide and seek input search
  displaySearch(): void {
    this.hidden = !this.hidden;
    // if (this.hidden === 'none') {
    //   this.hidden = 'inherit';
    //  } else {
    //   this.hidden = 'none'; }
}



//   recordsPerP(valr) {
//   this.limit.emit(valr);
// }


//   ngOnInit() {
//     this.filterSpirit = this.productSpirit;
// }

}

export interface ProductType {
  albumId: number;
  id: number;
  tiltle: string;
  url: string;
  thumbnailUrl: any; }

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table-generic',
  templateUrl: './table-generic.component.html',
  styleUrls: ['./table-generic.component.css']
})
export class TableGenericComponent implements OnInit {
  @Input() productSpi: ProductType[];
  @Input() productSouthwest: ProductType;
  @Input() productDelta: ProductType;
  @Input() productAmerican: ProductType;
  @Output() clickOnProduct: EventEmitter<any> = new EventEmitter();
  // @Output() searchData = new EventEmitter();

// Delete selected row/ Output function

  deleteSelected(i) {
    this.clickOnProduct.emit(i);
    }


    // getTotalDetailsCount(): number {
    //   return this.productSpirit.length;
    // }

    // deleteRow(i) {
    //   this.productSpirit.splice(i, 1);
    // }

  //   deleteRow(value) {
  //     this.productSpirit.splice(value, 1);

  //  }

    // sendSearch(val) {
    //   console.log(val);
    //   this.searchData.emit(val);
    // }

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isSort: boolean = false;
  selectedColumn:string = '';
  tabledata =  [ 
      { "name": "Chocolate Chip", "price": "$2.49", "category": "Standard" },
      { "name": "Sugar", "price": "$1.79", "category": "Standard" },
      { "name": "Snickerdoodle", "price": "$2.49", "category": "Standard" },
      { "name": "Oatmeal Raisin", "price": "$2.99", "category": "Standard" },
      { "name": "Peanut Butter", "price": "$2.99", "category": "Standard" },
      { "name": "White Chocolate Macadamia", "price": "$3.99", "category": "Premium" },
      { "name": "Red Velvet", "price": "$3.49", "category": "Premium" },
      { "name": "Black and White", "price": "$3.49", "category": "Premium" },
      { "name": "Triple Chocolate", "price": "$3.99", "category": "Premium" },
      { "name": "White Chocolate Coconut Divine", "price": "$5.99", "category": "Signature" },
      { "name": "Dark Chocolate Pistachio Sea Salt", "price": "$5.49", "category": "Signature" },
      { "name": "Brown Butter Bourbon Spice", "price": "$5.49", "category": "Signature" },
      { "name": "Bacon Chocolate Chip", "price": "$5.99", "category": "Signature" }
    ]

    toggleArrow(columnName:string) {
      this.isSort = !this.isSort;
      this.selectedColumn = columnName;
      this.filterData(columnName,this.isSort);
    }

    filterData(columnName:string,isSort:boolean) {
      if(columnName === 'Product Name') {
        if(isSort) {
          this.tabledata.sort((a,b)=>{
            return a.name.localeCompare(b.name);
         })
        } else {
          this.tabledata.sort((a,b)=>{
            return b.name.localeCompare(a.name);
         })
        }
      } else if(columnName === 'Price') {
        if(isSort) {
          this.tabledata.sort((a,b)=>{
            return a.price.localeCompare(b.name);
         })
        } else {
          this.tabledata.sort((a,b)=>{
            return b.price.localeCompare(a.name);
         })
        }
      } else if (columnName === 'Category') {
        if(isSort) {
          this.tabledata.sort((a,b)=>{
            return a.category.localeCompare(b.name);
         })
        } else {
          this.tabledata.sort((a,b)=>{
            return b.category.localeCompare(a.name);
         })
        }
      }
    }

}

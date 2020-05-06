import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSelect} from '@angular/material/select';
import {MatOption} from '@angular/material/core';
import {MatSelectionList} from '@angular/material/list';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  productCategory: string[] = ['Camping', 'Mountaineering', 'Personal', 'Outdoor', 'Golf'];
  @ViewChild('category') Procategory: MatSelectionList;
  clear = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClear() {
    this.Procategory.deselectAll();
  }
}

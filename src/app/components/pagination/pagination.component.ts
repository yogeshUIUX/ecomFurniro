import { Component, EventEmitter, Input, Output } from '@angular/core';
import { projectConstants } from '../../app.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  public iProjectVariables = projectConstants.projectVariables;
  @Input() totalRecords: number = 0;      // Total number of records (from parent)
  @Input() pageSize: number = 10;         // Page size (number of items per page)
  @Output() pageChange = new EventEmitter<number>();  // Emits page number

  currentPage: number = 1;
  totalPages: number = 1;

  ngOnInit() {
    this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
  }

  onPageChange(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }
  // get totalPages(): number {
  //   return Math.ceil(this.totalRecords / this.pageSize);  // Calculate total pages
  // }

  getPagesArray(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // onPageChange(page: number) {
  //   if (page > 0 && page <= this.totalPages) {
  //     this.pageChange.emit(page);  // Emit the new page to the parent component
  //     this.currentPage = page;     // Update current page
  //   }
  // }
}

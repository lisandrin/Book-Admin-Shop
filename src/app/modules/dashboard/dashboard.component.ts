import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface BookElement {
  name: string;
  position: number;
  price: number;
  genre: string;
  author: string;
}
const POPULAR_DATA: BookElement[] = [
  {position: 1, name: 'Master and Margaritta', price: 15, genre: 'Non-fiction', author:"Mikhail Bulgakov"},
  {position: 2, name: 'The Lord of the Rings', price: 56, genre: 'Fantasy', author:"J.R.R. Tolkien"},
  {position: 3, name: '1984', price: 10, genre: 'Non-fiction', author:"George Orwell"},
  {position: 4, name: 'Game of Thrones', price: 34, genre: 'Fantasy', author:"George R.R Martin"},
  {position: 5, name: "Assassin's Apprentice", price: 40, genre: 'Fantasy', author:"Robbin Hobb"},
  {position: 6, name: 'Price and Prejudice', price: 24, genre: 'Non-fiction', author:"Jane Austen"},
  {position: 7, name: 'The Little Prince', price: 62, genre: 'Non-fiction, Young', author:"Antoine de Saint-Exupéry"},
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  bigChart = [];
  cards = [];
  pieChart = [];
  displayedColumns: string[] = ['position', 'name', 'price', 'genre', 'author'];
  dataSource = new MatTableDataSource<BookElement>(POPULAR_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.dataSource.paginator = this.paginator;
  }

}

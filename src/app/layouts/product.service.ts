import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3000/books";  
  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get(this.baseURL);
  }
}
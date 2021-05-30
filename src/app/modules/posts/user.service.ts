import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3000/books";
  userBaseUrl = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get(this.baseUrl);
  }

  getUserList(){
    return this.http.get(this.userBaseUrl);
  }

  addUser(data){
    return this.http.post(this.userBaseUrl, data)
  };

  getById(id):Observable<any>{
    const url = `${this.userBaseUrl}/${id}`;
    return this.http.get(url);
  }

  deleteBook(id){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCurrentBook(id){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  updateBook(id, data){
    return this.http.put(`${this.baseUrl}/${id}`,data);
  }

  saveBook(data){
    return this.http.post(this.baseUrl,data);
  };
}

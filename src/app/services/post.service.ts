import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import {catchError, retry} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPostList() {
    const url = this.baseUrl + '/posts';
    return this.http.get<Post[]>(url).pipe(
      catchError(error => of(error.message)),
      retry(3)
    );
  }

  get(id) {
    return this.http.get<Post>(this.baseUrl + '/posts/' + id).pipe(
      catchError(error => of(error.message)),
      retry(3)
    );
  }
  delete(id) {
    return this.http.delete(this.baseUrl + '/posts/' + id).pipe(
      catchError(err => of(err.message)),
    );
  }

  add(data) {
    return this.http.post(this.baseUrl + '/posts', data).pipe(
      catchError(err => of(err.message))
    );
  }
  put(id, data) {
    return this.http.put(this.baseUrl + '/posts/' + id, data).pipe(
      catchError(error => of(error.message))
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

import { Posts } from './posts.interface';

const apiUlrPost = environment.apiUlr + '/posts';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public cargando: boolean = false;

  private options = {
    headers: new HttpHeaders({
      'Content-type': 'Application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Posts[]> {
    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;
    return this.http.get<Posts[]>(apiUlrPost, this.options)
      .pipe(map((resp) => resp),
        tap(() => this.cargando = false)
      );
  }

  getOne(id: number) {
    return this.http.get<Posts>(`${apiUlrPost}/${id}`, this.options).pipe(
      map(resp => resp),
      catchError(err => of(null))
    )
  }

  update(posts: Posts) {
    return this.http.put<Posts>(`${apiUlrPost}/${posts.id}`, posts, this.options).pipe(
      map(resp => resp),
      catchError(err => of(null))
    )
  }

  create(posts: Posts) {
    return this.http.post<Posts>(`${apiUlrPost}`, posts, this.options).pipe(
      map(resp => resp),
      catchError(err => of(null))
    )
  }
}

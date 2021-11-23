import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

import { User } from './user.interface';

const apiUlrUser = environment.apiUlr + '/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public cargando: boolean = false;

  private options = { 
    headers: new HttpHeaders({
      'Content-type':'Application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getAll():Observable<User[]> {
    if ( this.cargando ) {
      return of([]);
    }

    this.cargando = true;
    return this.http.get<User[]>(apiUlrUser,this.options)
      .pipe(map( (resp) => resp ),
      tap( () => {
        this.cargando = false;
      })
    );
  }

  getOne(id: number):Observable<User> {
    return this.http.get<User>(`${apiUlrUser}/${id}`,this.options).pipe(
      map( resp => resp),
      catchError( err => of(null) )
    )
  }

}

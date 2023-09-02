import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  // CREATE
  public addUser(user : User): Observable<User>{
    return this.http.post<User>(this.baseURL + "/users/add", user);
  }

  // READ
  public getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.baseURL + "/users");
  }

  public getUserById(id: number): Observable<User> {
    const url = `${this.baseURL}/users/${id}`;
    return this.http.get<User>(url);
  }

  // UPDATE
  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.baseURL + "/users/update", user);
  }

  // DELETE
  public deleteUser(id: number): Observable<User>{
    const url = `${this.baseURL}/users/${id}`;
    return this.http.delete<User>(url);
  }
}

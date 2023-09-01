import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private authStatusSubject = new BehaviorSubject<boolean>(false);
  authStatus$: Observable<boolean> = this.authStatusSubject.asObservable();

  constructor() {
    const authStatusStr = localStorage.getItem('authStatus');
    if (authStatusStr) {
      const authStatus = JSON.parse(authStatusStr);
      this.authStatusSubject.next(authStatus);
    }
  }

  setAuthStatus(status: boolean) {
    this.authStatusSubject.next(status);
  }
}

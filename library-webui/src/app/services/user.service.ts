import { Injectable } from '@angular/core';
import { ApiService } from './general/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_PATH = '/user';
  constructor(private apiService: ApiService) { }

  getByName(username: string): Observable<any> {
    return this.apiService.getByName(this.USER_PATH + '/' + username).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          return {};
        }
      }
    ));
  }
  put(username: string, user): Observable<any> {
    return this.apiService.put(this.USER_PATH + '/' + username, user).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          return {};
        }
      }
    ));
  }
}

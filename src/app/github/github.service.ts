import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';




@Injectable()
export class GithubService {

  constructor(private http: Http) {
  }

  getUser(searchText): Observable<any> {
    if (searchText == null) {
      return Observable.empty<Response>();
    } else {
      const url = 'https://api.github.com/search/users?q=' + searchText;
      return this.http.get(url).map(
        res => {
          const data = res.json();          
          return data;
        }
      )
    }
  }

  getUserDetail(userId):Observable<any>{
    if (userId == null) {      
      return Observable.empty<Response>();
    } else {
      const url = 'https://api.github.com/users/' + userId;
      return this.http.get(url).map(
        res => {
          const user = res.json();          
          return user;
        }
      )
    }
  }

  
}

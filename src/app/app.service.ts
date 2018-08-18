import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Constants } from './constants';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  userName: string;
  authenticated = false;
  selectedTab: string = 'view';
  constructor(private http: HttpClient, private router: Router) {
      console.log(Cookie.get('access_token'));
  }

  
  authenticate(credentials, callback) {

      const headers = new HttpHeaders(credentials ? {
          authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
      } : {});

      this.http.get(Constants.HOME_URL + 'login', {headers: headers}).subscribe(response => {
          if (response['name']) {
              this.authenticated = true;
          } else {
              this.authenticated = false;
          }
          this.saveToken(response);
          return callback && callback();
      },
      error => {
          if(error.status == 401){
              this.authenticated = false;
              return callback && callback();
          }
      }
  );

  }


  checkLoggedIn() : boolean{
      if (!Cookie.check('access_token')){
          return false
      }else{
        return true
      }
  }
  

  logout() {
      Cookie.delete('access_token');
      this.http.get(Constants.HOME_URL + 'logout').subscribe(response =>{
          Cookie.delete('access_token');
          Cookie.delete('JSESSIONID');
          Cookie.delete('XSRF-TOKEN')
          this.router.navigate(['login']);
      })
  }


  saveToken(token){
      var expireDate = new Date().getTime();
      let date = new Date(expireDate);
  
      Cookie.set("access_token", JSON.stringify(token), 1/24);
      this.router.navigate(['/']);
  }
  getToken(): any{
      return Cookie.get("access_token");
  }

}


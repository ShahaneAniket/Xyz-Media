import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public getLoggedInName = new Subject(); //Alternate method to Emitting data across Components. Subject() is doing both Emitting data and Subscribing it in another component. So its the best way to compare with Emitting using Output.

  login(email: string, password: string): Observable<boolean> {
      if (successfulLogIn(email, password)) {
          this.getLoggedInName.next("true"); //next() method is alternate to emit().
          
          return of(true);
      } else {
          return of(false);
      }
  } 
logout(): Observable<boolean>{
  localStorage.setItem("isLoggedin", "false");
  localStorage.setItem("username", "");
  return of(true);
}

}
function successfulLogIn(email: string, password: string):boolean {
  //throw new Error('Function not implemented.');
  var data = localStorage.getItem('usersDB');
  var usersDB= JSON.parse(data??"");
  var user = usersDB.filter((a: { userid: string; })=>a.userid==email)[0];
  if(user !=null){
    if(user.password == password){
    alert("loggedin");
    localStorage.setItem("isLoggedin", "true");
    localStorage.setItem("username", email);
    return true;
    }else{
      alert("wrong password");
    }
  }else{
    alert("user not found");
  }
  return false;
}


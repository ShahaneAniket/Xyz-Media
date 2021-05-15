import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../app.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) {}

  userDetails: UserDetails = new UserDetails;
  ngOnInit(): void {
    var isLoggedin = localStorage.getItem('isLoggedin');
    this.userDetails.userid = "abc@media.com";

    if(isLoggedin == null){
      localStorage.setItem("isLoggedin", "false");
    }else{
      if(isLoggedin == "true"){
        alert("user is already Logged in");
      }
    }
  }
  
  login(){ 
    var dataq =this.authService.login(this.userDetails.userid,this.userDetails.password).subscribe(data=>{
     if(data){
      this.router.navigate(['/gallery']);
    }
    }); 
  }

}

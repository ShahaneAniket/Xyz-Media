import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  isLoggedin : string ="";
  username : string ="";
    
  constructor(private authService: AuthService,private router: Router) {
     
  }

  ngOnInit(): void {
     
    this.isLoggedin = localStorage.getItem('isLoggedin')??"false"; 
    this.username = localStorage.getItem('username')??"";
     this.authService.getLoggedInName.subscribe(name => {
      
      this.username = localStorage.getItem('username')??"";
      this.isLoggedin = localStorage.getItem('isLoggedin')??"";
      });
      
  }
  logout(){
    var dataq =this.authService.logout().subscribe(data=>{
      if(data){
        this.router.navigate(['/gallery']);
        this.isLoggedin == "false"
      }
    }); ;
  }

}

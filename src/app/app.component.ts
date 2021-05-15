import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'XyzMedia';
  usersDB:UserDetails[] = [{ userid: "abc@media.com",password: "abc123", username: "tom"},
  {userid : "def@media.com",password:"def123",username:"dick"}];
   
  ngOnInit(): void {
    localStorage.setItem("usersDB", JSON.stringify(this.usersDB));
    
  }
}
export class  UserDetails{
  userid: string=""; 
  password: string="";
  username: string="";
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="ai2045"
  pwd=""
  errorMessage="invalid credentials"
  invalidLogin=false

  handleLogin(): void{
    // console.log(this.username)
    // console.log(this.pwd)
    if(this.username === "ai2045" && this.pwd === "dummy"){
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="ai2045"
  pwd=""

  handleLogin(): void{
    console.log(this.username)
    console.log(this.pwd)
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}

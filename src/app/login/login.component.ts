// this component is used for example, whe user types in garbage (zb /login234qwer)
// (wir wollen user nicht stacktrace anzeigen sondern extra custom fehlerseite/-meldung:
// main.ts:11  
// ERROR Error: Uncaught (in promise): Error: NG04002: Cannot match any routes. URL Segment: 'asdf'
// at ApplyRedirects.noMatchError (router.mjs:3644:16))

// So this error component would be used ganz allgemein as the display page when something wrong happens.

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

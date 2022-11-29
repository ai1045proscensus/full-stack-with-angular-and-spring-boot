// When we were generating the Angular Application using NG new.
// One of the questions we were asked was,
// "Do we need routing?" and we said,
// "Yes, we need routing."
// And that's where we got a specific file AppRoutingModule.

// So this is the module which will handle all the routing for us.




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

// ziel: we want to go from LoginComponent to the WelcomeComponent.
// here (routes) we can define all the routes that we want to use in this specific application:
// first attribute: "Path": what is the path at which you would want to expose this? (url)
// =>"welcome". and which component defines that? => zugehöriges WelcomeComponent
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', component: WelcomeComponent}
];

// => eine route ist wie GetMapping-Anno in Rest (@GetMapping(path = "welcome))
//=> welcome deyince url'de su komponent'e gitsin....
// und routING ist wie maskenfolgediagram: route von diesem komponent zu nächsten....

// there is a tag for router, which you'd need to use to enable routing.
// Lets go to "app.component.html." That's the first component that is loaded.
// Inside here, earlier we had commented something called, "router-outlet." => einkommentieren

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';

// @Component decorator is what makes the class AppComponent down there a component.
@Component({
  selector: 'app-root', // tag used to represent this element / component
                        // (wie ID)... (wird in index.html aufgerufen... wie 'main' quasi... einstieg/root)
  //where is the location of the HTML template for this specific component:
  templateUrl: './app.component.html', 
  // man kann auch template direkt angeben (könnte man mit style unten auch machen):
  // template: '<h1>{{title}}</h1>', 
  styleUrls: ['./app.component.css'] // //where is the css for this component
})
export class AppComponent {
  title = 'IlkTodo';
  message = '     Welcome to ai2045'; // member variable... is mapped to 
                  // <span>{{ title }} app is running!</span> (in app.component.html)
                  // this is called INTERPOLATION : {{data}} (von component nach html)
                  // data von component => html => view (dh in browser anzeigen): data BINDING
  soru = "ney ögrenmeyi istersin bugün?"
}

// each component consists of template (component.html), style (component.css)
//and code (component.ts) to handle view actions 
// (dh was passiert wenn ich auf menüeintrag oder button usw klicke)
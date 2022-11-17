// I'll recommend you to watch the lecture again
// and focus on every word of it.
// Being comfortable with this syntax is very important.
// Take a backup of the class, remove each word from it,
// and see what happens.



// which parts JavaScript,
// which parts TypeScript,
// how do they compare with Java.

// Java: group classes into packages.
// Js: organize classes in modules

// all classes in a single file are part of a module (mehrere klassen in 1 datei: modul)
// it's one file per module, and one module per file.

// A module in js represents one file, which contains class and function definitions.

// hier haben wir nur 1 klasse in dieser datei (s. unten), aber man kann auch mehrere deklarieren:
export class Class1 {

}

export class Class2 {
  
}



// js: use a class from another module: import statement
//  if you want to expose this class outside the boundary of this module: export (java: public)
// => d.h. man muss immer GLEICHZEITIG exporten und importen wenn mann importen will(blöd imo)




import { Component, OnInit } from '@angular/core';

//  java: @Entity(name = "Course") 
// hier wird decorator objekt übergeben (in java attribute(oben : name)):
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// implements: ts feature
export class WelcomeComponent implements OnInit {

  // attributes:
  // js:
  message = 'welcome' // (aber da hier ts file => einmal mit string belegt, kann nicht mit 6 belegt werden!)
  // ts: you can add a TYPE:
  tsMessage : string = "welcome ts"

  // java: public MyConstructor(){...}
  constructor() { }

  // java: void init(){...}
  // js: NO RETURN TYPE
  // TS: safer: you can say  ngOnInit(): void {
  // this method would run, when this component is initialized.
  ngOnInit() {
    console.log(this.message)
    console.log(this.tsMessage)
    // geht beides nicht: (compilation error)
    // this.tsMessage = 4
    // this.message = 8
  }

}

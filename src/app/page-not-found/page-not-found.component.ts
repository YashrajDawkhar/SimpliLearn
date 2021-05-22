import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1 style="color:red;display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;height:93vh;
    background-color:black;
    
    ">
      OOPS !! PAGE NOT FOUND 
    </h1>
  `,
  styles: [
    
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

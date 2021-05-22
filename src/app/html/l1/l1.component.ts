import { Component, OnInit } from '@angular/core';
declare const openNav:any;
declare const closeNav:any;

@Component({
  selector: 'app-l1',
  templateUrl: './l1.component.html',
  styleUrls: ['./l1.component.css']
})
export class L1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  openNav(){
    openNav();
  }
  closeNav(){
    closeNav();
  }

}

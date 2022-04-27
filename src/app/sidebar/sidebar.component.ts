import { Component, OnInit } from '@angular/core';
import {  Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // public sidebarShow: boolean = false;
//  public displayHeader:boolean = false;

  constructor(private titleSerice:Title) { }


 
  ngOnInit(): void {
 
  }
//  name( newTitle: string) {
//     this.titleSerice.name( newTitle );
//   }


  //  name(){
  //    debugger
  //  }
}

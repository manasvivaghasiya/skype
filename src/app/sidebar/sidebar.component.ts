import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // public sidebarShow: boolean = false;
 displayHeader:boolean = false;
  constructor() { }


  // public setTitle( newTitle: string) {
  //   this.titleService.name( newTitle );
  // }
  ngOnInit(): void {
  }


   name(){
     debugger
   }
}

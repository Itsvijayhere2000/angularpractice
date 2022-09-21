import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  isActive:boolean=true
  @Input() passvalue:string="";
  constructor() { }

  ngOnInit(): void {
  }

check(event:any){
  this.isActive=!this.isActive
  console.log(this.isActive);
  
}
}

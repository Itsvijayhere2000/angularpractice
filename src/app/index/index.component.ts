import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
todo:any
todoName:any=[]
isActive:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  myButton(){
    console.log(this.todo)
    
    this.todoName.push(this.todo)
    this.todo=""
  

  }
  
    clicked(event:any){
      this.todoName[event]
    this.isActive=!this.isActive
    console.log(this.isActive);
    

  }

}

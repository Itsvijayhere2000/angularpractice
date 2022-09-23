import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
list:any;
  constructor() {  }

  ngOnInit(): void {
  this.list=[
    {
  
    id:1,
    Name:"vijay",
    age:22,
    city:"kumbakonam",
     state:"Tamilnadu"
    },

    {id:2,
    Name:"siva",
    age:20,
    city:"dsm",
     state:"Tamilnadu"},

    {id:3,
    Name:"vimal",
    age:22,
    city:"kumbakonam",
     state:"Tamilnadu"},

    {id:4,
    Name:"karthi",
    age:22,
    city:"cuddalore",
     state:"Tamilnadu"},

    {id:5,
    Name:"yc",
    age:22,
    city:"salam",
     state:"Tamilnadu"},

    {id:6,
    Name:"kamal",
    age:22,
    city:"chennai",
     state:"Tamilnadu"

    
  }]

}
}
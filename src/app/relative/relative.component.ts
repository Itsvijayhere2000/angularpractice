import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relative',
  templateUrl: './relative.component.html',
  styleUrls: ['./relative.component.scss']
})
export class RelativeComponent implements OnInit {
  user:any;
  userdetails:Array<any>=[];

  constructor() { }

  ngOnInit(): void {
    this.userdetails=[
      {
      id:1,
      name:"vijay",
      city:"kumbakonam",
      state:"tamilnadu"
    },
    {
      id:2,
      name:"karthi",
      city:"kumbakonam",
      state:"tamilnadu"
    },
    {
      id:3,
      name:"sv",
      city:"kumbakonam",
      state:"tamilnadu"
    },
    {
      id:4,
      name:"arun",
      city:"kumbakonam",
      state:"tamilnadu"
    },
    {
      id:5,
      name:"perumal",
      city:"kumbakonam",
      state:"tamilnadu"
    }





    ]

  }

}

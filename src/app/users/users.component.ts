import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
     
     userId:number=0;

  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params.subscribe(userid=>{
     this.userId=userid['userid']
      
    })
  }

}

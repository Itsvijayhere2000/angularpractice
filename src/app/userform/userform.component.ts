import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
  userdetails:any=[]
  email:any=[]
   name:any=[]
   msg:any=[]
  constructor(private appserver: AppService,private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    
    this.userdetails={
      email:this.email,
     name:this.name,
     msh:this.msg}

     this.appserver.submit(this.userdetails).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['userlist'])
    
     })
    }
    

  }



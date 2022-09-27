import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  list:any
  constructor(private appservice:AppService,private router:Router) { }

  ngOnInit(): void {
    this.appservice.userlist().subscribe((data:any)=>{
      this.list=data
      console.log(data);
    })
  }
  addlist(){
  
    
     this.router.navigate(['userform'])

}


// delete(user.id){
//   this.appservice.delete(userId).subscribe((userlist)=>{
//     this.addlist()
//   })
// }

}

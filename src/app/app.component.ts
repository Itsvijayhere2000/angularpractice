import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list:any=[]
  title = 'angularpractice';
  
  
  constructor(private appservice: AppService){

  }
  userlist(){
         this.appservice.getuser().subscribe(data=>{console.log(data)
         this.list=data
  })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private root:Router,private roots:ActivatedRoute) { }

  ngOnInit(): void {
  }
  navigateToRelative(){
   this.root.navigate(['list'],{relativeTo:this.roots})
  }

}

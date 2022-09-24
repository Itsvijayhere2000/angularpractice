import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private compo:Router,private compo2:ActivatedRoute ) { }

  ngOnInit(): void {
  }
  navigateToComponoent1(){
    this.compo.navigate(['lists'],{relativeTo:this.compo2})

  }

}

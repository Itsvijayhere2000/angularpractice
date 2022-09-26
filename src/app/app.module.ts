import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RelativeComponent } from './relative/relative.component';
import { UsersComponent } from './users/users.component';
import { UserformComponent } from './userform/userform.component';
import { UserlistComponent } from './userlist/userlist.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ParentComponent,
    ChildComponent,
    AboutusComponent,
    ContactusComponent,
    Component1Component,
    Component2Component,
    PagenotfoundComponent,
    RelativeComponent,
    UsersComponent,
    UserformComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

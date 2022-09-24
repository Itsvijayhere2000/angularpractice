import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RelativeComponent } from './relative/relative.component';
import { UsersComponent } from './users/users.component';
import { ParentComponent } from './parent/parent.component';
const routes: Routes = [{
  path: 'Hello',
  redirectTo: 'aboutus',
  pathMatch: 'full'

},
{
  path: 'aboutus',
  component: AboutusComponent,
  children: [{ path: 'comp1', component: Component1Component },
  { path: 'comp2', component: Component2Component },
  { path: 'lists', component: RelativeComponent }
  ]
},

{
  path: 'contactus',
  component: ContactusComponent,
  children: [{ path: 'list', component: RelativeComponent },

  { path: ":userid", component: ParentComponent }
  ],

},
{
  path: '**',
    component: PagenotfoundComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

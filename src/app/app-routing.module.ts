import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiveComponent } from './give/give.component';
import { HomeComponent } from './home/home.component';
import { NewHereComponent } from './new-here/new-here.component';
import { NextstepComponent } from './nextstep/nextstep.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { RccgComponent } from './rccg/rccg.component';
import { VirtualChurchComponent } from './virtual-church/virtual-church.component';

const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path: "newhere", component: NewHereComponent},
  {path: "nextstep", component: NextstepComponent },
  {path: "rccg", component: RccgComponent},
  {path:"virtual", component: VirtualChurchComponent},
  {path: "give", component: GiveComponent},
  {path: "our-history", component: OurHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

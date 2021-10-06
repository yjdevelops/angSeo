import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CakeComponent } from './cake/cake.component';
import { GiftComponent } from './gift/gift.component';


const routes: Routes = [
  { path: 'cakes', component: CakeComponent },
  { path: 'gifts', component: GiftComponent }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    

})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCreditcardComponent } from './list-creditcard/list-creditcard.component';
import { AddCreditcardComponent } from './add-creditcard/add-creditcard.component';


const routes: Routes = [
  { path:'list-creditcards', component: ListCreditcardComponent},
  {path:'add-creditcards', component: AddCreditcardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

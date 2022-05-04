import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors.component';

const routes: Routes = [
    { path : '' , component :  ColorsComponent  , pathMatch: 'full'  },
    { path : 'home' , component :  ColorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ColorsRoutingModule { }

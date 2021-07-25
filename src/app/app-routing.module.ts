import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './tier-list/board/board.component';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';


const routes: Routes = [
  { path: '', redirectTo: '/tierList', pathMatch: 'full' },
  { path: 'tierList', component: MainContainerComponent },
  { path: 'tierList/:board', component: MainContainerComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

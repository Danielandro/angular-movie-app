import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    SharedModule
  ],
  exports: [SharedModule, RouterModule, HttpClientModule]
})
export class CoreModule { }

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ColorsComponent } from './colors.component';
import { ColorService } from './colors.service';
@NgModule({
  declarations: [
    ColorsComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    CommonModule,
  ],
  providers: [ColorService]
})
export class ColorsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DockModule } from '../dock/dock.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeComponent,
    DockModule
  ],
  exports: [HomeComponent]
})
export class ContentModule { }

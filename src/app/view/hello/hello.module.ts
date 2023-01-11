import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    OneComponent,
    TwoComponent,
    HelloComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule
  ]
})
export class HelloModule { }

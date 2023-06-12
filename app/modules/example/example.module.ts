import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';


@NgModule({
  declarations: [
    ExampleComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }

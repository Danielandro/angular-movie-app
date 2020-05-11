import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [SliderComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [SliderComponent, CardComponent]
})
export class SharedModule { }

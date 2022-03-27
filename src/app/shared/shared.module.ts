import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './components/input/input.component';
import { ToggleComponent } from './components/toggle/toggle.component';

@NgModule({
  declarations: [ToggleComponent, InputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  exports: [ToggleComponent, InputComponent],
})
export class SharedModule {}

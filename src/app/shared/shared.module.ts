import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartoneComponent } from '../partone/partone.component';
import { ParttwoComponent } from '../parttwo/parttwo.component';

@NgModule({
  declarations: [PartoneComponent, ParttwoComponent],
  imports: [CommonModule],
  exports: [PartoneComponent, ParttwoComponent]
})
export class SharedModule {}

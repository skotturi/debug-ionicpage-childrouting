import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PageTwoPage } from './page-two.page';

import { PartoneComponent } from '../partone/partone.component';
import { ParttwoComponent } from '../parttwo/parttwo.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PageTwoPage,
    children: [
      {
        path: 'part-one',
        component: PartoneComponent
      },
      {
        path: 'part-two',
        component: ParttwoComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageTwoPage]
})
export class PageTwoPageModule {}

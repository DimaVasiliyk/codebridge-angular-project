import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../../core/core.module';


import { ArticlePageComponent } from './article-page.component';
import { MaterialModule } from 'src/app/shared/material.module';

const routes: Routes = [{
  path: '',
  component: ArticlePageComponent,
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    MaterialModule
  ],
  declarations: [ArticlePageComponent]
})
export class ArticlePageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from './article-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';

const routes: Routes = [{
  path: '',
  component: ArticlePageComponent,
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
  ],
  declarations: [ArticlePageComponent]
})
export class ArticlePageModule { }

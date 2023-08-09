import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CustomDatePipe } from './data.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'article-page',
    loadChildren: () => import('../article-page/article-page.module').then(m => m.ArticlePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatInputModule,
    MatCardModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    HomepageComponent,
    CardComponentComponent,
    CustomDatePipe
  ]
})
export class HomepageModule { }

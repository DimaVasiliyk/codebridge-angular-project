import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule, NoopNgxsExecutionStrategy } from '@ngxs/store';

import { ArticlePageService } from './servise/articlePage.service';
import { HomePageService } from './servise/homePage.service';
import { HomePageState } from './storage/store/homepage.state';
import { ArticlePageState } from './storage/store/article-page.state';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forRoot([HomePageState, ArticlePageState], {
      executionStrategy: NoopNgxsExecutionStrategy,
    }),
  ],

  providers: [
    HomePageService,
    ArticlePageService,
  ],
  declarations: []
})
export class CoreModule { }

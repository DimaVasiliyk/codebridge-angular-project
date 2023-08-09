import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageService } from './servise/articlePage.service';
import { HomePageService } from './servise/homePage.service';
import { HttpClientModule } from '@angular/common/http';
import { HomePageState } from './storage/store/homepage.state';
import { NgxsModule, NoopNgxsExecutionStrategy } from '@ngxs/store';
import { ArticlePageState } from './storage/store/article-page.state';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forRoot([HomePageState, ArticlePageState], {
      executionStrategy: NoopNgxsExecutionStrategy,
    }),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
  ],

  providers: [
    HomePageService,
    ArticlePageService,
  ],
})
export class CoreModule { }

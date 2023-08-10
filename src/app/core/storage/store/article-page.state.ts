import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, } from '@ngxs/store';

import { ClearState, GetPageWithId } from '../action/article-page.action';
import { ArticlePageService } from '../../servise/articlePage.service';
import { PageModel } from '../../models/page';


export class ArticlePageStateModel {
  page!: PageModel | null;
}

@State<ArticlePageStateModel>({
  name: 'ArticlePageState',
  defaults: {
    page: null,
  },
})

@Injectable()
export class ArticlePageState {
  constructor(private articlePageService: ArticlePageService) { }

  @Selector()
  static getAllPages(state: ArticlePageStateModel): PageModel | null {
    return state.page;
  }


  @Action(GetPageWithId)
  public getPageWithId(ctx: StateContext<ArticlePageStateModel>, { id }: GetPageWithId) {
    this.articlePageService.getPageWithId(id).subscribe((data: PageModel) => {
      ctx.patchState({
        page: data,
      });
    });
  }

  @Action(ClearState)
  clearState({ setState }: StateContext<ArticlePageStateModel>) {
    setState({
      page:null
    });
  }
}

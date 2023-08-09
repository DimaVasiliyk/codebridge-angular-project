import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, } from '@ngxs/store';
import { ClearState, GetPageWithId } from '../action/article-page.action';
import { ArticlePageService } from '../../servise/articlePage.service';


export class ArticlePageStateModel {
  page!: Object;
}

@State<ArticlePageStateModel>({
  name: 'ArticlePageState',
  defaults: {
    page: {},
  },
})

@Injectable()
export class ArticlePageState {
  constructor(private articlePageService: ArticlePageService) { }

  @Selector()
  static getAllPages(state: ArticlePageStateModel): any {
    return state.page;
  }


  @Action(GetPageWithId)
  public getPageWithId(ctx: StateContext<ArticlePageStateModel>, { id }: GetPageWithId) {
    this.articlePageService.getPageWithId(id).subscribe((data: any) => {
      ctx.patchState({
        page: data,
      });
    });
  }

  @Action(ClearState)
  clearState({ setState }: StateContext<ArticlePageStateModel>) {
    setState({
      page:{}
    });
  }
}

import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store, } from '@ngxs/store';

import { GetAllPages, СheckCharacterCount } from '../action/homepage.action';
import { HomePageService } from '../../servise/homePage.service';
import { PageModel } from '../../models/page';


export class HomepageStateModel {
  pages!: Array<PageModel>;
  countPages!: number;
  filterPage!: Array<PageModel>;
  letter!: string;
}

@State<HomepageStateModel>({
  name: 'HomePageState',
  defaults: {
    pages: [],
    countPages: 0,
    filterPage: [],
    letter: '',
  },
})

@Injectable()
export class HomePageState {
  constructor(private homePageService: HomePageService, private store: Store,) { }

  @Selector()
  static getAllPages(state: HomepageStateModel): Array<PageModel> {
    return state.pages;
  }

  @Selector()
  static getCount(state: HomepageStateModel): number {
    return state.countPages;
  }

  @Selector()
  static getFilterPage(state: HomepageStateModel): Array<PageModel> {
    return state.filterPage;
  }

  @Action(GetAllPages)
  public getAllPages(ctx: StateContext<HomepageStateModel>, { letter }: GetAllPages) {
    this.homePageService.getAllPages(letter).subscribe((data: any) => {
      ctx.patchState({
        pages: data.results,
        letter: letter
      });

      this.store.dispatch(new СheckCharacterCount())
    });
  }


  @Action(СheckCharacterCount)
  public checkCharacterCount(ctx: StateContext<HomepageStateModel>, { }: СheckCharacterCount) {
    const { pages, letter } = ctx.getState();

    let finalPage:Array<PageModel> = []
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].title.length > 100 && pages[i].summary.length > 100) {
        finalPage.push(pages[i]);
        i++
      }
    }

    if (letter) {
      let sortPage:Array<PageModel> = [];

      for (let i = 0; i < finalPage.length; i++) {
        const titleMatches:boolean = finalPage[i].title.includes(letter);
        const summaryMatches:boolean = finalPage[i].summary.includes(letter);

        if (titleMatches || summaryMatches) {
          const spannedWord:string = `<span class="highlight" style='color:red'>${letter}</span>`;

          if (titleMatches) {
            const startIndex:number = finalPage[i].title.indexOf(letter);
            if (startIndex !== -1) {
              finalPage[i].title = finalPage[i].title.substring(0, startIndex) + spannedWord + finalPage[i].title.substring(startIndex + letter.length);
              sortPage.unshift(finalPage[i]);
            }
          } else {
            const startIndex:number = finalPage[i].summary.indexOf(letter);
            if (startIndex !== -1) {
              finalPage[i].summary = finalPage[i].summary.substring(0, startIndex) + spannedWord + finalPage[i].summary.substring(startIndex + letter.length);
              sortPage.push(finalPage[i]);
            }
          }
        }
      }
      ctx.patchState({
        filterPage: sortPage,
        countPages: sortPage.length,
      });
    } else {

      ctx.patchState({
        filterPage: finalPage,
        countPages: finalPage.length,
      });
    }

  }


}
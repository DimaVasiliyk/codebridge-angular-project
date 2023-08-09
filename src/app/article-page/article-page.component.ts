import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, ReplaySubject } from 'rxjs';
import { ArticlePageState } from '../core/storage/store/article-page.state';
import { PageModel } from '../core/models/page';
import { ClearState } from '../core/storage/action/article-page.action';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  @Select(ArticlePageState.getAllPages) page$!: Observable<PageModel>;

  constructor( private router: Router,private store: Store) {}

  ngOnInit() {}
  
  onclick(){
    this.router.navigateByUrl('');
  }
  ngOnDestroy(): void {
      this.store.dispatch(new ClearState());
  }

}

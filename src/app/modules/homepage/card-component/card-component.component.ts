import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { GetPageWithId } from 'src/app/core/storage/action/article-page.action';
import { HomePageState } from 'src/app/core/storage/store/homepage.state';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {
  @Select(HomePageState.getFilterPage) filterPage$!: Observable<any[]>;

  constructor(private router: Router, private store: Store) { }

  ngOnInit() { }

  public onclick(id: number): void {
    this.store.dispatch(new GetPageWithId(id));
    this.router.navigateByUrl('/article-page');
  }
}

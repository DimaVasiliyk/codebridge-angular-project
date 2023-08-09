import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../core/servise/homePage.service';
import { Select, Store } from '@ngxs/store';
import { Observable, ReplaySubject, debounceTime, takeUntil } from 'rxjs';
import { HomePageState } from '../core/storage/store/homepage.state';
import { GetAllPages } from '../core/storage/action/homepage.action';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @Select(HomePageState.getCount) countPages$!: Observable<number>;

  public searchForm: FormGroup;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  constructor(private store: Store, private fb: FormBuilder,) {
    this.searchForm = this.fb.group({
      search: new FormControl(''),
    });
  }

  ngOnInit() {
    this.store.dispatch(new GetAllPages());
    this.searchForm.valueChanges.pipe(debounceTime(500)).pipe(takeUntil(this.destroyed$)).subscribe((inputValue) => { this.store.dispatch(new GetAllPages(inputValue.search)) });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

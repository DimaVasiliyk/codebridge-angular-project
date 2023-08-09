/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticlePageService } from './articlePage.service';

describe('Service: ArticlePage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlePageService]
    });
  });

  it('should ...', inject([ArticlePageService], (service: ArticlePageService) => {
    expect(service).toBeTruthy();
  }));
});

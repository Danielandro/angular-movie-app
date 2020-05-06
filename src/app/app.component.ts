import { Component, OnInit } from '@angular/core';
import { ApiService, TrendingResponse } from './core/services/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-movie-app';
  sliderTitle: string = "Trending Movies";
  trendingList: Observable<TrendingResponse[]>;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.trendingList = this.api.getTrending()
      .pipe(
        map(trending => trending.results)
      );
  }
}

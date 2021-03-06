import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Movie } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit {
  @Input() sliderTitle: string;
  @Input() items: Movie[];
  constructor() { }

  ngOnInit(): void {
  }

}

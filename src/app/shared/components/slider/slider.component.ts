import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Movie } from 'src/app/core/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class SliderComponent implements OnInit {
  @Input() sliderTitle: string;
  @Input() items: Movie[];
  constructor() { }

  ngOnInit(): void {
  }

}

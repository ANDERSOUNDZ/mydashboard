import { Component } from '@angular/core';
import { HeavyLoadersSlow } from '../../../shared/heavy-loaders/heavy-loaders-slow';
import { Title } from "../../../shared/title/title";

@Component({
  selector: 'app-defer-views',
  imports: [HeavyLoadersSlow, Title],
  templateUrl: './defer-views.html',
  styleUrl: './defer-views.css',
})
export default class DeferViews {
}

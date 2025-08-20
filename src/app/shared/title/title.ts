import {
  booleanAttribute,
  Component,
  Input,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: '<h1 class="text-3xl mb-5 text-white">{{title}} - {{witchShadow}}</h1>',
})
export class Title {
  @Input({ required: true }) title!: string;
  @Input({ transform: booleanAttribute }) witchShadow: boolean = false;
}

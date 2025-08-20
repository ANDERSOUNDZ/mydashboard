import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { Title } from '../../../shared/title/title';
import { JsonPipe } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-change-detection',
  imports: [Title, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()" />
    <pre class="text-white">{{ framworkAsSignal() | json }}</pre>
    <pre class="text-white">{{ framworkAsProperty | json }}</pre>
  `,
})
export default class ChangeDetection {
  currentFramework = computed(
    () => `Change detection - ${this.framworkAsSignal().name}`
  );
  framworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });
  framworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };
  constructor() {
    setTimeout(() => {
      this.framworkAsSignal.update((value) => {
        value.name = 'React';
        return { ...value };
      });
      console.log('Hecho!');
    }, 3000);
  }
}

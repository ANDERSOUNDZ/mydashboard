import { NgClass } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [NgClass],
  template: `
  <section [ngClass]="['w-full', cssClass]">
    <ng-content/>
  </section>
  `,
})
export class HeavyLoadersFast {
@Input({required: true}) cssClass!: string; 
}

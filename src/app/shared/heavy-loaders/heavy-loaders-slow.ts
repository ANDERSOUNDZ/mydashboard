import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [NgClass],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      <h1>Soy el heavy loader slow</h1>
    </section>
  `,
})
export class HeavyLoadersSlow {
  @Input({ required: true }) cssClass!: string;
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {
      console.log('Cargando');
    }
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferViews } from './defer-views';

describe('DeferViews', () => {
  let component: DeferViews;
  let fixture: ComponentFixture<DeferViews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferViews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferViews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

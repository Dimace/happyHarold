import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyHaroldComponent } from './happy-harold.component';

describe('HappyHaroldComponent', () => {
  let component: HappyHaroldComponent;
  let fixture: ComponentFixture<HappyHaroldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyHaroldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyHaroldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

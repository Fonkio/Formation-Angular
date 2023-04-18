import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesHomeComponent } from './heroes-home.component';

describe('HeroesHomeComponent', () => {
  let component: HeroesHomeComponent;
  let fixture: ComponentFixture<HeroesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

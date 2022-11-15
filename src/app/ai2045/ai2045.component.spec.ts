import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ai2045Component } from './ai2045.component';

describe('Ai2045Component', () => {
  let component: Ai2045Component;
  let fixture: ComponentFixture<Ai2045Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ai2045Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ai2045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

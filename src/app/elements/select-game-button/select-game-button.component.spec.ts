import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGameButtonComponent } from './select-game-button.component';

describe('SelectGameButtonComponent', () => {
  let component: SelectGameButtonComponent;
  let fixture: ComponentFixture<SelectGameButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGameButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGameButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyCheckComponent } from './ready-check.component';

describe('ReadyCheckComponent', () => {
  let component: ReadyCheckComponent;
  let fixture: ComponentFixture<ReadyCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

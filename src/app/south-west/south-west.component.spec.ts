import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthWestComponent } from './south-west.component';

describe('SouthWestComponent', () => {
  let component: SouthWestComponent;
  let fixture: ComponentFixture<SouthWestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthWestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthWestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

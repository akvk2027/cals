import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InshowComponent } from './inshow.component';

describe('InshowComponent', () => {
  let component: InshowComponent;
  let fixture: ComponentFixture<InshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InshowComponent]
    });
    fixture = TestBed.createComponent(InshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

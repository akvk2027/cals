import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalsComponent } from './cals.component';

describe('CalsComponent', () => {
  let component: CalsComponent;
  let fixture: ComponentFixture<CalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalsComponent]
    });
    fixture = TestBed.createComponent(CalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

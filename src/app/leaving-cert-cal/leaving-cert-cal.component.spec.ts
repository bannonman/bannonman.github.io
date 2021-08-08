import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavingCertCalComponent } from './leaving-cert-cal.component';

describe('LeavingCertCalComponent', () => {
  let component: LeavingCertCalComponent;
  let fixture: ComponentFixture<LeavingCertCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavingCertCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavingCertCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

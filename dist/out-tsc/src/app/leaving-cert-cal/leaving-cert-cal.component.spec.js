import { async, TestBed } from '@angular/core/testing';
import { LeavingCertCalComponent } from './leaving-cert-cal.component';
describe('LeavingCertCalComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LeavingCertCalComponent]
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
//# sourceMappingURL=leaving-cert-cal.component.spec.js.map
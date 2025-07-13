import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesPageComponent } from './galleries-page.component';

describe('GalleriesPageComponent', () => {
    let component: GalleriesPageComponent;
    let fixture: ComponentFixture<GalleriesPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GalleriesPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(GalleriesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

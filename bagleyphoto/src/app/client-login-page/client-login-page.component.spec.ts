import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLoginPageComponent } from './client-login-page.component';

describe('ClientLoginPageComponent', () => {
    let component: ClientLoginPageComponent;
    let fixture: ComponentFixture<ClientLoginPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ClientLoginPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ClientLoginPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

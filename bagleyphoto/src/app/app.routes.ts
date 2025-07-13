import { Routes } from '@angular/router';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ClientLoginPageComponent } from './client-login-page/client-login-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { GalleriesPageComponent } from './galleries-page/galleries-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

export const routes: Routes = [
    {
        path: '',
        component: PortfolioPageComponent,
    },
    {
        path: 'clients',
        component: ClientLoginPageComponent,
    },
    {
        path: 'contact',
        component: ContactPageComponent,
    },
    {
        path: 'galleries',
        component: GalleriesPageComponent,
    },
    {
        path: 'admin',
        component: AdminPageComponent,
    },
];

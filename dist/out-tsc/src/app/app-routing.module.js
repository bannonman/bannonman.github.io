import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// import { LeavingCertCalComponent } from './leaving-cert-cal/leaving-cert-cal.component';
// import { CodeComponent } from './code/code.component';
const routes = [
    { path: 'home-component', component: HomeComponent },
    // { path: 'about-component', component: AboutComponent },
    { path: 'contact-component', component: ContactComponent },
    // { path: 'leaving-cert-cal-component', component: LeavingCertCalComponent },
    // { path: 'code-component', component: CodeComponent },
    { path: '', redirectTo: '/home-component', pathMatch: 'full' },
    { path: '**', component: HomeComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
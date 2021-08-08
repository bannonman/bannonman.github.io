import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MenuComponent = class MenuComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.name = params['name'];
        });
    }
};
MenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.css']
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map
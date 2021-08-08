import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ConnectionService = class ConnectionService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:4000/api/create';
    }
    sendMessage(messageContent) {
        alert("Thanks for submitting! Data: " + JSON.stringify(messageContent));
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(messageContent);
        console.log(body);
        return this.http.post(this.url, body, { 'headers': headers });
    }
};
ConnectionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ConnectionService);
export { ConnectionService };
//# sourceMappingURL=connection.service.js.map
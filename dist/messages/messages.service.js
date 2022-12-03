"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
let MessagesService = class MessagesService {
    constructor() {
        this.messages = [
            {
                id: 1,
                text: 'primeira mensagem',
            },
            {
                id: 2,
                text: 'segunda mensagem'
            },
        ];
    }
    findAll() {
        return this.messages.filter(Boolean);
    }
    async findByid(id) {
        const message = this.messages.find((message) => (message === null || message === void 0 ? void 0 : message.id) === id);
        if (!message) {
            throw Error(`O id:${id} informado não foi encontrado`);
        }
        return await message;
    }
    create(messageDto) {
        const id = this.messages.length + 1;
        const _message = Object.assign({ id }, messageDto);
        return this.messages.push(_message);
    }
    async update(id, messageDto) {
        const index = this.messages.findIndex((message) => (message === null || message === void 0 ? void 0 : message.id) === id);
        if (index < 0) {
            throw Error(`O id:${id} informado não foi encontrado`);
        }
        const _message = Object.assign({ id }, messageDto);
        this.messages[index] = _message;
        return await _message;
    }
    async delete(id) {
        const index = this.messages.findIndex((message) => (message === null || message === void 0 ? void 0 : message.id) === id);
        if (index < 0) {
            throw Error(`O id:${id} informado não foi encontrado`);
        }
        delete this.messages[index];
        return true;
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)()
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map
import { Messages } from './message';
import { MessagesService } from './messages.service';
import { MessagesDto } from './MessagesDto';
export declare class MessagesController {
    private service;
    constructor(service: MessagesService);
    findAll(): Messages[];
    findById(param: any): Promise<any>;
    create(body: MessagesDto): number;
    update(param: any, message: MessagesDto): Promise<any>;
    delete(param: any): Promise<any>;
}

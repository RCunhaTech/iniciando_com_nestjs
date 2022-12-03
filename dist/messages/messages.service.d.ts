import { Messages } from './message';
import { MessagesDto } from './MessagesDto';
export declare class MessagesService {
    private messages;
    findAll(): Messages[];
    findByid(id: number): Promise<Messages>;
    create(messageDto: MessagesDto): number;
    update(id: number, messageDto: MessagesDto): Promise<Messages>;
    delete(id: number): Promise<boolean>;
}

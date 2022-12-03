import { Delete, Injectable } from '@nestjs/common';
import { Messages } from './message';
import { MessagesDto } from './MessagesDto';

@Injectable()
export class MessagesService {

    private messages: Messages[] = [
        {
            id:1,
            text:'primeira mensagem',
        },
        {
            id:2,
            text:'segunda mensagem'
        },
    ]

    findAll(){
        return this.messages.filter(Boolean)
    }

    async findByid(id: number) { 
        const message = this.messages.find((message) => message?.id === id)

        if(!message) {
            throw Error(`O id:${id} informado não foi encontrado`)     
        }

        return await message
    }

    create(messageDto: MessagesDto) {

        const id = this.messages.length + 1

        const _message:Messages ={
            id,
            ...messageDto
        }

        return this.messages.push(_message)
    }

    async update(id: number, messageDto: MessagesDto) {
        const index = this.messages.findIndex((message) => message?.id ===id)

        if(index < 0) {
            throw Error(`O id:${id} informado não foi encontrado`)     
        }

        const _message:Messages = {
            id,...messageDto
        }

        this.messages[index] =_message

        return await _message
    }

    async delete(id: number) {
        const index =this.messages.findIndex((message) => message?.id === id)

        if(index < 0) {
            throw Error(`O id:${id} informado não foi encontrado`)  
        }

        delete this.messages[index]

        return true
    }
}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Messages } from './message';
import { MessagesService } from './messages.service';
import { MessagesDto } from './MessagesDto';


@Controller('messages')
export class MessagesController {


    constructor(private service:MessagesService){}

    @Get()
    findAll(){
        return this.service.findAll()
    }

    @Get(':id')
    findById(@Param() param){
        return this.service.findByid(+param.id).catch(e => e.message)
    }

    @Post()
    create(@Body() body:MessagesDto) {
        return this.service.create(body)
    }

    @Put(':id')
    update(@Param() param,@Body() message:MessagesDto) {
        return this.service.update(+param.id,message).catch(e =>e.message)
    }

    @Delete(':id')
    delete(@Param() param) {
        return this.service.delete(+param.id).catch(e => e.message)
    }
}

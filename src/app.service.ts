import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  message = [
    {
      id:1,text:'message 1'
    },
    {
      id:2,text:'message 2'
    },
    {
      id:3,text:'message 5'
    }
  ]

  getHello():any {
    return this.message
  }
}

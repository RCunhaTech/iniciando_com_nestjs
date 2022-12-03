import { IsNotEmpty, IsString } from "class-validator";

export class MessagesDto {
    @IsString()
    @IsNotEmpty()
    text: string;
}

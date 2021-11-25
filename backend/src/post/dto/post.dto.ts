import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsPositive, IsInt } from 'class-validator';
import { User } from 'src/user/interfaces/user.interface';

export class CreatePostDto {
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    readonly userId: number;

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly body: string;
}

export class UpdatePostDto extends PartialType(CreatePostDto) {}
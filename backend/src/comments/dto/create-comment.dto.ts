import { IsEmail, IsNotEmpty, IsString, IsPositive, IsOptional, IsInt } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCommentDto {
    @IsInt()
    @IsOptional()
    @IsPositive()
    @ApiProperty()
    readonly postId: number;

    @IsInt()
    @IsOptional()
    @IsPositive()
    @ApiProperty()
    readonly id: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @IsString()
    @IsEmail()
    @ApiProperty({ description: 'the email of user' })
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly body: string;

}

export class UpdateCommentDto extends PartialType(CreateCommentDto) {}
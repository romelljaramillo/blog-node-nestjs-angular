import { IsEmail, IsNotEmpty, IsString, IsPhoneNumber, IsPositive, IsOptional, IsInt } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateCompanyDto } from './company.dto';
import { CreateAddressDto } from './address.dto';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `User name complete` })
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly username: string;

    @IsString()
    @IsEmail()
    @ApiProperty({ description: 'the email of user' })
    readonly email: string;

    @IsInt()
    @IsOptional()
    @IsPositive()
    @ApiProperty()
    readonly address: CreateAddressDto;

    @IsString()
    @IsPhoneNumber()
    @ApiProperty()
    readonly phone: string;

    @IsString()
    @ApiProperty()
    readonly website: string;

    @IsInt()
    @IsOptional()
    @IsPositive()
    @ApiProperty()
    readonly company: CreateCompanyDto;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
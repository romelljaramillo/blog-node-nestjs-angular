import { IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateGeoDto } from './geo.dto';

export class CreateAddressDto {
    @IsString()
    @ApiProperty()
    readonly street: string;
    
    @IsString()
    @ApiProperty()
    readonly suite: string;
    
    @IsString()
    @ApiProperty()
    readonly city: string;

    @IsString()
    @ApiProperty()
    readonly zipcode: string;

    @IsString()
    @ApiProperty()
    readonly geo: CreateGeoDto;
}

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
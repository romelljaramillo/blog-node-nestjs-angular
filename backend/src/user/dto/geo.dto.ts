import { IsOptional, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateGeoDto {
    @IsString()
    @ApiProperty()
    @IsOptional()
    readonly lat: string;

    @IsString()
    @ApiProperty()
    @IsOptional()
    readonly lng: string;
}

export class UpdateGeoDto extends PartialType(CreateGeoDto) {}
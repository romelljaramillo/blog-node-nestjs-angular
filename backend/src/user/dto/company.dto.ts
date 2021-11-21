import { IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCompanyDto {
    @IsString()
    @ApiProperty()
    readonly name: string;
    
    @IsString()
    @ApiProperty()
    readonly catchPhrase: string;
    
    @IsString()
    @ApiProperty()
    readonly bs: string;
}

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}
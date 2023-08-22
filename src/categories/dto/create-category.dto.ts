import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateCategoryDto {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string;
    //(?) Significa que ela náo precisa ser passada, mas que ela pode ser ou náo uma string

    @IsOptional()
    @IsString()
    descripiton?: string | null;
}
 
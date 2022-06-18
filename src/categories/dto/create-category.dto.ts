import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCategoryDto {
    @MaxLength(1)
    @IsNotEmpty()
    @IsString()
    name: string;

}

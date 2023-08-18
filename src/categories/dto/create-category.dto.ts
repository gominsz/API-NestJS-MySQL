export class CreateCategoryDto {
    name: string;
    //(?) Significa que ela náo precisa ser passada, mas que ela pode ser ou náo uma string
    descripiton?: string | null;
}

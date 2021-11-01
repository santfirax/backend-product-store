import { Category } from "src/categories/entities/category.entity";

export class CreateProductDto {
    readonly name:string;
    readonly barCode:string;
    readonly categories:Category[];
}

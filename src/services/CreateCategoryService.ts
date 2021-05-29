import { ICategoryRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryService {
    // eslint-disable-next-line prettier/prettier
    constructor(private categoriesRepository: ICategoryRepository) { }
    execute({ name, description }: IRequest): void {
        const categoryExists = this.categoriesRepository.findByName(name);

        if (categoryExists) {
            throw new Error("Category already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

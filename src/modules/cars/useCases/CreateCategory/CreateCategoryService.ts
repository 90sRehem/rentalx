import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryService {
    // eslint-disable-next-line prettier/prettier
    constructor(private categoriesRepository: ICategoryRepository) { }
    async execute({ name, description }: IRequest): Promise<void> {
        const categoryExists = await this.categoriesRepository.findByName(name);

        if (categoryExists) {
            throw new Error('Category already exists!');
        }

        await this.categoriesRepository.create({ name, description });
    }
}

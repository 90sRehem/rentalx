import { inject, injectable } from 'tsyringe';

import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

@injectable()
export class CreateCategoryService {
    constructor(
        @inject('CategoriesRepository')
        private categoriesRepository: ICategoryRepository,
    ) { }
    async execute({ name, description }: IRequest): Promise<void> {
        const categoryExists = await this.categoriesRepository.findByName(name);

        if (categoryExists) {
            throw new Error('Category already exists!');
        }

        await this.categoriesRepository.create({ name, description });
    }
}

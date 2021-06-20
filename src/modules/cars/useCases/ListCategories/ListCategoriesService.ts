import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

export class ListCategoriesService {
    // eslint-disable-next-line prettier/prettier
    constructor(private categoriesRepository: ICategoryRepository) { }
    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();

        return categories;
    }
}

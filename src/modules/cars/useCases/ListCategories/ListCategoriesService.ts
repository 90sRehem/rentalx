import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

export class ListCategoriesService {
    // eslint-disable-next-line prettier/prettier
    constructor(private categoriesRepository: ICategoryRepository) { }
    execute(): Category[] {
        const categories = this.categoriesRepository.list();

        return categories;
    }
}

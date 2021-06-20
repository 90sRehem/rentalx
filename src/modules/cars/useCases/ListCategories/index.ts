import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesService } from './ListCategoriesService';

export default (): ListCategoriesController => {
    const categoryRepository = new CategoriesRepository();
    const listCategoryService = new ListCategoriesService(categoryRepository);
    const listCategoriesController = new ListCategoriesController(
        listCategoryService,
    );

    return listCategoriesController;
};

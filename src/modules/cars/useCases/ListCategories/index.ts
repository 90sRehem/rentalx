import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesService } from "./ListCategoriesService";

const categoryRepository = CategoriesRepository.getInstance();
const listCategoryService = new ListCategoriesService(categoryRepository);
const listCategoriesController = new ListCategoriesController(
    listCategoryService
);

export { listCategoriesController };

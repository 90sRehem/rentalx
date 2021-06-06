import { Category } from "../../model/Category";
import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoryRepository {
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        const newCategory: Category = {
            name,
            description,
            created_at: new Date(),
        };

        Object.assign(category, newCategory);
        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        return this.categories.find((category) => category.name === name);
    }
}

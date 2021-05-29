import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRepository = new CategoriesRepository();
export const categoriesRoutes = Router();

categoriesRoutes.get("/", (_, response) => {
    const category = categoriesRepository.list();
    return response.status(200).json(category);
});

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );

    try {
        createCategoryService.execute({ name, description });
    } catch (error) {
        console.log(error);
        return response.status(500).json({ error });
    }
    return response.status(201).send();
});

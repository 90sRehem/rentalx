import { Request, Response } from "express";

import { ListCategoriesService } from "./ListCategoriesService";

export class ListCategoriesController {
    // eslint-disable-next-line prettier/prettier
    constructor(private listCategoryService: ListCategoriesService) { }

    handle(request: Request, response: Response): Response {
        const all = this.listCategoryService.execute();

        return response.json(all);
    }
}

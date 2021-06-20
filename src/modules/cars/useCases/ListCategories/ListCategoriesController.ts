import { Request, Response } from 'express';

import { ListCategoriesService } from './ListCategoriesService';

export class ListCategoriesController {
    // eslint-disable-next-line prettier/prettier
    constructor(private listCategoryService: ListCategoriesService) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const all = await this.listCategoryService.execute();

        return response.json(all);
    }
}

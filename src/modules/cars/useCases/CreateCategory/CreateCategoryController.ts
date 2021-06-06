import { Request, Response } from "express";

import { CreateCategoryService } from "./CreateCategoryService";

export class CreateCategoryController {
    // eslint-disable-next-line prettier/prettier
    constructor(private createCategoryService: CreateCategoryService) { }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    handle(request: Request, response: Response) {
        const { name, description } = request.body;

        this.createCategoryService.execute({ name, description });
        return response.status(201).send();
    }
}

import { Request, Response } from "express";

import { ImportCategoryService } from "./ImportCategoryService";

export class ImportCategoryController {
    // eslint-disable-next-line prettier/prettier
    constructor(private importCategoryService: ImportCategoryService) { }
    handle(request: Request, response: Response): Response {
        const { file } = request;
        this.importCategoryService.execute(file);
        return response.send();
    }
}

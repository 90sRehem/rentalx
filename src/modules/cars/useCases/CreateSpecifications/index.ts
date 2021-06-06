import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "./CreateSpecification";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationRepository = new SpecificationRepository();
const createSpecificationService = new CreateSpecificationService(
    specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
    createSpecificationService
);

export { createSpecificationController };

import { Specification } from "../../model/Specification";
import {
    ISpecificationDTO,
    ISpecificationsRepository,
} from "../ISpecificationsRepository";

export class SpecificationRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ description, name }: ISpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (spec) => spec.name === name
        );

        return specification;
    }
}

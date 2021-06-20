import { Specification } from '../entities/Specification';

interface ISpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ISpecificationDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationsRepository, ISpecificationDTO };

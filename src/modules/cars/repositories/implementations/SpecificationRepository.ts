import { getRepository, Repository } from 'typeorm';

import { Specification } from '../../entities/Specification';
import {
    ISpecificationDTO,
    ISpecificationsRepository,
} from '../ISpecificationsRepository';

export class SpecificationRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({ description, name }: ISpecificationDTO): Promise<void> {
        const specification = this.repository.create({ name, description });
        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ name });

        return specification;
    }
}

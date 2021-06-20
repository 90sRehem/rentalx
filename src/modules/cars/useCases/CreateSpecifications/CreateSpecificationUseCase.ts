import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}

@injectable()
export class CreateSpecificationService {
    constructor(
        @inject('SpecificationRepository')
        private specificationRepository: ISpecificationsRepository,
    ) { }

    async execute({ description, name }: IRequest): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error('Specification already exists!');
        }

        await this.specificationRepository.create({ description, name });
    }
}

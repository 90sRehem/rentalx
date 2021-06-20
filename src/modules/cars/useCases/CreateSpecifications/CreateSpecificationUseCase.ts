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
    execute({ description, name }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error('Specification already exists!');
        }

        this.specificationRepository.create({ description, name });
    }
}

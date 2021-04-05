import { inject, injectable } from 'tsyringe';
import Customer from '../infra/typeorm/entities/Customer';
import { ICustomersRepository } from '../domain/repositories/ICustomersRepository';

/*interface IPaginateCustomer {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Customer[];
}*/

@injectable()
class ListCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute(): Promise<Customer[] | undefined> {
    const customers = await this.customersRepository.findAll();

    return customers;
  }
}

export default ListCustomerService;

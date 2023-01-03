import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Expenses, ExpensesRelations} from '../models';

export class ExpensesRepository extends DefaultCrudRepository<
  Expenses,
  typeof Expenses.prototype.id,
  ExpensesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Expenses, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Employees, EmployeesRelations} from '../models';

export class EmployeesRepository extends DefaultCrudRepository<
  Employees,
  typeof Employees.prototype.id,
  EmployeesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Employees, dataSource);
  }
}

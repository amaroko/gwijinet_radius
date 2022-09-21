import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Operators, OperatorsRelations} from '../models';

export class OperatorsRepository extends DefaultCrudRepository<
  Operators,
  typeof Operators.prototype.id,
  OperatorsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Operators, dataSource);
  }
}

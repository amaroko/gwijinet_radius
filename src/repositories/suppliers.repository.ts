import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Suppliers, SuppliersRelations} from '../models';

export class SuppliersRepository extends DefaultCrudRepository<
  Suppliers,
  typeof Suppliers.prototype.id,
  SuppliersRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Suppliers, dataSource);
  }
}

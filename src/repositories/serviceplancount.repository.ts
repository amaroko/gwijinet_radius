import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Serviceplancount, ServiceplancountRelations} from '../models';

export class ServiceplancountRepository extends DefaultCrudRepository<
  Serviceplancount,
  typeof Serviceplancount.prototype.id,
  ServiceplancountRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Serviceplancount, dataSource);
  }
}

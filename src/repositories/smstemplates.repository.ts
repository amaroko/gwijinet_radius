import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Smstemplates, SmstemplatesRelations} from '../models';

export class SmstemplatesRepository extends DefaultCrudRepository<
  Smstemplates,
  typeof Smstemplates.prototype.id,
  SmstemplatesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Smstemplates, dataSource);
  }
}

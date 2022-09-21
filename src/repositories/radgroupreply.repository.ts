import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Radgroupreply, RadgroupreplyRelations} from '../models';

export class RadgroupreplyRepository extends DefaultCrudRepository<
  Radgroupreply,
  typeof Radgroupreply.prototype.id,
  RadgroupreplyRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Radgroupreply, dataSource);
  }
}

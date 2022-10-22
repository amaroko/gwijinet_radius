import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Radusergroup, RadusergroupRelations} from '../models';

export class RadusergroupRepository extends DefaultCrudRepository<
  Radusergroup,
  typeof Radusergroup.prototype.id,
  RadusergroupRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Radusergroup, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Radgroupcheck, RadgroupcheckRelations} from '../models';

export class RadgroupcheckRepository extends DefaultCrudRepository<
  Radgroupcheck,
  typeof Radgroupcheck.prototype.id,
  RadgroupcheckRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Radgroupcheck, dataSource);
  }
}

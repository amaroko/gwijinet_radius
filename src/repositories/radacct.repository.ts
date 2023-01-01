import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Radacct, RadacctRelations} from '../models';

export class RadacctRepository extends DefaultCrudRepository<
  Radacct,
  typeof Radacct.prototype.radacctid,
  RadacctRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Radacct, dataSource);
  }
}

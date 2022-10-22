import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Radcheck, RadcheckRelations} from '../models';

export class RadcheckRepository extends DefaultCrudRepository<
  Radcheck,
  typeof Radcheck.prototype.id,
  RadcheckRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Radcheck, dataSource);
  }
}

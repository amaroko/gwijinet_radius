import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Smsdump, SmsdumpRelations} from '../models';

export class SmsdumpRepository extends DefaultCrudRepository<
  Smsdump,
  typeof Smsdump.prototype.id,
  SmsdumpRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Smsdump, dataSource);
  }
}

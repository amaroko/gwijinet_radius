import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Autosms, AutosmsRelations} from '../models';

export class AutosmsRepository extends DefaultCrudRepository<
  Autosms,
  typeof Autosms.prototype.id,
  AutosmsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Autosms, dataSource);
  }
}

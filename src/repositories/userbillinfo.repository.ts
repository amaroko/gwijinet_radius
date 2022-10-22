import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Userbillinfo, UserbillinfoRelations} from '../models';

export class UserbillinfoRepository extends DefaultCrudRepository<
  Userbillinfo,
  typeof Userbillinfo.prototype.id,
  UserbillinfoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Userbillinfo, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Userinfo, UserinfoRelations} from '../models';

export class UserinfoRepository extends DefaultCrudRepository<
  Userinfo,
  typeof Userinfo.prototype.id,
  UserinfoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Userinfo, dataSource);
  }
}

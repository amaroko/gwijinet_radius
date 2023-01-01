import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Usertitles, UsertitlesRelations} from '../models';

export class UsertitlesRepository extends DefaultCrudRepository<
  Usertitles,
  typeof Usertitles.prototype.id,
  UsertitlesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Usertitles, dataSource);
  }
}

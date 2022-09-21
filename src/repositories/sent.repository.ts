import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Sent, SentRelations} from '../models';

export class SentRepository extends DefaultCrudRepository<
  Sent,
  typeof Sent.prototype.id,
  SentRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Sent, dataSource);
  }
}

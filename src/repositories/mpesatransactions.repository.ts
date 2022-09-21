import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Mpesatransactions, MpesatransactionsRelations} from '../models';

export class MpesatransactionsRepository extends DefaultCrudRepository<
  Mpesatransactions,
  typeof Mpesatransactions.prototype.id,
  MpesatransactionsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Mpesatransactions, dataSource);
  }
}

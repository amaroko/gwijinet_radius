import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Todayexpectedmoney, TodayexpectedmoneyRelations} from '../models';

export class TodayexpectedmoneyRepository extends DefaultCrudRepository<
  Todayexpectedmoney,
  typeof Todayexpectedmoney.prototype.id,
  TodayexpectedmoneyRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Todayexpectedmoney, dataSource);
  }
}

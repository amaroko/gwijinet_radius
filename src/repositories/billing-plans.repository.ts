import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {BillingPlans, BillingPlansRelations} from '../models';

export class BillingPlansRepository extends DefaultCrudRepository<
  BillingPlans,
  typeof BillingPlans.prototype.id,
  BillingPlansRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(BillingPlans, dataSource);
  }
}

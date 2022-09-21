import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Smsdetails, SmsdetailsRelations} from '../models';

export class SmsdetailsRepository extends DefaultCrudRepository<
  Smsdetails,
  typeof Smsdetails.prototype.username,
  SmsdetailsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Smsdetails, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Sendqueue, SendqueueRelations} from '../models';

export class SendqueueRepository extends DefaultCrudRepository<
  Sendqueue,
  typeof Sendqueue.prototype.id,
  SendqueueRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Sendqueue, dataSource);
  }
}

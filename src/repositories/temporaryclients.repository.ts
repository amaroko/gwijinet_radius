import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Temporaryclients, TemporaryclientsRelations} from '../models';

export class TemporaryclientsRepository extends DefaultCrudRepository<
  Temporaryclients,
  typeof Temporaryclients.prototype.id,
  TemporaryclientsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Temporaryclients, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Ppoeclients, PpoeclientsRelations} from '../models';

export class PpoeclientsRepository extends DefaultCrudRepository<
  Ppoeclients,
  typeof Ppoeclients.prototype.id,
  PpoeclientsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Ppoeclients, dataSource);
  }
}

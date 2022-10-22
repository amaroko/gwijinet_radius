import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Retrieval, RetrievalRelations} from '../models';

export class RetrievalRepository extends DefaultCrudRepository<
  Retrieval,
  typeof Retrieval.prototype.id,
  RetrievalRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Retrieval, dataSource);
  }
}

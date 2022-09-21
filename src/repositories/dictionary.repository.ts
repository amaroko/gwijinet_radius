import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Dictionary, DictionaryRelations} from '../models';

export class DictionaryRepository extends DefaultCrudRepository<
  Dictionary,
  typeof Dictionary.prototype.id,
  DictionaryRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Dictionary, dataSource);
  }
}

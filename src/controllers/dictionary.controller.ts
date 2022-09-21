import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Dictionary} from '../models';
import {DictionaryRepository} from '../repositories';
import {inject} from '@loopback/core';
import {MysqlDataSource} from '../datasources';
const spec = {
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
        },
      },
    },
  },
};
export class DictionaryController {
  constructor(
    @repository(DictionaryRepository)
    public dictionaryRepository : DictionaryRepository, @inject('datasources.mysql') public dataSource: MysqlDataSource,
  ) {}

  @post('/dictionary')
  @response(200, {
    description: 'Dictionary model instance',
    content: {'application/json': {schema: getModelSchemaRef(Dictionary)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dictionary, {
            title: 'NewDictionary',
            exclude: ['id'],
          }),
        },
      },
    })
    dictionary: Omit<Dictionary, 'id'>,
  ): Promise<Dictionary> {
    return this.dictionaryRepository.create(dictionary);
  }

  @get('/dictionary/count')
  @response(200, {
    description: 'Dictionary model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Dictionary) where?: Where<Dictionary>,
  ): Promise<Count> {
    return this.dictionaryRepository.count(where);
  }

  @get('/dictionary')
  @response(200, {
    description: 'Array of Dictionary model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Dictionary, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Dictionary) filter?: Filter<Dictionary>,
  ): Promise<Dictionary[]> {
    return this.dictionaryRepository.find(filter);
  }

  @patch('/dictionary')
  @response(200, {
    description: 'Dictionary PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dictionary, {partial: true}),
        },
      },
    })
    dictionary: Dictionary,
    @param.where(Dictionary) where?: Where<Dictionary>,
  ): Promise<Count> {
    return this.dictionaryRepository.updateAll(dictionary, where);
  }




  //get values based on attribute selected
  @get('/dictionary/getattr', {
    responses: {
      '200': spec,
    },
  })
  async totalnotes(
    @param.query.string('attribute') attribute: string,
  ): Promise<any> {
    var sql = "select * from dictionary where attribute  = '" + attribute + "'";

    const data = await this.dataSource.execute(sql)
    return data
  }

  //get recommendation
  @get('/dictionary/recommendations', {
    responses: {
      '200': spec,
    },
  })
  async recommendations(
    @param.query.string('attribute') attribute: string,
  ): Promise<any> {
    var sql = "SELECT RecommendedOP,RecommendedTable,RecommendedTooltip,type,RecommendedHelper FROM dictionary WHERE Attribute = '" + attribute + "'";

    const data = await this.dataSource.execute(sql)
    return data
  }

  @get('/dictionary/{id}')
  @response(200, {
    description: 'Dictionary model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Dictionary, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Dictionary, {exclude: 'where'}) filter?: FilterExcludingWhere<Dictionary>
  ): Promise<Dictionary> {
    return this.dictionaryRepository.findById(id, filter);
  }

  @patch('/dictionary/{id}')
  @response(204, {
    description: 'Dictionary PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dictionary, {partial: true}),
        },
      },
    })
    dictionary: Dictionary,
  ): Promise<void> {
    await this.dictionaryRepository.updateById(id, dictionary);
  }

  @put('/dictionary/{id}')
  @response(204, {
    description: 'Dictionary PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() dictionary: Dictionary,
  ): Promise<void> {
    await this.dictionaryRepository.replaceById(id, dictionary);
  }

  @del('/dictionary/{id}')
  @response(204, {
    description: 'Dictionary DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.dictionaryRepository.deleteById(id);
  }
}

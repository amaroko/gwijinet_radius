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
import {Todayexpectedmoney} from '../models';
import {TodayexpectedmoneyRepository} from '../repositories';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';
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

export class TodaymoneyController {
  constructor(
    @repository(TodayexpectedmoneyRepository)
    public todayexpectedmoneyRepository : TodayexpectedmoneyRepository,
    @inject('datasources.mysql') public dataSource: MysqlDataSource,
  ) {}

  @post('/todaymoney')
  @response(200, {
    description: 'Todayexpectedmoney model instance',
    content: {'application/json': {schema: getModelSchemaRef(Todayexpectedmoney)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todayexpectedmoney, {
            title: 'NewTodayexpectedmoney',
            exclude: ['id'],
          }),
        },
      },
    })
    todayexpectedmoney: Omit<Todayexpectedmoney, 'id'>,
  ): Promise<Todayexpectedmoney> {
    return this.todayexpectedmoneyRepository.create(todayexpectedmoney);
  }

  @get('/todaymoney/count')
  @response(200, {
    description: 'Todayexpectedmoney model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Todayexpectedmoney) where?: Where<Todayexpectedmoney>,
  ): Promise<Count> {
    return this.todayexpectedmoneyRepository.count(where);
  }

  @get('/todaymoney')
  @response(200, {
    description: 'Array of Todayexpectedmoney model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Todayexpectedmoney, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Todayexpectedmoney) filter?: Filter<Todayexpectedmoney>,
  ): Promise<Todayexpectedmoney[]> {
    return this.todayexpectedmoneyRepository.find(filter);
  }

  @patch('/todaymoney')
  @response(200, {
    description: 'Todayexpectedmoney PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todayexpectedmoney, {partial: true}),
        },
      },
    })
    todayexpectedmoney: Todayexpectedmoney,
    @param.where(Todayexpectedmoney) where?: Where<Todayexpectedmoney>,
  ): Promise<Count> {
    return this.todayexpectedmoneyRepository.updateAll(todayexpectedmoney, where);
  }

  @get('/todaymoney/{id}')
  @response(200, {
    description: 'Todayexpectedmoney model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Todayexpectedmoney, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Todayexpectedmoney, {exclude: 'where'}) filter?: FilterExcludingWhere<Todayexpectedmoney>
  ): Promise<Todayexpectedmoney> {
    return this.todayexpectedmoneyRepository.findById(id, filter);
  }

  @patch('/todaymoney/{id}')
  @response(204, {
    description: 'Todayexpectedmoney PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todayexpectedmoney, {partial: true}),
        },
      },
    })
    todayexpectedmoney: Todayexpectedmoney,
  ): Promise<void> {
    await this.todayexpectedmoneyRepository.updateById(id, todayexpectedmoney);
  }

  @put('/todaymoney/{id}')
  @response(204, {
    description: 'Todayexpectedmoney PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() todayexpectedmoney: Todayexpectedmoney,
  ): Promise<void> {
    await this.todayexpectedmoneyRepository.replaceById(id, todayexpectedmoney);
  }

  @del('/todaymoney/{id}')
  @response(204, {
    description: 'Todayexpectedmoney DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.todayexpectedmoneyRepository.deleteById(id);
  }


  // gets 7 days reminder
  @get('/todaymoney/today', {
    responses: {
      '200': spec,
    },
  })
  async gettodaydata(
    @param.query.string('attribute') attribute: string,
  ): Promise<any> {
    var sql = "SELECT * FROM todayexpectedmoney WHERE datecaptured >= CURRENT_DATE";


    const data = await this.dataSource.execute(sql)
    return data
  }

}

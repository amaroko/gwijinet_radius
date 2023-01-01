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
import {Serviceplancount} from '../models';
import {ServiceplancountRepository} from '../repositories';
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
export class ServicecountController {
  constructor(
    @repository(ServiceplancountRepository)
    public serviceplancountRepository : ServiceplancountRepository,
    @inject('datasources.mysql') public dataSource: MysqlDataSource,
  ) {}

  @post('/servicecount')
  @response(200, {
    description: 'Serviceplancount model instance',
    content: {'application/json': {schema: getModelSchemaRef(Serviceplancount)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Serviceplancount, {
            title: 'NewServiceplancount',
            exclude: ['id'],
          }),
        },
      },
    })
    serviceplancount: Omit<Serviceplancount, 'id'>,
  ): Promise<Serviceplancount> {
    return this.serviceplancountRepository.create(serviceplancount);
  }

  @get('/servicecount/count')
  @response(200, {
    description: 'Serviceplancount model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Serviceplancount) where?: Where<Serviceplancount>,
  ): Promise<Count> {
    return this.serviceplancountRepository.count(where);
  }

  @get('/servicecount')
  @response(200, {
    description: 'Array of Serviceplancount model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Serviceplancount, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Serviceplancount) filter?: Filter<Serviceplancount>,
  ): Promise<Serviceplancount[]> {
    return this.serviceplancountRepository.find(filter);
  }

  @patch('/servicecount')
  @response(200, {
    description: 'Serviceplancount PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Serviceplancount, {partial: true}),
        },
      },
    })
    serviceplancount: Serviceplancount,
    @param.where(Serviceplancount) where?: Where<Serviceplancount>,
  ): Promise<Count> {
    return this.serviceplancountRepository.updateAll(serviceplancount, where);
  }

  @get('/servicecount/{id}')
  @response(200, {
    description: 'Serviceplancount model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Serviceplancount, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Serviceplancount, {exclude: 'where'}) filter?: FilterExcludingWhere<Serviceplancount>
  ): Promise<Serviceplancount> {
    return this.serviceplancountRepository.findById(id, filter);
  }

  @patch('/servicecount/{id}')
  @response(204, {
    description: 'Serviceplancount PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Serviceplancount, {partial: true}),
        },
      },
    })
    serviceplancount: Serviceplancount,
  ): Promise<void> {
    await this.serviceplancountRepository.updateById(id, serviceplancount);
  }

  @put('/servicecount/{id}')
  @response(204, {
    description: 'Serviceplancount PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() serviceplancount: Serviceplancount,
  ): Promise<void> {
    await this.serviceplancountRepository.replaceById(id, serviceplancount);
  }

  @del('/servicecount/{id}')
  @response(204, {
    description: 'Serviceplancount DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.serviceplancountRepository.deleteById(id);
  }




  // gets 3 days reminder
  @get('/servicecount/home', {
    responses: {
      '200': spec,
    },
  })
  async get3reminder(
    @param.query.string('attribute') attribute: string,
  ): Promise<any> {
    var sql = "select * from serviceplancount where groupname like '%Home%'";


    const data = await this.dataSource.execute(sql)
    return data
  }

}

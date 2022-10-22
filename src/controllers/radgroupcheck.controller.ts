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
import {Radgroupcheck} from '../models';
import {RadgroupcheckRepository} from '../repositories';
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
export class RadgroupcheckController {
  constructor(
    @repository(RadgroupcheckRepository)
    public radgroupcheckRepository : RadgroupcheckRepository,
    @inject('datasources.mysql') public dataSource: MysqlDataSource,
  ) {}

  @post('/radgroupcheck')
  @response(200, {
    description: 'Radgroupcheck model instance',
    content: {'application/json': {schema: getModelSchemaRef(Radgroupcheck)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Radgroupcheck, {
            title: 'NewRadgroupcheck',
            exclude: ['id'],
          }),
        },
      },
    })
    radgroupcheck: Omit<Radgroupcheck, 'id'>,
  ): Promise<Radgroupcheck> {
    return this.radgroupcheckRepository.create(radgroupcheck);
  }

  @get('/radgroupcheck/count')
  @response(200, {
    description: 'Radgroupcheck model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Radgroupcheck) where?: Where<Radgroupcheck>,
  ): Promise<Count> {
    return this.radgroupcheckRepository.count(where);
  }

  @get('/radgroupcheck')
  @response(200, {
    description: 'Array of Radgroupcheck model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Radgroupcheck, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Radgroupcheck) filter?: Filter<Radgroupcheck>,
  ): Promise<Radgroupcheck[]> {
    return this.radgroupcheckRepository.find(filter);
  }

  @patch('/radgroupcheck')
  @response(200, {
    description: 'Radgroupcheck PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Radgroupcheck, {partial: true}),
        },
      },
    })
    radgroupcheck: Radgroupcheck,
    @param.where(Radgroupcheck) where?: Where<Radgroupcheck>,
  ): Promise<Count> {
    return this.radgroupcheckRepository.updateAll(radgroupcheck, where);
  }

  @get('/radgroupcheck/{id}')
  @response(200, {
    description: 'Radgroupcheck model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Radgroupcheck, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Radgroupcheck, {exclude: 'where'}) filter?: FilterExcludingWhere<Radgroupcheck>
  ): Promise<Radgroupcheck> {
    return this.radgroupcheckRepository.findById(id, filter);
  }

  @patch('/radgroupcheck/{id}')
  @response(204, {
    description: 'Radgroupcheck PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Radgroupcheck, {partial: true}),
        },
      },
    })
    radgroupcheck: Radgroupcheck,
  ): Promise<void> {
    await this.radgroupcheckRepository.updateById(id, radgroupcheck);
  }

  @put('/radgroupcheck/{id}')
  @response(204, {
    description: 'Radgroupcheck PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() radgroupcheck: Radgroupcheck,
  ): Promise<void> {
    await this.radgroupcheckRepository.replaceById(id, radgroupcheck);
  }

  @del('/radgroupcheck/{id}')
  @response(204, {
    description: 'Radgroupcheck DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.radgroupcheckRepository.deleteById(id);
  }



  //get values based on attribute selected
  @get('/radgroupcheck/getallprofiles', {
    responses: {
      '200': spec,
    },
  })
  async getprofiles(
    @param.query.string('attribute') attribute: string,
  ): Promise<any> {
    var sql = "select groupname from radgroupcheck union select groupname from radgroupreply order by groupname";


    const data = await this.dataSource.execute(sql)
    return data
  }




}

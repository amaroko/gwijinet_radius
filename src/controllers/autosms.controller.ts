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
import {Autosms} from '../models';
import {AutosmsRepository} from '../repositories';
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
export class AutosmsController {
  constructor(
    @repository(AutosmsRepository)
    public autosmsRepository : AutosmsRepository,
    @inject('datasources.mysql') public dataSource: MysqlDataSource,
  ) {}

  @post('/autosms')
  @response(200, {
    description: 'Autosms model instance',
    content: {'application/json': {schema: getModelSchemaRef(Autosms)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Autosms, {
            title: 'NewAutosms',
            exclude: ['id'],
          }),
        },
      },
    })
    autosms: Omit<Autosms, 'id'>,
  ): Promise<Autosms> {
    return this.autosmsRepository.create(autosms);
  }

  @get('/autosms/count')
  @response(200, {
    description: 'Autosms model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Autosms) where?: Where<Autosms>,
  ): Promise<Count> {
    return this.autosmsRepository.count(where);
  }

  @get('/autosms')
  @response(200, {
    description: 'Array of Autosms model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Autosms, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Autosms) filter?: Filter<Autosms>,
  ): Promise<Autosms[]> {
    return this.autosmsRepository.find(filter);
  }

  @patch('/autosms')
  @response(200, {
    description: 'Autosms PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Autosms, {partial: true}),
        },
      },
    })
    autosms: Autosms,
    @param.where(Autosms) where?: Where<Autosms>,
  ): Promise<Count> {
    return this.autosmsRepository.updateAll(autosms, where);
  }

  @get('/autosms/{id}')
  @response(200, {
    description: 'Autosms model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Autosms, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Autosms, {exclude: 'where'}) filter?: FilterExcludingWhere<Autosms>
  ): Promise<Autosms> {
    return this.autosmsRepository.findById(id, filter);
  }

  @patch('/autosms/{id}')
  @response(204, {
    description: 'Autosms PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Autosms, {partial: true}),
        },
      },
    })
    autosms: Autosms,
  ): Promise<void> {
    await this.autosmsRepository.updateById(id, autosms);
  }

  @put('/autosms/{id}')
  @response(204, {
    description: 'Autosms PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() autosms: Autosms,
  ): Promise<void> {
    await this.autosmsRepository.replaceById(id, autosms);
  }

  @del('/autosms/{id}')
  @response(204, {
    description: 'Autosms DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.autosmsRepository.deleteById(id);
  }


  // gets 3 days reminder
  @get('/autosms/reminder3', {
    responses: {
      '200': spec,
    },
  })
  async getreminder(
    @param.query.string('attribute') attribute: string,
  ): Promise<any> {
    var sql = "SELECT * FROM radcheck INNER JOIN userinfo ON radcheck.username = userinfo.username WHERE radcheck.attribute = 'Expiration' \n" +
      "AND str_to_date(radcheck.value, '%d %M %Y') = CURDATE() + interval 3 day";


    const data = await this.dataSource.execute(sql)
    return data
  }



  // gets 7 days reminder
  @get('/autosms/reminder7', {
    responses: {
      '200': spec,
    },
  })
  async get7daysreminder(
    @param.query.string('attribute') attribute: string,
  ): Promise<any> {
    var sql = "SELECT * FROM radcheck INNER JOIN userinfo ON radcheck.username = userinfo.username WHERE radcheck.attribute = 'Expiration' \n" +
      "AND str_to_date(radcheck.value, '%d %M %Y') = CURDATE() + interval 7 day";


    const data = await this.dataSource.execute(sql)
    return data
  }


  // gets expired today
  @get('/autosms/expiredtoday', {
    responses: {
      '200': spec,
    },
  })
  async getexpiredtoday(
    @param.query.string('attribute') attribute: string,
  ): Promise<any> {
    var sql = "SELECT * FROM radcheck INNER JOIN userinfo ON radcheck.username = userinfo.username WHERE radcheck.attribute = 'Expiration' \n" +
      "AND str_to_date(radcheck.value, '%d %M %Y') = CURDATE() + interval 0 day";


    const data = await this.dataSource.execute(sql)
    return data
  }




}

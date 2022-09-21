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
import {Smsdetails} from '../models';
import {SmsdetailsRepository} from '../repositories';
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
export class SmsdetailsController {
  constructor(
    @repository(SmsdetailsRepository)
    public smsdetailsRepository : SmsdetailsRepository,
    @inject('datasources.mysql') public dataSource: MysqlDataSource,
  ) {}

  @post('/smsdetails')
  @response(200, {
    description: 'Smsdetails model instance',
    content: {'application/json': {schema: getModelSchemaRef(Smsdetails)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Smsdetails, {
            title: 'NewSmsdetails',
            exclude: ['username'],
          }),
        },
      },
    })
    smsdetails: Omit<Smsdetails, 'username'>,
  ): Promise<Smsdetails> {
    return this.smsdetailsRepository.create(smsdetails);
  }

  @get('/smsdetails/count')
  @response(200, {
    description: 'Smsdetails model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Smsdetails) where?: Where<Smsdetails>,
  ): Promise<Count> {
    return this.smsdetailsRepository.count(where);
  }

  @get('/smsdetails')
  @response(200, {
    description: 'Array of Smsdetails model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Smsdetails, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Smsdetails) filter?: Filter<Smsdetails>,
  ): Promise<Smsdetails[]> {
    return this.smsdetailsRepository.find(filter);
  }

  @patch('/smsdetails')
  @response(200, {
    description: 'Smsdetails PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Smsdetails, {partial: true}),
        },
      },
    })
    smsdetails: Smsdetails,
    @param.where(Smsdetails) where?: Where<Smsdetails>,
  ): Promise<Count> {
    return this.smsdetailsRepository.updateAll(smsdetails, where);
  }

  @get('/smsdetails/{id}')
  @response(200, {
    description: 'Smsdetails model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Smsdetails, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Smsdetails, {exclude: 'where'}) filter?: FilterExcludingWhere<Smsdetails>
  ): Promise<Smsdetails> {
    return this.smsdetailsRepository.findById(id, filter);
  }

  @patch('/smsdetails/{id}')
  @response(204, {
    description: 'Smsdetails PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Smsdetails, {partial: true}),
        },
      },
    })
    smsdetails: Smsdetails,
  ): Promise<void> {
    await this.smsdetailsRepository.updateById(id, smsdetails);
  }

  @put('/smsdetails/{id}')
  @response(204, {
    description: 'Smsdetails PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() smsdetails: Smsdetails,
  ): Promise<void> {
    await this.smsdetailsRepository.replaceById(id, smsdetails);
  }

  @del('/smsdetails/{id}')
  @response(204, {
    description: 'Smsdetails DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.smsdetailsRepository.deleteById(id);
  }



  // gets 7 days reminder
  @get('/smsdetails/reminder7', {
    responses: {
      '200': spec,
    },
  })
  async get7reminder(
    @param.query.string('attribute') attribute: string,
  ): Promise<any> {
    var sql = "SELECT * FROM smsdetails  WHERE  str_to_date(Expiration, '%d %M %Y') = CURDATE() + interval 7 day";


    const data = await this.dataSource.execute(sql)
    return data
  }



  // gets 3 days reminder
  @get('/smsdetails/reminder3', {
    responses: {
      '200': spec,
    },
  })
  async get3reminder(
    @param.query.string('attribute') attribute: string,
  ): Promise<any> {
    var sql = "SELECT * FROM smsdetails  WHERE  str_to_date(Expiration, '%d %M %Y') = CURDATE() + interval 3 day";


    const data = await this.dataSource.execute(sql)
    return data
  }

}

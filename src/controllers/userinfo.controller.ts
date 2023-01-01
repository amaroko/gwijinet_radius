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
import {Userinfo} from '../models';
import {UserinfoRepository} from '../repositories';
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

export class UserinfoController {
  constructor(
    @repository(UserinfoRepository)
    public userinfoRepository : UserinfoRepository,
    @inject('datasources.mysql') public dataSource: MysqlDataSource,
  ) {}

  @post('/userinfo')
  @response(200, {
    description: 'Userinfo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Userinfo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Userinfo, {
            title: 'NewUserinfo',
            // exclude: ['id'],
          }),
        },
      },
    })
    userinfo: Omit<Userinfo, 'id'>,
  ): Promise<Userinfo> {
    return this.userinfoRepository.create(userinfo);
  }

  @get('/userinfo/count')
  @response(200, {
    description: 'Userinfo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Userinfo) where?: Where<Userinfo>,
  ): Promise<Count> {
    return this.userinfoRepository.count(where);
  }

  @get('/userinfo')
  @response(200, {
    description: 'Array of Userinfo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Userinfo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Userinfo) filter?: Filter<Userinfo>,
  ): Promise<Userinfo[]> {
    return this.userinfoRepository.find(filter);
  }

  @patch('/userinfo')
  @response(200, {
    description: 'Userinfo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Userinfo, {partial: true}),
        },
      },
    })
    userinfo: Userinfo,
    @param.where(Userinfo) where?: Where<Userinfo>,
  ): Promise<Count> {
    return this.userinfoRepository.updateAll(userinfo, where);
  }

  @get('/userinfo/{id}')
  @response(200, {
    description: 'Userinfo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Userinfo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Userinfo, {exclude: 'where'}) filter?: FilterExcludingWhere<Userinfo>
  ): Promise<Userinfo> {
    return this.userinfoRepository.findById(id, filter);
  }

  @patch('/userinfo/{id}')
  @response(204, {
    description: 'Userinfo PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Userinfo, {partial: true}),
        },
      },
    })
    userinfo: Userinfo,
  ): Promise<void> {
    await this.userinfoRepository.updateById(id, userinfo);
  }

  @put('/userinfo/{id}')
  @response(204, {
    description: 'Userinfo PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() userinfo: Userinfo,
  ): Promise<void> {
    await this.userinfoRepository.replaceById(id, userinfo);
  }

  @del('/userinfo/{id}')
  @response(204, {
    description: 'Userinfo DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.userinfoRepository.deleteById(id);
  }


  // gets client info for referal purposes
  @get('/userinfo/forreferral', {
    responses: {
      '200': spec,
    },
  })
  async get3reminder(
    @param.query.string('attribute') attribute: string,
  ): Promise<any> {
    var sql = "select username, firstname, lastname, mobilephone from userinfo";


    const data = await this.dataSource.execute(sql)
    return data
  }



}

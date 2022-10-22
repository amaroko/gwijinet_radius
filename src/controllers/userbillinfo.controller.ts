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
import {Userbillinfo} from '../models';
import {UserbillinfoRepository} from '../repositories';

export class UserbillinfoController {
  constructor(
    @repository(UserbillinfoRepository)
    public userbillinfoRepository : UserbillinfoRepository,
  ) {}

  @post('/userbillinfo')
  @response(200, {
    description: 'Userbillinfo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Userbillinfo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Userbillinfo, {
            title: 'NewUserbillinfo',
            
          }),
        },
      },
    })
    userbillinfo: Userbillinfo,
  ): Promise<Userbillinfo> {
    return this.userbillinfoRepository.create(userbillinfo);
  }

  @get('/userbillinfo/count')
  @response(200, {
    description: 'Userbillinfo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Userbillinfo) where?: Where<Userbillinfo>,
  ): Promise<Count> {
    return this.userbillinfoRepository.count(where);
  }

  @get('/userbillinfo')
  @response(200, {
    description: 'Array of Userbillinfo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Userbillinfo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Userbillinfo) filter?: Filter<Userbillinfo>,
  ): Promise<Userbillinfo[]> {
    return this.userbillinfoRepository.find(filter);
  }

  @patch('/userbillinfo')
  @response(200, {
    description: 'Userbillinfo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Userbillinfo, {partial: true}),
        },
      },
    })
    userbillinfo: Userbillinfo,
    @param.where(Userbillinfo) where?: Where<Userbillinfo>,
  ): Promise<Count> {
    return this.userbillinfoRepository.updateAll(userbillinfo, where);
  }

  @get('/userbillinfo/{id}')
  @response(200, {
    description: 'Userbillinfo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Userbillinfo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Userbillinfo, {exclude: 'where'}) filter?: FilterExcludingWhere<Userbillinfo>
  ): Promise<Userbillinfo> {
    return this.userbillinfoRepository.findById(id, filter);
  }

  @patch('/userbillinfo/{id}')
  @response(204, {
    description: 'Userbillinfo PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Userbillinfo, {partial: true}),
        },
      },
    })
    userbillinfo: Userbillinfo,
  ): Promise<void> {
    await this.userbillinfoRepository.updateById(id, userbillinfo);
  }

  @put('/userbillinfo/{id}')
  @response(204, {
    description: 'Userbillinfo PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() userbillinfo: Userbillinfo,
  ): Promise<void> {
    await this.userbillinfoRepository.replaceById(id, userbillinfo);
  }

  @del('/userbillinfo/{id}')
  @response(204, {
    description: 'Userbillinfo DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.userbillinfoRepository.deleteById(id);
  }
}

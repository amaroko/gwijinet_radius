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
import {Mpesatransactions} from '../models';
import {MpesatransactionsRepository} from '../repositories';

export class MpesatransactionsController {
  constructor(
    @repository(MpesatransactionsRepository)
    public mpesatransactionsRepository : MpesatransactionsRepository,
  ) {}

  @post('/retrieval')
  @response(200, {
    description: 'Mpesatransactions model instance',
    content: {'application/json': {schema: getModelSchemaRef(Mpesatransactions)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mpesatransactions, {
            title: 'NewMpesatransactions',
            exclude: ['id'],
          }),
        },
      },
    })
    mpesatransactions: Omit<Mpesatransactions, 'id'>,
  ): Promise<Mpesatransactions> {
    return this.mpesatransactionsRepository.create(mpesatransactions);
  }

  @get('/retrieval/count')
  @response(200, {
    description: 'Mpesatransactions model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Mpesatransactions) where?: Where<Mpesatransactions>,
  ): Promise<Count> {
    return this.mpesatransactionsRepository.count(where);
  }

  @get('/retrieval')
  @response(200, {
    description: 'Array of Mpesatransactions model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Mpesatransactions, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Mpesatransactions) filter?: Filter<Mpesatransactions>,
  ): Promise<Mpesatransactions[]> {
    return this.mpesatransactionsRepository.find(filter);
  }

  @patch('/retrieval')
  @response(200, {
    description: 'Mpesatransactions PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mpesatransactions, {partial: true}),
        },
      },
    })
    mpesatransactions: Mpesatransactions,
    @param.where(Mpesatransactions) where?: Where<Mpesatransactions>,
  ): Promise<Count> {
    return this.mpesatransactionsRepository.updateAll(mpesatransactions, where);
  }

  @get('/retrieval/{id}')
  @response(200, {
    description: 'Mpesatransactions model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Mpesatransactions, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Mpesatransactions, {exclude: 'where'}) filter?: FilterExcludingWhere<Mpesatransactions>
  ): Promise<Mpesatransactions> {
    return this.mpesatransactionsRepository.findById(id, filter);
  }

  @patch('/retrieval/{id}')
  @response(204, {
    description: 'Mpesatransactions PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mpesatransactions, {partial: true}),
        },
      },
    })
    mpesatransactions: Mpesatransactions,
  ): Promise<void> {
    await this.mpesatransactionsRepository.updateById(id, mpesatransactions);
  }

  @put('/retrieval/{id}')
  @response(204, {
    description: 'Mpesatransactions PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() mpesatransactions: Mpesatransactions,
  ): Promise<void> {
    await this.mpesatransactionsRepository.replaceById(id, mpesatransactions);
  }

  @del('/retrieval/{id}')
  @response(204, {
    description: 'Mpesatransactions DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.mpesatransactionsRepository.deleteById(id);
  }
}

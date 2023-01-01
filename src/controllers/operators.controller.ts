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
import {Operators} from '../models';
import {OperatorsRepository} from '../repositories';

export class OperatorsController {
  constructor(
    @repository(OperatorsRepository)
    public operatorsRepository : OperatorsRepository,
  ) {}

  @post('/operators')
  @response(200, {
    description: 'Operators model instance',
    content: {'application/json': {schema: getModelSchemaRef(Operators)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Operators, {
            title: 'NewOperators',
            // exclude: ['id'],
          }),
        },
      },
    })
    operators: Omit<Operators, 'id'>,
  ): Promise<Operators> {
    return this.operatorsRepository.create(operators);
  }

  @get('/operators/count')
  @response(200, {
    description: 'Operators model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Operators) where?: Where<Operators>,
  ): Promise<Count> {
    return this.operatorsRepository.count(where);
  }

  @get('/operators')
  @response(200, {
    description: 'Array of Operators model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Operators, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Operators) filter?: Filter<Operators>,
  ): Promise<Operators[]> {
    return this.operatorsRepository.find(filter);
  }

  @patch('/operators')
  @response(200, {
    description: 'Operators PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Operators, {partial: true}),
        },
      },
    })
    operators: Operators,
    @param.where(Operators) where?: Where<Operators>,
  ): Promise<Count> {
    return this.operatorsRepository.updateAll(operators, where);
  }

  @get('/operators/{id}')
  @response(200, {
    description: 'Operators model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Operators, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Operators, {exclude: 'where'}) filter?: FilterExcludingWhere<Operators>
  ): Promise<Operators> {
    return this.operatorsRepository.findById(id, filter);
  }

  @patch('/operators/{id}')
  @response(204, {
    description: 'Operators PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Operators, {partial: true}),
        },
      },
    })
    operators: Operators,
  ): Promise<void> {
    await this.operatorsRepository.updateById(id, operators);
  }

  @put('/operators/{id}')
  @response(204, {
    description: 'Operators PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() operators: Operators,
  ): Promise<void> {
    await this.operatorsRepository.replaceById(id, operators);
  }

  @del('/operators/{id}')
  @response(204, {
    description: 'Operators DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.operatorsRepository.deleteById(id);
  }
}

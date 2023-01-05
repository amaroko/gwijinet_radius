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
import {Expenses} from '../models';
import {ExpensesRepository} from '../repositories';
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

export class ExpensesController {
  constructor(
    @repository(ExpensesRepository)
    public expensesRepository : ExpensesRepository,
    @inject('datasources.mysql') public dataSource: MysqlDataSource,
  ) {}

  @post('/expenses')
  @response(200, {
    description: 'Expenses model instance',
    content: {'application/json': {schema: getModelSchemaRef(Expenses)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expenses, {
            title: 'NewExpenses',
            exclude: ['id'],
          }),
        },
      },
    })
    expenses: Omit<Expenses, 'id'>,
  ): Promise<Expenses> {
    return this.expensesRepository.create(expenses);
  }

  @get('/expenses/count')
  @response(200, {
    description: 'Expenses model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Expenses) where?: Where<Expenses>,
  ): Promise<Count> {
    return this.expensesRepository.count(where);
  }

  @get('/expenses')
  @response(200, {
    description: 'Array of Expenses model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Expenses, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Expenses) filter?: Filter<Expenses>,
  ): Promise<Expenses[]> {
    return this.expensesRepository.find(filter);
  }

  @patch('/expenses')
  @response(200, {
    description: 'Expenses PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expenses, {partial: true}),
        },
      },
    })
    expenses: Expenses,
    @param.where(Expenses) where?: Where<Expenses>,
  ): Promise<Count> {
    return this.expensesRepository.updateAll(expenses, where);
  }

  @get('/expenses/{id}')
  @response(200, {
    description: 'Expenses model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Expenses, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Expenses, {exclude: 'where'}) filter?: FilterExcludingWhere<Expenses>
  ): Promise<Expenses> {
    return this.expensesRepository.findById(id, filter);
  }

  @patch('/expenses/{id}')
  @response(204, {
    description: 'Expenses PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expenses, {partial: true}),
        },
      },
    })
    expenses: Expenses,
  ): Promise<void> {
    await this.expensesRepository.updateById(id, expenses);
  }

  @put('/expenses/{id}')
  @response(204, {
    description: 'Expenses PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() expenses: Expenses,
  ): Promise<void> {
    await this.expensesRepository.replaceById(id, expenses);
  }

  @del('/expenses/{id}')
  @response(204, {
    description: 'Expenses DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.expensesRepository.deleteById(id);
  }


  //clientactionplan
  @get('/expenses/today', {
    responses: {
      '200': spec,
    },
  })
  async clientactionplan(
  ): Promise<any> {
    var sql1 = "SELECT * FROM expenses WHERE cast(datecreated as Date) = cast(Date(Now()) as Date)"

    const data = await this.dataSource.execute(sql1)
    return data
  }


}

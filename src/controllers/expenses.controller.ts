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




  //get total expenses ever
  @get('/expenses/totalever', {
    responses: {
      '200': spec,
    },
  })
  async totalexpenses(
  ): Promise<any> {
    var sql = "select sum(total) as totalexpenditure from expenses"

    const data = await this.dataSource.execute(sql)
    return data
  }


  //get total expenses today
  @get('/expenses/totaltoday', {
    responses: {
      '200': spec,
    },
  })
  async totalexpensestoday(
  ): Promise<any> {
    var sql = "SELECT sum(total) as totalexpendituretoday from expenses WHERE cast(datecreated as Date) = cast(Date(Now()) as Date)"

    const data = await this.dataSource.execute(sql)
    return data
  }



  //get total expenses monthly
  @get('/expenses/totalmonthly', {
    responses: {
      '200': spec,
    },
  })
  async totalexpensesmonthly(
  ): Promise<any> {
    var sql = "select sum(total) as totalexpmonthly from expenses where MONTH(datecreated)=MONTH(now())and YEAR(datecreated)=YEAR(now())"

    const data = await this.dataSource.execute(sql)
    return data
  }



  //get expenditure in categories static dynamic
  @get('/expenses/totalincategories', {
    responses: {
      '200': spec,
    },
  })
  async totalincategories(
  ): Promise<any> {
    var sql = "select * from expenses left join categories on expenses.category = categories.categoryname"

    const data = await this.dataSource.execute(sql)
    return data
  }

  //get expenditure in categories static dynamic
  @get('/expenses/totalincategoriesstatic', {
    responses: {
      '200': spec,
    },
  })
  async totalincategoriesstatic(
  ): Promise<any> {
    var sql = "select * from expenses left join categories on expenses.category = categories.categoryname where typeofaccounting like '%Static%'"

    const data = await this.dataSource.execute(sql)
    return data
  }

  //get expenditure in categories static dynamic
  @get('/expenses/totalincategoriesdynamic', {
    responses: {
      '200': spec,
    },
  })
  async totalincategoriesdynamic(
  ): Promise<any> {
    var sql = "select * from expenses left join categories on expenses.category = categories.categoryname where typeofaccounting like '%Dynamic%'"

    const data = await this.dataSource.execute(sql)
    return data

  }



  //get expenditure static today list
  @get('/expenses/totalincategoriesstatictoday', {
    responses: {
      '200': spec,
    },
  })
  async totalincategoriesstatictoday(
  ): Promise<any> {
    var sql = "select * from expenses  left join categories on expenses.category = categories.categoryname where typeofaccounting like '%Static%' and cast(expenses.datecreated as Date) = cast(Date(Now()) as Date)"

    const data = await this.dataSource.execute(sql)
    return data

  }


  //get expenditure dynamic today list
  @get('/expenses/totalincategoriesdynamictoday', {
    responses: {
      '200': spec,
    },
  })
  async totalincategoriesdynamictoday(
  ): Promise<any> {
    var sql = "select * from expenses  left join categories on expenses.category = categories.categoryname where typeofaccounting like '%Dynamic%' and cast(expenses.datecreated as Date) = cast(Date(Now()) as Date)"

    const data = await this.dataSource.execute(sql)
    return data

  }



  @post('/expenses/gridviewall', {
    responses: {
      '200': spec,
    },
  })
  async gridviewall
  (@requestBody() body: object): Promise<any> {
    const result = await this.dataSource.execute(this.buildSql(body))
    const rowCount = this.getRowCount(body, result);
    const resultsForPage = this.cutResultsToPageSize(body, result);
    return {
      lastRow: rowCount,
      rows: resultsForPage
    };
  }

  buildSql(request: any) {
    const selectSql = this.createSelectSql(request);
    const fromSql = ' from radius.expenses ';
    const whereSql = this.createWhereSql(request);
    const limitSql = this.createLimitSql(request);

    const orderBySql = this.createOrderBySql(request);
    const groupBySql = this.createGroupBySql(request);

    const SQL = selectSql + fromSql + whereSql + groupBySql + orderBySql + limitSql;

    console.log(SQL);

    return SQL;
  }

  createSelectSql(request: any) {
    //console.log(request)
    const rowGroupCols = request.rowGroupCols;
    const valueCols = request.valueCols;
    const groupKeys = request.groupKeys;

    if (this.isDoingGrouping(rowGroupCols, groupKeys)) {
      const colsToSelect = [];

      const rowGroupCol = rowGroupCols[groupKeys.length];
      colsToSelect.push(rowGroupCol.field);

      valueCols.forEach(function (valueCol: any) {
        colsToSelect.push(valueCol.aggFunc + '(' + valueCol.field + ') as ' + valueCol.field);
      });

      return ' select ' + colsToSelect.join(', ');
    }

    return ' select *';
  }

  createFilterSql(key: any, item: any) {
    switch (item.filterType) {
      case 'text':
        return this.createTextFilterSql(key, item);
      case 'number':
        return this.createNumberFilterSql(key, item);
      default:
        console.log('unkonwn filter type: ' + item.filterType);
    }
  }

  createNumberFilterSql(key: any, item: any) {
    switch (item.type) {
      case 'equals':
        return key + ' = ' + item.filter;
      case 'notEqual':
        return key + ' != ' + item.filter;
      case 'greaterThan':
        return key + ' > ' + item.filter;
      case 'greaterThanOrEqual':
        return key + ' >= ' + item.filter;
      case 'lessThan':
        return key + ' < ' + item.filter;
      case 'lessThanOrEqual':
        return key + ' <= ' + item.filter;
      case 'inRange':
        return '(' + key + ' >= ' + item.filter + ' and ' + key + ' <= ' + item.filterTo + ')';
      default:
        console.log('unknown number filter type: ' + item.type);
        return 'true';
    }
  }

  createTextFilterSql(key: any, item: any) {
    switch (item.type) {
      case 'equals':
        return 'upper(' + key + ') = \'' + (item.filter).toUpperCase() + '\'';
      case 'notEqual':
        return 'upper(' + key + ') != \'' + (item.filter).toUpperCase() + '\'';
      case 'contains':
        return 'upper(' + key + ') like \'%' + (item.filter).toUpperCase() + '%\'';
      case 'notContains':
        return 'upper(' + key + ') not like \'%' + (item.filter).toUpperCase() + '%\'';
      case 'startsWith':
        return 'upper(' + key + ') like \'' + (item.filter).toUpperCase() + '%\'';
      case 'endsWith':
        return 'upper(' + key + ') like \'%' + (item.filter).toUpperCase() + '\'';
      default:
        console.log('unknown text filter type: ' + item.type);
        return 'true';
    }
  }

  createWhereSql(request: any) {
    const rowGroupCols = request.rowGroupCols;
    const groupKeys = request.groupKeys;
    const filterModel = request.filterModel;

    // console.log(filterModel)

    const that = this;
    const whereParts: any = [];

    if (groupKeys.length > 0) {
      groupKeys.forEach(function (key: any, index: any) {
        const colName = rowGroupCols[index].field;
        whereParts.push(colName + '= \'' + key + '\'')
        //   whereParts.push(colName +  '= "' + key + '"')
      });
    }

    if (filterModel) {
      const keySet = Object.keys(filterModel);
      keySet.forEach(function (key) {
        const item = filterModel[key];
        whereParts.push(that.createFilterSql(key, item));
      });
    }

    if (whereParts.length > 0) {
      return ' where ' + whereParts.join(' and ');
    } else {
      return '';
    }
  }

  createGroupBySql(request: any) {
    const rowGroupCols = request.rowGroupCols;
    const groupKeys = request.groupKeys;

    if (this.isDoingGrouping(rowGroupCols, groupKeys)) {
      const colsToGroupBy = [];

      const rowGroupCol = rowGroupCols[groupKeys.length];
      colsToGroupBy.push(rowGroupCol.field);

      return ' group by ' + colsToGroupBy.join(', ');
    } else {
      // select all columns
      return '';
    }
  }

  createOrderBySql(request: any) {
    const rowGroupCols = request.rowGroupCols;
    const groupKeys = request.groupKeys;
    const sortModel = request.sortModel;

    const grouping = this.isDoingGrouping(rowGroupCols, groupKeys);

    const sortParts: any = [];
    if (sortModel) {

      const groupColIds =
        rowGroupCols.map((groupCol: {id: any;}) => groupCol.id)
          .slice(0, groupKeys.length + 1);

      sortModel.forEach(function (item: any) {
        if (grouping && groupColIds.indexOf(item.colId) < 0) {
          // ignore
        } else {
          sortParts.push(item.colId + ' ' + item.sort);
        }
      });
    }

    if (sortParts.length > 0) {
      return ' order by ' + sortParts.join(', ');
    } else {
      return '';
    }
  }

  isDoingGrouping(rowGroupCols: any, groupKeys: any) {
    // we are not doing grouping if at the lowest level. we are at the lowest level
    // if we are grouping by more columns than we have keys for (that means the user
    // has not expanded a lowest level group, OR we are not grouping at all).
    return rowGroupCols.length > groupKeys.length;
  }

  createLimitSql(request: any) {
    const startRow = request.startRow;
    const endRow = request.endRow;
    const pageSize = endRow - startRow;

    return ' OFFSET ' + startRow + ' ROWS FETCH NEXT ' + (pageSize + 1) + ' ROWS only'
    // return ' limit ' + (pageSize + 1) + ' offset ' + startRow;
  }


  cutResultsToPageSize(request: any, results: any) {
    const pageSize = request.endRow - request.startRow;
    if (results && results.length > pageSize) {
      return results.splice(0, pageSize);
    } else {
      return results;
    }
  }

  getRowCount(request: any, results: any) {
    if (results === null || results === undefined || results.length === 0) {
      return null;
    }
    const currentLastRow = request.startRow + results.length;
    return currentLastRow <= request.endRow ? currentLastRow : -1;
  }



  //get daily static expenditure count
  @get('/expenses/dailystaticcount', {
    responses: {
      '200': spec,
    },
  })
  async todaycountstatic(
  ): Promise<any> {
    var sql = "select sum(total) as dailyexpenditure  from expenses  left join categories on expenses.category = categories.categoryname where typeofaccounting like '%Static%' and cast(expenses.datecreated as Date) = cast(Date(Now()) as Date)"

    const data = await this.dataSource.execute(sql)
    return data

  }


  //get daily static expenditure count
  @get('/expenses/dailydynamiccount', {
    responses: {
      '200': spec,
    },
  })
  async todaycountdynamic(
  ): Promise<any> {
    var sql = "select sum(total) as dailyexpenditure  from expenses  left join categories on expenses.category = categories.categoryname where typeofaccounting like '%Dynamic%' and cast(expenses.datecreated as Date) = cast(Date(Now()) as Date)"

    const data = await this.dataSource.execute(sql)
    return data

  }



}

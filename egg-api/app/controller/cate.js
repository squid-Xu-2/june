const { Controller } = require('egg');


class CateController extends Controller {
  async create() {
    const { ctx } = this;
    const cate = ctx.request.body;

    const result = await this.app.mysql.insert('cate', cate);

    if (result.affectedRows === 1) {
      ctx.body = {
        code: 200,
        msg: '',
        data: result,
      };
    } else {
      ctx.body = {
        code: 400,
        msg: '',
        data: {},
      };
    }
  }
  async list() {
    const { ctx } = this;
    // 获取分页参数，默认值为 1
    const page = ctx.query.page ? parseInt(ctx.query.page, 10) : 1;
    // 默认每页显示 10 条数据
    const pageSize = ctx.query.pageSize ? parseInt(ctx.query.pageSize, 10) : 10;

    const results = await this.app.mysql.select('cate', {
      where: ctx.query.title ? { title: ctx.query.title } : {},
      orders: [[ 'sort', 'desc' ]], // 排序方式
      offset: (page - 1) * pageSize, // 数据偏移量
      limit: pageSize, // 返回数据量
    });
    const total = await this.app.mysql.count('cate');
    ctx.body = {
      code: 200,
      msg: '',
      data: {
        list: results,
        total,
      },
    };
  }
}


module.exports = CateController;

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
}


module.exports = CateController;

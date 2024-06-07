const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await this.app.mysql.insert('cate', { name: 'CSS' });
    ctx.body = result;
  }
}

module.exports = HomeController;

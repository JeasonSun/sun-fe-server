'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async getProject() {
    const { ctx, service } = this;
    const list = await service.project.getProject({});
    ctx.body = { data: { list } };
  }
}

module.exports = ProjectController;

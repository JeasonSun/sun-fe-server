'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async getProject() {
    const { ctx, service } = this;
    const res = await service.project.getProject({});
    ctx.body = { res };
  }
}

module.exports = ProjectController;

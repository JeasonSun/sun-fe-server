'use strict';

const Service = require('egg').Service;

class ProjectService extends Service {
  async getProject(payload) {
    const {
      ctx,
    } = this;
    return ctx.model.Project.find(payload);
  }
}

module.exports = ProjectService;

'use strict';

const Service = require('egg').Service;

class ProjectService extends Service {
  async getProject(payload) {
    const {
      ctx,
    } = this;
    console.log('service getProject', ctx.model);
    return ctx.model.Project.find(payload);
  }
}

module.exports = ProjectService;

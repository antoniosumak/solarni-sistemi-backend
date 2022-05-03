const projectService = require('../services/project');

class ProjectController {
  async createProject(req, res) {
    try {
      const id = await projectService.createProject(req.body);
      res.status(201).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async updateProject(req, res) {
    try {
      const id = await projectService.updateProject(req.params.id, req.body);
      res.status(200).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getAllProjects(req, res) {
    try {
      const projects = await projectService.getAllProjects();
      res.status(200).json(projects);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getAllProjectsByStatus(req, res) {
    try {
      const projects = await projectService.getAllProjectsByStatus(
        req.params.statusId
      );
      res.status(200).json(projects);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getProject(req, res) {
    try {
      const project = await projectService.getProject(req.params.id);
      res.status(200).json(project);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async deleteProject(req, res) {
    try {
      const id = await projectService.deleteProject(req.params.id);
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

module.exports = new ProjectController();

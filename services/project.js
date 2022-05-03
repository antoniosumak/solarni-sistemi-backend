const projectDao = require('../dao/project');

class ProjectService {
  createProject(projectDto) {
    const {
      name,
      address,
      comment,
      power_plant_id,
      particle_number,
      cadastral_municipality,
      client_id,
      status_id,
      products,
      connection_power,
    } = projectDto;

    return projectDao.createProject(
      name,
      address,
      comment,
      power_plant_id,
      particle_number,
      cadastral_municipality,
      client_id,
      status_id,
      products,
      connection_power
    );
  }

  updateProject(projectId, projectDto) {
    const {
      id,
      name,
      address,
      comment,
      power_plant_id,
      particle_number,
      cadastral_municipality,
      client_id,
      status_id,
      connection_power,
    } = projectDto;

    return projectDao.updateProject(
      projectId,
      name,
      address,
      comment,
      power_plant_id,
      particle_number,
      cadastral_municipality,
      client_id,
      status_id,
      connection_power
    );
  }

  getAllProjects() {
    return projectDao.getAllProjects();
  }

  getAllProjectsByStatus(statusId) {
    return projectDao.getAllProjectsByStatus(statusId);
  }

  getProject(id) {
    return projectDao.getProject(id);
  }

  deleteProject(id) {
    return projectDao.deleteProject(id);
  }
}

module.exports = new ProjectService();

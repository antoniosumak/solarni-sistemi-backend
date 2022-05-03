const db = require('../db/db');

class ProjectDAO {
  async createProject(
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
  ) {
    connection_power = Number(connection_power);
    const [projectId] = await db('projects').insert(
      {
        name,
        address,
        comment,
        power_plant_id,
        particle_number,
        cadastral_municipality,
        client_id,
        status_id,
        connection_power,
      },
      'id'
    );

    // const productsForProject = products.map((product) => ({
    //   project_id: projectId,
    //   product_id: product.id,
    //   quantity: product.quantity,
    // }));

    // await db('products_projects').insert(productsForProject);

    return projectId;
  }

  async updateProject(
    id,
    name,
    address,
    comment,
    power_plant_id,
    particle_number,
    cadastral_municipality,
    client_id,
    status_id,
    connection_power
  ) {
    const returningId = await db('projects').where({ id: id }).update(
      {
        name,
        address,
        comment,
        power_plant_id,
        particle_number,
        cadastral_municipality,
        client_id,
        status_id,
        connection_power,
      },
      [
        'name',
        'address',
        'comment',
        'power_plant_id',
        'particle_number',
        'cadastral_municipality',
        'client_id',
        'status_id',
        'connection_power',
      ]
    );

    return returningId;
  }

  async getAllProjects() {
    const response = await db('projects')
      .select('*')
      .where({ isDeleted: null });

    const list = await response.map(async (project) => {
      const [client] = await db('clients').where({
        id: project.client_id,
        isDeleted: null,
      });

      const [status] = await db('statuses').where({
        id: project.status_id,
        isDeleted: null,
      });

      const [power_plant] = await db('power_plants').where({
        id: project.power_plant_id,
        isDeleted: null,
      });

      delete project.client_id;

      delete project.power_plant_id;

      project.client = client;
      project.status = status;
      project.power_plant = power_plant;

      return project;
    });

    const resolved = await Promise.all(list);

    return resolved;
  }

  async getAllProjectsByStatus(status_id) {
    const response = await db('projects')
      .select('*')
      .where({ isDeleted: null, status_id: status_id });

    const list = await response.map(async (project) => {
      const [client] = await db('clients').where({
        id: project.client_id,
        isDeleted: null,
      });

      const [status] = await db('statuses').where({
        id: project.status_id,
        isDeleted: null,
      });

      const [power_plant] = await db('power_plants').where({
        id: project.power_plant_id,
        isDeleted: null,
      });

      delete project.client_id;

      delete project.power_plant_id;

      project.client = client;
      project.status = status;
      project.power_plant = power_plant;

      return project;
    });

    const resolved = await Promise.all(list);

    return resolved;
  }

  async getProject(id) {
    const [response] = await db('projects').where({ id: id, isDeleted: null });

    // const [client] = await db('clients').where({
    //   id: response.client_id,
    //   isDeleted: null,
    // });

    // const [status] = await db('statuses').where({
    //   id: response.status_id,
    //   isDeleted: null,
    // });

    // const [power_plant] = await db('power_plants').where({
    //   id: response.power_plant_id,
    //   isDeleted: null,
    // });

    // delete response.client_id;
    // delete response.status_id;
    // delete response.power_plant_id;

    // response.client = client;
    // response.status = status;
    // response.power_plant = power_plant;

    return response;
  }

  async deleteProject(id) {
    const isDeleted = true;

    const returningId = await db('projects').where('id', id).update(
      {
        isDeleted,
      },
      ['isDeleted']
    );

    return returningId;
  }
}

module.exports = new ProjectDAO();

const db = require('../db/db');

class DocumentDAO {
  async createDocument(name, document, project_id) {
    const [id] = await db('documents').insert({
      name,
      document,
      project_id,
    });

    return id;
  }

  async getAllProjectDocuments(id) {
    const response = await db('documents').select('name').where({
      project_id: id,
      isDeleted: null,
    });

    return response;
  }

  async downloadProjectFile(id) {
    const response = await db('documents').select('document').where({
      id: id,
      isDeleted: null,
    });

    return response;
  }

  async deleteDocument(id) {
    const isDeleted = true;

    const returningId = await db('documents').where('id', id).update(
      {
        isDeleted,
      },
      ['isDeleted']
    );

    return returningId;
  }
}

module.exports = new DocumentDAO();

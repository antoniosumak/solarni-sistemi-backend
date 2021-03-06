const documentDao = require('../dao/document');

class DocumentService {
  createDocument(project_id, file) {
    const { name, data } = file;

    return documentDao.createDocument(name, data, project_id);
  }

  async getAllProjectDocuments(id) {
    const response = await documentDao.getAllProjectDocuments(id);

    // response.forEach(async (document, index) => {
    //   const base64Document = document.document;
    //   response[index].document = base64Document.toString('base64');
    // });

    return response;
  }

  async downloadProjectFile(id) {
    const [response] = await documentDao.downloadProjectFile(id);
    const base64Document = response.document;
    response.document = base64Document.toString('base64');

    console.log('RESPONSE', response);
    return response;
  }

  deleteDocument(id) {
    return documentDao.deleteDocument(id);
  }
}

module.exports = new DocumentService();

const documentService = require('../services/document');

class DocumentController {
  async createDocument(req, res) {
    try {
      const id = documentService.createDocument(
        req.params.id,
        req.files.document
      );
      res.status(201).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getAllProjectDocuments(req, res) {
    try {
      const documents = await documentService.getAllProjectDocuments(
        req.params.id
      );

      res.status(200).send(documents);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async deleteProject(req, res) {
    try {
      const id = await documentService.deleteDocument(req.params.id);
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

module.exports = new DocumentController();

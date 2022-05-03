const statusService = require('../services/status');

class StatusController {
  async createStatus(req, res) {
    try {
      const id = await statusService.createStatus(req.body);
      res.status(200).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getAllStatuses(req, res) {
    try {
      const statuses = await statusService.getAllStatuses();
      res.status(200).json(statuses);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async deleteStatus(req, res) {
    try {
      const id = statusService.deleteStatus(req.params.id);
      res.json(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

module.exports = new StatusController();

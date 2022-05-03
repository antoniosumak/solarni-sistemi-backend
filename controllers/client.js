const clientService = require('../services/client');

class ClientController {
  async createClient(req, res) {
    try {
      const id = await clientService.createClient(req.body);
      res.status(201).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getAllClients(req, res) {
    try {
      const clients = await clientService.getAllClients();
      res.status(200).json(clients);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getClientById(req, res) {
    try {
      const client = await clientService.getClientById(req.params.id);
      res.status(200).json(client);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async updateClient(req, res) {
    try {
      const id = await clientService.updateClient(req.body);
      res.status(200).json(id);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async deleteClient(req, res) {
    try {
      const id = await clientService.deleteClient(req.params.id);
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

module.exports = new ClientController();

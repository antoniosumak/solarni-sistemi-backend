const clientDAO = require('../dao/client');

class ClientService {
  createClient(clientDto) {
    const {
      name,
      surname,
      oib,
      email,
      phone,
      county,
      post_code,
      address,
      billing_location_number,
    } = clientDto;
    return clientDAO.createClient(
      name,
      surname,
      oib,
      email,
      phone,
      county,
      post_code,
      address,
      billing_location_number
    );
  }

  getAllClients() {
    return clientDAO.getAllClients();
  }

  getClientById(id) {
    return clientDAO.getClientById(id);
  }

  updateClient(clientDto) {
    const {
      id,
      name,
      surname,
      oib,
      email,
      phone,
      county,
      post_code,
      address,
      billing_location_number,
    } = clientDto;

    return clientDAO.updateClient(
      id,
      name,
      surname,
      oib,
      email,
      phone,
      county,
      post_code,
      address,
      billing_location_number
    );
  }

  deleteClient(id) {
    return clientDAO.deleteClient(id);
  }
}

module.exports = new ClientService();

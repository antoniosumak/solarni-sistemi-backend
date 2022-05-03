const statusDAO = require('../dao/status');

class StatusService {
  createStatus(statusDto) {
    const { name } = statusDto;

    return statusDAO.createStatus(name);
  }

  getAllStatuses() {
    return statusDAO.getAllStatuses();
  }

  deleteStatus(id) {
    return statusDAO.deleteStatus(id);
  }
}

module.exports = new StatusService();

const db = require('../db/db');

class ClientDAO {
  async createClient(
    name,
    surname,
    oib,
    email,
    phone,
    county,
    post_code,
    address,
    billing_location_number
  ) {
    const [id] = await db('clients').insert({
      name,
      surname,
      oib,
      email,
      phone,
      county,
      post_code,
      address,
      billing_location_number,
    });

    return id;
  }

  async getAllClients() {
    const response = await db('clients').select('*').where({ isDeleted: null });

    return response;
  }

  async getClientById(id) {
    const [response] = await db('clients').where({ id: id, isDeleted: null });

    return response;
  }

  async updateClient(
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
  ) {
    // updated_at = new Date().toISOString();

    const returningId = await db('clients').where({ id: id }).update(
      {
        name,
        surname,
        oib,
        email,
        phone,
        county,
        post_code,
        address,
        billing_location_number,
      },
      [
        'id',
        'name',
        'surname',
        'oib',
        'email',
        'phone',
        'county',
        'post_code',
        'address',
        'billing_location_number',
      ]
    );

    return returningId;
  }

  async deleteClient(id) {
    const isDeleted = true;

    const returningId = await db('clients').where('id', id).update(
      {
        isDeleted,
      },
      ['isDeleted']
    );

    return returningId;
  }
}

module.exports = new ClientDAO();

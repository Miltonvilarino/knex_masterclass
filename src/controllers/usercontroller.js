const knex = require('../../src/database');

module.exports = {
  async index(req, res) {
      const response = await knex('users')

      return res.json(response)
  }
}
const Sequelize = require('sequelize')
const db = require('../db')

const Advertisement = db.define(
  'advertisement',
  {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    picture: {
      type: Sequelize.STRING,
      validate: {
        isUrl: true
      }
    },
    price: Sequelize.INTEGER,
    email_address: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    phone_number: {
      type: Sequelize.STRING,
      validate: {
        isNumeric: true
      }
    }
  },
  { timestamps: false }
)

module.exports = Advertisement
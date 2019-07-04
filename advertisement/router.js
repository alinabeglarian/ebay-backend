const { Router } = require('express')
const Advertisement = require('./model')

const router = new Router()

router.get(
  '/advertisements'
, (req, res, next) => Advertisement
  .findAll()
  .then(advertisements => res
    .json(advertisements))
  .catch(error => next(error))
)

router.get(
  '/advertisements/:id',
  (req, res, next) => {
   
  const id = req.params.id

  Advertisement
    .findByPk(id)
    .then(advertisement => {
      if (advertisement) {
        res.json(advertisement)
      } else {
        res.status(404).json({message: 'Advertisement not found.'})
      }
    })
    .catch(error => next(error))
  }
)

router.post(
  '/advertisements',
  (req, res, next) => Advertisement
    .create(req.body)
    .then(advertisement => res.status(201).json(advertisement))
    .catch(error => next(error))
)

module.exports = router
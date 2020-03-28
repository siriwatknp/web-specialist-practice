import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200).send({
    id: 1,
    name: "Ground Jamaican Allspice Berries",
    sizes: [
      { type: "jar", amount: 2.2, unit: "OZ.", price: 6.49 },
      { type: "bag", amount: 4, unit: "OZ.", price: 8.49 },
      { type: "flatpack", amount: 0.5, unit: "cup", price: 5.99 },
    ]
  })
});

module.exports = router;

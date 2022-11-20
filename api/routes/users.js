var express = require('express');
var router = express.Router();

const users = [
  { id: 1, name: 'Matt', birthdate: '1980-04-14' },
  { id: 2, name: 'Angie', birthdate: '1978-04-19' },
  { id: 3, name: 'Dylan', birthdate: '2008-06-24' },
  { id: 4, name: 'Maia', birthdate: '2009-09-13' },
  { id: 5, name: 'Autumn', birthdate: '2020-01-12' },
  { id: 6, name: 'Baxter', birthdate: '2021-12-14' },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(JSON.stringify(users));
});

router.get('/:id', function (req, res, next) {
  const user = users.find((u) => JSON.stringify(u.id) === req.params.id);
  console.log(user);
  res.send(user);
});

router.put('/', function (req, res, next) {
  console.log(req);
});

module.exports = router;

var promise = require('bluebird');

var options = {
  // initialization options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/puppies';
var db = pgp(connectionString);
// let {name, breed, age, sex, id} = req.body


console.log('blah')

const checkBreed = function(breed) {
  return db.one('select count(breed_name) from breeds where breed_name = $1', [breed])
}
checkBreed('Mutt')
  .then(breedCount => {
    return breedCount
  })
  .catch(e => console.error(e))

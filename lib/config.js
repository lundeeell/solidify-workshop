const nconf = require('nconf').env({
  separator: '__',
  lowerCase: true
})

nconf.defaults({
  port: 3000,
  redis: {
    host: 'localhost'
  }
})

module.exports = {
  port: nconf.get('port'),
  redis: nconf.get('redis')
}
'use strict'

const config = require('./config.js')
const store = require('./store.js')

const addLocation = (location, note, contact) => {
  return $.ajax({
    url: config.apiUrl + '/destinations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'destination': {
        'location': `${location}`,
        'note': `${note}`,
        'contact': `${contact}`
      }
    },
    dataType: 'json'
  })
}

const indexLocations = () => {
  return $.ajax({
    url: config.apiUrl + '/destinations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateDestination = (data) => {
  return $.ajax({
    url: config.apiUrl + '/destinations/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'destination': {
        'location': `${data.location}`,
        'note': `${data.note}`,
        'contact': `${data.contact}`
      }
    }
  })
}

module.exports = {
  addLocation,
  indexLocations,
  updateDestination
}

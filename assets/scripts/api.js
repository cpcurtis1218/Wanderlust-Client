'use strict'

const config = require('./config.js')
const store = require('./store.js')

const addLocation = (data) => {
  return $.ajax({
    url: config.apiUrl + '/destinations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'destination': {
        'location': `${data.location}`,
        'note': `${data.note}`,
        'contact': `${data.contact}`
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

const deleteDestination = data => {
  return $.ajax({
    url: config.apiUrl + '/destinations/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addLocation,
  indexLocations,
  updateDestination,
  deleteDestination
}

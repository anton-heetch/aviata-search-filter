import FlightsRepository from './FlightsRepository.js'

const repositories = {
  flights: FlightsRepository,
}

export default {
  get: (name) => repositories[name],
}

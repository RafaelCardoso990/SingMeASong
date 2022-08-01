import testsRepository from '../repositories/testsRepository.js'

async function reset () {
  await testsRepository.reset()
};

async function seed () {
  await testsRepository.seed()
};

const testsService = {
  reset,
  seed
}

export default testsService
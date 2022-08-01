import { prisma } from '../database.js'
import recommendationsFactory from '../../tests/integration/factory/recommendationFactory.js'

async function reset () {
  await prisma.$executeRaw`
        ALTER SEQUENCE recommendations_id_seq RESTART WITH 1
    `
  await prisma.$executeRaw`
        TRUNCATE TABLE recommendations
    `
};

async function seed () {
  await prisma.recommendation.create({ data: recommendationsFactory.createRecommendation() })
};

const testsRepository = {
  reset,
  seed
}

export default testsRepository
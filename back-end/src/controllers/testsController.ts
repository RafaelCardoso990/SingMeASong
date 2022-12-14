

import { Request, Response } from 'express'

import testsService from '../services/testsService.js'

async function reset (req: Request, res: Response) {
  await testsService.reset()

  res.sendStatus(200)
};

async function seed (req: Request, res: Response) {
  await testsService.seed()

  res.sendStatus(200)
};

const testsController = {
  reset,
  seed
}

export default testsController
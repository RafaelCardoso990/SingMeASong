
import { Router } from 'express'

import testsController from '../controllers/testsController.js'

const testsRouter = Router()

if (process.env.NODE_ENV === 'test') {
  testsRouter.delete('/reset', testsController.reset)
  testsRouter.post('/seed', testsController.seed)
};

export default testsRouter
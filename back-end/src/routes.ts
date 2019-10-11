import Router from 'koa-router'
import conf from './config'
import { SCGController } from './controllers'


const router = new Router({ prefix: `/${conf.apiPrefix}` })
const controller = new SCGController()

router.get('/restaurants-in-bangsue', controller.restaurantsInBangsue)

export default router

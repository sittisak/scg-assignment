import Koa from 'koa'
import cors from '@koa/cors'
import koaBody from 'koa-body'
import helmet from 'koa-helmet'
import rootRouter from './routes'
import logger from './utils/logging'


const app = new Koa()
app.use(helmet())
app.use(cors())
app.use(logger())
app.use(koaBody())
app.use(rootRouter.routes())
app.use(rootRouter.allowedMethods())

export default app

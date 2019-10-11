
export interface IConfig {
  port: number
  apiPrefix: string
  debug: boolean
}

const config: IConfig = {
  port: +process.env.PORT || 3000,
  apiPrefix: 'api',
  debug: process.env.NODE_ENV !== 'production',
}

export default config

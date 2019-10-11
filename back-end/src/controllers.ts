import Koa from 'koa'
import axios from 'axios'


export class SCGController {

  public async restaurantsInBangsue (ctx: Koa.Context, next: () => Promise<any>) {
    const res = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
      params: {
        location: '13.8234866,100.5081204',
        radius: 4000,
        types: 'restaurant',
        key: 'AIzaSyDMzwaToh64tSpOsEXWtaRdNLPA925_GyA',
      }
    })
    ctx.body = res.data.results
    return next()
  }
}

import request from 'superagent'
import cheerio from 'react-native-cheerio'
import { from } from 'rxjs'
import { map } from 'rxjs/operators'

export default class HLTBService {
  static search(text) {
    const data = {
      queryString: text,
      t: 'games',
      sorthead: 'popular',
      sortd: 'Normal Order',
      plat: '',
      length_type: 'main',
      length_min: '',
      length_max: '',
      detail: '',
    }

    return from(
      request
        .post('https://howlongtobeat.com/search_main.php')
        .query({ page: 1 })
        .type('form')
        .send(data)
    ).pipe(
      map(response => response.text),
      map(html => {
        const $ = cheerio.load(html)

        return $('li').map((_, ele) => {
          const game = {}
          const img_link = $(ele)
            .find('div.search_list_image')
            .find('a')
          game['title'] = img_link.attr('title')
          game['image'] = img_link.find('img').attr('src')
          let tempCategory
          let details = $(ele)
            .find('div.search_list_details_block')
            .children()
          if (details.length === 1) {
            details = details.children()
          }
          details.each((index, ele) => {
            if (index % 2 === 0) tempCategory = $(ele).text()
            else game[tempCategory] = $(ele).text()
          })
          return game
        })
      })
    )
  }
}

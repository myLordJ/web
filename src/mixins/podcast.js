import RectangleAd from 'components/ad/RectangleAd'
import SliderAd from 'components/ad/SliderAd'
import BannerApp from 'components/shared/BannerApp'
import BannerWs from 'components/shared/BannerWs'
import Slider from 'components/shared/Slider'

import podcastService from 'services/podcast'
import pageService from 'services/page'

const podcastMixin = {
  components: { Slider, BannerApp, BannerWs, RectangleAd, SliderAd },

  data () {
    return {
      podcast: { show: {}, type: {} },
      suggestions: [],
      adPlaces: {
        podcast1: { ads: [] },
        podcast2: { ads: [] },
        podcast3: { ads: [] }
      }
    }
  },

  created () {
    this.getPodcast()
  },

  watch: {
    $route: 'getPodcast'
  },

  methods: {
    getPodcast() {
      podcastService.getById(this.$route.params.id)
        .then(p => {
          p.show = p.show || {}
          this.podcast = p

          podcastService.getByType(p.type.key, { $limit: 6, state: 'published', $sort: '-publishedDate', _id: { $ne: p.id } })
            .then(res => {
              this.suggestions = res.map(p => ({ id: p.id, caption: p.title, image: p.image1, router: `podcast-${p.contentType || 'text'}` }))
            })
        })

      pageService.getByKey('podcast')
        .then(res => {
          this.adPlaces.podcast1 = res.adPlaces.find(a => a.key === 'podcast-1') || {}
          this.adPlaces.podcast2 = res.adPlaces.find(a => a.key === 'podcast-2') || {}
          this.adPlaces.podcast3 = res.adPlaces.find(a => a.key === 'podcast-3') || {}
        })
    }
  }
}

export default podcastMixin

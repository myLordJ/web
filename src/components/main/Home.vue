<template lang="pug">
  main.content(v-show="true")

    section.content__section.box.box--container
      youtube
      big-slider(:items="adPlaces.home1.ads", v-show="adPlaces.home1.ads && adPlaces.home1.ads.length")

    section.content__section.box.box--container

      .box__cell.box__cell--one-quarter.is-unguttered(v-if="podcastPlaces.home1.podcasts && podcastPlaces.home1.podcasts.length")
        .box__info.box__info--left
            router-link.box__button.button.button--light.button--rounded(:to="{ name: `podcast-${podcastPlaces.home1.podcasts[0].contentType}`, params: { id: podcastPlaces.home1.podcasts[0]._id } }")
              .fa.fa-play
        .box__image
          h5.box__headline.box__headline--bottom
            strong.highlight.highlight--medium {{ podcastPlaces.home1.podcasts[0].title }}
          img(
            :src="podcastPlaces.home1.podcasts[0].image1.url",
            :alt="podcastPlaces.home1.podcasts[0].title"
          )

      .box__cell.box__cell--one-quarter.is-unguttered(v-if="podcastPlaces.home2.podcasts && podcastPlaces.home2.podcasts.length")
        .box__info.box__info--left
            router-link.box__button.button.button--light.button--rounded(:to="{ name: `podcast-${podcastPlaces.home2.podcasts[0].contentType}`, params: { id: podcastPlaces.home2.podcasts[0]._id } }")
              .fa.fa-play
        .box__image
          h5.box__headline.box__headline--bottom
            strong.highlight.highlight--medium {{ podcastPlaces.home2.podcasts[0].title }}
          img(
            :src="podcastPlaces.home2.podcasts[0].image1.url",
            :alt="podcastPlaces.home2.podcasts[0].title"
          )

      .box__cell.box__cell--one-quarter.is-unguttered(v-if="podcastPlaces.home3.podcasts && podcastPlaces.home3.podcasts.length")
        .box__info.box__info--left
            router-link.box__button.button.button--light.button--rounded(:to="{ name: `podcast-${podcastPlaces.home3.podcasts[0].contentType}`, params: { id: podcastPlaces.home3.podcasts[0]._id } }")
              .fa.fa-play
        .box__image
          h5.box__headline.box__headline--bottom
            strong.highlight.highlight--medium {{ podcastPlaces.home3.podcasts[0].title }}
          img(
            :src="podcastPlaces.home3.podcasts[0].image1.url",
            :alt="podcastPlaces.home3.podcasts[0].title"
          )


      //- .box__cell.box__cell--half.is-unguttered(v-if="podcastPlaces.home2.podcasts && podcastPlaces.home2.podcasts.length")
      //-   .box__info.box__info--left.box__info--big
      //-     h4.highlight
      //-       strong.highlight--tiny {{ podcastPlaces.home2.podcasts[0].title }}
      //-       //- strong.highlight--yellow.highlight--small Mario Pergolini
      //-     button.box__button.button.button--light.button--rounded
      //-       .fa.fa-play
      //-   .box__image
      //-     img(
      //-       :src="podcastPlaces.home1.podcasts[0].image1.url",
      //-       :alt="podcastPlaces.home1.podcasts[0].title"
      //-     )

      square-ad(:ads="adPlaces.home2.ads")

    section.content__section.box.box--column
      .headline__holder
        h2 Entrevistas
        router-link.headline__link(:to="{ name: 'podcasts', params: { type: 'entrevistas' } }")
          | ver todas
          .headline__button.button.button--rounded
            .fa.fa-plus

      slider(:items="interviews")

    section.content__section.box.box--row
      rectangle-ad(:ads="adPlaces.home3.ads")
      banner-app(v-if="!adPlaces.home3.ads || !adPlaces.home3.ads.length")

      rectangle-ad(:ads="adPlaces.home4.ads")
      banner-ws(v-if="!adPlaces.home4.ads || !adPlaces.home4.ads.length")


    section.content__section.box.box--row
      .box__cell.is-unguttered
        instagram
      .box__cell.box__cell--two-thirds.is-unguttered
        .box.box--column
          .headline__holder
            h2 Eventos
            router-link.headline__link(:to="{ name: 'podcasts', params: { type: 'eventos' } }")
              | ver todos
              .headline__button.button.button--rounded
                .fa.fa-plus

          slider(:items="events", :pageSize='4')

    section.content__section
      .headline__holder
        h2 Bandas
        router-link.headline__link(:to="{ name: 'podcasts', params: { type: 'bandas' } }")
          | ver todas
          .headline__button.button.button--rounded
            .fa.fa-plus

      slider(:items="bands")

    section.content__section
      .headline__holder
        h2 Programas
        router-link.headline__link(:to="{ name: 'shows'}")
          | ver todos
          .headline__button.button.button--rounded
            .fa.fa-plus

      slider(:items="shows")
</template>


<script>
import logoBig from 'assets/images/logo-big.jpg'

import RectangleAd from 'components/ad/RectangleAd'
import SquareAd from 'components/ad/SquareAd'
import BannerApp from 'components/shared/BannerApp'
import BannerWs from 'components/shared/BannerWs'
import BigSlider from 'components/shared/BigSlider'
import Slider from 'components/shared/Slider'
import Instagram from 'components/shared/Instagram'
import Youtube from 'components/shared/Youtube'

import pageService from 'services/page'
import showService from 'services/show'
import videoService from 'services/video'
import podcastService from 'services/podcast'

export default {
  name: 'Home',

  components: { Slider, BigSlider, BannerWs, BannerApp, RectangleAd, SquareAd, Instagram, Youtube },

  data () {
    return {
      interviews: [],
      bands: [],
      events: [],
      shows: [],

      video: {},

      adPlaces: {
        home1: { ads: [] },
        home2: { ads: [] },
        home3: { ads: [] },
        home4: { ads: [] }
      },

      podcastPlaces: {
        home1: { podcasts: [] },
        home2: { podcasts: [] },
        home3: { podcasts: [] }
      },

      logoBig
    }
  },

  created () {
    const query = {
      $limit: 8,
      state: 'published',
      $sort: '-publishedDate'
    }

    pageService.getByKey('home')
      .then(res => {
        this.adPlaces.home1 = res.adPlaces.find(a => a.key === 'home-1') || {}
        this.adPlaces.home2 = res.adPlaces.find(a => a.key === 'home-2') || {}
        this.adPlaces.home3 = res.adPlaces.find(a => a.key === 'home-3') || {}
        this.adPlaces.home4 = res.adPlaces.find(a => a.key === 'home-4') || {}

        this.podcastPlaces.home1 = res.podcastPlaces.find(p => p.key === 'home-1') || {}
        this.podcastPlaces.home2 = res.podcastPlaces.find(p => p.key === 'home-2') || {}
        this.podcastPlaces.home3 = res.podcastPlaces.find(p => p.key === 'home-3') || {}
      })

    podcastService.getByType('entrevistas', query)
      .then(res => {
        this.interviews = res.map(p => ({ id: p.id, caption: p.title, image: p.image1, router: `podcast-${p.contentType || 'text'}` }))
      })

    podcastService.getByType('bandas', query)
      .then(res => {
        this.bands = res.map(p => ({ id: p.id, caption: p.title, image: p.image1, router: `podcast-${p.contentType || 'text'}` }))
      })

    podcastService.getByType('eventos', query)
      .then(res => {
        this.events = res.map(p => ({ id: p.id, caption: p.title, image: p.image1, router: `podcast-${p.contentType || 'text'}` }))
      })

    this.getRandomShows()
    // this.getHomeVideo()
  },

  methods: {
    getRandomShows() {
      showService.getRandom(8)
        .then(res => {
          this.shows = res.map(c => ({ id: c._id, caption: c.name, image: c.profile, router: 'show' }))
        })
    },

    getHomeVideo() {
      videoService.getRandom()
        .then(res => { this.video = res })
    }
  }
}
</script>

<style lang="scss" scoped>
  a {
    .fa-play {
       margin-top: 7px;
    }
  }
</style>

<template lang="pug">
  main.content
    section.content__section.box

      .box__cell.box__cell--white.has-shadow

        .box
          .sharethis-inline-share-buttons.box__button.box__button--featured
          //- button.box__button.box__button--featured.button.button--rounded
          //-   .fa.fa-share-alt
          .box__headline.box__headline--bottom-left.box__headline--featured
            h6.highlight__title
          .box__image.box__image--featured.box__cell.box__cell--one-quarter.is-unguttered.box__image__podcast
            img(:src="podcast.image1 ? podcast.image1.url : ''" alt="vivo")
          .box__cell
            .box.box--column
              .is-unguttered
                h6.box__subtitle.box__subtitle--featured Hay cosas buenas que están pasando. Enterate:
              .is-unguttered(style="margin-top: 10px")
                h2.box__title.box__title--featured {{ podcast.title }}
              .is-unguttered
                span.box__text.box__text--featured(style="margin-top: 15px")
                  router-link(:to="{ name: 'show', params: { id: podcast.show.id }}", v-show="podcast.show && podcast.show.name") {{ podcast.show ? podcast.show.name : '' }}
                  span(v-show="podcast.show && podcast.show.name && podcast.publishedDate") &nbsp; | &nbsp;
                  span {{ podcast.publishedDate | date("DD.MM.YYYY") }}
              .is-unguttered(style="margin-top: 15px")
                h5.box__text.box__text--featured(style="font-weight: bold") {{ podcast.description }}
              .is-unguttered
                p.box__text.box__text--featured(v-html="podcast.content")


    section.content__section.box.box--row
      .box__cell.box__cell--two-thirds.is-unguttered
        .box.box--column
          .headline__holder
            h2 Te Podria Interesar
            router-link.headline__link(:to="{ name: 'podcasts', params: { type: podcast.type.key } }")
              | ver todos
              .headline__button.button.button--rounded
                .fa.fa-plus

          slider(:items="suggestions", router='podcast', :pageSize='4')

      .box__cell.is-unguttered.sqare__ad
        .separator
        square-ad(:ads="adPlaces.podcast1.ads")

    section.content__section.box.box--row
      rectangle-ad(:ads="adPlaces.podcast2.ads")
      banner-app(v-if="!adPlaces.podcast2.ads || !adPlaces.podcast2.ads.length")
      rectangle-ad(:ads="adPlaces.podcast3.ads")
      banner-ws(v-if="!adPlaces.podcast3.ads || !adPlaces.podcast3.ads.length")
</template>

<script>
  import RectangleAd from 'components/ad/RectangleAd'
  import SquareAd from 'components/ad/SquareAd'
  import BannerApp from 'components/shared/BannerApp'
  import BannerWs from 'components/shared/BannerWs'
  import Slider from 'components/shared/Slider'

  import podcastService from 'services/podcast'
  import pageService from 'services/page'

  export default {
    name: 'PodcastYoutube',

    components: { Slider, BannerApp, BannerWs, RectangleAd, SquareAd },

    data () {
      return {
        podcast: { show: {}, type: { key: '' } },
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
</script>

<style lang="scss">
  .box__image__podcast {
    img {
      width: 330px;
      height: 350px;
    }
  }

  .sqare__ad {
    .separator {
      background-color: #979797;
      width: 2px;
      height: 260px;
      margin: 30px 40px 0 40px;
    }

    img {
      margin-top: 46px;
      width: 290px;
      height: 245px;
    }
  }
</style>

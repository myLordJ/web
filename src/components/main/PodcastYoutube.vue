<template lang="pug">
  main.content(v-show="true")
    section.content__section.box

      .box__cell.box__cell--white.has-shadow

        .box.box--podcast
          .sharethis-inline-share-buttons.box__button.box__button--featured
          //- button.box__button.box__button--featured.button.button--rounded
          //-   .fa.fa-share-alt
          //- .box__headline.box__headline--bottom-left.box__headline--featured
            h6.highlight__title
          .box__image.box__image--featured.box__cell.box__cell--one-half.is-unguttered.box__image__podcast
            iframe(width="625" height="352", :src="`https://www.youtube.com/embed/${podcast.youtubeId}?rel=0&amp;showinfo=0`" frameborder="0")
            //- img(:src="podcast.image1 ? podcast.image1.url : ''" alt="vivo")
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
                p.box__text.box__text--featured(v-html="podcast.description")
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
        .separator.hide--mobile
        slider-ad(:ads="adPlaces.podcast1.ads")

    section.content__section.box.box--row
      rectangle-ad(:ads="adPlaces.podcast2.ads")
      banner-app(v-if="!adPlaces.podcast2.ads || !adPlaces.podcast2.ads.length")
      rectangle-ad(:ads="adPlaces.podcast3.ads")
      banner-ws(v-if="!adPlaces.podcast3.ads || !adPlaces.podcast3.ads.length")
</template>

<script>
import podcastMixin from 'mixins/podcast'

export default {
  name: 'PodcastYoutube',

  mixins: [podcastMixin]
}
</script>

<style lang="scss">
  .box__image--featured {
    width: 350px;
  }

  .box__image__podcast {
    img {
      width: 350px;
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

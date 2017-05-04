<template lang="pug">
  main.content(v-show="true")
    section.content__section.box

      .box__cell.box__cell--white.has-shadow

        .box
          .sharethis-inline-share-buttons.box__button.box__button--featured
          .box__image.box__image--featured.box__cell.box__cell--one-quarter.is-unguttered.box__image__podcast
            img(:src="show.profile ? show.profile.url : ''", :alt="show.name")
          .box__cell
            .box.box--column
              .box__cell.is-unguttered.no--flex
                h6.box__subtitle.box__subtitle--featured Eschuchá los {{ getDateTime() }}
              .box__cell.is-unguttered.no--flex
                h2.box__title.box__title--featured {{ show.name }}
              //- .box__cell.is-unguttered
                span.box__text.box__text--featured(style="margin-top: 15px")
                  span(v-show="podcast.show") {{ podcast.show ? podcast.show.name : '' }}
                  span(v-show="podcast.show && podcast.publishedDate") &nbsp; | &nbsp;
                  span {{ podcast.publishedDate }}
              .box__cell.is-unguttered.no--flex
                p.box__text.box__text--featured(style="font-weight: bold") {{ show.description }}

              div
                a(:href="'http://mixcloud.com/discover/radioalacalle-' + show.key", target="_blank") Revivi todos los programas
                .social__link__menu
                  a.social__link.icon(:href="show.twitter", v-if="show.twitter", target="_blank")
                    .fa.fa-twitter.fa-2x
                  a.social__link.icon(:href="show.facebook", v-if="show.facebook", target="_blank")
                    .fa.fa-facebook.fa-2x
                  a.social__link.icon(:href="show.instagram", v-if="show.instagram", target="_blank")
                    .fa.fa-instagram.fa-2x
                div(v-if="show.featuredMixcloud", style="margin-top: 20px")
                  iframe(width="100%" height="120", :src="`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fradioalacalle%2F${show.featuredMixcloud}%2F&hide_cover=1`" frameborder="0")

    section.content__section.box.box--row
      .box__cell.box__cell--two-thirds.is-unguttered
        .box.box--column
          .headline__holder
            h2 Te podria interesar
            router-link.headline__link.not-active(:to="{name: 'shows'}")
              | ver todos
              .headline__button.button.button--rounded
                .fa.fa-plus

          slider(:items="suggestions", router='show', :pageSize='4')

      //- .box__cell.is-unguttered.sqare__ad
      //-   .separator
      //-   img(src="https://radio-a-la-calle.s3.amazonaws.com/74blC3eJ9_gwn08-.png" alt="pepsi")

    section.content__section.box.box--row
      .bar.box__cell.is-unguttered
        .bar__icon.bar__icon--yellow
          .icon.fa.fa-mobile-phone.fa-3x
        h6.bar__highlight.highlight
          strong Bájate la
          strong.highlight--green App de la Radio
          strong ahora!
        a.bar__icon.bar__icon--turquoise
          .icon.fa.fa-android.fa-3x
        a.bar__icon.bar__icon--black
          .icon.fa.fa-apple.fa-3x
      .bar.box__cell.is-unguttered
        .bar__icon.bar__icon--green
          .icon.fa.fa-whatsapp.fa-3x
        h6.bar__highlight.highlight
          strong Nos queres contar algo?
          strong.highlight--green +54 9 11 2825 2375
</template>

<script>
import Slider from 'components/shared/Slider'

import showService from 'services/show'
// import mixcloudService from 'services/mixcloud'

export default {
  name: 'Show',

  components: { Slider },

  data () {
    return {
      show: {},
      suggestions: []
    }
  },

  watch: {
    $route: 'getShow'
  },

  created () {
    this.getShow()

    // mixcloudService.getCloudcasts()
    //   .then(res => console.log(res))
  },

  methods: {
    getShow() {
      showService.getById(this.$route.params.id)
        .then(show => { this.show = show })

      showService.query({ $limit: 6 })
        .then(shows => { this.suggestions = shows.map(c => ({ id: c.id, caption: c.name, image: c.profile, router: 'show' })) })
    },

    getDateTime() {
      let days = []
      let start, end

      if (this.show.monday) {
        days.push('Lunes')
        start = this.show.mondayStartTime <= 9 ? '0' + this.show.mondayStartTime : this.show.mondayStartTime
        end = this.show.mondayEndTime <= 9 ? '0' + this.show.mondayEndTime : this.show.mondayEndTime
      }
      if (this.show.tuesday) {
        days.push('Martes')
        start = this.show.tuesdayStartTime <= 9 ? '0' + this.show.tuesdayStartTime : this.show.tuesdayStartTime
        end = this.show.tuesdayEndTime <= 9 ? '0' + this.show.tuesdayEndTime : this.show.tuesdayEndTime
      }
      if (this.show.wednesday) {
        days.push('Miércoles')
        start = this.show.wednesdayStartTime <= 9 ? '0' + this.show.wednesdayStartTime : this.show.wednesdayStartTime
        end = this.show.wednesdayEndTime <= 9 ? '0' + this.show.wednesdayEndTime : this.show.wednesdayEndTime
      }
      if (this.show.thursday) {
        days.push('Jueves')
        start = this.show.thursdayStartTime <= 9 ? '0' + this.show.thursdayStartTime : this.show.thursdayStartTime
        end = this.show.thursdayEndTime <= 9 ? '0' + this.show.thursdayEndTime : this.show.thursdayEndTime
      }
      if (this.show.friday) {
        days.push('Viernes')
        start = this.show.fridayStartTime <= 9 ? '0' + this.show.fridayStartTime : this.show.fridayStartTime
        end = this.show.fridayEndTime <= 9 ? '0' + this.show.fridayEndTime : this.show.fridayEndTime
      }
      if (this.show.saturday) {
        days.push('Sábado')
        start = this.show.saturdayStartTime <= 9 ? '0' + this.show.saturdayStartTime : this.show.saturdayStartTime
        end = this.show.saturdayEndTime <= 9 ? '0' + this.show.saturdayEndTime : this.show.saturdayEndTime
      }
      if (this.show.sunday) {
        days.push('Domingo')
        start = this.show.sundayStartTime <= 9 ? '0' + this.show.sundayStartTime : this.show.sundayStartTime
        end = this.show.sundayEndTime <= 9 ? '0' + this.show.sundayEndTime : this.show.sundayEndTime
      }

      days = days.join(', ').replace(/,\s([^,]+)$/, ' y $1')

      return `${days} de ${start}:00 a ${end}:00`
    }
  }
}
</script>

<style lang="scss" scoped>
  .no--flex {
    flex: inherit;
  }

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

  .not-active {
    text-decoration: none;
    font-weight: normal;
  }

  .social__link__menu {
    display: inline;
    float: right;
  }

  .social__link {
    div { color: #65C4A9; }
  }
</style>

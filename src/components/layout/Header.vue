<template lang="pug">
  header.header
    .header__ads(v-if="headerAd && headerAd.image && headerAd.image.url")
      img(:src="headerAd.image.url" alt="headerAd.name", style="width: 945px; height: 89px")
    .header__holder
      .header__block
        .header__middle
          .header__banner.banner
            .icon.fa.fa-mobile-phone.fa-2x.hide--mobile
            p.banner__text
              a.hide--mobile(href="https://play.google.com/store/apps/details?id=com.solumedia.alacalle", target="_blank") Bájate la App de la Radio
            a.hide.show--mobile(@click.prevent="toggle", style="color: #fff; font-size: 2em;")
              .fa.fa-play(v-show="!isPlaying")
              .fa.fa-pause(v-show="isPlaying")
            span.hide.show--mobile(style="margin-left: 20px; font-size: 1.5em;")
              p {{ currentShow.name || 'Radio en vivo las 24 hs'}}
          .header__social.social
            .social__contact
              .icon.fa.fa-whatsapp.fa-2x
              p.social__text15
                a(href="tel:+54 9 11 2825 2375", style="color: #fff") +54 9 11 2825 2375

            .social__follow.navbar
              .social__text Seguinos en
              a.social__link.icon(href="https://twitter.com/radioalacalle", target="_blank")
                .fa.fa-twitter.fa-2x
              a.social__link.icon(href="https://es-la.facebook.com/radioalacalle/", target="_blank")
                .fa.fa-facebook.fa-2x
              a.social__link.icon(href="https://www.youtube.com/channel/UC1o59HgMOEx8nIOc30ojc4Q", target="_blank")
                .fa.fa-youtube-play.fa-2x
              a.social__link.icon(href="https://www.mixcloud.com/radioalacalle/", target="_blank")
                .fa.fa-mixcloud.fa-2x
              a.social__link.icon(href="https://www.instagram.com/radioalacalle/", target="_blank")
                .fa.fa-instagram.fa-2x

        .header__bottom
          .header__links
            router-link.navbar__link(:to="{ name: 'home'}")
              img.header__logo(:src="logo" alt="rac")
            .header__menu.navbar
              //- li.navbar__item
                router-link.navbar__link(:to="{ name: 'home'}") La Radio
              li.navbar__item
                router-link.navbar__link(:to="{ name: 'podcasts', params: { type: 'entrevistas' } }") Entrevistas
              li.navbar__item
                router-link.navbar__link(:to="{ name: 'podcasts', params: { type: 'bandas' } }") Bandas
              li.navbar__item
                router-link.navbar__link(:to="{ name: 'podcasts', params: { type: 'eventos' } }") Eventos
              li.navbar__item
                router-link.navbar__link(:to="{ name: 'shows'}") Programas
              //- li.navbar__item
              //-   router-link.navbar__link(:to="{ name: 'contact'}") Contacto

      .header__block
        .header__live
          .icon.fa.fa-bullseye.fa-2x
          strong.header__status En Vivo
          p {{ currentShow.name || 'Radio en vivo las 24 hs'}}

        .header__player.player
          img.img.player__img(:src="currentShow.profile.url", v-if="currentShow.profile && currentShow.profile.url")
          img.img.player__img.bird__img(:src="bird" alt="player", v-else)
          .player__icon.icon.fa.fa-volume-up.fa-2x.pointer(style="margin-left: 10px", v-show="volume > 0", @click.prevent="volume = 0")
          .player__icon.icon.fa.fa-volume-off.fa-2x.pointer(style="margin-left: 10px", v-show="volume === 0", @click.prevent="volume = 50")
          audio#radioPlayer(autoplay, v-show="false")
            source(src="http://01.solumedia.com.ar:8330/;stream.nsv")
          input.range.player__volume(type="range", v-model="volume")
          button.button.button--light.button--rounded.player__button(@click.prevent="toggle")
            .fa.fa-play(v-show="!isPlaying")
            .fa.fa-pause(v-show="isPlaying")

    .header__alt.box.box--row
      .header__player.player.player--alt.box__cell.is-unguttered
        .player__icon.player__icon--alt.icon.fa.fa-bullseye.fa-3x
        .header__status
          h5.highlight.header__highlight.header__highlight--alt
            strong En Vivo:
            span.headline__title Se Cayo el Sistema
          h6.headline__title.highlight Lunes de 21:00 - 22:00
        button.button.button--light.button--rounded.player__button
          .fa.fa-play

      .header__live.player.player--alt.box__cell.is-unguttered
        .player__icon.icon.fa.fa-volume-up.fa-3x
        input.range.player__volume.player__volume--alt(type="range", max="1", min="0")

      .social__follow.social__follow--alt.navbar.box__cell
        button.button.button--light.button--rounded.player__button.player__button--alt
          .fa.fa-share-alt
        a.social__link.icon
          .fa.fa-facebook.fa-2x
        a.social__link.icon
          .fa.fa-twitter.fa-2x
        a.social__link.icon
          .fa.fa-youtube-play.fa-2x
        a.social__link.icon
          .fa.fa-cloud.fa-2x
        a.social__link.icon
          .fa.fa-instagram.fa-2x
</template>

<script>
  import logo from 'assets/images/logo.png'
  import bird from 'assets/images/bird.png'

  import adService from 'services/ad'
  import showService from 'services/show'

  let radioPlayer

  export default {
    name: 'RacHeader',

    data() {
      return {
        currentShow: { profile: {} },
        isPlaying: false,
        volume: 50,

        headerAd: {},

        logo,
        bird
      }
    },

    created() {
      adService.getByPlace('header')
        .then(ads => {
          if (ads && ads.length) {
            this.headerAd = ads[0]
          }
        })

      showService.getCurrent()
        .then(res => {
          this.currentShow = res
        })
        .catch(() => {})
    },

    mounted() {
      radioPlayer = document.getElementById('radioPlayer')
      this.isPlaying = !radioPlayer.paused

      radioPlayer.addEventListener('playing', () => { this.isPlaying = true })
    },

    watch: {
      volume(val) {
        val = parseInt(val)

        if (val > 10) {
          radioPlayer.volume = val === 100 ? 1 : parseFloat('0.' + val)
          return
        }

        radioPlayer.volume = val === 100 ? 1 : parseFloat('0.0' + val)
      }
    },

    methods: {
      play() {
        radioPlayer.play()
      },

      pause() {
        radioPlayer.pause()
      },

      toggle() {
        if (this.isPlaying) {
          this.pause()
        } else {
          this.play()
        }

        this.isPlaying = !this.isPlaying
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header__logo {
    height: 70px;
  }

  .pointer {
    cursor: pointer;
  }

  .banner__text, .social__text {
    a {
      color: #fff;
    }
  }

  .social__link {
    div { color: #fff; }
  }

  a.router-link-active {
    font-weight: bold;
    font-size: 1.2em;
    text-decoration: underline;
  }

  .bird__img {
    height: 70px;
    width: 70px;
    margin-left: 30px;
    margin-right: 30px;
  }
</style>

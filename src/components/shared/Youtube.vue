<template lang="pug">
  .box__cell.is-unguttered.has-shadow
    //- video(
      v-if="video && video.video && video.video.url",
      style="width: 625px; height: 352px;",
      loop,
      autoplay,
      muted
      )
      source(:src="video.video.url")
      | Tu navegador no soporta videos HTML5 😐
    //- img(:src="logoBig" alt="rac", v-else, style="width: 625px; height: 352px")
    iframe(v-if="videoId", width="625" height="352", :src="`https://www.youtube.com/embed/${videoId}?rel=0&amp;controls=0&amp;showinfo=0`" frameborder="0")
    //- .box__headline.box__headline--bottom-left(v-if="video && video.video && video.video.url")
    //-   h5.highlight__title
    //-     span.highlight.highlight--red(v-show="video.title") {{ video.title }}
    //-     strong.highlight__text.highlight__text--bordered(v-show="video.subTitle") {{ video.subTitle }}
    //-   //- button.button.button--light.button--rounded
    //-   //-   .fa.fa-share-alt
</template>

<script>
import settingService from 'services/setting'
export default {
  name: 'Youtube',

  data() {
    return {
      videoId: ''
    }
  },

  created() {
    settingService.getByKey('youtube-home')
      .then(res => {
        this.videoId = res.value || 'H_hlOTLCMYo'
      })
      .catch(() => {
        this.videoId = 'H_hlOTLCMYo'
      })
  }
}
</script>

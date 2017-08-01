<template lang="pug">
  .box__cell.is-unguttered.slider-ad(style="margin-bottom: -5px")
    span(
      v-for="(a, i) in ads",
      v-show="i >= from && i < to"
    )
      a(:href="a.linkUrl", target="_blank")
        transition(name="fade")
          img.slider-ad(
            :src="a.image.url",
            :alt="a.name",
            :title="a.name",
            v-show="i >= from && i < to"
          )
</template>

<script>
  let interval

  export default {
    name: 'AddSlider',

    props: {
      ads: {
        type: Array,
        required: true
      },
      pageSize: {
        type: Number,
        default: 1
      },
      moveSize: {
        type: Number,
        default: 1
      }
    },

    data() {
      return {
        from: 0,
        to: 0
      }
    },

    mounted() {
      this.loadCurrents()
      this.setSliderInterval()
    },

    destroyed() {
      this.clearSliderInterval()
    },

    watch: {
      ads() {
        this.loadCurrents()
      }
    },

    methods: {
      clearSliderInterval() {
        clearInterval(interval)
      },

      setSliderInterval() {
        interval = setInterval(() => { this.nextPage() }, 5000)
      },

      loadCurrents() {
        if (this.ads) {
          this.to = parseInt(this.pageSize)
        }
      },

      nextPage() {
        if (this.ads && this.ads.length) {
          if (this.to >= this.ads.length) {
            this.to = parseInt(this.pageSize)
            this.from = 0
          } else {
            this.from += this.moveSize
            this.to += this.moveSize
          }

          this.clearSliderInterval()
          this.setSliderInterval()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  img.slider-ad {
    height: 240px;
    width: 270px;
  }
</style>

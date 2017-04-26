<template lang="pug">
  main.content(v-show="true")
    section.content__section.box.box--column
      .headline__holder(style="margin-top: 10px")
        h1 {{ type }}
    section.content__section.box.box--column(v-for="r in podcastsRows")
      .carousel
        .carousel__holder.box.box--row(:style="{ width: r.length < 6 ? (r.length * 100) / 6 + '%' : '100%' }")
          router-link.carousel__block.box__cell.is-unguttered(
            v-for="p in r",
            :to="{ name: `podcast-${p.contentType}` , params: { id: p.id }}"
          )
            img(:src="p.image1 && p.image1.url")
            h6.carousel__text {{ p.title }}
</template>

<script>
  import podcastService from 'services/podcast'

  export default {
    name: 'Podcasts',

    data() {
      return {
        podcastsRows: [[]],

        type: ''
      }
    },

    created () {
      this.getPodcasts()
    },

    watch: {
      $route: 'getPodcasts'
    },

    methods: {
      initPodcasts() {
        this.type = this.$route.params.type
        this.podcastsRows = [[]]
      },

      getPodcasts() {
        this.initPodcasts()

        const query = {
          state: 'published',
          $sort: '-publishedDate'
        }

        podcastService.getByType(this.type, query)
          .then(res => {
            let j = 0
            for (let i = 0; i < res.length; i++) {
              if (i !== 0 && i % 6 === 0) {
                j++
                this.podcastsRows[j] = []
              }
              this.podcastsRows[j].push(res[i])
            }
          })
      }
    }
  }
</script>

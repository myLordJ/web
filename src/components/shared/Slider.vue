<template lang="pug">
  .carousel
    button.carousel__button.carousel__button--prev.button.button--light.button--rounded(
      v-if="isFull && to > pageSize",
      @click.prevent="prevPage"
    )
      .icon.fa.fa-angle-left.fa-3x
    button.carousel__button.carousel__button--next.button.button--light.button--rounded(
      v-if="isFull && to < items.length",
      @click.prevent="nextPage"
    )
      .icon.fa.fa-angle-right.fa-3x

    .carousel__holder.box.box--row(:style="{ width: !isFull ? (items.length * 100) / pageSize + '%' : '100%' }")
        span(
          v-for="(c, i) in items",
          v-show="i >= from && i < to"
        )
          router-link.carousel__block.box__cell.is-unguttered(
            :to="{ name: c.router, params: { id: c.id }}"
          )
            transition(name="move")
              img(:src="c.image && c.image.url", v-show="i >= from && i < to")
            h6.carousel__text {{ c.caption }}
</template>

<script>
  export default {
    name: 'Slider',

    props: {
      items: {
        type: Array,
        required: true
      },
      pageSize: {
        type: Number,
        default: 6
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
    },

    computed: {
      isFull() {
        return this.pageSize < this.items.length
      }
    },

    watch: {
      items() {
        this.loadCurrents()
      }
    },

    methods: {
      loadCurrents() {
        if (this.items) {
          this.to = parseInt(this.pageSize)
        }
      },

      nextPage() {
        if (this.to >= this.items.length) { return }

        this.from += this.moveSize
        this.to += this.moveSize
      },

      prevPage() {
        if (this.to <= this.pageSize) { return }

        this.from -= this.moveSize
        this.to -= this.moveSize
      }
    }
  }
</script>

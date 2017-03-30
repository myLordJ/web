<template lang="pug">
  .bar.box__cell.is-unguttered(v-if="ads && ads.length")
    a(v-for="a in ads", :href="a.linkUrl", target="_blank")
      img.reactangle-ad(
        :src="a.image.url",
        :alt="a.name",
        :title="a.name"
      )
</template>

<script>
  export default {
    name: 'RectangleAd',

    props: {
      ads: { type: Array }
    }
  }
</script>

<style lang="scss" scoped>
  .reactangle-ad {
    max-height: 55px;
  }
</style>

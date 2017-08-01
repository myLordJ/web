<template lang="pug">
.box__cell.is-unguttered.square-ad(v-if="ads && ads.length")
  a(v-for="a in ads", :href="a.linkUrl", target="_blank")
    img.square-ad(
      v-if="a.image",
      :src="a.image.url",
      :alt="a.name",
      :title="a.name"
    )
</template>

<script>
  export default {
    name: 'SquareAd',

    props: {
      ads: { type: Array }
    }
  }
</script>

<style lang="scss" scoped>
  img.square-ad {
    height: 240px;
    width: 270px;
  }
</style>

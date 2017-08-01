<template lang="pug">
  .bar.box__cell.is-unguttered.hide--mobile
    .bar__icon.bar__icon--yellow
      .icon.fa.fa-mobile-phone.fa-3x
    h6.bar__highlight.highlight
      strong Bájate la
      strong.highlight--green App de la Radio
      strong ahora!
    a.bar__icon.bar__icon--turquoise
      .icon.fa.fa-android.fa-3x
    a.bar__icon.bar__icon--black(href="https://play.google.com/store/apps/details?id=com.solumedia.alacalle")
      .icon.fa.fa-apple.fa-3x
</template>

<script>
  export default {
    name: 'BannerApp'
  }
</script>

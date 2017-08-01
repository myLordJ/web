<template lang="pug">
  footer.footer
    button.hide--mobile.footer__button.button.button--rounded.button--light
      .icon.fa.fa-angle-up.fa-3x
    .footer__block.footer__block--top
      nav.footer__nav
        li.footer__contact
          p.footer__text.footer__text--follow Seguinos en:
          nav.social__follow.navbar
            a.icon(href="https://twitter.com/radioalacalle", target="_blank")
              i.icon.fa.fa-twitter
            a.icon(href="https://es-la.facebook.com/radioalacalle/", target="_blank")
              i.icon.fa.fa-facebook
            a.icon(href="https://www.youtube.com/channel/UC1o59HgMOEx8nIOc30ojc4Q", target="_blank")
              i.icon.fa.fa-youtube-play
            a.icon(href="https://www.mixcloud.com/radioalacalle/", target="_blank")
              i.icon.fa.fa-mixcloud
            a.icon(href="https://www.instagram.com/radioalacalle/", target="_blank")
              i.icon.fa.fa-instagram
        li.footer__contact
          .icon.icon--large.fa.fa-phone.fa-3x
          p.footer__text
            a(href="tel:+54 11 4552 6853", target="_blank") +54 11 4552 6853
        li.footer__contact
          .icon.icon--large.fa.fa-whatsapp.fa-3x
          p.footer__text
            a(href="tel:+54 9 11 2825 2375", target="_blank") +54 9 11 2825 2375
        li.footer__contact
          .icon.icon--large.fa.fa-envelope-o.fa-3x
          p.footer__text
            a(href="mailto:comunicacion@radioalacalle.com", target="_blank") comunicacion@radioalacalle.com
        li.footer__contact
          .icon.icon--large.fa.fa-map-marker.fa-3x
          p.footer__text
          a(href="https://goo.gl/maps/2GmUkR6Um7K2", target="_blank") Av. Forest 1236 - C.A.B.A.
    .footer__block.footer__block--bottom
      nav.footer__nav
        a.footer__copyright(href="https://drive.google.com/file/d/0B9H05w5nKju7WjlVdnJNMy1zdjQ/view?usp=sharing", target="_blank")
          .footer__icon.icon.fa.fa-download
          p.footer__text Descargar presentación
        a.footer__copyright(href="#")
          .footer__icon.icon.fa.fa-download
          p.footer__text Descargar Media Kit
        a.footer__copyright(href="#")
          .footer__icon.icon.fa.fa-envelope-o
          p.footer__text
            a(href="mailto:comunicacion@radioalacalle.com" target="_blank") comunicacion@radioalacalle.com
        .footer__copyright
          small.footer__text Radio A La Calle © {{ new Date().getFullYear() }}
           br
           | ⌨️&nbsp;&nbsp;with&nbsp;&nbsp;❤️&nbsp;&nbsp;
           | by&nbsp;
           a(href="https://keepe.rs", style="font-size: 90%; text-decoration: underline") Keepers
</template>

<script>
  export default {
    name: 'RacFooter'
  }
</script>

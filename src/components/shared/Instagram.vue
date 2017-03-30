<template lang="pug">
  div(v-show="show")
    blockquote.instagram-media(data-instgrm-version='7', style=' background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);')
      div(style='padding:8px;')
        a(href="https://www.instagram.com/radioalacalle/" target="_blank", style="float: left")
          h6(style="margin-top: 2px") Radio a la Calle
        .fa.fa-instagram.fa-2x
        div(style=' background:#F8F8F8; line-height:0; margin-top:30px; text-align:center; width:100%;')
          a(:href="post.postUrl", target="_blank")
            img(:src="post.thumbnailUrl")
            p {{ post.title.length > 62 ? post.title.substring(0, 62) + '...' : post.title }}
</template>

<script>
  import instagramService from 'services/instagram'

  export default {
    name: 'Instagram',

    data() {
      return {
        post: { title: '', postUrl: '' },
        show: false
      }
    },

    mounted() {
      instagramService.getPost()
        .then(res => {
          this.post = res
          this.show = true
        })
    }
  }
</script>

<style lang="scss" scoped>
  .instagram-media {
    max-height: 270px;
    margin-top: 20px !important;
  }

  h6 {
    color: #262626;
    font-weight: bold;
  }

  .fa-instagram {
    color: #262626;
    float: right;
  }

  p {
    font-size: 11px;
    color: #000;
  }
</style>

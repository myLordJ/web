<template lang="pug">
  main.content
    section.content__section.box.box--column(v-show='monday.length')
      .headline__holder(style="margin-top: 20px")
        h2 Lunes
      slider(:items="monday", router="show")

    section.content__section.box.box--column(v-show='tuesday.length')
      .headline__holder
        h2 Martes
      slider(:items="tuesday")

    section.content__section.box.box--column(v-show='wednesday.length')
      .headline__holder
        h2 Miércoles
      slider(:items="wednesday")

    section.content__section.box.box--column(v-show='thursday.length')
      .headline__holder
        h2 Jueves
      slider(:items="thursday")

    section.content__section.box.box--column(v-show='friday.length')
      .headline__holder
        h2 Viernes
      slider(:items="friday")

    section.content__section.box.box--column(v-show='saturday.length')
      .headline__holder
        h2 Sábado
      slider(:items="saturday")

    section.content__section.box.box--column(v-show='sunday.length')
      .headline__holder
        h2 Domingo
      slider(:items="sunday")
</template>

<script>
import Slider from 'components/shared/Slider'

import showService from 'services/show'

export default {
  name: 'shows',

  components: { Slider },

  data () {
    return {
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: []
    }
  },

  created () {
    showService.query({ isEnabled: true })
      .then(res => {
        res.forEach((s) => {
          s.caption = s.name
          s.image = s.profile
          s.router = 'show'

          if (s.sunday) { this.sunday.push(s) }
          if (s.monday) { this.monday.push(s) }
          if (s.tuesday) { this.tuesday.push(s) }
          if (s.wednesday) { this.wednesday.push(s) }
          if (s.thursday) { this.thursday.push(s) }
          if (s.friday) { this.friday.push(s) }
          if (s.saturday) { this.saturday.push(s) }
        })
      })
  }
}
</script>

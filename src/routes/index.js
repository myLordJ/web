import Home from 'components/main/Home'
import Shows from 'components/main/Shows'
import Show from 'components/main/Show'
import Contact from 'components/main/Contact'
import Podcasts from 'components/main/Podcasts'
import PodcastMixcloud from 'components/main/PodcastMixcloud'
import PodcastYouTube from 'components/main/PodcastYouTube'
import PodcastText from 'components/main/PodcastText'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/contact', component: Contact, name: 'contact' },
  { path: '/podcast/:type', component: Podcasts, name: 'podcasts' },
  { path: '/show', component: Shows, name: 'shows' },
  { path: '/show/:id', component: Show, name: 'show' },
  { path: '/podcast/mixcloud/:id', component: PodcastMixcloud, name: 'podcast-mixcloud' },
  { path: '/podcast/text/:id', component: PodcastText, name: 'podcast-text' },
  { path: '/podcast/youtube/:id', component: PodcastYouTube, name: 'podcast-youtube' }
]

export default routes

import { configure, addDecorator, addParameters } from '@storybook/vue'
import { addReadme } from 'storybook-readme/vue'
import { withKnobs } from '@storybook/addon-knobs'
import theme from './theme'

// Buefy 적용
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '../assets/scss/buefy/buefy-custom.scss'
import Vue from 'vue'

// tailwind CSS 적용
import 'tailwindcss/dist/tailwind.min.css'
import '../assets/css/tailwind.css'
Vue.use(Buefy)

addDecorator(addReadme)
addDecorator(withKnobs)

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme
  },
  readme: {
    codeTheme: 'a11y-dark'
  }
})

function loadStories() {
  const req = require.context('../stories', true)
  req.keys().forEach((filename) => req(filename))

  const req2 = require.context('../components/', true, /\.stories\.js$/)
  req2.keys().forEach((filename) => req2(filename))
}

configure(loadStories, module)

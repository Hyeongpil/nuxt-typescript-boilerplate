import { storiesOf } from '@storybook/vue'

// import ButtonReadme from '../components/UI/buttons/README.md'
import InstallGuide from './guides/Install.md'
import CodeStyleGuide from './guides/CodeStyle.md'

storiesOf('가이드', module)
  .addParameters({
    options: {
      showPanel: false
    }
  })
  .add(
    '1. 설치 및 빌드',
    () => {
      return {}
    },
    {
      readme: {
        content: InstallGuide
      }
    }
  )
  .add(
    '3. Project structure',
    () => {
      return {}
    },
    {
      readme: {
        content: CodeStyleGuide
      }
    }
  )
  .add(
    '4. Code Style',
    () => {
      return {}
    },
    {
      readme: {
        content: CodeStyleGuide
      }
    }
  )
  .add(
    '4. How to use Store',
    () => {
      return {}
    },
    {
      readme: {
        content: CodeStyleGuide
      }
    }
  )
  .add(
    '5. How to communicate server ',
    () => {
      return {}
    },
    {
      readme: {
        content: CodeStyleGuide
      }
    }
  )

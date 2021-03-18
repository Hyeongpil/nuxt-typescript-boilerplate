<template>
  <div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'DefaultLayout'
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped></style>

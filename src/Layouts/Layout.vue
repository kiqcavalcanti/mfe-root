<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Layout",
  methods: {
    handleMenuClicked(event) {
      this.$router.push(event.detail);
    }
  },
})
</script>

<template>
  <my-navbar-component @menuclicked="handleMenuClicked"></my-navbar-component>
</template>

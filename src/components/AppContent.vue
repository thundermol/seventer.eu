<template>
  <section>
      <router-view/>
  </section>
</template>

<script>
export default {
  name: 'AppContent',
  data () {
    return {
      msg: 'about'
    }
  }
}
</script>

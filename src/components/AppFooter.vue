<template>
  <section>
    <div class="container">
      <div class="row justify-content-center">
          <p class="small">This website was created with <a href="http://bootstrap-vue.js.org">bootstrap-vue</a>.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      msg: 'about'
    }
  }
}
</script>
<style scoped>
  section {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1em 0;
    background-color: #eee;
  }
</style>

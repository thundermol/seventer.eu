<template>
  <section>
    <div class="container">
      <div class="row justify-content-center">
        <p>{{ text }}</p>
      </div>
      <div class="row">
        <b-nav pills>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/portfolio">Portfolio</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
        </b-nav>
      </div>
    </div>
  </section>
</template>

<script>
const text = 'Welcome to my new homepage.'
export default {
  name: 'AppHeader',
  data () {
    return {
      text: text
    }
  }
}
</script>
<style scoped>
  section {background-color: #a2a2a2}
  .nav-link {border-radius: 0}
</style>

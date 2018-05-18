<template>
  <section>
    <div class="container">
      <div class="row justify-content-center">
        <p>{{ text }}</p>
      </div>
      <div class="row">
        <b-col sm="12">
          <b-nav pills>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/portfolio">Portfolio</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
          </b-nav>
        </b-col>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
<style scoped>
  section {
    background-color: #a2a2a2
  }

  .nav-link {
    border-radius: 0
  }
</style>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 justify-content-center">
        <b-card-group deck>
          <b-card
            img-src="./static/img/bootstrap-stack.png"
            img-alt="Card image"
            img-top>
            <p class="card-text">
              Bootstrap. I love to work with this powerful tool.
            </p>
          </b-card>
          <b-card
            img-src="./static/img/vue-logo.png"
            img-alt="Card image"
            img-bottom>
            <p class="card-text">
              Some quick example text to build on the card and make up the bulk of the card's content.
            </p>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data () {
    return {
      msg: 'portfolio'
    }
  }
}
</script>

<style scoped lang="scss">
  .card {
    max-width: 20rem;
    padding: 1em 0;
  }
</style>

<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <b-card-group deck>
          <b-card
            img-src="./assets/img/bootstrap-stack.png"
            img-alt="Card image"
            img-top>
            <p class="card-text">
              Bootstrap. I love to work with this powerful tool.
            </p>
          </b-card>
          <b-card
            img-src="./assets/img/vue-logo.png"
            img-alt="Card image"
            img-bottom>
            <p class="card-text">
              Some quick example text to build on the card and make up the bulk of the card's content.
            </p>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
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
    margin: 0 auto;
  }
</style>

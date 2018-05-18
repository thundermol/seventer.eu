<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <b-card-group deck>
            <b-card img-src="https://placekitten.com/1000/300"
                    img-alt="Card image"
                    img-top>
              <p class="card-text">
                Some quick example text to build on the card and make up the bulk of the card's content.
              </p>
            </b-card>
            <b-card img-src="https://placekitten.com/1000/300"
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

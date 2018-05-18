<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>{{ text }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
const text = 'Soon, here you can read stuff about me'
export default {
  name: 'About',
  data () {
    return {
      text: text
    }
  }
}
</script>

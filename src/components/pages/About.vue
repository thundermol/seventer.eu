<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const title = `
My name is Rob van Seventer.
`
const text = `
Welkome to my website. Currently I am working on a project making use of bootstrap-vue. So I thought, why not use this
powerful tool for my own website and build it from scratch (again).
`
export default {
  name: 'About',
  data () {
    return {
      title: title,
      text: text
    }
  }
}
</script>

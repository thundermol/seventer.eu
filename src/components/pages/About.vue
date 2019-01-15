<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
        <p class="font-weight-bold">
          This website is under construction.
        </p>
        <section class="text-center">
          <iframe src="https://giphy.com/embed/CtdjHUrgR2Duw" width="320" height="214" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
const title = `
My name is Rob van Seventer.
`
const text = `
Welcome to my website. Currently I am working on a project making use of bootstrap-vue. So I thought, why not use this
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

<template>
  <div id="app">
    <app-header/>
    <app-content/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {AppHeader, AppContent, AppFooter}
}
</script>

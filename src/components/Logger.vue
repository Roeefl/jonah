<template>
  <div class="logger">
    <h1>{{ msg }}</h1>
    <h2>Here will be the Logger</h2>
    <div  id="logger-card"
        class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop">
      <div class="mdl-layout__header">
        <div class=" mdl-layout__header-row">
          <h3 class="mdl-layout-title">Logger</h3>
        </div>
      </div>
      <div class="mdl-card__supporting-text mdl-color-text--grey-600">
        <div id="logger" class="card-content">
          <log-entry  v-for="logEntry in logEntries" 
                      :id="logEntry.key"
                      class="data-entry"
                      :item="logEntry" >
          </log-entry>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Logger',
    data () {
      return {
        msg: 'Logger'
      }
    }
  }
</script>

<style scoped>

</style>

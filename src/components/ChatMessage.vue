  <template>
  <div class="chatmsg">
    <div>
      <div class="spacing">
          <div class="avatar" :style="{ backgroundImage: item.picUrl }"></div>
      </div>
      <div class="entry-text">
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'chatmsg',
    props: ['item']
  }
</script>

<style scoped>

</style>

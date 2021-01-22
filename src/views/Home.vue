<template>
  <div class="home">
    <v-container justify-center>
    <FileUpload></FileUpload>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import FileUpload from '../components/FileUpload.vue'

export default {
  name: 'Home',
  components: {
    FileUpload
  }
}
</script>


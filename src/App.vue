<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h4>Demo Upload</h4>
      </div>

      <v-spacer></v-spacer>
       <router-link to="/"><span style="color:white">Upload</span></router-link>
       <v-spacer></v-spacer>
        <router-link to="/gallery"><span style="color:white">Gallery</span></router-link>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

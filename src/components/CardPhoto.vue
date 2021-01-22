<template>
<v-col>
  <v-card class="mx-auto" max-width="344">
    <v-img
      :src=photo.imgurl
      height="200px"
    ></v-img>
    <v-card-title> {{photo.title}} </v-card-title>
    <v-card-subtitle> {{photo.description}} </v-card-subtitle>
  </v-card>
</v-col>
</template>

<script>
export default {
  name:"CardPhoto",
  props:['photo']
};
</script>

<style>
</style>
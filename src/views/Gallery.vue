<template>
  <v-container>
    <v-row>
      <CardPhoto v-for="photo in gallery" :key="photo._id" :photo="photo"></CardPhoto>
    </v-row>
  </v-container>
</template>

<script>
import CardPhoto from '@/components/CardPhoto'
export default {
  name:"Gallery",
  components:{
    CardPhoto
  },
  computed: {
    gallery () {
      return this.$store.state.gallery
    }
  },
  methods:{
    fetchGallery () {
      this.$store.dispatch('fetchGallery')
    }
  },
  created () {
    this.fetchGallery()
  }
};
</script>

<style>
</style>
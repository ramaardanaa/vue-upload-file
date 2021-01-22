<template>
  <div>
    <vue-dropzone
      id="dropzone"
      :options="dropOptions"
      ref="myDropzone"
      @vdropzone-success="afterComplete"
      @vdropzone-removed-file="removeFile"
    ></vue-dropzone>
    <div class="mt-10">
      <div v-if="file.length === 1">
        <v-row class="mt-10">
          <v-col>
            <v-img max-height="250" max-width="450" :src="input.imgurl[0].url"></v-img>
          </v-col>
          <v-col>
            <v-text-field
              v-model="input.title[0]"
              label="Name"
              required
            ></v-text-field>
            <v-textarea
              label="Description"
              v-model="input.description[0]"
              required
            ></v-textarea>
          </v-col>
        </v-row>
        <div class="float-md-right">
          <v-btn class="ma-2" @click="submit" outlined color="indigo">Submit</v-btn>
        </div>
      </div>

      <div v-if="file.length > 1">
        <div style="height:300px" class="mt-15">
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="(item, n) in file" :key="n">
            <v-row>
              <v-col><v-img max-height="250" max-width="450" :src="input.imgurl[n].url"></v-img> </v-col>
              <v-col>
                <v-text-field
                  v-model="input.title[n]"
                  label="Name"
                  required
                ></v-text-field>
                <v-textarea
                  label="Description"
                  v-model="input.description[n]"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>

         <v-tabs v-model="tab">
          <v-tab v-for="(item, n) in file" :key="n">
            {{ input.title[n] || `Item ${n + 1}` }}
          </v-tab>
        </v-tabs>
        </div>
        <div class="float-md-right">
          <v-btn class="ma-2" @click="submit" outlined color="indigo">Submit</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/config'
import vueDropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  data: () => ({
    tab: null,
    input: {
      title: [],
      description: [],
      imgurl:[]
    },
    file: [],
    dropOptions: {
      url: "https://test-upload-vue.herokuapp.com/upload",
      addRemoveLinks: true,
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      acceptedFiles: "image/*",
      paramName: "photo",
    },
  }),
  components: {
    vueDropzone,
  },
  methods: {
    afterComplete(file, response) {
      this.input.imgurl.push(response[0]);
      this.file = this.$refs.myDropzone.getAcceptedFiles();
      console.log(this.input.imgurl);
    },
    removeFile(file) {
      this.file = this.$refs.myDropzone.getAcceptedFiles();
      this.input.imgurl = this.input.imgurl.filter(el => el.name !== file.name)
    },
    submit(){
      if(this.input.title.length !== this.file.length || this.input.description.length !== this.file.length){
        this.$swal(
          'Error!',
          'Field cannot be empty',
          'error'
        )
      }else{
        const payload = this.input.imgurl.map((el,n) => {
          return {title: this.input.title[n],description:this.input.description[n],imgurl: el.url}
        })
        console.log(payload)
        axios({
          method:'post',
          url:'/galleries',
          data: {
            data: payload
          }
        })
        .then(() => {
          this.$swal(
            '201 Success!',
              'Success add Galleries',
              'success'
            )
          this.$router.push({ name: 'Gallery' })
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  },
};
</script>

<style>
</style>
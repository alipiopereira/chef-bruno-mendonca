<template>
  <div class="dicas-page">
    <dicas-wave />

    <v-row justify="center">
      <v-col cols="12" md="6" sm="6" style="z-index: 1 !important;">
          <h1 class="ml-8">Faça da melhor forma possível</h1>
          <h3 class="font-weight-regular ml-8" >Você vai aprender muito mais! Vai experimentar novas dicas, descobrir curiosidades culinárias e muito mais.</h3>
      </v-col>
      <v-col cols="12" v-for="(index, i) in images" :key="i" md="6" sm="6">
        <v-img
          width="400"
          height="245"
          :src="index"
          contain
          style="z-index: 10000 !important;"
          @click="showImagePreview(i)"
        ></v-img>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="dialogDicas" fullscreen style="z-index: 11000 !important;">
        <v-card width="500" height="345" style="background-color: rgba(0, 0, 0, 0.2) !important;">
          <v-container fluid fill-height>
            <v-img
              width="500" 
              height="445"
              :src="imagePreview"
              contain
              style="z-index: 10000 !important;"
              @click="dialogDicas = !dialogDicas"
            ></v-img>

            <v-btn fab small color="white" class="close-icon ma-2" @click="dialogDicas = !dialogDicas">
              <close-icon />
            </v-btn>
          </v-container>
        </v-card>
      </v-dialog>
    </v-row>

    <v-img width="490" height="485" src="https://alipiopereira.github.io/chef-bruno-mendonca/static/img/bg-wave-dicas.png" class="img-box"></v-img>
  </div>
</template>

<script>
import dicasWave from "../components/waves/dicas-wave";
import closeIcon from "../components/icons/close-icon";
export default {
  name: "dicas-page",
  components: {
    "dicas-wave": dicasWave,
    "close-icon": closeIcon,
  },
  data: () => ({
    dialogDicas: null,
    images: [
      "https://alipiopereira.github.io/chef-bruno-mendonca/static/img/dicas-two.png",
      "https://alipiopereira.github.io/chef-bruno-mendonca/static/img/dicas-three.png",
      "https://alipiopereira.github.io/chef-bruno-mendonca/static/img/dicas-four.png",
    ],
    imagePreview: "",
  }),

  methods: {
    showImagePreview(v) {
      this.imagePreview = this.images[v];
      this.dialogDicas = true;
    },
  },
};
</script>

<style scoped>
.close-icon {
  position: absolute !important;
  top: 0;
  right: 0;
}

.dp-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-box {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
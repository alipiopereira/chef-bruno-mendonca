<template>
  <div class="sobre-page pl-8">
    <sobre-wave />
    
    <v-card flat class="box-description" style="z-index: 1 !important; background: none !important;">
      <h5 style="z-index: 1 !important;">Inicie hoje</h5>

      <h1 class="font-big box-copy rounded-lg"  style="z-index: 1 !important;">Domine a sua cozinha e viva um mundo delicioso</h1>

      <h6  style="z-index: 1 !important;">com Chef Bruno Mendonça</h6>

      <v-btn width="0" height="0" icon color="white" rounded class="pl-15 mt-1" style="text-transform: lowercase; z-index: 1 !important;">
        <v-icon style="background: #000" class="pa-3 rounded-pill mr-3" size="20">mdi-play</v-icon>
        Ver vídeo
      </v-btn>
    </v-card>

    <v-img width="690" height="715" src="../../static/img/premio-chef-mendonca.png" class="img-box"></v-img>
  </div>
</template>

<script>
import sobreWave from '../components/waves/sobre-wave'
export default {
  name: "sobre-page",
  components: { 
    'sobre-wave': sobreWave
   },
  data: () => ({}),
};
</script>

<style scoped>
  .font-big {
  font-size: 25pt;
}

.box-copy {
  position: relative;
  width: 250px;
}

.img-box {
  position: fixed;
  bottom: -50px;
  right: -110px;
}


@media (max-width: 600px) {
  .img-box {
    right: 0;
  }
}

@media (max-width: 450px) {
  .font-big {
  font-size: 15pt;
}

.box-description {
  margin-top: 150px;
}

.box-description h1 {
 background-color: rgba(255, 255, 255, 0.199);
 padding: .4rem;
}

  .img-box {
    position: fixed;
    width: 90rem !important;
    height: 45rem !important;
    top: -20px;
    filter: blur(1);
  }
}

.back-transparent {
 background-color: rgba(255, 255, 255, 0.199);
}
</style>
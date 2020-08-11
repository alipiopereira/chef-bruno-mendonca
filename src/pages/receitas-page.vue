<template>
  <div class="receitas-page pl-8">
    <receitas-wave />

    
    <h1 class="font-big box-copy">Saborosas receitas no conforto do seu lar</h1>

    <v-btn rounded color="#f6d465a8" href="https://api.whatsapp.com/send?phone=5586981958896&text=Quero receitas" class="text--white" style="text-transform: lowercase">
        <h5 class="font-weight-regular">Receba receitas no seu whatsapp</h5>
    </v-btn>

    <v-img width="490" height="485" src="https://alipiopereira.github.io/chef-bruno-mendonca/static/img/cozinharemcasa.png" class="img-box"></v-img>
  </div>
</template>

<script>
import receitasWave from "../components/waves/receitas-wave";
import closeIcon from "../components/icons/close-icon";
export default {
  name: "recceitas-page",
  components: {
    "receitas-wave": receitasWave,
    "close-icon": closeIcon,
  },
  data: () => ({
    dialogReceitas: null,
  })
};
</script>

<style scoped>
.font-big {
  font-size: 29pt;
}

.box-copy {
  position: relative;
  width: 250px;
}

.img-box {
  position: fixed;
  bottom: 90px;
  right: 0;
}


@media (max-width: 600px) {
  .img-box {
    right: 0;
  }
}

@media (max-width: 450px) {
  .img-box {
    width: 290px !important;
    height: 285px !important;
    bottom: 10px;
  }
}
</style>
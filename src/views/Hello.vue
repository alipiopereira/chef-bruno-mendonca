<template>
  <div class="pl-8">
    <profile-wave />

    <h3>Cozinhe</h3>

    <h1 class="font-big box-copy">Aprenda a cozinhar em casa</h1>

    <h6>com Chef Bruno Mendonça</h6>

    <v-img
      width="400"
      height="650"
      class="img-profile"
      src="https://scontent.fthe8-1.fna.fbcdn.net/v/t1.0-9/s960x960/56242739_790826761294316_6470574621782441984_o.jpg?_nc_cat=101&ccb=2&_nc_sid=110474&_nc_ohc=rx407KxxqeAAX-zkej1&_nc_ht=scontent.fthe8-1.fna&tp=7&oh=7b2419babf2b4881edf4bcbb745aa88c&oe=5FBCD715"
    ></v-img>

    <v-row justify="start" class="box-bottom mb-5">
      <v-slide-group>
        <v-slide-item v-for="(index, i) in images" :key="i" class="rounded-xl">
          <v-card width="160" height="260" flat class="ma-4 rounded-xl item">
            <v-img
              width="160"
              height="260"
              :src="images[i]"
              class="item"
            ></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </div>
</template>

<script>
import profileWave from "../components/waves/profile-wave";
export default {
  name: "init",
  components: {
    "profile-wave": profileWave,
  },
  data: () => ({
    images: [
      "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_960_720.jpg",
      "https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755__340.jpg",
      "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590__340.jpg",
      "https://cdn.pixabay.com/photo/2018/05/30/16/23/fruit-3441830__340.jpg",
      "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523__340.jpg",
      "https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg",
    ],
  }),
};
</script>

<style>
.font-big {
  font-size: 32pt;
}
.box-copy {
  position: relative;
  width: 250px;
}
.box-bottom {
  position: absolute;
  bottom: 0;
}
.img-profile {
  position: absolute;
  bottom: 0;
  right: 0;
}
@media (max-width: 600px) {
  .img-profile {
    right: -90px;
  }
}
@media (max-width: 450px) {
  .img-profile {
    width: 300px !important;
    height: 450px !important;
  }
  .item {
    width: 100px !important;
    height: 160px !important;
  }
}
</style>
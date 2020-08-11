<template>
  <div class="profile-page pl-8">
    <profile-wave />

    <h3>Cozinhe</h3>

    <h1 class="font-big box-copy">Aprenda a cozinhar em casa</h1>

    <h6>com Chef Bruno Mendonça</h6>

    <v-img
      width="400"
      height="650"
      class="img-profile"
      src="../../static/img/chef_profile_bruno_mendonca.png"
    ></v-img>

    <v-row justify="start" class="box-bottom mb-5">
      <v-slide-group>
        <v-slide-item v-for="(index, i) in images" :key="i" class="rounded-xl">
          <v-card width="160" height="260" flat class="ma-4 rounded-xl item">
            <v-img width="160" height="260" :src="images[i]" class="item"></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </div>
</template>

<script>
import profileWave from "../components/waves/profile-wave";
export default {
  name: "profile-page",
  components: {
    "profile-wave": profileWave,
  },
  data: () => ({
    images: [
      "https://instagram.fthe7-1.fna.fbcdn.net/v/t51.2885-15/e35/79466132_1212027222319763_6264881044037531799_n.jpg?_nc_ht=instagram.fthe7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=NsE7VlYndbcAX8FL9AV&oh=1a4e7a3ee1055fbf3ddf39d0c267d4b5&oe=5F4EBAEC",
      "https://instagram.fthe7-1.fna.fbcdn.net/v/t51.2885-15/e35/74411475_175020237034539_5830681514729199835_n.jpg?_nc_ht=instagram.fthe7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=mXSbk-Mnz6MAX9ufOPG&oh=9014c7c82643facbce04377d87376b81&oe=5F4D500F",
      "https://instagram.fthe7-1.fna.fbcdn.net/v/t51.2885-15/e35/69538703_2350385761894074_4900621703302531806_n.jpg?_nc_ht=instagram.fthe7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=XOko2vAQS5MAX9lyJbJ&oh=5a72433d0cb9056d573969e445d715be&oe=5F4C29F5",
      "https://instagram.fthe7-1.fna.fbcdn.net/v/t51.2885-15/e35/91163404_233077801220850_7246889468106626600_n.jpg?_nc_ht=instagram.fthe7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=m5jk3er0NOAAX9OGVkc&oh=8238612689c4eb647d8a8cd0af1ee896&oe=5F4EAC64",
      "https://instagram.fthe7-1.fna.fbcdn.net/v/t51.2885-15/e35/74880453_609363483164380_2155171176859205673_n.jpg?_nc_ht=instagram.fthe7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=KgScYmwkP-0AX9IOumg&oh=efe49b6c39a69c33a367bb8af970bd13&oe=5F4CB77B",
      "https://instagram.fthe7-1.fna.fbcdn.net/v/t51.2885-15/e35/71841365_2789698504408224_2448617500757356753_n.jpg?_nc_ht=instagram.fthe7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=ecssTv3OLTQAX_9HY1G&oh=b5e9ee2ac2155120d5b99ac72e8f0849&oe=5F4C7DF2",
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
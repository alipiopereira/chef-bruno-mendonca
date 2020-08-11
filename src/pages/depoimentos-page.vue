<template>
  <div class="depoimentos-page pl-8">
    <depoimentos-wave />
    <v-row>
    <v-col  md="6" sm="12"><h1 class="font-big box-copy">Aproveite, siga os conselhos deles, eles recomendam</h1></v-col>

      <v-col md="6" sm="12">
        <v-carousel
          cycle
          width="300"
          height="300"
          hide-delimiters
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-sheet
              height="100%"
              style="background: none !important;"
            >
              <v-row
                align="center"
                justify="center"
              >
                <h4 class="pa-10 font-weight-regular">{{ item.text }}</h4>

                <h5 class="font-weight-regular mr-4 rounded-xl pa-2 pl-3 pr-3" style="background: #f6d465a8;">{{ item.name }}</h5>

                <v-avatar
                  size="45"
                  color="white"
                  style="border: 2px solid #fff;"
                >
                  <v-img :src="item.avatar" :alt="item.name"></v-img>
                </v-avatar>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import depoimentosWave from '../components/waves/depoimentos-wave'
export default {
  name: "depoimentos-page",
  components: {
    'depoimentos-wave': depoimentosWave
   },
  data: () => ({
    items: [
      { name: 'Bia Medeiros', text: 'Que legal, eu aprendi muita coisa! Muito obrigado Chef, vc é demais.', avatar: 'https://images.unsplash.com/photo-1504911539020-cfb0f7887a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
      { name: 'Mariana Rocha', text: 'Não pensava que o curso seria tão completo, superou minhas expectativas. Realmente, vale a pena, estou tou gostanto muito...', avatar: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
      { name: 'Carlos Ferreira', text: 'Eu não sabia fazer nada na cozinha, estou aprendendo por necessidade, o chef Bruno Mendonça, tem uma ótima didática.', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
      { name: 'Alexa Lima', text: 'Pensei que sabia cozinhar, mas depois do curso estou bem mais apta a fazer vários pratos, a colocar a mão na massa - literalmente - foi uma experiência maravilhosa.', avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }
    ]
  }),
};
</script>

<style scoped>
.font-big {
  font-size: 22pt;
}

.box-copy {
  position: relative;
  width: 250px;
}
</style>
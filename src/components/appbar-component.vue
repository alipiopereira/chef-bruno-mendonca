<template>
  <div class="appbar-component">
    <v-navigation-drawer
      app
      fixed
      hide-overlay
      v-model="drawer"
      style="background: none !important;"
    >
      <div class="bg-drawer">
        <div @click.stop="drawer = !drawer" class="pa-2 close-icon cursor-hover">
          <arrow-left-icon />
        </div>

        <v-container fluid fill-height>
          <v-row justify="center" align="center">
            <v-col cols="6" class="text-right pa-1">
              <v-avatar size="60" style="border: 2px solid #eee;">
                <v-img src="../static/img/avatar_bruno_mendonca.png" alt="Bruno Mendonça"></v-img>
              </v-avatar>
            </v-col>

            <v-col cols="6" class="pa-1 mt-3">
              <h3 class="font-weight-regular">Chef</h3>
            </v-col>
          </v-row>

          <v-row justify="center">
            <router-link class="list rounded-pill pa-2 my-2" to="/" exact>
              <user-icon class="ml-3 mr-3" />
              <h5 class="font-weight-regular">Profile</h5>
            </router-link>

            <router-link class="list rounded-pill pa-2 my-2" to="/dicas" exact>
              <check-icon class="ml-3 mr-3" />
              <h5 class="font-weight-regular">Dicas</h5>
            </router-link>

            <router-link class="list rounded-pill pa-2 my-2" to="/receitas" exact>
              <list-icon class="ml-3 mr-3" />
              <h5 class="font-weight-regular">Receitas</h5>
            </router-link>

            <router-link class="list rounded-pill pa-2 my-2 mt-10" to="/depoimentos" exact>
              <chat-icon class="ml-3 mr-3" />
              <h5 class="font-weight-regular">Depoimentos</h5>
            </router-link>

            <router-link class="list rounded-pill pa-2 my-2" to="/curso" exact>
              <play-icon class="ml-3 mr-3" />
              <h5 class="font-weight-regular">Sobre o curso</h5>
            </router-link>
          </v-row>

          <v-row justify="center">
            <v-spacer></v-spacer>
            <v-btn
              icon
              width="0"
              height="0"
              href="https://www.facebook.com/bmendonca3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              icon
              width="0"
              height="0"
              href="https://www.instagram.com/chefbrunomendonca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-row>

          <v-row justify="center">
            <v-btn
              width="60%"
              height="40"
              href="https://go.hotmart.com/B38764762A?dp=1"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-xl btn-comprar"
            >
              <h3>Comprar</h3>
            </v-btn>
          </v-row>
        </v-container>
      </div>
    </v-navigation-drawer>

    <v-app-bar app dark fixed flat style="background: none !important;">
      <div
        @click.stop="drawer = !drawer"
        v-if="!drawer"
        class="pa-2 cursor-hover hidden-sm-and-down"
      >
        <menu-icon />
      </div>

      <div class="pa-0 cursor-hover hidden-sm-and-up">
        <v-layout row justify-center>
          <v-dialog
            v-model="dialog"
            fullscreen
            transition="dialog-bottom-transition"
            :overlay="false"
            style="z-index: 1000000000000 !important;"
          >
            <template v-slot:activator="{ on }">
              <v-btn text width="0" height="0" v-on="on" class="ma-0 pa-0">
                <menu-icon />
              </v-btn>
            </template>
            <v-card class="dialog-menu">
              <v-toolbar dark style="background: none !important;">
                <v-btn dark icon width="0" height="0" class="ml-3" @click.native="dialog = !dialog">
                  <close-icon class="ml-2" />
                </v-btn>
                <v-toolbar-title class="ml-2">Menu</v-toolbar-title>
              </v-toolbar>

              <v-container fluid fill-height class="mt-10">
                <v-row justify="center" align="center">
                  <v-col cols="6" class="text-right pa-1">
                    <v-avatar size="60" style="border: 2px solid #eee;">
                      <v-img src="../static/img/avatar_bruno_mendonca.png" alt="Bruno Mendonça"></v-img>
                    </v-avatar>
                  </v-col>

                  <v-col cols="6" class="pa-1 mt-3">
                    <h3 class="font-weight-regular">Chef</h3>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <router-link
                    class="list rounded-pill pa-2 my-2"
                    to="/"
                    exact
                    @click.native="dialog = !dialog"
                  >
                    <user-icon class="ml-3 mr-3" />
                    <h5 class="font-weight-regular">Profile</h5>
                  </router-link>

                  <router-link
                    class="list rounded-pill pa-2 my-2"
                    to="/dicas"
                    exact
                    @click.native="dialog = !dialog"
                  >
                    <check-icon class="ml-3 mr-3" />
                    <h5 class="font-weight-regular">Dicas</h5>
                  </router-link>

                  <router-link
                    class="list rounded-pill pa-2 my-2"
                    to="/receitas"
                    exact
                    @click.native="dialog = !dialog"
                  >
                    <list-icon class="ml-3 mr-3" />
                    <h5 class="font-weight-regular">Receitas</h5>
                  </router-link>

                  <router-link
                    class="list rounded-pill pa-2 my-2 mt-10"
                    to="/depoimentos"
                    exact
                    @click.native="dialog = !dialog"
                  >
                    <chat-icon class="ml-3 mr-3" />
                    <h5 class="font-weight-regular">Depoimentos</h5>
                  </router-link>

                  <router-link
                    class="list rounded-pill pa-2 my-2"
                    to="/curso"
                    exact
                    @click.native="dialog = !dialog"
                  >
                    <play-icon class="ml-3 mr-3" />
                    <h5 class="font-weight-regular">Sobre o curso</h5>
                  </router-link>
                </v-row>

                <v-row justify="center" class="mt-5">
                  <v-spacer></v-spacer>
                  <v-btn
                    icon
                    width="0"
                    height="0"
                    href="https://www.facebook.com/bmendonca3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    icon
                    width="0"
                    height="0"
                    href="https://www.instagram.com/chefbrunomendonca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <v-icon>mdi-instagram</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-row>

                <v-row justify="center" class="mt-10">
                  <modal-send-message />
                </v-row>

                <v-footer app style="background: none !important;">
                  <span class="white--text">Created by allipiopereira</span>
                  <v-spacer></v-spacer>
                  <span class="white--text">&copy; 2020</span>
                </v-footer>
              </v-container>
            </v-card>
          </v-dialog>
        </v-layout>
      </div>

      <h4 class="font-weight-medium ml-2">{{ this.$router.app.$route.name }}</h4>

      <v-spacer></v-spacer>
      <h5 class="font-weight-regular ml-2 d-none d-sm-none d-md-flex">1º Master Chef</h5>
      <v-spacer></v-spacer>
      <h5 class="font-weight-regular d-none d-sm-none d-md-flex">Aprenda em casa</h5>
      <v-spacer></v-spacer>
      <h5 class="font-weight-regular d-none d-sm-none d-md-flex">Cozinhe comigo</h5>
      <v-spacer></v-spacer>

      <modal-send-message v-if="drawer" class="d-none d-sm-none d-md-flex" />

      <v-btn
        v-if="!drawer"
        height="40"
        href="https://go.hotmart.com/B38764762A?dp=1"
        target="_blank"
        rel="noopener noreferrer"
        text
        class="rounded-xl btn-comprar-appbar mr-2"
      >
        <h3 style="color: #fff !important;">Comprar</h3>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import arrowLeftIcon from "../components/icons/arrow-left-icon";
import menuIcon from "../components/icons/menu-icon";
import userIcon from "../components/icons/user-icon";
import checkIcon from "../components/icons/check-icon";
import listIcon from "../components/icons/list-icon";
import chatIcon from "../components/icons/chat-icon";
import playIcon from "../components/icons/play-icon";
import closeIcon from "../components/icons/close-icon";
import modalSendMessage from "./ModalSendMessage";
export default {
  name: "appbar-component",
  components: {
    "arrow-left-icon": arrowLeftIcon,
    "menu-icon": menuIcon,
    "user-icon": userIcon,
    "check-icon": checkIcon,
    "list-icon": listIcon,
    "chat-icon": chatIcon,
    "play-icon": playIcon,
    "close-icon": closeIcon,
    "modal-send-message": modalSendMessage,
  },
  data: () => ({
    drawer: null,
    dialog: null,
  }),
};
</script>

<style>
.list {
  position: relative;
  display: flex;
  align-items: center;
  height: 30px !important;
  width: 70%;
  cursor: pointer;
  text-decoration: none;
}

.list h5 {
  color: #000;
}

.list:hover {
  background-color: rgba(255, 255, 255, 0.199);
}

.close-icon {
  position: absolute;
  top: 3px;
  left: 3px;
}

.cursor-hover:hover {
  cursor: pointer;
}

.btn-action {
  position: relative;
  bottom: 0;
  border: 1px solid #000;
}

.btn-comprar {
  background-image: linear-gradient(
    120deg,
    #f6d365 0%,
    #fda085 100%
  ) !important;
  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 9px 12px 1px rgba(0, 0, 0, 0.14);
}

.btn-comprar-appbar {
  background-color: rgba(255, 255, 255, 0.199) !important;
  -webkit-filter: blur(0.5px);
  -moz-filter: blur(0.5px);
  -o-filter: blur(0.5px);
  -ms-filter: blur(0.5px);
  filter: blur(0.5px);
}

.dialog-menu {
  background-image: linear-gradient(
    120deg,
    #f6d365 0%,
    #fda085 100%
  ) !important;
}
</style>
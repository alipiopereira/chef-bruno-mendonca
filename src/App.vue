<template>
  <div id="app">
    <v-app>
      <Appbar />
      <v-main>
        <v-container fluid>
          <v-row justify="center">
            <v-col>
              <Hello />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Appbar from "./components/Appbar";
import Hello from "./views/Hello";
export default {
  components: {
    Appbar,
    Hello,
  },
  data: () => ({}),

  mounted() {
    //remove border navigation drawer
    const removeElements = (e) => e.forEach((el) => el.remove());
    removeElements(document.querySelectorAll(".v-navigation-drawer__border"));
  },
};
</script>

<style>
#app {
  font-family: "Montserrat Alternates", sans-serif;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}

body {
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}

.bg-drawer {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.041);
}

.active {
  background-color: rgba(255, 255, 255, 0.199);
}

.shadow {
  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 9px 12px 1px rgba(0, 0, 0, 0.14);
}
</style>
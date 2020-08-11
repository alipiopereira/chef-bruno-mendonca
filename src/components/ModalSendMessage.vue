<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500px" style="border-radius: 10px;">
      <template v-slot:activator="{ on }">
        <v-btn text rounded outlined color="white" v-on="on" class="font-weight-regular active" style="text-transform: lowercase">Chamar no <v-icon class="ml-2">mdi-whatsapp</v-icon></v-btn>
      </template>
      <v-card :dark='dark' style="border-radius: 10px;">
        <v-card-title>
          <v-icon color="green">mdi-whatsapp</v-icon>
          <v-spacer></v-spacer>

          <span>Sua messagem</span>

          <v-spacer></v-spacer>
          <v-btn small rounded color="red" @click="dialog = false" style="box-shadow: none;"><v-icon color="white">mdi-close</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-container class="ma-0 pa-0">
            <v-row class="ma-0 pa-0 ml-auto mr-auto">
              <v-col cols="12" sm="12" md="12" class="ma-0 pa-0">
                <v-text-field label="Adicione seu nome*" background-color="#fefefe" class="ma-1 pa-1" v-model="firstName" required hint="Requerido"></v-text-field>
              </v-col>

              <v-col cols="12" sm="12"  class="ma-0 pa-0">
                <v-autocomplete
                  :items="['Gostei', ' Eu quero', ' Quero dicas', ' Quero receitas']"
                  label="Interesses"
                  multiple
                  :dark='dark'
                  chips
                  small-chips
                  solo
                  :msgEdit='msgEdit'
                  v-model="select"
                  class="ma-0 pa-0"
                ></v-autocomplete>
              </v-col>

              <v-col cols="12" sm="12" class="ma-0 pa-0">
                <v-textarea
                  solo
                  name="input-7-4"
                  v-model="msg"
                  class="ma-0 pa-0"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small class="msmalla-0 pa-0">*campos requeridos</small>
        </v-card-text>
        <v-card-actions style="background-color: ##f5f5f5">
          <v-spacer></v-spacer>
          <v-btn rounded block color="green" :disabled="firstName.length == 0" :href="url" @click="sendMessage" >
            Enviar
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'ModalSendMessage',

  props: {dark: Boolean},

  data() {
    return {
      dialog: false,
      firstName: 'Usário',
      lastName: '',
      msg: '',
      newMsg: '',
      interesses: '',
      select: ['Gostei'],
    }
  },

  computed: {
    msgEdit() {
      return this.msg = `${'Olá! Me chamo ' + this.firstName + ''}`
    },

    url() {
      return `${'https://api.whatsapp.com/send?phone=5586981958896&text='+this.newMsg+'\n'}`
    }
  },

  methods: {
    sendMessage() {
      this.newMsg = this.msg.replace(' ', '%20')
      this.interesses = this.select.toString()
      return console.log(this.newMsg += '%0A%0AInteresses: ' + this.interesses.replace(' ', '%20'))
    }
  },
}
</script>

<style>

</style>



<template>
  <v-app>
    <v-app-bar app>
      <a href="https://github.com/14nrv/vue-form-json" target="_blank">vue-form-json</a>
    </v-app-bar>
    <v-main>
      <MainView/>
    </v-main>
  </v-app>
</template>

<script>
import MainView from './components/MainView';


export default {
  name: 'App',

  components: {
    MainView,
  },

  data: () => ({
    //
  }),
};
</script>

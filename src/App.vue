<template>
  <v-app>
    <v-app-bar app>
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

<template>
  <v-container>
    <v-row >
      <v-col cols="12">
        <v-card>
              <VueForm />
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import VueForm from '@/components/VueForm';

  export default {
    name: 'MainView',

    components: {
      VueForm
    },

    data: () => ({
    }),
  }
</script>

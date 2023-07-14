<template>
  <v-container>
    <v-row>
      <Carrusel-comp/>
    </v-row>
    <v-row>
      <CardHome-comp/>
    </v-row>
  </v-container>
</template>

<script>
  import Carrusel from '@/components/Carrusel.vue'
  import CardHome from '@/components/CardHome.vue'
  export default {
    name: 'Home-view',

    components: {
      'Carrusel-comp':Carrusel,
      'CardHome-comp':CardHome,

    },
  }
</script>

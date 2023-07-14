<template>
  <v-app>
    <nav-comp/>

    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    'nav-comp':NavBar,
    'Footer':Footer
    }
};
</script>

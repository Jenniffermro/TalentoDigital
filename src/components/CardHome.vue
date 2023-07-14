<template>
<v-container>
   <v-card v-for="producto in tiposproductos" :key="producto.title"
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="producto.image"
      height="200px"
    ></v-img>

    <v-card-title>
     {{producto.name}}
    </v-card-title>
    </v-card>
</v-container>
     
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'CardHome-comp',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
      ...mapState(['tiposproductos'])
    },
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>
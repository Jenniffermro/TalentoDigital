<template>
   <v-carousel height="300px"
      width="450px">
    <v-carousel-item
      v-for="mejorproducto in mejoresproductos"
      :key="mejorproducto.title"
      
      class="max auto"
      :src="mejorproducto.image"

    >
     
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            {{mejoresproductos.title}}
          </div>
        </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import {mapActions, mapState} from  'vuex'
export default {
    name: 'Carrusel-comp',
    // props: {},
    data: function(){
        return {
      
      }
    },
    computed: {
      ...mapState(['mejoresproductos'])
    },
    methods: {
      ...mapActions(['fetchInfo'])
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
      this.fetchInfo();
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>

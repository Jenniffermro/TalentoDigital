<template>
<v-container>
  <v-row>
    <v-col>
      <Cart/>
    </v-col>
    <v-col v-for="producto in ropaHombre" :key="producto.id">
    <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="orange"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="producto.image"
    ></v-img>

    <v-card-title>{{producto.title}}</v-card-title>

    <v-card-text>
    
        
        <div class="grey--text ms-4">
         {{producto.description}}
        </div>
      

      <div class="my-4 text-subtitle-1">
        
      </div>

      <div></div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group
        
        active-class="orange accent-4 white--text"
        column
      >
        <v-chip>{{producto.price}}</v-chip>

       

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="flex yellow lighten-2"
        text
        @click="agregar_carrito(producto)"
      ><v-icon>mdi-cart</v-icon>
        Agregar 
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>
  </v-row>
</v-container>

</template>

<script>
import { mapActions, mapState } from 'vuex'
import Cart from '@/components/Cart.vue'
export default {
    name: 'CardHombre',
    props: {
    },
    data: function(){
        return {
          ropaHombre: [],
        }
    },
    computed: {
      ...mapState(['productos'])
    },
    methods: {
      ...mapActions(['addProductToCart', 'agregar_carrito']),
        addCart(){
            let prod={
                id:this.producto.id,
                nombre:this.producto.nombre,
                precio_promo:this.producto.precio_promo,
                count:1,
            }
            this.addProductToCart(prod)
        },
      async fetchHombre(){
        
      try{
      let response = await fetch('/ropaHombre.json')
      let json = await response.json()
      console.log(json)
      this.ropaHombre=json
      console.log(this.ropaHombre)
       }
      
      catch(error){
      console.log(error)
    }
    }
   },
    // watch: {},
    components: {
      Cart
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
      this.fetchHombre()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>
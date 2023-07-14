<template>
<v-container>
<div v-for="producto in carrito" :key="producto.id">
        <div>{{producto.image}}</div>
        <div>{{producto.price}}</div>
        <div>{{producto.title}}</div>
        
    </div>
</v-container>
    
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['carrito'])
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
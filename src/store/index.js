import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mejoresproductos:[],
    tiposproductos:[],
    carrito:[],

  },
  getters: {
  },
  mutations: {
    MEJORES_PRODUCTOS(state,mejoresproductos){
      state.mejoresproductos = mejoresproductos
    },
    TIPOS_PRODUCTOS(state,tiposproductos){
      state.tiposproductos = tiposproductos
    },
    AGREGAR_CARRITO(state, producto){
      state.carrito.push(producto)
    }
  },
  actions: {
    async fetchInfo({commit}){
      try{
      let response = await fetch('/home.json')
      let json = await response.json()
      console.log(json)
      let mejoresproductos = json.mejoresproductos
      let tiposproductos = json.tiposproductos
      commit('MEJORES_PRODUCTOS',mejoresproductos)
      commit('TIPOS_PRODUCTOS',tiposproductos)
    }
    catch(error){
      console.log(error)
    }
  },
  agregar_carrito({commit}, producto){
    commit('AGREGAR_CARRITO',producto)
  }
 },
  modules: {
  }
}) 

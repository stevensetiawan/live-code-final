import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries:[],
    reports:[]
  },
  mutations: {
    showCountries(state,payload){
      state.countries=payload
      console.log("state.countries",state.countries)
    },
    showReports(state,payload){
      state.reports=payload
      console.log("state.countries",state.reports)
    },
    deleteReport(state,id){
      state.reports = state.reports.filter(report => report.id != id)
    },
    updateReport(state,payload){
      state.reports = payload
    }
  },
  actions: {

    getCountries(context){
      axios({
        url:"http://localhost:3000/country",
        method:"GET",
        headers:{token : localStorage.getItem("token")}
      }).then(response =>{
        console.log(response,"ini response")
        context.commit('showCountries',response.data)
      })
    },

    getReport(context){
      axios({
        url:"http://localhost:3000/report",
        method:"GET",
        headers:{token : localStorage.getItem("token")}
      }).then(response =>{
        console.log(response,"ini response")
        context.commit('showReports',response.data)
      })
    },
    deleteArr(context,id){
      context.commit('deleteReport',id)
    },
    addReport(context,payload){
      context.commit("updateReport",payload)
    }
    
  },
  modules: {
  }
})

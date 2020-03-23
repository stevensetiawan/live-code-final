
<template>
  <div>
    <b-button variant="primary" @click.prevent="logout">Logout</b-button>
    <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Cases:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input id="input-1" v-model="cases" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Country:" label-for="input-2">
        <b-form-input id="input-2" v-model="CountryId" required></b-form-input>
      </b-form-group>

      <b-button @click.prevent="addReport" variant="primary">Add</b-button>
    </b-form>
    <div>
     <div class="row">
      <div class="col-6" v-for="report in $store.state.reports" :key="report.id">
        <Card2 :propReport="report"></Card2>
     </div>
    </div>
  </div>
    </div>
  </div>
</template>
<script>
import Card2 from "../components/Card2"
import axios from "axios"
export default {
  components: {
    Card2
  },
  data(){
      return{
          cases:0,
          CountryId:0
      }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("Login");
    },
    addReport(){
        axios({
            url:"http://localhost:3000/report",
            method:"post",
            data:{
                cases:this.cases,
                CountryId:this.CountryId
            },
            headers:{token: localStorage.getItem("token")}
        }).then(response=>{
            this.cases=0,
            this.CountryId=0
            this.$store.dispatch("addReport",response.data)
        })
    }
    
  },
  created(){
        this.$store.dispatch("getReport")
    }
};
</script>

<style>
</style>
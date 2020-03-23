
<template>
  <div>
    <b-button variant="primary" @click.prevent="logout">Logout</b-button>
     <div class="row">
      <div class="col-6" v-for="country in $store.state.countries" :key="country.id">
        <Card :propCountry="country"></Card>
     </div>
    </div>
  </div>
</template>
<script>
import Card from "../components/Card"
export default {
  components: {
    Card
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("Login");
    },
    
  },
  created(){
        this.$store.dispatch("getCountries")
    }
};
</script>

<style>
</style>
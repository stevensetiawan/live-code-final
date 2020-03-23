<template>
 
        <div>
          <b-card :title="this.propCountry.name">
            <b-card-text>deaths: {{this.propCountry.deaths}}</b-card-text>
            <b-card-text>recovered: {{this.propCountry.recovered}}</b-card-text>
            <b-card-text>cases: {{this.propCountry.cases}}</b-card-text>
          </b-card>
        </div>
     
</template>
<script>
export default {
    props:['propCountry']
    
}
</script>
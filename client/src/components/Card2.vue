<template>
 
        <div>
          <b-card :title="this.propReport.cases">
            <b-card-text>CountryId: {{this.propReport.CountryId}}</b-card-text>
            <b-button variant="primary" @click.prevent="deleteReport">Delete</b-button>
          </b-card>
        </div>
     
</template>
<script>
import axios from "axios"
export default {
    props:['propReport'],
    data(){
        return{
            id:this.propReport.id
        }
    },
    methods:{
        deleteReport(){
            axios({
                url:"http://localhost:3000/report/"+this.id,
                method:"delete",
                headers:{token: localStorage.getItem("token")}
            }).then(()=>{
                this.$router.push("Report")
                this.$store.dispatch('deleteArr',this.id)
            })
        }
    }
    
}
</script>
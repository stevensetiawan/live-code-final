<template>
  <div>
    <b-form  @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Username:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input id="input-1" v-model="username" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input id="input-2" v-model="password" required></b-form-input>
      </b-form-group>

      <b-button @click.prevent=LoginUser variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      this.username = "";
      this.password = "";
    },

    LoginUser() {
      axios({
        url: "http://localhost:3000/user/login",
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(response => {
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        this.$router.push("Country");
      });
    }
  }
};
</script>
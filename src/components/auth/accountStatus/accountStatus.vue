<template lang="html">
    <div class="">
      <auth-header></auth-header>
      <div class="container cl-height">
        <div class="loader loader-default" data-text="Activating User..." data-blink id="registrationLoader"></div>
        <template>
          <div class="loader"></div>
          <div class="">
            <h2>Account Status</h2>
            <div class="alert alert-success fade in" v-if="accountStatus === true">
              <a href="#" class="close" data-dismiss="alert" aria-label="close"></a>
              <strong>Success!</strong> Your Account is activated succesfully.
            </div>
            <div class="alert alert-danger fade in" v-if="accountStatus === false">
              <a href="#" class="close" data-dismiss="alert" aria-label="close"></a>
              <strong>Failure!</strong> Your activation code is expired or invalid.
            </div>
          </div>
          <!-- <router-link to="/" tag="button" class="btn btn-success">Login </router-link> -->
          <div class="loader">
            <div id="largeBox"></div>
            <div id="smallBox"></div>
          </div>
        </template>
      </div>
      <auth-footer></auth-footer>
    </div>

</template>

<script>
import Header from '../header/unauthHeader.vue';
import Footer from '../header/unauthFooter.vue';
export default {
  name: 'account',
  components: {
      'auth-header':Header,
      'auth-footer': Footer
  },
  data() {
    return{
        accountStatus: ''
    }
  },
  mounted() {
    if (this.$route.query.code == null) {
      this.accountStatus = false
    } else {
      $("#registrationLoader").addClass( "is-active" );
      var activationURL = this.apiURL + '/Account/activateuser?code=' + this.$route.query.code
      this.$http.post(activationURL).then(response => {
        $("#registrationLoader").removeClass( "is-active" );
        console.log(response);
        this.accountStatus = true
      }, response => {
        $("#registrationLoader").removeClass( "is-active" );
        console.log(response);
        this.accountStatus = false
      })

    }
  }
}
</script>

<style scoped>

</style>

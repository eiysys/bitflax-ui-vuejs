<template lang="html">

  <div class="">
    <auth-header></auth-header>
    <div class="container cl-height">
      <div class="loader loader-default" data-text="Loading..." data-blink id="registrationLoader"></div>
      <template>
        <div class="loader"></div>
        <h2>Google 2 Factor Authentication Removal Status</h2>
        <br>
        <div class="alert alert-success fade in" v-if="accountStatus">
          <a href="#" class="close" data-dismiss="alert" aria-label="close"></a>
          <strong>Success!</strong> Removing of Google-2-Factor security successful.
        </div>
        <div class="alert alert-danger fade in" v-if="!accountStatus">
          <a href="#" class="close" data-dismiss="alert" aria-label="close"></a>
          <strong>Failure!</strong> Problem in removing the Google-2-Factor security. Please try again later.
        </div>
        <router-link to="/" tag="button" class="btn btn-success">Login </router-link>
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
        accountStatus: false
    }
  },
  mounted() {
    $("#registrationLoader").addClass( "is-active" );
    if (this.$route.query.code == null) {
      this.accountStatus = false
    } else {
      var token = this.$route.query.code
      token = token.split(' ').join('+')
      var activationURL = this.apiURL + '/Security/removeg2factor/?code=' +  token

      this.$http.post(activationURL).then(response => {
        this.accountStatus = true
        console.log(response);
        $("#registrationLoader").removeClass( "is-active" );
      }, response => {
        this.accountStatus = false
        $("#registrationLoader").removeClass( "is-active" );
        console.log(response);
      })

    }
  }
}
</script>

<style>
  .cl-height {
    padding-top: 12%;
    padding-bottom: 15%
  }
</style>

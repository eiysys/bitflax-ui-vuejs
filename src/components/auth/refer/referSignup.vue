<template lang="html">
    <div class="">
      <router-link to="/signup" tag="button" id="gotoSignup">foo</router-link>
      <div class="loader loader-default is-active" data-text="Please Wait.." data-blink id="registrationLoader"></div>
    </div>

</template>

<script>
export default {
  name: 'account',
  data() {
    return{
        accountStatus: false
    }
  },
  mounted() {

    console.log(this.$route.query.ref);
    var userReferer = this.$route.query.ref
    if (userReferer) {
      var findSponsorURL = this.apiURL + '/Account/checksponser/?sponser=' + userReferer
      this.$http.get(findSponsorURL).then(response => {
        console.log(response);
        localStorage.setItem('bitflax:confirmedSponsor', userReferer);
        window.location = '/#/signup'
      }, response => {
        console.log(response);
        localStorage.removeItem('bitflax:confirmedSponsor');
        window.location = '/#/signup'
      })

    } else {
      window.location = '/#/signup'
    }

  }
}
</script>

<style>
#gotoSignup {
  display: None
}
</style>

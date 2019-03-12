<template>
    <div>
      <auth-header></auth-header>
      <div class="container-fluid">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <div class="verification-block">
                          <h2>Google app based Two-Factor authentication</h2>
                          <span>Attempting to log in.</span>
                          <div class="alert alert-danger" v-if="authFailed">
                            We couldn't verify your google app based Two-Factor authentication code. Please make sure you typed in the right code correctly.
                          </div>
                          <img src="../../../assets/img/authenticator-security.png" class="img-responsive center-block">
                          <p>Enter the six-digit code number from your mobile app here.</p>

                          <div class="row">
                            <div class="col-md-1">

                            </div>
                            <div class="col-md-10">
                              <input type="text" name="code" v-model="G2ACode.OTP"
                                   :class="{'input': false, 'is-danger': errors.has('code') }"
                                     placeholder="000000" class="form-control">
                            </div>

                          </div>
                          <br>
                                 <p style="color:red; font-size:13px" v-if="codeFieldRequired">Code field required</p>
                                 <p style="color:red; font-size:13px" v-if="codeNumberOnlyError">Code field must contain an integer</p>
                          <button type="button" class="btn btn-success" name="button" @click="validateBeforeSubmit">Verify</button>
                          <!-- <a href="/removeG2A" class="text-remove-center">Remove G2FA</a> -->
                          <br><router-link to="/removeG2A" class="forgot_links">Remove G2FA</router-link>
                          <!-- <router-link to="/" tag="button" id="gotohome" style="display:none">twofactor</router-link> -->
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <auth-footer></auth-footer>
    </div>

</template>

<script>
import Header from '../header/unauthHeader.vue';
import Footer from '../header/unauthFooter.vue';
    export default {

        name: 'twofactor',
        components: {
            'auth-header':Header,
            'auth-footer': Footer
        },
        data() {
            return {
                G2ACode: {
                  OTP: '',
                  SecurityCode: ''
                },
                codeFieldRequired: false,
                codeNumberOnlyError: false,
                authFailed: false,

            }
        },
        methods: {
            validateBeforeSubmit() {

                this.codeFieldRequired = false
                this.codeNumberOnlyError = false
                this.authFailed = false

                var codeValidated = false


                // Validation
                if (this.G2ACode.OTP.trim() == '') {
                  this.codeFieldRequired = true
                  this.codeNumberOnlyError = false
                } else {
                  if(!/^\d+$/.test(this.G2ACode.OTP.trim())) {
                    this.codeNumberOnlyError = true
                    this.codeFieldRequired = false
                  } else {
                    codeValidated = true
                    this.codeNumberOnlyError = false
                    this.codeFieldRequired = false
                  }
                }

                if (codeValidated) {

                  var G2A_url = this.apiURL + '/security/googleauth'
                  this.$http.post(G2A_url, this.G2ACode).then(response => {
                    console.log(response);
                    localStorage.setItem('bitflax:userAccessToken', response.body.value.access_token);
                    var localStorageData = JSON.stringify(response.body.value)
                    var encrypted = CryptoJS.AES.encrypt(localStorageData, this.MySECRET);
                    localStorage.setItem('bitflax:userData', encrypted);
                    // $("#gotohome").click()
                    window.location = "/";
                    // this.$route.router.go('/');
                    // this.$router.push('/')


                  }, response => {
                    this.authFailed = true
                    console.log(response)
                  })
                }

            }
        },
        created() {
          this.G2ACode.SecurityCode = localStorage.getItem('bitflax:G2AToken');
        }
    }
</script>
<style media="screen">
.verification-block {
  width: 600px;
  margin: 5% auto;
  background: #eee;
  padding: 20px;
  text-align: center;
  max-width: 100%;
  box-shadow: 0px 0px 9px #CCC;
}
</style>

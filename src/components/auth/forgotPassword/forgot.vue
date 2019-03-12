<template>
  <div class="">
    <auth-header></auth-header>
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="verification-block v-two">
              <h2>Forgot Password</h2>
              <span>Enter your email and we will send a password reset link to you.</span>
              <br>
              <div class="alert alert-success fade in" v-if="forgetEmailSuccess">
                Please check your email for instructions to reset your password.
              </div>
              <div class="alert alert-danger fade in" v-if="forgetEmailFailed">
                Can not find that email in our records.
              </div>
              <div class="form-group">
                <!-- <label>Email</label> -->
                <div class="row">
                  <div class="col-md-2">
                    <!-- <label for="">Email <br> Address : </label> -->
                  </div>
                  <div class="col-md-8 text-center">
                    <input style="width:100%" type="email" name="" placeholder="Email Address" class="form-control" v-model="email">
                  </div>
                </div>
                <br>
                 <p style="color:red; font-size:12px" class="text-center" v-if="validEmail">Please enter valid email address</p>
                 <div class="row">
                  <div class="col-md-2">

                  </div>
                   <div class="col-md-8 text-center" style="overflow-x:true">
                   <div class="text-center-cltwo">
                     <div id='html_element'></div>
                     </div>
                   </div>
                   <div class="col-md-2">

                   </div>
                 </div>
                 <br>
                 <p style="color:red; font-size:12px" class="text-center" v-if="capchaError">Please verify captcha</p>
                 <button type="button" name="button" class="btn btn-success" v-on:click="sendLink" style="text-align:center">Send Link</button>
                 <br><br>Go back to <router-link to="/login">login </router-link>
              </div>
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
  name: 'forgot',
  components: {
      'auth-header':Header,
      'auth-footer': Footer
  },
  data() {
    return {
      email: '',
      validEmail: false,
      forgetEmailFailed: false,
      forgetEmailSuccess: false,
      capchaError: false
    }
  },
  methods: {
    resetCaptcha:  function () {
      setTimeout(function(){
        grecaptcha.render('html_element', {
              'sitekey' : '6LepqTsUAAAAAKXT4wM9y7FvRB9_5q6GXMnV8m35',
              'callback' : function (response) {
                 if (response) {
                   localStorage.setItem("forgetCaptcha", "true");
                 }
              }

         });
      }, 500);
    },
    sendLink: function () {

      // Validation
      this.validEmail = false;
      this.forgetEmailFailed = false;
      this.forgetEmailSuccess = false;
      this.capchaError = false;

      var emailValidated = false
      var captchaValidated = false

      // Capcha Validation

      var captchaStatus = localStorage.getItem("forgetCaptcha");
      if (captchaStatus == "true") {
        captchaValidated = true
      } else {
        this.capchaError = true
      }

      // if (grecaptcha.getResponse() == ""){
      //     this.capchaError = true
      // } else {
      //     this.capchaError = false
      //     captchaValidated = true;
      // }

      // Email Validation
      if (this.email.trim() == '') {
        this.validEmail = true
      } else {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email.trim())) {
          this.validEmail = true
        } else {
          emailValidated = true
        }
      }

      if (emailValidated && captchaValidated) {
        var forgotURL = this.apiURL + '/Account/forgetpasslink?email=' + this.email
        this.$http.post(forgotURL).then(response => {
          this.forgetEmailSuccess = true
        }, response => {
          this.forgetEmailFailed = true
        })
      }


    }
  },
  mounted() {
    this.resetCaptcha()
    localStorage.setItem("forgetCaptcha", "false");
  }
}
</script>

<style lang="css">
.g-recaptcha div
{
    display: block;
    margin-right: auto;
    margin-left: auto;
}
h2 {
  font-family: lato-light
}
</style>

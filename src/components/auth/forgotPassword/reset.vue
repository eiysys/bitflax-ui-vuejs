<template>
  <div class="">
    <auth-header></auth-header>
    <div class="container">
      <!-- <div class="loader loader-default" data-text="Activating User..." data-blink id="registrationLoader"></div> -->
			<div class="row">
				<div class="col-md-12">
					<div class="verification-block">
						<h2>Reset Password</h2>
						<span>Enter your new password below to reset your password.</span>
            <div class="alert alert-success fade in" v-if="resetEmailSuccess">
              Please check your email for instructions to reset your password.
            </div>
            <div class="alert alert-danger fade in" v-if="resetEmailFailure">
              Reset password failed.
            </div>
            <div class="form-group row">
              <!-- <label for="inputPassword" class="col-sm-2 col-form-label">Password</label> -->
              <div class="col-md-2">

              </div>
              <div class="col-md-8">
                <input type="password" class="form-control" v-model="password" placeholder="Password">
                <p style="color: red; font-size:15px" v-if="passwordEmptyError">Please enter  password</p>
                <p style="color: red; font-size:15px" v-if="minPasswordLengthError">Password should have more than 6 characters.</p>
                <p style="color: red; font-size:15px" v-if="maxPasswordLengthError">Password should have less than 20 characters.</p>
                <p style="color: red; font-size:15px" v-if="passwordValidError">Please enter valid password.</p>
                <!-- <p style="color: red; font-size:15px" v-if="mismatchError">Password Mismatch.</p> -->

              </div>

            </div>
            <div class="form-group row">
              <!-- <label for="inputPassword" class="col-sm-2 col-form-label">Re-enter Password</label> -->
              <div class="col-md-2">

              </div>
              <div class="col-md-8">
                <input type="password" class="form-control" v-model="passwordAgain" placeholder="Re-enter Password">
                <p style="color: red; font-size:15px" v-if="passwordAgainEmptyError">Please enter password</p>
                <p style="color: red; font-size:15px" v-if="minPasswordAgainLengthError">Password should have more than 6 characters.</p>
                <p style="color: red; font-size:15px" v-if="maxPasswordAgainLengthError">Password should have less than 20 characters.</p>
                <p style="color: red; font-size:15px" v-if="passwordAgainValidError">Please enter valid password.</p>
                <p style="color: red; font-size:15px" v-if="mismatchError">Password Mismatch.</p>
              </div>
            </div>
            <div class="text-center">
                <!-- <div class="g-recaptcha" data-sitekey="6LepqTsUAAAAAKXT4wM9y7FvRB9_5q6GXMnV8m35"></div> -->
                <div class="text-center-cltwo">
                  <div id='html_element'></div>
                </div>

                <p style="color: red; font-size:15px" v-if="capchaError">Please verify captcha</p>
            </div>
            <br>
            <button type="button" class="btn btn-info" name="button" v-on:click="resetPassword">Reset</button>
					</div>
				</div>
			</div>
		</div>
    <auth-footer></auth-footer>
  </div>
</template>

<script>

import VueRouter from 'vue-router'
import Header from '../header/unauthHeader.vue';
import Footer from '../header/unauthFooter.vue';

export default {
  name: 'reset',
  components: {
      'auth-header':Header,
      'auth-footer': Footer
  },
  data() {
    return {
      password: '',
      passwordAgain: '',

      // Validation
      passwordEmptyError: false,
      passwordAgainEmptyError: false,
      minPasswordLengthError: false,
      maxPasswordLengthError: false,
      minPasswordAgainLengthError: false,
      maxPasswordAgainLengthError: false,
      passwordValidError: false,
      passwordAgainValidError: false,
      mismatchError: false,

      // Success failure
      resetEmailSuccess: false,
      resetEmailFailure: false,
      capchaError: false,



    }
  },
  mounted() {
    this.resetCaptcha()
    localStorage.setItem("resetPasswordCaptcha", "false");
  },
  methods: {

    resetCaptcha:  function () {
      setTimeout(function(){
        grecaptcha.render('html_element', {
              'sitekey' : '6LepqTsUAAAAAKXT4wM9y7FvRB9_5q6GXMnV8m35',
              'callback' : function (response) {
                 if (response) {
                   localStorage.setItem("resetPasswordCaptcha", "true");
                 }
              }

         });
      }, 500);
    },
    resetPassword: function () {
      // Validations
      this.passwordEmptyError = false
      this.passwordAgainEmptyError = false
      this.minPasswordLengthError = false
      this.maxPasswordLengthError = false
      this.minPasswordAgainLengthError = false
      this.maxPasswordAgainLengthError = false
      this.passwordValidError = false
      this.passwordAgainValidError = false
      this.mismatchError = false
      this.captchaError = false
      this.resetEmailSuccess = false
      this.resetEmailFailure = false

      var passwordValidated = false
      var captchaValidated = false

      // Password
      var passwordCheck = false;
      if (this.password.trim() == '') {
        this.passwordEmptyError = true
      } else {
        if (this.password.trim().length < 6) {
          this.minPasswordLengthError = true
        } else if (this.password.trim().length > 20) {
          this.maxPasswordLengthError = true
        } else {
          var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
          if (!re.test(this.password.trim())) {
            this.passwordValidError = true
          } else {
            passwordCheck = true
          }
        }

      }

      // Password again
      var againPasswordCheck = false;

      if (this.password.trim() != this.passwordAgain.trim()) {
        this.mismatchError = true
      } else {
        if (this.passwordAgain.trim() == '') {
          this.passwordAgainEmptyError = true
        } else {
          if (this.passwordAgain.trim().length < 6) {
            this.minPasswordAgainLengthError = true
          } else if (this.passwordAgain.trim().length > 20) {
            this.maxPasswordAgainLengthError = true
          } else {
            var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (!re.test(this.passwordAgain.trim())) {
              this.passwordAgainValidError = true
            } else {
              againPasswordCheck = true
              passwordValidated = true
            }
          }
        }
      }


      // Password mismatch check
      // if (passwordCheck && againPasswordCheck ) {
      //   if (this.password.trim() != this.passwordAgain.trim()) {
      //     this.mismatchError = true
      //   } else {
      //     passwordValidated = true
      //   }
      // }

      // Capcha Validation

      var captchaStatus = localStorage.getItem("resetPasswordCaptcha");
      if (captchaStatus == "true") {
        captchaValidated = true
      } else {
        this.capchaError = true
      }

      // if (grecaptcha.getResponse() == ""){
      //     this.capchaError = true
      // } else {
      //     captchaValidated = true;
      // }




      if (passwordValidated && captchaValidated) {
        var email = this.$route.query.email.replace(":", "@");
        var token = this.$route.query.token;
        token = token.split(' ').join('+')

        var setPasswordURL = this.apiURL + '/Account/setforgetpass'

        var data = {
          Useremail: email,
          UserPassword: this.password,
          UserToken: token
        }

        this.$http.post(setPasswordURL, data).then(response => {
          var router = new VueRouter() ;
          this.resetEmailSuccess = true
          window.location = '/'
          // router.go('/login');
          // this.$route.router.go('/login');
        }, response => {
          this.resetEmailFailure = true
        })

      }

    }
  },
}
</script>

<style>
</style>

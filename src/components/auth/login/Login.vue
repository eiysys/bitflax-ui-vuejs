<template>
    <div>
      <auth-header></auth-header>
      <div class="container-fluid counter_secnew">
          <div class="container">
            <div class="loader loader-default" data-text="Login User..." data-blink id="registrationLoader"></div>
              <div class="login-page">
                  <div class="logininner-page">

                      <div class="col-xs-12 col-sm-12 rightcolumn">
                          <div class="login_signuptabs">
                              <h3>Login</h3>
                              <div class="forminnerdealr">
                                  <form id="ContForm" class="contact-form form-contact"
                                        novalidate="novalidate" @submit.prevent="validateBeforeSubmit">

                                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 email-field">
                                          <div class="form-group control">
                                              <input id="userName"
                                                     :class="{'input': true, 'is-danger': errors.has('email') }"
                                                     v-model="signin.userName" name="email" placeholder="Email"
                                                     class="form-control" data-toggle="floatLabel"
                                                     data-value="no-js">
                                              <!-- <label for="userName">Email</label> -->
                                              <template v-if="!userNameError">
                                                  <span v-show="errors.has('email')" style="color:#ff00008c" class="error">{{ errors.first('email') }}</span>
                                              </template>
                                              <template v-if="userNameError">
                                                  <span class="error" style="color:#ff00008c">Email is required</span>
                                              </template>
                                              <template v-if="userNameValidError">
                                                  <span class="error" style="color:#ff00008c">Please Enter Valid Email</span>
                                              </template>
                                          </div>
                                      </div>

                                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 email-field">
                                          <div class="form-group">
                                              <input type="password" v-model="signin.password" id="password" name="password"
                                                     placeholder="Password"

                                                     :class="{'input': true, 'is-danger': errors.has('password') }"
                                                     class="form-control pasword" data-toggle="floatLabel"
                                                     data-value="no-js">
                                              <!-- <label for="password" class="mat-label">Password</label> -->
                                              <template v-if="!passwordError">
                                                  <span v-show="errors.has('password')" class="error" style="color:#ff00008c">{{ errors.first('password') }}</span>
                                              </template>
                                              <template v-if="passwordError">
                                                  <span class="error" style="color:#ff00008c">Password is required</span>
                                              </template>
                                              <template v-if="minPasswordLengthError">
                                                  <span class="error" style="color:#ff00008c">Password should have more than 6 characters.</span>
                                              </template>
                                              <template v-if="maxPasswordLengthError">
                                                  <span class="error" style="color:#ff00008c">Password should have less than 20 characters.</span >
                                              </template>
                                              <br>
                                              <!-- <a class="forgot_links" href="/forgot">Forgot Password?</a> -->
                                              <router-link to="/forgot" class="forgot_links">Forgot Password?</router-link>
                                          </div>
                                      </div>

                                      <div class="col-md-7 col-sm-12 captcha-field">
                                          <div class="text-center-cltw">
                                              <div id='html_element'></div>
                                          </div>


                                          <!-- <div class="form-group">
                                              <div class="g-recaptcha" data-sitekey="6LepqTsUAAAAAKXT4wM9y7FvRB9_5q6GXMnV8m35"></div>
                                          </div> -->
                                      </div>
                                      <div class="col-md-12 col-xs-12" style="padding-left:0">
                                        <template v-if="capchaError">
                                          <h4 class="is-danger text-left" style="color:red; font-size:15px;" >Please verify captcha</h4>
                                        </template>
                                      </div>
                                      <div class="col-md-12 col-sm-12 resend_link text-center">
                                          <p style="max-height:10px"><!--<a href="/resend_link">Click Here</a>--> <router-link to="/resend_link">Click Here</router-link> to resend your activation link</p>
                                      </div>
                                      <div class="botm_buttons">
                                          <p style="color:red" class="text-center" v-if="activateAccount">We have sent the confirmation link on your registered email, <br>click on that link for login here.</p>
                                          <p style="color:red" class="text-center" v-if="authFailed">Authentication failed</p>
                                          <input type="submit" value="Login"
                                                 class="dealersubmit"/>
                                          <!--v-on:click="submitForm"-->
                                      </div>
                                      <div class="col-md-12 text-center" style="float:left;width:100%">
                                          <a class="forgot_links" href="javascript:;" id=createAccount>
                                              <!-- <a href="/signup">Create an Account</a> -->
                                              <router-link to="/signup" class="forgot_links">Create an Account</router-link>
                                              <router-link to="/twofactor" tag="button" id="gototwofactor" style="display:none">twofactor</router-link>
                                              <!-- <router-link to="/twofactor" id="goToTwofactor"></router-link> -->
                                          </a>
                                      </div>

                                  </form>
                              </div>
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
    import VueRouter from 'vue-router'
    import {HTTP} from '../../../main.js';
    import Header from '../header/unauthHeader.vue';
    import Footer from '../header/unauthFooter.vue';

    export default {
        name: 'login',
        components: {
            'auth-header':Header,
            'auth-footer': Footer
        },
        data() {
            return {
                activateAccount:false,
                passwordError: false,
                userNameError: false,
                userNameValidError: false,
                capchaError: false,
                minPasswordLengthError: false,
                maxPasswordLengthError: false,
                authFailed: false,

                capchaPassed: false,
                // capchaPassedGlobal: false,
                signin: {
                  userName: '',
                  password: '',
                  ipAddress: '',
                  location: '',
                  macAddress: '',
                  browser: '',
                  userAgent: ''
                }
            }
        },
        methods: {
            resetCaptcha:  function () {
              setTimeout(function(){
                grecaptcha.render('html_element', {

                      'sitekey' : '6LepqTsUAAAAAKXT4wM9y7FvRB9_5q6GXMnV8m35',
                      'callback' : function (response) {
                         if (response) {
                           localStorage.setItem("loginCaptcha", "true");
                         }
                      },

                 });
              }, 500);
            },
            validateBeforeSubmit: function () {

              this.capchaError = false;
              this.userNameError = false;
              this.userNameValidError = false;
              this.passwordError = false;
              this.minPasswordLengthError = false;
              this.maxPasswordLengthError = false;
              this.activateAccount = false;
              this.authFailed = false;


              var captchaValidated = false;
              var userNameValidated = false;
              var passwordValidated = false;

              // Capcha Validation

              var captchaStatus = localStorage.getItem("loginCaptcha");
              if (captchaStatus == "true") {
                captchaValidated = true
              } else {
                this.capchaError = true
              }

              // captchaValidated = true

              // User Name Validation
              if (this.signin.userName.trim() == "") {
                this.userNameError = true
                $("#userName").css("border-color", "red");
              } else {
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.signin.userName.trim()))
                {
                  this.userNameValidError = true
                  $("#userName").css("border-color", "red");
                } else {
                  userNameValidated = true
                  $("#userName").css("border-color", "#ccc");
                }
              }


              // if (this.signin.userName.trim() == '') {
              //   this.userNameError = true
              //   // change CSS
              //   $("#userName").css("border-color", "red");
              // } else {
              //   // change CSS
              //   $("#userName").css("border-color", "#ccc");
              //   userNameValidated = true
              // }

              // Password Validation
              if (this.signin.password.trim() == '') {
                this.passwordError = true;
                // change CSS
                $("#password").css("border-color", "red");
              } else {
                  if (this.signin.password.trim().length < 6) {
                    this.minPasswordLengthError = true
                    // change CSS
                    $("#password").css("border-color", "red");
                  } else if (this.signin.password.trim().length > 20) {
                    this.maxPasswordLengthError = true
                    // change CSS
                    $("#password").css("border-color", "red");
                  } else {
                    // change CSS
                    $("#password").css("border-color", "#ccc");
                    passwordValidated = true
                  }
              }


              if (captchaValidated && userNameValidated && passwordValidated) {
                localStorage.setItem('bitflax:userEmail', this.signin.userName);

                var signInURL = this.apiURL + '/Account/signin'
                $("#registrationLoader").addClass( "is-active" );
                this.$http.post(signInURL, this.signin).then(response => {
                  // $("#registrationLoader").removeClass( "is-active" );
                  if (response.data.value.access_token) {
                    localStorage.setItem('bitflax:userAccessToken', response.data.value.access_token);
                    var localStorageData = JSON.stringify(response.data.value)
                    var encrypted = CryptoJS.AES.encrypt(localStorageData, this.MySECRET);
                    localStorage.setItem('bitflax:userData', encrypted);
                    window.location = "/";
                  } else {
                    // console.log(response)
                    localStorage.setItem('bitflax:G2AToken', response.body.value.G2Ftoken);
                    $("#gototwofactor").click()
                  }

                }, response => {
                  $("#registrationLoader").removeClass( "is-active" );
                  if (response.body.value == 'Please activate your account') {
                    this.activateAccount = true
                  } else if (response.body.value == 'Authentication failed!! Please check credentials.') {
                    this.authFailed = true
                  } else {
                    this.authFailed = true
                  }
                  // console.log(response)
                })
              }
            }
        },
        mounted() {
          localStorage.removeItem('bitflax:confirmedSponsor');
          localStorage.removeItem('bitflax:userAccessToken');
          this.resetCaptcha()
          localStorage.setItem("loginCaptcha", "false");
        },
        created() {


          this.$http.get("https://api.ipify.org/?format=json").then(response => {
            this.signin.ipAddress = response.body.ip;
            this.signin.location = "IN";
            this.signin.macAddress = "22-55-66-99-78-44";
            this.signin.browser = navigator.appName;
            this.signin.userAgent = navigator.userAgent;
            // console.log(response);
          }, response => {
            // console.log(response)

          })
        }
    }



</script>
<style scoped>
  #createAccount {
    margin-top: 0px
  }
 /* .login-page {
    height: 602px
  }*/

/* For Firefox */
input[type='number'] {
    -moz-appearance:textfield;
}

/* Webkit browsers like Safari and Chrome */
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.redbox {
  border: 1px solid red;
}

.unstyled::-webkit-inner-spin-button,
.unstyled::-webkit-calendar-picker-indicator {
    -webkit-appearance: none;
}
/* .header{
            position: static;
          } */

.login-page .form-group {
 height:auto;
}

</style>

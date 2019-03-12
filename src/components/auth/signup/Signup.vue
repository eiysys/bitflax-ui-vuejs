<template>
    <div class="">
      <auth-header></auth-header>
      <div class="container-fluid counter_secnew">
        <div class="container text-center">
          <div class="loader loader-default" data-text="Registering User..." data-blink id="registrationLoader"></div>
            <div class="login-page signup-page">
                <div class="logininner-page">

                    <div class="col-xs-12 col-sm-12 rightcolumn">

                        <div class="login_signuptabs">
                          <div class="col-md-12 text-center" v-if="accountRegistrationSuccess">
                            <p class="text-success">Thank You! Please check your email to activate your account</p>
                          </div>
                            <h3>Signup</h3>
                            <div class="forminnerdealr">
                                <form id="ContForm1" class="contact-form form-contact"
                                      @submit.prevent="validateBeforeSubmit"
                                      novalidate="novalidate">

                                    <div class="row">
                                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                          <div class="form-group">
                                              <input id="fname" v-model="signup.firstName" name="first name"
                                                     placeholder="First Name" class="form-control usernameicon"
                                                     data-toggle="floatLabel" data-value="" required=""
                                                     aria-required="true"
                                                     :class="{'input': true, 'error': errors.has('first name') }">
                                              <label for="fname">First Name</label>
                                              <template v-if="!firstNameError">
                                                  <label style="position:inherit" v-show="errors.has('first name')" class="error">{{ errors.first('first name') }}</label>
                                              </template>
                                              <template v-if="firstNameError">
                                                <label style="position:inherit" class="error">*The first name field is required</label>
                                              </template>
                                              <template v-if="firstNameValidError">
                                                <label style="position:inherit" class="error">Please enter valid first name</label>
                                              </template>
                                          </div>
                                      </div>

                                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                          <div class="form-group">
                                              <input id="lname" v-model="signup.lastName" name="lname"
                                                     placeholder="Last Name" class="form-control usernameicon"
                                                     data-toggle="floatLabel" data-value="" required=""
                                                     aria-required="true">
                                              <label for="lname" style="">Last Name</label>
                                              <template v-if="lastNameError">
                                                <label style="position:inherit" class="error">Please enter valid last name</label>
                                              </template>
                                          </div>
                                      </div>
                                    </div>


                                    <div class="row">
                                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                          <div class="form-group">
                                              <input id="emalid" v-model="signup.emailID" name="email"
                                                     placeholder="Email Id" class="form-control emailid"
                                                     data-toggle="floatLabel" data-value="" required=""
                                                     aria-required="true" type="email"
                                                     :class="{'input': true, 'is-danger': errors.has('email') }">
                                              <label for="emalid" style="">Email Id</label>
                                              <template v-if="!emailError">
                                                  <label style="position:inherit" v-show="errors.has('email')" class="error">{{ errors.first('email') }}</label>
                                              </template>
                                              <template v-if="emailError">
                                                <label class="error" style="position:inherit">The email field is required</label>
                                              </template>
                                              <template v-if="emailValidError">
                                                <label class="error" style="position:inherit">The email field must be a valid email</label>
                                              </template>
                                          </div>
                                      </div>

                                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                          <div class="form-group">
                                              <input id="uname" v-model="signup.userName" name="user name"
                                                     placeholder="User Name" class="form-control usernameicon"
                                                     data-toggle="floatLabel" data-value="" required=""
                                                     aria-required="true"
                                                     :class="{'input': true, 'is-danger': errors.has('user name') }">
                                              <label for="uname" style="">User Name</label>
                                              <template v-if="!userNameError">
                                                  <label style="position:inherit" v-show="errors.has('user name')" class="error">{{ errors.first('user name') }}</label>
                                              </template>
                                              <template v-if="userNameError">
                                                <label class="error" style="position:inherit">The username field is required</label>
                                              </template>
                                              <template v-if="userNameValidError">
                                                <label class="error" style="position:inherit">Please enter valid username</label>
                                              </template>
                                              <template v-if="userNameLengthError">
                                                <label class="error" style="position:inherit">User Name should have minimum 8 characters.</label>
                                              </template>
                                          </div>
                                      </div>
                                    </div>



                                    <div class="row">
                                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                          <div class="form-group">
                                              <input id="pwdd" name="password" v-model="signup.password"
                                                     placeholder="Password" class="form-control pasword"
                                                     data-toggle="floatLabel" data-value="" required=""
                                                     aria-required="true" type="password"
                                                     :class="{'input': true, 'is-danger': errors.has('password') }">
                                              <label for="pwdd" class="mat-label">Password</label>
                                              <template v-if="!passwordError">
                                                  <label v-show="errors.has('password')" class="error">{{ errors.first('password') }}</label>
                                              </template>
                                              <template v-if="passwordValidError">
                                                <label class="error" style="position:inherit">Should contain at least one special character, numeric digit, uppercase and lowercase letter</label>
                                              </template>
                                              <template v-if="passwordError">
                                                <label class="error" style="position:inherit">The password field is required</label>
                                              </template>
                                              <template v-if="minPasswordLengthError">
                                                <label class="error" style="position:inherit">Password should have more than 6 characters.</label>
                                              </template>
                                              <template v-if="maxPasswordLengthError">
                                                <label class="error" style="position:inherit">Password should have less than 20 characters.</label>
                                              </template>
                                              <template v-if="passwordMismatchError">
                                                <label class="error" style="position:inherit">Password mismatch.</label>
                                              </template>
                                          </div>
                                      </div>

                                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                          <div class="form-group">
                                              <input id="cnfpwd" name="confirm password" v-model="signup.confirmPassword"
                                                     placeholder="Confirm Password" class="form-control pasword"
                                                     data-toggle="floatLabel" data-value="" required=""
                                                     aria-required="true" type="password"
                                                     :class="{'input': true, 'is-danger': errors.has('confirm password') }">
                                              <label for="cnfpwd">Confirm Password</label>
                                              <template v-if="!confirmPasswordError">
                                                <label style="position:inherit" v-show="errors.has('confirm password')" class="error">{{ errors.first('confirm password') }}</label>
                                              </template>
                                              <template v-if="confirmPasswordError">
                                                <label class="error" style="position:inherit">The password field is required.</label>
                                              </template>
                                              <template v-if="confirmPasswordValidError">
                                                <label class="error" style="position:inherit">Should contain at least one special character, numeric digit, uppercase and lowercase letter</label>
                                              </template>
                                              <template v-if="minConfirmPasswordLengthError">
                                                <label class="error" style="position:inherit">Password should have more than 6 characters.</label>
                                              </template>
                                              <template v-if="maxConfirmPasswordLengthError">
                                                <label class="error" style="position:inherit">Password should have less than 20 characters.</label>
                                              </template>
                                              <template v-if="passwordMismatchError">
                                                <label class="error" style="position:inherit">Password mismatch.</label>
                                              </template>
                                          </div>
                                      </div>
                                    </div>



                                    <div class="row">
                                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                          <div class="form-group" style="margin-top:20px">
                                              <!-- <input id="tel" placeholder="Contact Number" v-model="signup.contactNo"
                                                     class="form-control contact" data-toggle="floatLabel" data-value=""
                                                     required="" aria-required="true" v-validate="'required|numeric'"> -->
                                              <input type="tel" id="demo" placeholder="" class="form-control contact" maxlength="15" v-model="signup.contactNo">
                                              <!-- <label for="demo">Contact Number</label> -->

                                              <template v-if="!contactError">
                                                <label v-show="errors.has('phone')" class="error">{{ errors.first('phone') }}</label>
                                              </template>
                                              <template v-if="contactError">
                                                <label class="error">The contact field is required.</label>
                                              </template>
                                              <template v-if="numberOnlyError">
                                                <label class="error">Please Enter valid contact detail.</label>
                                              </template>
                                              <template v-if="contactValidError">
                                                <label class="error">Please Enter valid contact detail.</label>
                                              </template>
                                          </div>
                                      </div>

                                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                          <div class="form-group" style="margin-top:20px">
                                              <input id="sponsor" placeholder="Sponsor" v-model="signup.sponsor"
                                                     class="form-control sponsor" data-toggle="floatLabel" data-value=""
                                                     required="" aria-required="true" type="text"
                                                     :class="{'input': true, 'is-danger': (signup.sponsor == signup.userName) && signup.sponsor }">
                                              <label for="sponsor">Sponsor</label>
                                              <template v-if="!sponsorError">
                                                <label v-if="!(signup.sponsor == signup.userName) && !signup.sponsor">If you don't have sponsor, then leave it blank</label>
                                              </template>
                                              <template v-if="sponsorError">
                                                <label class="error">The Sponsor you entered is invalid</label>
                                              </template>
                                              <template></template>

                                              <label style="position:inherit" class="error"
                                                    v-if="(signup.sponsor == signup.userName) && signup.sponsor">User name and sponsor can not be same.
                                                </label>
                                          </div>
                                      </div>
                                    </div>



                                    <!-- <div class="col-md-6 col-xs-12 dob-field">
                                      <div class="input-group date">
                                        <input type="text" class="form-control"><label class="input-group-addon"><i class="glyphicon glyphicon-th"></i></label>
                                      </div>
                                    </div> -->
                                    <!-- <input type="text" id="sandbox-container" class="form-control">
                                    <input data-provide="datepicker"> -->
                                    <!-- {{signup.dob}} -->
                                    <div class="row">
                                      <div class="col-md-6 col-xs-12 dob-field">

                                        <!-- <input data-toggle="datepicker"> -->

                                        <div class="form-group">
                                            <!-- <input id="dob" placeholder="D-O-B" v-model="signup.dob"
                                                   name="date of birth"
                                                   class="form-control dob unstyled" data-toggle="floatLabel" data-value=""
                                                   required="" aria-required="true" type="date" v-validate="'required'"
                                                   :class="{'input': true, 'is-danger': errors.has('date of birth') }"> -->

                                                   <input id="dob" placeholder="DOB" class="form-control dob unstyled" data-toggle="datepicker" data-value=""
                                                   required="" aria-required="true"
                                                   :class="{'input': true, 'is-danger': errors.has('date of birth') }" readonly style="background-color:white">

                                            <!-- <label for="dob">DOB</label> -->
                                            <template v-if="!dobError">
                                              <label style="position:inherit" v-show="errors.has('date of birth')" class="error">{{ errors.first('date of birth') }}</label>
                                            </template>
                                            <template v-if="dobError">
                                              <label class="error" style="position:inherit">The Date of Birth field is required.</label>
                                            </template>
                                        </div>





                                      </div>
                                    </div>

                                    <div class="row">
                                      <div class="col-md-8 col-xs-12 dob-field" id="captchaDiv">
                                          <div class="captach-mbl">
                                            <div id='html_element'></div>
                                          </div>
                                          <!-- <div class="form-group" id="mainCaptchaDiv">
                                              <div class="g-recaptcha" data-sitekey="6LepqTsUAAAAAKXT4wM9y7FvRB9_5q6GXMnV8m35"></div>
                                          </div> -->
                                      </div>
                                    </div>

                                    <div class="row">
                                      <div class="col-md-4 col-xs-12 dob-field">
                                        <template v-if="capchaError">
                                          <h4 class="is-danger" style="color:red">Please verify captcha</h4>
                                        </template>
                                      </div>
                                      <div class="" id="clickmeID">

                                      </div>
                                    </div>

                                    <div class="row">
                                      <div class="col-md-12 col-xs-12">
                                          <div class="form-group">
                                              <div class="checkbox">
                                                  <input id="termsCheckbox" type="checkbox" name="terms"

                                                         :class="{'input': false, 'is-danger': errors.has('terms') }"
                                                  v-model="agree">

                                                  <label for="termsCheckbox">
                                                      I agree and have read the <a href="https://bitflax.io/terms-conditions">Terms of Use</a>
                                                  </label>



                                              </div>
                                              <label class="error" v-show="errors.has('terms')">{{ errors.first('terms') }}</label>
                                              <template v-if="!agreeError">
                                                <label v-show="errors.has('terms of use')" class="error">{{ errors.first('terms of use') }}</label>
                                              </template >
                                              <template v-if="agreeError">
                                                <label class="error">The terms field is required</label>
                                              </template>
                                          </div>
                                      </div>
                                    </div>


                                    <div class="col-md-12 col-xs-12 resend_link">
                                        <p>
                                              <!--<a href="javascript:;">Click Here</a>--> <router-link to="/resend_link">Click Here</router-link> to resend your activation link
                                        </p>
                                    </div>
                                    <div class="col-md-12 text-center">
                                      <p style="color:red">{{duplicateError}}</p>
                                    </div>
                                    <div class="row">
                                      <div class="botm_buttons">
                                          <input value="Sign Up" class="dealersubmit" type="submit">
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-12 text-center" style="max-height:50px">
                                          <a class="forgot_links" href="javascript:;">
                                              <!-- <a href="/login">Login to Existing Account</a> -->
                                              <router-link to="/login" class="forgot_links">Login to Existing Account</router-link>
                                              <!-- <router-link to="/signup">Create an Account</router-link> -->
                                          </a>
                                      </div>
                                    </div>

                                    <!-- {{signup}} -->
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
    import {HTTP} from '../../../main.js';
    import Header from '../header/unauthHeader.vue';
    import Footer from '../header/unauthFooter.vue';

    export default {
        name: 'signUp',
        components: {
            'auth-header':Header,
            'auth-footer': Footer
        },
        data() {
            return {
                usrBday: '',
                accountRegistrationSuccess: false,
                // Validations Booleans
                firstNameError: false,
                lastNameError: false,
                firstNameValidError: false,
                emailError: false,
                emailValidError: false,
                userNameError: false,
                userNameValidError: false,
                userNameLengthError: false,
                passwordError: false,
                passwordValidError: false,
                minPasswordLengthError: false,
                maxPasswordLengthError: false,
                confirmPasswordError: false,
                confirmPasswordValidError: false,
                minConfirmPasswordLengthError: false,
                maxConfirmPasswordLengthError:false,
                passwordMismatchError: false,
                contactError: false,
                contactValidError: false,
                numberOnlyError: false,
                dobError: false,
                agreeError: false,
                sponsorError: false,
                capchaError: false,

                // Agree Select Box
                agree: false,

                duplicateError: '',

                //Initializing all variables for this page
                signup: {
                    emailID: '',
                    password: '',
                    confirmPassword: '',
                    firstName: '',
                    lastName: '',
                    userName: '',
                    dob: '',
                    contactNo: '',
                    sponsor: '',
                    location: '',
                    macAddress: '',
                    ipAddress: '',
                    browser: '',
                    userAgent: ''
                }
            }
        },
        mounted() {

          // Get User IP
          this.$http.get("https://api.ipify.org/?format=json").then(response => {
            this.signup.ipAddress = response.body.ip;
            this.signup.location = "IN";
            this.signup.macAddress = "22-55-66-99-78-44";
            this.signup.browser = navigator.appName;
            this.signup.userAgent = navigator.userAgent;

          }, response => {
            // console.log(response)
          })
          var d = new Date();
          var year = d.getFullYear();
          var month = d.getMonth();
          var day = d.getDate();
          var c = new Date(year -3, month, day)

          $('[data-toggle="datepicker"]').datepicker({
            autoclose: true,
            endDate: c,
            format: 'mm-dd-yyyy',
            // date: new Date()
          });

          $('#dob').change(function () {
              $('#clickmeID').click()
          })

          localStorage.setItem("signupCaptcha", "false");
          this.resetCaptcha()
          $("#demo").intlTelInput({
                allowDropdown: true,
                autoHideDialCode: true,
                autoPlaceholder: "polite",
                customPlaceholder: null,
                dropdownContainer: "",
                excludeCountries: [],
                formatOnDisplay: true,
                geoIpLookup: null,
                initialCountry: "",
                nationalMode: true,
                placeholderNumberType: "MOBILE",
                onlyCountries: [],
                preferredCountries: [ "in"],
                separateDialCode: true,
                utilsScript: ""
          });
          // $('.datepicker').datepicker();
          // $('#sandbox-container input').datepicker({
          //     endDate: "0d"
          // });

          this.signup.sponsor = localStorage.getItem('bitflax:confirmedSponsor');
          // alert(sponsor)
          // var findSponsorURL = this.apiURL + '/Account/checksponser/?sponser=' + sponsor
          // this.$http.get(findSponsorURL).then(response => {
          //   this.signup.sponsor = sponsor;
          //   // localStorage.removeItem('bitflax:reference');
          // }, response => {
          //   this.signup.sponsor = '';
          //   localStorage.removeItem('bitflax:reference');
          // })

          // setTimeout(function(){
          //     $(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});
          // }, 1000)
          // location.reload()

        },
        methods: {
            resetCaptcha: function () {
              setTimeout(function(){
                grecaptcha.render('html_element', {

                      'sitekey' : '6LepqTsUAAAAAKXT4wM9y7FvRB9_5q6GXMnV8m35',
                      'callback' : function (response) {
                         if (response) {
                           localStorage.setItem("signupCaptcha", "true");
                         }
                      }

                 });
              }, 1000);
            },
            getInitial: function () {
              var intlNumber = $("#demo").intlTelInput("getNumber");
              var extension = $("#demo").intlTelInput("getExtension");
              var countryData = $("#demo").intlTelInput("getSelectedCountryData");
              var intlNumber = $("#demo").intlTelInput("getNumber");
              alert(intlNumber)
              alert(JSON.stringify(countryData))
              alert($("#demo").val())
            },
            validateBeforeSubmit: function () {

              // Validations
              this.firstNameError = false;
              this.firstNameValidError = false;
              this.lastNameError = false;
              this.emailError = false;
              this.emailValidError = false;
              this.userNameError = false;
              this.userNameValidError = false;
              this.userNameLengthError = false;
              this.passwordError = false;
              this.passwordValidError = false;
              this.minPasswordLengthError = false;
              this.maxPasswordLengthError = false;
              this.confirmPasswordError = false;
              this.confirmPasswordValidError = false;
              this.minConfirmPasswordLengthError = false;
              this.maxConfirmPasswordLengthError = false;
              this.passwordMismatchError = false;
              this.contactError = false;
              this.contactValidError = false;
              this.numberOnlyError = false;
              this.dobError = false;
              this.agreeError = false;
              this.capchaError = false;
              this.duplicateError = '';

              var firstNamevalidated = false;
              var lastnameValidated = false;
              var emailValidated = false;
              var userNameValidated = false;
              var passwordValidated = false;
              var contactValidated = false;
              var dobvalidated = false;
              var agreeValidated = false;
              var capchaValidated = false;


              // Capcha Validation

              var captchaStatus = localStorage.getItem("signupCaptcha");
              if (captchaStatus == "true") {
                capchaValidated = true
              } else {
                this.capchaError = true
              }


              // if (grecaptcha.getResponse() == ""){
              //     this.capchaError = true
              // } else {
              //     this.capchaError = false
              //     // console.log(grecaptcha.getResponse());
              //     capchaValidated = true;
              // }


              // First Name Validation
              if (this.signup.firstName.trim() == "") {
                this.firstNameError = true
                firstNamevalidated = false
                // change CSS
                $("#fname").css("border-color", "red");
              } else {
                if(!/^[a-zA-Z ]+$/.test(this.signup.firstName.trim())){
                  this.firstNameValidError = true
                  firstNamevalidated = false
                  // change CSS
                  $("#fname").css("border-color", "red");
                } else {
                  this.firstNameError = false
                  firstNamevalidated = true
                  // change CSS
                  $("#fname").css("border-color", "#ccc");
                }
              }

              // last Name Validation
              if (this.signup.lastName.trim() == "") {
                lastnameValidated = true;
                // change CSS
                // $("#lname").css("border-color", "red");
              } else {
                if(!/^[a-zA-Z ]+$/.test(this.signup.lastName.trim())){
                  this.lastNameError = true
                  // change CSS
                  $("#lname").css("border-color", "red");
                } else {
                  this.lastNameError = false
                  lastnameValidated = true
                  // change CSS
                  $("#lname").css("border-color", "#ccc");
                }
              }

              // Email validation
              if (this.signup.emailID.trim() == "") {
                this.emailError = true
                // change CSS
                $("#emalid").css("border-color", "red");
              } else {
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.signup.emailID.trim()))
                {
                  // this.emailValidError = true
                  emailValidated = false
                  // change CSS
                  $("#emalid").css("border-color", "red");
                } else {
                  this.emailValidError = false
                  emailValidated = true
                  // change CSS
                  $("#emalid").css("border-color", "#ccc");
                }
              }

              // Username validation
              if(this.signup.userName.trim() == '') {
                this.userNameError = true
                // change CSS
                $("#uname").css("border-color", "red");
              } else if (!/^[a-zA-Z]+$/.test(this.signup.userName.trim())) {
                $("#uname").css("border-color", "red");
                this.userNameValidError = true
              }
              else {
                if (this.signup.userName.trim().length < 8) {
                  this.userNameLengthError = true
                  // change CSS
                  $("#uname").css("border-color", "red");
                } else {
                  this.userNameError = false
                  userNameValidated = true
                  // change CSS
                  $("#uname").css("border-color", "#ccc");
                }
              }



              var minPassword = false;
              // Password validation
              if(this.signup.password.trim() == '') {
                this.passwordError = true
                // change CSS
                $("#pwdd").css("border-color", "red");
              } else {
                if (this.signup.password.trim().length < 6) {
                  this.minPasswordLengthError = true
                  // change CSS
                  $("#pwdd").css("border-color", "red");
                } else if (this.signup.password.trim().length > 20) {
                  this.maxPasswordLengthError = true
                  // change CSS
                  $("#pwdd").css("border-color", "red");
                } else {
                  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                  if (!re.test(this.signup.password.trim())) {
                    this.passwordValidError = true
                    // change CSS
                    $("#pwdd").css("border-color", "red");
                  } else {
                    this.passwordError = false
                    minPassword = true
                    // change CSS
                    $("#pwdd").css("border-color", "#ccc");
                  }
                }
              }

              var maxPassword = false;
              // Confirm password validation
              if(this.signup.confirmPassword.trim() == '') {
                this.confirmPasswordError = true
                // change CSS
                $("#cnfpwd").css("border-color", "red");
              } else {
                if (this.signup.confirmPassword.trim().length < 6) {
                  this.minConfirmPasswordLengthError = true
                  // change CSS
                  $("#cnfpwd").css("border-color", "red");
                } else if (this.signup.confirmPassword.trim().length > 20) {
                  this.maxConfirmPasswordLengthError = true
                  // change CSS
                  $("#cnfpwd").css("border-color", "red");
                } else {
                  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                  if (!re.test(this.signup.password.trim())) {
                    this.confirmPasswordValidError = true
                    // change CSS
                    $("#cnfpwd").css("border-color", "red");
                  } else {
                    this.confirmPasswordError = false
                    maxPassword = true
                    // change CSS
                    $("#cnfpwd").css("border-color", "#ccc");
                  }

                }
              }

              // Password Valid Error
              if (minPassword && maxPassword) {
                if (this.signup.password.trim() != this.signup.confirmPassword.trim()) {
                  this.passwordMismatchError = true
                  // change CSS
                  $("#pwdd").css("border-color", "red");
                  $("#cnfpwd").css("border-color", "red");
                } else {
                    passwordValidated = true
                    // change CSS
                    $("#cnfpwd").css("border-color", "#ccc");
                }
              } else {
                passwordValidated = false
              }

              // Contact number validation

              if (this.signup.contactNo.trim() == ''){
                  this.contactError = true
                  // change CSS
                  $("#tel").css("border-color", "red");
              } else {
                  if (!/^\d+$/.test(this.signup.contactNo.trim())) {
                    this.numberOnlyError = true
                    // change CSS
                    $("#tel").css("border-color", "red");
                  } else {
                    if (this.signup.contactNo.trim().length < 7 || this.signup.contactNo.trim().length > 13) {
                      this.contactValidError = true
                      // change CSS
                      $("#tel").css("border-color", "red");
                    } else {
                      contactValidated = true;
                      // change CSS
                      $("#tel").css("border-color", "#ccc");
                    }
                  }
              }

              // DOB Validation

              this.signup.dob = $("#dob").val()
              // console.log("this is the dob")
              // console.log(this.signup.dob)
              if (this.signup.dob.trim() == '') {
                this.dobError = true
                // change CSS
                $("#dob").css("border-color", "red");
              } else {
 /*               var currentDate = new Date(this.signup.dob);
                var day = currentDate.getDate();
                var month = ((currentDate.getMonth() + 1) > 9) ? currentDate.getMonth() + 1 : '0' + (currentDate.getMonth() + 1);
                var year = currentDate.getFullYear();
                this.signup.dob = month + '-' + day + '-' + year;*/
                // console.log(this.signup.dob)

                  dobvalidated = true
                // change CSS
                $("#dob").css("border-color", "#ccc");
              }

              // CheckBox Validation
              if (this.agree) {
                agreeValidated = true
              } else {
                  this.agreeError = true
              }
              // console.log(this.signup)
              if (firstNamevalidated && lastnameValidated && emailValidated && userNameValidated && passwordValidated && contactValidated && dobvalidated && agreeValidated && capchaValidated) {

                // console.log("Registration Initializing...");
                // Combile Contact and Country code
                var countryData = $("#demo").intlTelInput("getSelectedCountryData");
                var combinedContact = countryData.dialCode + this.signup.contactNo
                this.signup.contactNo = combinedContact
                var signUpURL = this.apiURL + '/Account/register'
                $("#registrationLoader").addClass( "is-active" );

                // Signup Data
                // console.log(combinedContact);
                //
                // return


                this.$http.post(signUpURL, this.signup).then(response => {
                  // console.log(response)
                  // window.location = "/";

                  this.accountRegistrationSuccess = true
                  this.sponsorError = false
                  $("#sponsor").css("border-color", "#ccc");
                  $("#registrationLoader").removeClass( "is-active" );
                  $("html, body").animate({ scrollTop: 0 }, "slow");
                  this.agree = false
                  this.resetCaptcha()
                  this.signup = {
                      emailID: '',
                      password: '',
                      confirmPassword: '',
                      firstName: '',
                      lastName: '',
                      userName: '',
                      dob: '',
                      contactNo: '',
                      sponsor: '',
                      location: '',
                      macAddress: '',
                      ipAddress: '',
                      browser: '',
                      userAgent: ''
                  }

                  var d = new Date();
                  var year = d.getFullYear();
                  var month = d.getMonth();
                  var day = d.getDate();
                  var c = new Date(year -3, month, day)

                  $('[data-toggle="datepicker"]').datepicker({
                    endDate: c,
                    format: 'mm-dd-yyyy',
                    date: new Date(),
                    autoclose: true,
                  }).on('changeDate', function (ev) {
                      console.log("yo");
                       $(this).datepicker('hide');
                  });



                }, response => {
                  this.accountRegistrationSuccess = false
                  var countryData = $("#demo").intlTelInput("getSelectedCountryData");
                  // console.log(countryData.dialCode);
                  this.signup.contactNo = this.signup.contactNo.replace(countryData.dialCode, "")
                   // console.log(this.signup.contactNo);


                  $("#registrationLoader").removeClass( "is-active" );
                  // console.log(response);
                  if (response.body == "Cannot find the sponser.") {
                    this.signup.password = ''
                    this.signup.confirmPassword = ''
                    // change CSS
                    $("#sponsor").css("border-color", "red");
                    this.sponsorError = true
                  } else {
                      if (response.body.split(" ")[0] == 'User') {
                          this.duplicateError = response.body;
                      } else if (response.body.split(" ")[0] == 'Email') {
                        this.duplicateError = response.body;
                      }
                  }
                })
              }
            },
        },
        created() {
          $('#myModal').modal({backdrop: 'static', keyboard: false})
          $(document).ready(function(){
            $('[data-toggle="floatLabel"]').attr('data-value', $(this).val()).on('keyup change', function() {
               $(this).attr('data-value', $(this).val());
            });
          });



        }
    }


</script>
<style scoped>
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
/*
.login-page .form-group {
 height:auto;
}*/

</style>

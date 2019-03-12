<template>
    <div id="test">
        <auth-header></auth-header>
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="verification-block v-two">
                            <h2>Resend Activation Code</h2>
                            <span>Enter your email and we will resend your activation code to you.</span>
                            <div style="padding-top:10px">
                              <div class="alert alert-success fade in" v-if="mail_Sent==true">
                                  Verification link sent to {{act.email}}
                              </div>
                            </div>
                            <div style="padding-top:10px">
                              <div class="alert alert-danger fade in" v-if="!mail_Sent">
                                  {{res}}
                              </div>
                            </div>

                            <form id="resendLink" class="contact-form form-contact"
                                  novalidate="novalidate" @submit.prevent="send_reset_mail()">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-8 form-group">
                                            <!-- <fieldset> -->
                                            <div class="form-group">
                                              <!-- <label style="display: inline" for="email_act">Email: </label> -->
                                              <input id="email_act" style="display: inline; width:100%; border:1px solid #ccc; border-radius:3px; padding:5px"
                                                   :class="{'input': true, 'is-danger': errors.has('email_error') }"
                                                   v-model="act.email" name="email_error" placeholder="E-Mail"
                                                   class="form-control" data-toggle="floatLabel"
                                                   data-value="no-js">
                                                   <p v-if="blank_email" class="help is-danger">E-mail Required</p>

                                              <div class="form-group row">
                                                <div class="text-center-cltwo">
                                                    <div id='html_element'></div>
                                                </div>
                                                  <!-- <div class="g-recaptcha" style="display: inline" data-sitekey="6LepqTsUAAAAAKXT4wM9y7FvRB9_5q6GXMnV8m35"></div> -->
                                                  <template v-if="capchaError" style="display: inline">
                                                      <h5 style="color:red">Please verify captcha</h5>
                                                  </template>
                                              </div>
                                            </div>

                                            <div class="col-md-8 col-sm-12 captcha-field">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="loader loader-default" data-text="Sending Activation Mail..." data-blink id="registrationLoader"></div>
                                    <button class="btn btn-primary" type="submit">Submit</button>
                                    <br><br>Go back to <router-link to="/login">login </router-link>
                                </div>
                            </form>
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
        name: "resend_link",
        components: {
            'auth-header':Header,
            'auth-footer': Footer
        },
        data(){
            return{
                act:{email:''},
                email_error:true,
                errorInEmail:false,
                mail_Sent:'idk',
                res:"",
                capchaError: false,
                blank_email:false
            }
        },
        mounted() {
          this.resetCaptcha()
          localStorage.setItem("resendLinkCaptcha", "false");
        },
        methods:{
            resetCaptcha:  function () {
              setTimeout(function(){
                grecaptcha.render('html_element', {

                      'sitekey' : '6LepqTsUAAAAAKXT4wM9y7FvRB9_5q6GXMnV8m35',
                      'callback' : function (response) {
                         if (response) {
                           localStorage.setItem("resendLinkCaptcha", "true");
                         }
                      }

                 });
              }, 500);
            },
            send_reset_mail:function(){
                this.capchaError = false;
                var captchaValidated = false;


                // if (grecaptcha.getResponse() == ""){
                //     this.capchaError = true
                // } else {
                //     this.capchaError = false
                //     // //console.log(grecaptcha.getResponse());
                //     captchaValidated = true;
                // }

                var captchaStatus = localStorage.getItem("resendLinkCaptcha");
                if (captchaStatus == "true") {
                  captchaValidated = true
                } else {
                  this.capchaError = true
                }



                //console.log("capcha details:"+captchaValidated)
                if (this.act.email.trim() == ''){
                    console.log(this.act.email)
                    console.log("cominmg in red color")
                    this.blank_email=true
                    $("#email_act").css("border-color", "red");
                    $("#email_act2").css("color", "red");
                }
                else{
                    console.log("positive email")
                    this.blank_email=false
                    $("#email_act").css("border-color", "#ccc");
                    $("#email_act2").css("border-color", "#ccc");
                    this.errorInEmail = false
                }
                if(!this.blank_email && captchaValidated){
                    $("#registrationLoader").addClass( "is-active" );
                    // change CSS
                    var resend_link_URL = this.apiURL + '/Account/resendactivationlink'
                    this.$http.get("https://api.ipify.org/?format=json").then(response => {
                      var body_for_resend_link={
                          "Useremail":this.act.email,
                          "MacAddress":"22-55-66-99-78-44",
                          "IpAddress":response.body.ip,
                          "Browser": navigator.appName,
                          "UserAgent":navigator.userAgent,
                          "Location":"IN"
                          }
                      console.log(body_for_resend_link);
                      //console.log(resend_link_URL);

                      this.$http.post(resend_link_URL,body_for_resend_link).then(response => {
                          $("#registrationLoader").removeClass( "is-active" );
                          this.mail_Sent=true
                      }, response => {
                          $("#registrationLoader").removeClass( "is-active" );
                          this.res=response.body;
                          this.mail_Sent=false;
                      })
                    }).then(response => {
                      $("#registrationLoader").removeClass( "is-active" );
                    })

                }
            }
        }
    }
</script>
<style media="screen" scoped>
  h2 {
    font-family: lato-light
  }
</style>

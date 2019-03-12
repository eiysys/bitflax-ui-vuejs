
<template>

    <div class="container-fluid">
        <link rel="stylesheet" type="text/css" href="/static/css/exchange-style.css">
        <div class="loader loader-default" data-text="Loading..." data-blink id="registrationLoader"></div>
        <div class="row">
            <div class="left-sidemenu">
                <div class="logo-section">
                    <img src="../../../assets/img/logo.png">
                     <a href="JavaScript:void(0)" class="pull-rigth"><i class="fa fa-bars" aria-hidden="true"></i></a>
                </div>
                <div class="user-links">
                    <h6><span>Main </span>Menu</h6>

                    <ul>
                        <li id="dashNav" style="display:none">
                          <router-link to="/"><i class="fa fa-dashboard" aria-hidden="true"></i><span>Dashboard</span></router-link>
                        </li>

                        <li id ="icoNav" style="display:none">
                          <router-link to="/ico"><i class="fa fa-bolt" aria-hidden="true"></i><span>ICO</span></router-link>
                        </li>

                        <li id="exchangeNav" style="display:none">
                          <a href="javascript:;"><i class="fa fa-university" aria-hidden="true"></i>
                            <span>BFX Exchange</span></a>
                        </li>

                        <li id="transactionNav" style="display:none"><a href="javascript:;"><i class="fa fa fa-file-text-o" aria-hidden="true"></i> <span>Transaction</span></a>
                        </li>
                        <li id="referralNav" style="display:none">
                          <router-link to="/referral"><i class="fa fa fa-share-alt" aria-hidden="true"></i><span>Referral</span></router-link>
                          <!-- <a href="javascript:;"><i class="fa fa fa-share-alt" aria-hidden="true"></i><span>Referral</span></a> -->
                        </li>
                        <li id="referralNav" style="display:none">
                          <router-link to="/referralTable"><i class="fa fa fa-share-alt" aria-hidden="true"></i><span>Referral Bonus</span></router-link>
                          <!-- <a href="javascript:;"><i class="fa fa fa-share-alt" aria-hidden="true"></i><span>Referral</span></a> -->
                        </li>
                        <li id="securityNav" style="display:none">
                          <router-link to="/security"><i class="fa fa-lock" aria-hidden="true"></i> <span>security</span></router-link>
                        </li>
                        <li id="supportNav" style="display:none"><a href="javascript:;"><i class="fa fa-support" aria-hidden="true"></i><span>support</span></a>
                        </li>
                        <li class="dropdown" id="managementNav" style="display:none">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">management tools <span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a href="javascript:;">Mobile App</a></li>
                            <li><a href="javascript:;">Settings</a></li>
                            <li><a href="javascript:;">Profile</a></li>
                          </ul>
                        </li>
                        <li class="dropdown visible-xs" id="managementNav">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user" aria-hidden="true"></i><span>{{user_name}}</span> <span class="caret"></span></a>
                          <ul class="dropdown-menu">
                            <li><a href="#" @click.prevent="logout"><i class="fa fa-power-off" aria-hidden="true"></i><span>Logout</span></a></li>
                          </ul>
                        </li>

                        <!-- <li id="managementNav" style="display:none">
                            <a href="javascript:;">
                                <i class="fa fa fa-wrench" aria-hidden="true"></i>
                                <span>management tools</span>
                            </a>
                            <ul class="manage_menu">
                                <li id="mobNav">
                                    <a href="javascript:;">
                                        <span>Mobile App</span>
                                    </a>
                                </li>
                                <li id="settingNav">
                                    <a href="javascript:;">
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li id="profileNav">
                                    <a href="javascript:;">
                                        <span>Profile</span>
                                    </a>
                                </li>
                            </ul>
                        </li> -->


                    </ul>
                </div>
            </div>
            <div class="right-content">
                <div class="top-info-row">
                    <ul >
                        <li>
                            <p>USD
                                <small id="USD_age" style="color:white">{{BTC_price_in_USD_age}}% </small>
                                <span>${{BTC_price_in_USD}}</span></p>
                        </li>
                        <li>
                            <p>GBP
                                <small id="GBP_age" style="color:white">{{BTC_price_in_GBP_age}}% </small>
                                <span>${{BTC_price_in_GBP}}</span></p>
                        </li>
                        <li>
                            <p>EUR
                                <small id="EUR_age" style="color:white">{{BTC_price_in_EUR_age}}% </small>
                                <span>${{BTC_price_in_EUR}}</span></p>
                        </li>
                        <li>
                            <p>1 BFX
                                <small> <i class="fa " aria-hidden="true"></i></small>
                                <span>$1.2</span></p>
                        </li>
                    </ul>
                    <ul class="navbar-right hidden-xs">
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle" data-toggle="dropdown"><img
                                    src="../../../assets/img/user.png"> {{user_name}}<!--{{global.userInfo.user_name}}--><span
                                    class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#" @click.prevent="logout">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Question Modal -->
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

          <div id="myModal" class="modal fade" role="dialog" data-keyboard="false" data-backdrop="static">
          <div class="modal-dialog">

          <!-- Modal content-->
          <div class="modal-content">

            <div class="modal-body">
              <h3 class="text-center">Security Questions</h3>
              <hr>
                 <div class="form-group">
                    <span class="control-label">Why do I need to set security questions?</span><br/>
                    <span>To protect you from identity theft and fraud, we may ask you to set up a series of security questions and asnwers. You will be asked to authenticate your identity when needed. <a href="">Read More</a></span>
                 </div>
                 <div class="form-group">
                    <label>Question 1 <span></span> </label>
                    <select class="form-control" v-model="question1">
                      <option value="">Select Question</option>
                      <template v-for="question in questions1">
                        <!-- <option>{{question.question}}</option> -->
                        <option v-if="question.question == question2" style="display:none">ye hai 2</option>
                        <option v-else-if="question.question == question3" style="display:none">ye hai 3</option>
                        <option v-if="question.question != question2 && question.question != question3">{{question.question}}</option>
                      </template>
                    </select><br>
                    <input class="form-control" v-model="answers.answer1"></input>
                 </div>
                 <div class="form-group">
                    <label>Question 2</label>
                    <select class="form-control" v-model="question2">
                      <option value="">Select Question</option>
                      <template v-for="question in questions2">
                        <option v-if="question.question == question1" style="display:none">ye hai 1</option>
                        <option v-else-if="question.question == question3" style="display:none">ye hai 3</option>
                        <option v-if="question.question != question1 && question.question != question3">{{question.question}}</option>
                      </template>
                    </select> <br>
                    <input class="form-control"  v-model="answers.answer2"></input>
                 </div>
                 <div class="form-group">
                    <label>Question 3</label>
                    <select class="form-control" v-model="question3">
                      <option value="">Select Question</option>
                      <template v-for="question in questions3">
                        <!-- <option>{{question.question}}</option> -->
                        <option v-if="question.question == question1" style="display:none">ye hai 1</option>
                        <option v-else-if="question.question == question2" style="display:none">ye hai 2</option>
                        <option v-if="question.question != question1 && question.question != question2">{{question.question}}</option>
                      </template>
                    </select> <br>
                    <input class="form-control" rows="2"  v-model="answers.answer3"></input>
                 </div>

                  <button type="submit" class="btn  btn-success btn-sm " v-on:click="saveUserSecurityQuestions"><i class="fa fa-check fa-lg   progress-icon" data-icon="fa-check"></i> SAVE</button> <span style="color:red;" v-if="question1BlankError"> &nbsp;&nbsp;&nbsp;Please answer all the questions</span>

            </div>
          </div>
          </div>
          </div>
        <!-- Question Modal ends -->


    </div>
</template>

<script>
    import axios from 'axios'
    import {HTTP} from '../../../main.js';
    import VueRouter from 'vue-router'
    export default {
        name: 'header',
        data() {
            return {
                // Question Validations
                question1BlankError: false,

                // Price Conversion
                BTC_price_in_USD: 0,
                BTC_price_in_GBP: 0,
                BTC_price_in_EUR: 0,

                // Price conversion Percentage
                BTC_price_in_USD_age: 0,
                BTC_price_in_GBP_age: 0,
                BTC_price_in_EUR_age: 0,

                isQuestionSubmitted: true,
                originalQuestions: [],
                questions1: [],
                questions2: [],
                questions3: [],
                question1: '',
                question2: '',
                question3: '',
                user_AT: '',
                answers: {
                  answer1: '',
                  answer2: '',
                  answer3: ''
                },
                user_name: '',
                data: 'kaliya',
                global: 'global'
                //Initializing all variables for this page
            }
        },
        props: {
            userInfo: 'global.userInfo'
        },
        methods: {
          logout: function () {

            localStorage.removeItem('bitflax:userAccessToken');
            localStorage.removeItem('bitflax:userData');
            localStorage.removeItem('bitflax:recurringTime');
            localStorage.removeItem('forgetCaptcha');
            localStorage.removeItem('loginCaptcha');
            window.location = "/";
          },
          saveUserSecurityQuestions: function () {
            // Validations
            this.question1BlankError = false

            var question1Validated = false;
            var question2Validated = false;
            var question3Validated = false;
            var answer1Validated = false;
            var answer2Validated = false;
            var answer3Validated = false;

            // Question1
            if (this.question1.trim() == '') {
              this.question1BlankError = true
            } else {
              question1Validated = true
            }

            // Question2
            if (this.question2.trim() == '') {
              this.question1BlankError = true
            } else {
              question2Validated = true
            }

            // Question3
            if (this.question3.trim() == '') {
              this.question1BlankError = true
            } else {
              question3Validated = true
            }

            // Answer1
            if (this.answers.answer1.trim() == '') {
              this.question1BlankError = true
            } else {
              answer1Validated = true
            }


            // Answer2
            if (this.answers.answer2.trim() == '') {
              this.question1BlankError = true
            } else {
              answer2Validated = true
            }

            // Answer3
            if (this.answers.answer3.trim() == '') {
              this.question1BlankError = true
            } else {
              answer3Validated = true
            }

            if (question1Validated && question2Validated && question3Validated && answer1Validated && answer2Validated && answer3Validated) {
              var userData = localStorage.getItem('bitflax:userData');
              var decrypted = CryptoJS.AES.decrypt(userData, this.MySECRET);
              userData = decrypted.toString(CryptoJS.enc.Utf8)
              this.user_AT = JSON.parse(userData).access_token;

              var data = {
                	"QuestionId1":"1",
                	"Question1": this.question1,
                	"Answer1": this.answers.answer1,
                	"QuestionId2":"2",
                	"Question2": this.question2,
                	"Answer2": this.answers.answer2,
                	"QuestionId3":"3",
                	"Question3": this.question3,
                	"Answer3": this.answers.answer3
                }

              var Authorization = 'Bearer ' + this.user_AT

              var saveUserSecurityQuestionURL = this.apiURL + '/Security/saveuserquestion'
              this.$http.post(saveUserSecurityQuestionURL, data,  {headers: {'Authorization': Authorization}}).then(response => {
                this.isQuestionSubmitted = true
                $('#myModal').modal('hide');
              }, response => {
                // console.log(response);
                localStorage.removeItem('bitflax:userAccessToken');
                localStorage.removeItem('bitflax:userData');
                // window.location = "/login";
                var router = new VueRouter() ;
                router.go('/login');
                // this.$route.router.go('/login');
              })
            }

          },
          openModel: function () {
            var getSecurityURL = this.apiURL + '/Security/getsecurityquestion'
            this.$http.get(getSecurityURL).then(response => {
              this.originalQuestions = response.body.value;
              // console.log(this.originalQuestions);
              for (let i=0;i<response.body.value.length;i++) {
                  this.questions1.push(response.body.value[i])
                  this.questions2.push(response.body.value[i])
                  this.questions3.push(response.body.value[i])
              }

              // console.log(response);
            }, response => {
              console.log(response);
            })
            // console.log("No question answered");
            // $('.modal-content').css('height',$( window ).height()*0.8);
            $('#myModal').modal({backdrop: 'static', keyboard: false})
            $('#myModal').modal('show');

          },
          getSideNav: function () {
            var userData = localStorage.getItem('bitflax:userData');
            var decrypted = CryptoJS.AES.decrypt(userData, this.MySECRET);
            userData = decrypted.toString(CryptoJS.enc.Utf8)
            this.user_AT = JSON.parse(userData).access_token;

            var Authorization = 'Bearer ' + this.user_AT

            var getNavURL = this.apiURL + '/Nav/getnav'
           this.$http.get(getNavURL, {headers: {'Authorization': Authorization}}).then(response => {
              // console.log(response.body.value);
              // console.log(response);
              for (let i=0;i<response.body.value.length;i++) {
                // console.log(response.body.value[i]);
                // Dashboard
                if (response.body.value[i].linkName.toUpperCase() == 'DASHBOARD' && response.body.value[i].active) {
                  // console.log("yes");
                  $("#dashNav").show()
                }

                if (response.body.value[i].linkName.toUpperCase() == 'WALLET' && response.body.value[i].active) {
                  // console.log("yes");
                  $("#dashNav").show()
                }

                // Exchange tab
                if (response.body.value[i].linkName.toUpperCase() == 'BFX EXCHANGE'  && response.body.value[i].active) {
                  $("#exchangeNav").show()
                }

                // Transaction tab
                if (response.body.value[i].linkName.toUpperCase() == 'TRANSACTION'  && response.body.value[i].active) {
                  $("#transactionNav").show()
                }

                // Reffral tab
                if (response.body.value[i].linkName.toUpperCase() == 'REFFERAL'  && response.body.value[i].active) {
                  $("#referralNav").show()
                }

                //  Security tab
                if (response.body.value[i].linkName.toUpperCase() == 'SECURITY'  && response.body.value[i].active) {
                  $("#securityNav").show()
                }

                // Support Nav
                if (response.body.value[i].linkName.toUpperCase() == 'SUPPORT'  && response.body.value[i].active) {
                  $("#supportNav").show()
                }

                // Management Tool Nav
                if (response.body.value[i].linkName.toUpperCase() == 'MANAGEMENT TOOLS'  && response.body.value[i].active) {
                  $("#managementNav").show()
                }

                // ICO Nav
                if (response.body.value[i].linkName.toUpperCase() == 'ICO'  && response.body.value[i].active) {
                  $("#icoNav").show()
                }

              }
              $("#registrationLoader").removeClass( "is-active" );
            }, response => {
              console.log(response);
            })

          }


        },
        beforeCreate() {

        },
        mounted() {
          // Get Bitcoin Price in USD
          var bitcoinPrice = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD'
          // Get user security status
          this.$http.get(bitcoinPrice).then(response => {
            this.BTC_price_in_USD = parseFloat(response.body[0].price_usd).toFixed(4);
            this.BTC_price_in_USD_age = response.body[0].percent_change_1h;
            // console.log(response.body[0].price_usd);
            if (this.BTC_price_in_USD_age.includes("-")) {
              $("#USD_age").css('color', '#cc0000')
            } else {
              $("#USD_age").css('color', 'green')
            }
          }, response => {
            console.log(response);
          })

          // Get Bitcoin Price in GBP
          var bitcoinPrice = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=GBP'
          // Get user security status
          this.$http.get(bitcoinPrice).then(response => {
            this.BTC_price_in_GBP = parseFloat(response.body[0].price_gbp).toFixed(4);
            this.BTC_price_in_GBP_age = response.body[0].percent_change_1h;
            // console.log(response.body[0].price_usd);
            if (this.BTC_price_in_GBP_age.includes("-")) {
              $("#GBP_age").css('color', '#cc0000')
            } else {
              $("#GBP_age").css('color', 'green')
            }
          }, response => {
            console.log(response);
          })

          // Get Bitcoin Price in EUR
          var bitcoinPrice = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=EUR'
          // Get user security status
          this.$http.get(bitcoinPrice).then(response => {
            this.BTC_price_in_EUR = parseFloat(response.body[0].price_eur).toFixed(4);
            this.BTC_price_in_EUR_age = response.body[0].percent_change_1h;
            // console.log(response.body[0].price_usd);

            if (this.BTC_price_in_EUR_age.includes("-")) {
              $("#EUR_age").css('color', '#cc0000')
            } else {
              $("#EUR_age").css('color', 'green')
            }


          }, response => {
            console.log(response);
          })

          // Get Ethereum Price
          var ethereumPrice = 'https://api.coinmarketcap.com/v1/ticker/ethereum/'
          this.$http.get(ethereumPrice).then(response => {
            this.ethereumPrice = response.body[0].price_usd
            // console.log(response.body[0].price_usd);
          }, response => {
            console.log(response);
          })

          $("#registrationLoader").addClass( "is-active" );
          var sponsor = localStorage.getItem('bitflax:reference');
          if (sponsor) {
            // window.reload()
            location.reload()
          }
        },
        created() {
          this.getSideNav()
          var userData = localStorage.getItem('bitflax:userData');
          var decrypted = CryptoJS.AES.decrypt(userData, this.MySECRET);
          userData = decrypted.toString(CryptoJS.enc.Utf8)
          this.user_name = JSON.parse(userData).user_name;
          this.user_AT = JSON.parse(userData).access_token;


          var Authorization = 'Bearer ' + this.user_AT
          var checkSecurityQeustionStatusURL = this.apiURL + '/Security/isuserquestioninserted'

          // Get user security status
          this.$http.get(checkSecurityQeustionStatusURL,{headers: {'Authorization': Authorization}}).then(response => {
            // console.log("question");
            this.isQuestionSubmitted = true;

          }, response => {
            this.isQuestionSubmitted = false;
            this.openModel()
            if (response.status == 401) {
              localStorage.removeItem('bitflax:userAccessToken');
              localStorage.removeItem('bitflax:userData');
              // window.location = "/login";
              var router = new VueRouter() ;
              router.go('/login');
              // this.$route.router.go('/login');

            }
            console.log(response);
          })



        },
        // watch: {
        //   question1: function (val) {
        //     console.log("question 1 changed");
        //     // for question 2
        //     this.questions2 = [];
        //     for (let i=0; i<this.originalQuestions.length;i++) {
        //       this.questions2.push(this.originalQuestions[i])
        //     }
        //
        //     for(let i=0;i<this.questions2.length;i++) {
        //       if (this.questions2[i].question == val) {
        //         this.questions2.splice(i, 1);
        //       }
        //     }
        //
        //
        //     // for question 3
        //     this.questions3 = [];
        //     for (let i=0; i<this.originalQuestions.length;i++) {
        //       this.questions3.push(this.originalQuestions[i])
        //     }
        //
        //     for(let i=0;i<this.questions3.length;i++) {
        //       if (this.questions3[i].question == val) {
        //         this.questions3.splice(i, 1);
        //       }
        //     }
        //
        //
        //
        //
        //
        //   },
        //   question2: function (val) {
        //
        //     console.log("question2 changed");
        //     console.log(val);
        //     // for question 1
        //     this.questions1 = [];
        //     for (let i=0; i<this.originalQuestions.length;i++) {
        //       this.questions1.push(this.originalQuestions[i])
        //     }
        //
        //     for(let i=0;i<this.questions1.length;i++) {
        //       if (this.questions1[i].question == val) {
        //         this.questions1.splice(i, 1);
        //       }
        //     }
        //
        //     console.log(this.questions1);
        //
        //     // for question 3
        //     this.questions3 = [];
        //     for (let i=0; i<this.originalQuestions.length;i++) {
        //       this.questions3.push(this.originalQuestions[i])
        //     }
        //     debugger;
        //     for(let i=0;i<this.questions3.length;i++) {
        //       if (this.questions3[i].question == val) {
        //         this.questions3.splice(i, 1);
        //       }
        //     }
        //
        //     console.log(this.questions3);
        //
        //   },
        //   question3: function (val) {
        //     console.log("question3 changed");
        //     // for question 1sinup
        //     this.questions1 = [];
        //     for (let i=0; i<this.originalQuestions.length;i++) {
        //       this.questions1.push(this.originalQuestions[i])
        //     }
        //
        //     for(let i=0;i<this.questions1.length;i++) {
        //       if (this.questions1[i].question == val) {
        //         this.questions1.splice(i, 1);
        //       }
        //     }
        //
        //     // for question 2
        //     this.questions2 = [];
        //     for (let i=0; i<this.originalQuestions.length;i++) {
        //       this.questions2.push(this.originalQuestions[i])
        //     }
        //
        //     for(let i=0;i<this.questions2.length;i++) {
        //       if (this.questions2[i].question == val) {
        //         this.questions2.splice(i, 1);
        //       }
        //     }
        //   },
        // }
    }
</script>
<style media="screen">
</style>

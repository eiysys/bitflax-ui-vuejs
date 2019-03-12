<template lang="html">
  <div class="">
    <auth-header></auth-header>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="verification-block">
              <h3>Remove G2A</h3>
              <div class="alert alert-success fade in" v-if="success">
                <a href="#" class="close" data-dismiss="alert" aria-label="close"></a>
                <strong>Success!</strong> Email sent succesfully.
              </div>
              <div class="alert alert-danger fade in" v-if="failed">
                <a href="#" class="close" data-dismiss="alert" aria-label="close"></a>
                <strong>Failure!</strong> Removal of G2A failed.
              </div>
              <span>Current Email: {{userEmail}}</span>
              <p>To protect you from identity theft and fraud we require you to answer security questions.</p>
              <form class="verify_email">
                <br>
               <select class="form-control" v-model="question1">
                <option value="">Select Question</option>
                <template v-for="question in questions1">
                    <option>{{question.question}}</option>
                </template>
               </select>
               <br>
                <input type="text" name="" placeholder="" class="form-control" v-model="answer1">
                <br>
                <select class="form-control" v-model="question2">
                  <option value="">Select Question</option>
                  <template v-for="question in questions2">
                      <option>{{question.question}}</option>
                  </template>

               </select>
               <br>
                <input type="text" name="" placeholder="" class="form-control" v-model="answer2">
                <br>
                <input type="button" name="" value="Send removal link to email" class="btn btn-success" v-on:click="postUserQuestions">
                <p class="red-alert" v-if="answerBlankError" style="font-size:15px">Please answer all the questions</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    <auth-footer></auth-footer>
  </div>

<!-- {{question1}} -->
</template>

<script>
import Header from '../header/unauthHeader.vue';
import Footer from '../header/unauthFooter.vue';
export default {
  name: 'removeg2a',
  components: {
      'auth-header':Header,
      'auth-footer': Footer
  },
  data() {
    return {
      userEmail: '',
      originalQuestions: [],
      questions1: [],
      questions2: [],
      question1: '',
      question1ID: '',
      question2: '',
      question2ID: '',
      answer1: '',
      answer2: '',

      // Validations
      answerBlankError: false,
      success: false,
      failed: false,

      // IP details
      Location: '',
      IpAddress: '',
      Browser: '',
      UserAgent: '',
    }
  },
  methods: {
    getUserQuestions: function () {
      // /Security/getuserquestion?email=shiv@revinfotech.com
      var userEmail = localStorage.getItem('bitflax:userEmail');
      var getSecurityURL = this.apiURL + '/Security/getuserquestion/?email=' + userEmail
      this.$http.get(getSecurityURL).then(response => {
        console.log(response);
        this.originalQuestions = response.body.value;
        for (let i=0;i<response.body.value.length;i++) {
            this.questions1.push(response.body.value[i])
            this.questions2.push(response.body.value[i])
        }

      }, response => {
        console.log(response);
      })

    },
    postUserQuestions: function () {

      // Validations
      this.answerBlankError = false;
      this.success = false;
      this.failed = false;

      var question1Validated = false;
      var question2Validated = false;
      var answer1Validated = false;
      var answer2Validated = false;

      // Question 1
      if (this.question1 == '') {
        this.answerBlankError = true
      } else {
        question1Validated = true
      }

      // Question 2
      if (this.question2 == '') {
        this.answerBlankError = true
      } else {
        question2Validated = true
      }

      // Answer 1
      if (this.answer1.trim() == '') {
        this.answerBlankError = true
      } else {
        answer1Validated = true
      }

      // Answer 2
      if (this.answer2.trim() == '') {
        this.answerBlankError = true
      } else {
        answer2Validated = true
      }

      if (question1Validated && question2Validated && answer1Validated && answer2Validated) {
        var g2aToken = localStorage.getItem('bitflax:G2AToken');
        var verifyQuestionURL = this.apiURL + '/Security/forgetg2factor'
        var data = {
           "QuestionId1": this.question1ID,
           "Question1": this.question1,
           "Answer1": this.answer1,
           "QuestionId2":this.question2ID,
           "Question2": this.question2,
           "Answer2":this.answer2,
           "AccountId":g2aToken,
           "IpAddress": this.IpAddress,
           "Browser": this.Browser,
           "UserAgent": this.UserAgent,
           "Location": this.Location

          }
          // alert(JSON.stringify(data));
        this.$http.post(verifyQuestionURL, data).then(response => {
          console.log(response);
          this.success = true
        }, response => {
          this.failed = true
          console.log(response);
        })
      }
    },
    getIPDetails: function () {
      this.$http.get("https://api.ipify.org/?format=json").then(response => {
        this.IpAddress = response.body.ip;
        this.Location = "IN";
        this.macAddress = "22-55-66-99-78-44";
        this.Browser = navigator.appName;
        this.UserAgent = navigator.userAgent;

        console.log(response);
      }, response => {
        console.log(response)

      })
    }
  },
  created() {
    this.getUserQuestions()
    this.getIPDetails()
  },
  mounted() {
    var userEmail = localStorage.getItem('bitflax:userEmail');
    this.userEmail = userEmail;
  },
  watch: {
    question1: function (val) {
      // for question 2
      this.questions2 = [];

      for (let i=0; i<this.originalQuestions.length;i++) {
        this.questions2.push(this.originalQuestions[i])
      }

      for(let i=0;i<this.questions2.length;i++) {
        if (this.questions2[i].question == val) {
          this.questions2.splice(i, 1);
        }
      }

      for (let i=0; i<this.originalQuestions.length;i++) {
        if (this.question1 == this.originalQuestions[i].question) {
          this.question1ID = this.originalQuestions[i].questionId
        }
      }

    },
    question2: function (val) {

      // for question 1
      this.questions1 = [];
      for (let i=0; i<this.originalQuestions.length;i++) {
        this.questions1.push(this.originalQuestions[i])
      }

      for(let i=0;i<this.questions1.length;i++) {
        if (this.questions1[i].question == val) {
          this.questions1.splice(i, 1);
        }
      }

      for (let i=0; i<this.originalQuestions.length;i++) {
        if (this.question2 == this.originalQuestions[i].question) {
          this.question2ID = this.originalQuestions[i].questionId
        }
      }

    },
  },

}
</script>

<style lang="css">
</style>

<template>
    <div class="">

      <app-header></app-header>

      <div class="right-inner-content">
        <div class="col-md-12 ico-details">
           <div class="tabs-same-all">
                 <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                       <div class="panel-heading" role="tab" id="headingOne">
                          <h4 class="panel-title">
                             <a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseopen-orders" aria-expanded="true" aria-controls="collapseopen-orders">
                             Referral Bonus
                             </a>
                          </h4>
                       </div>
                       <div id="collapseopen-orders" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                          <div class="panel-body">

                             <div class="table-responsive in-table-bit">
                                <!-- <table id="">
                                   <thead>
                                      <th>Date</th>
                                      <th>Transaction hash </th>
                                      <th>Debit Amount</th>
                                      <th>Credit Amount</th>
                                   </thead>
                                   <tbody>
                                     <template v-for="transaction in MyTransactions">
                                       <tr>
                                          <td>{{transaction.createdAt | formatDate}}</td>
                                          <td>{{transaction.txHash}}</td>
                                          <td>{{transaction.debitAmount}}</td>
                                          <td>{{transaction.creditAcount}}</td>
                                       </tr>
                                     </template>
                                     <template v-for="transaction in AllTransactions">
                                       <tr>
                                          <td>{{transaction.createdAt | formatDate}}</td>
                                          <td>{{transaction.txHash}}</td>
                                          <td>{{transaction.debitAmount}}</td>
                                          <td>{{transaction.creditAcount}}</td>
                                       </tr>
                                     </template>
                                   </tbody>
                                </table> -->
                                <!-- {{selectedTransaction}} -->
                                <table id="myTable">
                                   <thead>
                                       <tr>
                                         <th>S.No</th>
                                         <th>User Name</th>
                                         <th>Date Received</th>
                                         <th>Bonus</th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                     <template v-for="(bonus, index) in BonusData">
                                       <tr>
                                          <td> {{index+1}}</td>
                                          <td >{{bonus.userName}}</td>
                                          <td> <span style="display:none">{{bonus.recievedDate | formatDate2}}</span> {{bonus.recievedDate | formatDate}}</td>
                                          <td>{{bonus.bonus}}</td>
                                       </tr>
                                     </template>
                                   </tbody>
                               </table>
                             </div>
                             <!-- <div class="pagination">
                                <nav aria-label="Page navigation">
                                   <ul class="pagination">
                                      <li>
                                         <a href="#" aria-label="Previous">
                                         <span aria-hidden="true">�</span>
                                         </a>
                                      </li>
                                      <li><a href="#">1</a></li>
                                      <li><a href="#">2</a></li>
                                      <li><a href="#">3</a></li>
                                      <li><a href="#">4</a></li>
                                      <li><a href="#">5</a></li>
                                      <li>
                                         <a href="#" aria-label="Next">
                                         <span aria-hidden="true">�</span>
                                         </a>
                                      </li>
                                   </ul>
                                </nav>
                             </div> -->
                          </div>
                       </div>
                    </div>
                 </div>
                 <!--./panel-group-->
              </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Header from '../header/header.vue';

    export default {
        name: 'signUp',
        components: {
            'app-header': Header,
        },
        data() {
            return {
              user_AT : '',
              BonusData: []
            }
        },
        methods: {
          
        },
        created() {

        },
        mounted() {
          var userData = localStorage.getItem('bitflax:userData');
          var decrypted = CryptoJS.AES.decrypt(userData, this.MySECRET);
          userData = decrypted.toString(CryptoJS.enc.Utf8)
          this.user_AT = JSON.parse(userData).access_token;
          this.urlWithUserName = this.urlWithUserName + this.user_name

          var Authorization = 'Bearer ' + this.user_AT
          var url = this.apiURL + '/Referral/getrefferralbonustransaction'
          this.$http.get(url ,{headers: {'Authorization': Authorization}}).then(response => {
            var table = $('#myTable').DataTable();
            table.destroy();
            console.log(response);
            this.BonusData = response.body.value;
            setTimeout(function(){
            $(document).ready(function(){
                $('#myTable').DataTable({
                  "bDestroy": true,
                  "order": [[ 0, "asc" ]]
                });
            });
          }, 500);
          }, response => {
            console.log(response);
          })
        }
    }
</script>
<style>

</style>

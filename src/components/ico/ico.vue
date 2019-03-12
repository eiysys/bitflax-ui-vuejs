
<template>
  <div>
    <app-header></app-header>
    <div class="right-inner-content">
           <!-- <div class="col-md-12">
              <ul class="top-exchange-blocks">

                 <li><span>Lending Wallet</span>$ 0.00</li>
                 <li class="buttons-list"><button class="btn btn-primary"><i class="fa fa-angle-right" aria-hidden="true"></i> Transfer <i class="fa fa-angle-right" aria-hidden="true"></i></button></li>
                 <li><span>Bitflax Wallet</span><i class="fa fa-university" aria-hidden="true"></i> 3.0000000</li>
                 <li class="buttons-list"><button class="btn btn-primary"><i class="fa fa-angle-left" aria-hidden="true"></i> Exchange <i class="fa fa-angle-right" aria-hidden="true"></i></button></li>
                 <li><span>Bitcoin Wallet</span><i class="fa fa-bitcoin" aria-hidden="true"></i> 3.0000000</li>
                 <li><span>ETH Wallet</span> BFX: 0.000000</li>
              </ul>s
           </div> -->
           <div class="loader loader-default" data-text="Please Wait" data-blink id="registrationLoader"></div>
           <div class="col-md-12 top-copy-link-block">
              <form action="#" class="pull-left">
                 <div class="input-group">
                   <input id="myInput" class="ct-up" type="text" v-bind:value="urlWithUserName" readonly="readonly">
                    <!-- <input class="ct-up" type="text" value="http://bitflax.devserver.co.in/"> -->
                    <button class="btn btn-orange" data-clipboard-target="#myInput" type="button" v-on:click="copyAddress" style="margin-top:0px"><i class="fa fa-files-o" aria-hidden="true"></i> Copy</button>
                 </div>
              </form>
              <!-- <template v-if="ICOTokenLimit == 0" style="display:none">
                <ul class="top-exchange-blocks text-right">
                    <li style="background-color: green"><span style="color: white">No Limit</span> </li>
                </ul>
              </template> -->
              <template v-if="ICOTokenLimit != 0">
                <ul class="top-exchange-blocks text-right">
                    <li style="background-color: #800000"><span style="color: white">Minimum ICO Token Limit: {{ICOTokenLimit}}</span> </li>
                </ul>
              </template>
              <!-- <ul class="top-exchange-blocks text-right">
                  <li style="background-color: #800000"><span style="color: white">ICO Token Limit: {{ICOTokenLimit}}</span> </li>
              </ul> -->
              <!-- <button class="lending-guide-btn btn btn-primary pull-right"><i class="fa fa-building-o" aria-hidden="true"></i> Lending Guide</button> -->
           </div>
           <div class="clearfix"></div>
           <!-- Modals -->
           <!-- BTC Modal -->
           <div class="modal fade modal-ico" id="deposit-modal-BTC" tabindex="-1" role="dialog" aria-labelledby="Mobile" aria-hidden="true">
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                  <div class="modal-header">
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                     <h4 class="modal-title" id="myModalLabel">Your BTC Deposit Address</h4>
                  </div>
                  <div class="modal-body deposit-block">
                    <div class="text-center form-group">
                      <pre>{{BTC_Address}}</pre>
                    </div>
                     <button type="button" class="btn btn-success" v-on:click="showBTCQR" id="showBTCQRCodeButton">Show QR Code</button>
                     <button type="button" class="btn btn-success" v-on:click="hideBTCQR" id="hideBTCQRCodeButton" style="display:None">Hide QR Code</button>
                     <!-- <a href=""class="sh-qr" v-on:click="showBTCQR">Show QR Code</a> -->
                     <div class="text-center" id="showBTCQRCode" style="display:none">
                       <qriously v-bind:value="BTC_Address" :size="150" />
                     </div>
                     <p class="red-alert">The minimum deposit amount of BTC each time: You can deposit any amount, no minimum.
                     IMPORTANT: Send only BTC to this deposit address. You need to have 01 confirmation from blockchain to get BTC deposited on your wallet.</p>
                     <p>Sending any other currency to this address may result in the loss of your deposit.</p>
                     <span>After making a deposit, you can track its progress on the <a href="">Deposit & Withdrawal History</a> page.</span>
                  </div>
               </div>
            </div>
         </div>

         <!-- ETH Modal -->
         <div class="modal fade modal-ico" id="deposit-modal-ETH" tabindex="-1" role="dialog" aria-labelledby="Mobile" aria-hidden="true">
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                  <div class="modal-header">
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                     <h4 class="modal-title" id="myModalLabel">Your ETH Deposit Address</h4>
                  </div>
                  <div class="modal-body deposit-block">
                     <!-- <h3>{{ETH_Address}}</h3> -->
                     <div class="text-center form-group">
                       <pre>{{ETH_Address}}</pre>
                     </div>
                     <!-- <a href="" class="sh-qr">Show QR Code</a> -->
                     <button type="button" class="btn btn-success" v-on:click="showETHQR" id="showETHQRCodeButton">Show QR Code</button>
                     <button type="button" class="btn btn-success" v-on:click="hideETHQR" id="hideETHQRCodeButton" style="display:None">Hide QR Code</button>
                     <!-- <a href=""class="sh-qr" v-on:click="showBTCQR">Show QR Code</a> -->
                     <div class="text-center" id="showETHQRCode" style="display:none">
                       <qriously v-bind:value="ETH_Address" :size="150" />
                     </div>
                     <p class="red-alert">The minimum deposit amount of BTC each time: You can deposit any amount, no minimum.
                     IMPORTANT: Send only BTC to this deposit address. You need to have 01 confirmation from blockchain to get BTC deposited on your wallet.</p>
                     <p>Sending any other currency to this address may result in the loss of your deposit.</p>
                     <span>After making a deposit, you can track its progress on the <a href="">Deposit & Withdrawal History</a> page.</span>
                  </div>
               </div>
            </div>
         </div>

       <!-- BFX Modal -->
       <div class="modal fade modal-ico" id="deposit-modal-BFX" tabindex="-1" role="dialog" aria-labelledby="Mobile" aria-hidden="true">
          <div class="modal-dialog" role="document">
             <div class="modal-content">
                <div class="modal-header">
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                   </button>
                   <h4 class="modal-title" id="myModalLabel">Your BFX Deposit Address</h4>
                </div>
                <div class="modal-body deposit-block">
                   <h3>{{BFX_Address}}</h3>
                   <!-- <a href="" class="sh-qr">Show QR Code</a> -->
                   <button type="button" class="btn btn-success" v-on:click="showBFXQR" id="showBFXQRCodeButton">Show QR Code</button>
                   <button type="button" class="btn btn-success" v-on:click="hideBFXQR" id="hideBFXQRCodeButton" style="display:None">Hide QR Code</button>
                   <!-- <a href=""class="sh-qr" v-on:click="showBTCQR">Show QR Code</a> -->
                   <div class="text-center" id="showBFXQRCode" style="display:none">
                     <qriously v-bind:value="BFX_Address" :size="120" />
                   </div>
                   <p class="red-alert">The minimum deposit amount of BTC each time: You can deposit any amount, no minimum.
                   IMPORTANT: Send only BTC to this deposit address. You need to have 01 confirmation from blockchain to get BTC deposited on your wallet.</p>
                   <p>Sending any other currency to this address may result in the loss of your deposit.</p>
                   <span>After making a deposit, you can track its progress on the <a href="">Deposit & Withdrawal History</a> page.</span>
                </div>
             </div>
          </div>
       </div>


         <!-- Modals Ends -->

           <div class="col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8">
              <div class="ico-section text-center">
                 <h2>Deposits & Withdrawals</h2>
                 <!-- <p>Estimated value of holdings: <span class="highlight_txt">0.00 USD</span></p> -->
                 <p> Deposit or withdraw anytime you want </p>
                 <div class="table-responsive in-table-bit">
                    <table>
                       <thead>
                          <th class="text-center">Coin</th>
                          <th class="text-center">Name</th>
                          <th class="text-center">Total Coin</th>
                          <th class="text-center">Actions</th>
                       </thead>
                       <tr>
                          <td>BTC</td>
                          <td>Bitcoin</td>
                          <td>{{BTCWalletBalance}}</td>
                          <td class="btns-actions"><button class="btn btn-success" data-toggle="modal" data-target="#deposit-modal-BTC">Deposit</button>
                            <!-- <button class="btn btn-warning" data-toggle="modal" data-target="#withdraw-modal">Withdraw</button> -->
                          </td>
                       </tr>
                       <tr>
                          <td>ETH</td>
                          <td>Ether</td>
                          <td>{{ETHWalletBalance}}</td>
                          <td class="btns-actions"><button class="btn btn-success" data-toggle="modal" data-target="#deposit-modal-ETH">Deposit</button>
                            <!-- <button class="btn btn-warning" data-toggle="modal" data-target="#withdraw-modal">Withdraw</button> -->
                          </td>
                       </tr>
                       <tr>
                          <td>BFX</td>
                          <td>Bitflax</td>
                          <td>{{BFXWalletBalance}}</td>
                          <td class="btns-actions"><!--<button class="btn btn-success" data-toggle="modal" data-target="#deposit-modal-BFX">Deposit</button><button class="btn btn-warning" data-toggle="modal" data-target="#withdraw-modal">Withdraw</button>--></td>
                       </tr>
                    </table>
                 </div>
              </div>
           </div>
           <div class="col-md-12 ico-details">
              <div class="tabs-same-all">
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                       <div class="panel panel-default">
                          <div class="panel-heading" role="tab" id="headingOne">
                             <h4 class="panel-title">
                                <a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseopen-orders" aria-expanded="true" aria-controls="collapseopen-orders">
                                Last Transaction
                                </a>
                             </h4>
                          </div>
                          <div id="collapseopen-orders" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                             <div class="panel-body">
                                <span class="select-label">
                                   Show
                                   <select v-model="selectedTransaction">
                                     <option>My Transaction</option>
                                      <option>All Transaction</option>
                                   </select>
                                </span>
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
                                            <th>Date</th>
                                            <th>Transaction hash </th>
                                            <th>Debit Amount</th>
                                            <th>Credit Amount</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                        <template v-for="transaction in MyTransactions">
                                          <tr>
                                             <td> <span style="display:none">{{transaction.createdAt | formatDate2 }}</span> {{transaction.createdAt | formatDate}}</td>
                                             <td v-if="transaction.showHREF"><a  target="_blank" v-bind:href="transaction.urlToHash">{{transaction.txHash}}</a> </td>
                                             <td v-if="!transaction.showHREF">{{transaction.txHash}} </td>
                                             <td class="text-center">{{transaction.debitAmount.toFixed(8)}}</td>
                                             <td class="text-center">{{transaction.creditAcount.toFixed(8)}}</td>
                                          </tr>
                                        </template>
                                        <template v-for="transaction in AllTransactions">
                                          <tr>
                                             <td> <span style="display:none">{{transaction.createdAt | formatDate2 }}</span> {{transaction.createdAt | formatDate}}</td>
                                             <!-- <td><a  target="_blank" v-bind:href="transaction.urlToHash">{{transaction.txHash}}</a></td> -->
                                             <td v-if="transaction.showHREF"><a  target="_blank" v-bind:href="transaction.urlToHash">{{transaction.txHash}}</a> </td>
                                             <td v-if="!transaction.showHREF">{{transaction.txHash}} </td>
                                             <td class="text-center">{{transaction.debitAmount.toFixed(8)}}</td>
                                             <td class="text-center">{{transaction.creditAcount.toFixed(8)}}</td>
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

import Header from '../auth/header/header.vue';

export default {
  name: 'ico',
  components: {
      'app-header': Header,
      // 'app-footer': Footer
  },
  data() {
    return{
      recJob: '',
      BTC_Address: '',
      ETH_Address: '',
      BFX_Address: '',
      ETHWalletBalance: 0,
      BTCWalletBalance: 0,
      BTCWalletBalanceunconfirmed:0,
      BFXWalletBalance: 0,
      user_AT: '',
      walletData: '',
      selectedTransaction: 'My Transaction',
      google2factorTransactionEnabled: false,

      ICOTokenLimit: 0,
      user_name: '',
      urlWithUserName: 'https://ico.bitflax.io/refer/?ref=',

      // Wallet Transactions
      AllTransactions: [],
      MyTransactions: []
    }
  },
  methods: {

    getICOTotkenLimit: function () {
      // ICO token Limit
      var ICOTokenLimitURL = this.apiURL + '/ICO/geticotokenlimit'
      // Get user security status
      this.$http.get(ICOTokenLimitURL).then(response => {
        // console.log('limit');
        // console.log(response);
        this.ICOTokenLimit = response.body.value[0].perUserTokenLimitMin
        // this.BTCWalletBalance = response.body.value.value.balance
      }, response => {
        console.log(response);
      })
    },

    CheckEthereumTransaction: function () {
      var Authorization = 'Bearer ' + this.user_AT
      var url = this.apiURL + '/WalletTransaction/CheckEthereumTransaction';
      // Get user security status
      this.$http.get(url,{headers: {'Authorization': Authorization}}).then(response => {
        // console.log('this is CheckEthereumTransaction');
        // console.log(response);
        this.getETHWalletBalance()
      }, response => {
        console.log('this is CheckEthereumTransaction');
        console.log(response);
      })
    },
    UpdateBitcoinTransactions: function () {
      var Authorization = 'Bearer ' + this.user_AT
      var url = this.apiURL + '/WalletTransaction/UpdateBitcoinTransactions';
      // Get user security status
      this.$http.get(url,{headers: {'Authorization': Authorization}}).then(response => {
        // console.log('this is Update Bitcoin Transaction');
        // console.log(response);
        this.getbtcincomingtrans()
      }, response => {
        console.log(response);
        this.getbtcincomingtrans()
      })
    },
    UpdateEtherTransactions: function () {
      var Authorization = 'Bearer ' + this.user_AT
      var url = this.apiURL + '/WalletTransaction/UpdateEtherTransactions';
      // Get user security status
      this.$http.get(url,{headers: {'Authorization': Authorization}}).then(response => {
        console.log('this is update Ether Transaction');
        console.log(response);
      }, response => {
        console.log(response);
      })
    },
    getbtcincomingtrans: function () {
      var Authorization = 'Bearer ' + this.user_AT
      var URL = this.apiURL + '/WalletTransaction/getbtcincomingtrans'
      this.$http.get(URL, {headers: {'Authorization': Authorization}}).then(response => {
        this.getBTCWalletBalance()
        // calculate unconfirmed balacnce
        // this.BTCWalletBalanceunconfirmed = 0
        // for (let i=0; i<response.body.value.length;i++) {
        //   this.BTCWalletBalanceunconfirmed += response.body.value[i].creditAcount
        // }
      }, response => {
        this.getBTCWalletBalance()
        // this.BTCWalletBalanceunconfirmed = 0

      })
    },

    getWallets: function () {
      var Authorization = 'Bearer ' + this.user_AT
      // console.log(Authorization);
      var walletURL = this.apiURL + '/WalletTransaction/getuserwallet'
      // console.log(walletURL);
      this.$http.get(walletURL, {headers: {'Authorization': Authorization}}).then(response => {
        // console.log(response);
        this.walletData = response.body.value;
        for (let i=0; i<this.walletData.length;i++) {
          if (this.walletData[i].walletCode == 'BFX') {
            this.BFX_Address = this.walletData[i].walletAddress
          }
          if (this.walletData[i].walletCode == 'BTC') {
            this.BTC_Address = this.walletData[i].walletAddress
          }
          if (this.walletData[i].walletCode == 'ETH') {
            this.ETH_Address = this.walletData[i].walletAddress
          }
          // console.log();
        }

      }, response => {
        console.log(response);
      })
    },
    copyAddress: function () {
      document.querySelector("#myInput").select();
      document.execCommand('copy');
      // var copyText = document.getElementById("myInput");
      // copyText.select();
      // document.execCommand("Copy");
      // alert("Copied the text: " + copyText.value);
    },
    showBTCQR: function () {
      $("#showBTCQRCode").show();
      $("#showBTCQRCodeButton").hide();
      $("#hideBTCQRCodeButton").show();
    },
    hideBTCQR: function () {
      $("#showBTCQRCode").hide();
      $("#showBTCQRCodeButton").show();
      $("#hideBTCQRCodeButton").hide();
    },
    showETHQR: function () {
      $("#showETHQRCode").show();
      $("#showETHQRCodeButton").hide();
      $("#hideETHQRCodeButton").show();
    },
    hideETHQR: function () {
      $("#showETHQRCode").hide();
      $("#showETHQRCodeButton").show();
      $("#hideETHQRCodeButton").hide();
    },
    showBFXQR: function () {
      $("#showBFXQRCode").show();
      $("#showBFXQRCodeButton").hide();
      $("#hideBFXQRCodeButton").show();
    },
    hideBFXQR: function () {
      $("#showBFXQRCode").hide();
      $("#showBFXQRCodeButton").show();
      $("#hideBFXQRCodeButton").hide();
    },
    getAllTransactions: function () {
      var table = $('#myTable').DataTable();
      table.destroy();
      this.MyTransactions = []
      var Authorization = 'Bearer ' + this.user_AT
      var allTransactionURL = this.apiURL + '/WalletTransaction/GetAllTransaction'
      this.$http.get(allTransactionURL, {headers: {'Authorization': Authorization}}).then(response => {

        for(let i=0; i<response.body.value.length;i++) {
          // console.log(response.body.value[i]);
          // str.startsWith("Hello");
          if (response.body.value[i].txHash.startsWith('BFX')) {
            response.body.value[i].showHREF = false
          } else {
            response.body.value[i].showHREF = true
          }
        }

        this.AllTransactions = response.body.value;
        $("#registrationLoader").removeClass( "is-active" );
        setTimeout(function(){
              $('#myTable').DataTable({
                "bDestroy": true,
                "order": [[ 0, "desc" ]]
              });
        }, 500);
      }, response => {
        console.log(response);
      })
    },
    getUsertransaction: function () {
      var table = $('#myTable').DataTable();
      table.destroy();

      this.AllTransactions = []
      var Authorization = 'Bearer ' + this.user_AT
      var userTransactionURL = this.apiURL + '/WalletTransaction/getalltransactionbyuser'
      this.$http.get(userTransactionURL, {headers: {'Authorization': Authorization}}).then(response => {
        console.log(response);

        for(let i=0; i<response.body.value.length;i++) {
          // console.log(response.body.value[i]);
          // str.startsWith("Hello");
          if (response.body.value[i].txHash.startsWith('BFX')) {
            response.body.value[i].showHREF = false
          } else {
            response.body.value[i].showHREF = true
          }
        }
        this.MyTransactions = response.body.value;
        $("#registrationLoader").removeClass( "is-active" );
        setTimeout(function(){
          $(document).ready(function(){
              $('#myTable').DataTable({
                "bDestroy": true,
                "order": [[ 0, "desc" ]]
              });
          });
        }, 500);

      }, response => {
        console.log(response);
      })
    },
    getG2ATransactionStatus: function () {
      var Authorization = 'Bearer ' + this.user_AT
      var securityStatusURL = this.apiURL + '/Security/getusersecurity';
      // Get user security status
      this.$http.get(securityStatusURL,{headers: {'Authorization': Authorization}}).then(response => {
        if(response.body.value.twofactortrans == true) {
          this.google2factorTransactionEnabled = true
        }

      }, response => {
        console.log(response);
      })
    },
    getBFXWalletBalance: function () {
      var Authorization = 'Bearer ' + this.user_AT
      var getBFXWalletBalanceURL = this.apiURL + '/WalletTransaction/getuserbfx';
      // Get user security status
      this.$http.get(getBFXWalletBalanceURL,{headers: {'Authorization': Authorization}}).then(response => {
        console.log(response);
        this.BFXWalletBalance = response.body.value.toFixed(8);
        $("#registrationLoader").removeClass( "is-active" );
        localStorage.setItem('bitflax:bfxBalance', response.body.value.toFixed(8));
      }, response => {
        console.log(response);
        localStorage.setItem('bitflax:bfxBalance', 0);
      })
    },
    getETHWalletBalance: function () {
      // console.log("eth balance");
      var Authorization = 'Bearer ' + this.user_AT
      var getETHWalletBalanceURL = this.apiURL + '/WalletTransaction/getEthwalletbalance';
      // Get user security status
      this.$http.get(getETHWalletBalanceURL,{headers: {'Authorization': Authorization}}).then(response => {
        console.log(response);
        this.ETHWalletBalance = response.body.value.walletBalance.toFixed(8);
        $("#registrationLoader").removeClass( "is-active" );
        localStorage.setItem('bitflax:ethBalance', response.body.value.walletBalance.toFixed(8));
      }, response => {
        console.log(response);
        localStorage.setItem('bitflax:ethBalance', 0);
      })
    },
    getBTCWalletBalance: function () {
      // console.log("BTC balance");
      var Authorization = 'Bearer ' + this.user_AT
      var getBTCWalletBalanceURL = this.apiURL + '/WalletTransaction/getBTCwalletbalance';
      // Get user security status
      this.$http.get(getBTCWalletBalanceURL,{headers: {'Authorization': Authorization}}).then(response => {
        console.log(response);
        this.BTCWalletBalance = response.body.value.walletBalance.toFixed(8);
        // this.BTCWalletBalanceunconfirmed = response.body.value.Unconfirmbalance.toFixed(8);
        localStorage.setItem('bitflax:btcBalance', response.body.value.walletBalance.toFixed(8));
        // localStorage.setItem('bitflax:btcBalanceUnconfirmed', response.body.value.Unconfirmbalance.toFixed(8));


        if (response.body.value.unConfirmedBalance < 0) {
          this.BTCWalletBalance = this.BTCWalletBalance - response.body.value.unConfirmedBalance.toFixed(8)
          this.BTCWalletBalanceunconfirmed = 0
        } else {
          this.BTCWalletBalanceunconfirmed = response.body.value.unConfirmedBalance.toFixed(8);
          localStorage.setItem('bitflax:btcBalanceUnconfirmed', response.body.value.unConfirmedBalance.toFixed(8));
        }


        $("#registrationLoader").removeClass( "is-active" );
      }, response => {
        console.log(response);
        localStorage.setItem('bitflax:btcBalance', 0);
      })
    },
    // Focus blur pages
    focusOnPage: function () {
      // this.recJobICO = setInterval(function () { console.log('this is ICO page recurring job'); this.recurringJobsICO() }.bind(this), 10000);
      if (this.recJobICO) {

      } else {
          this.recJobICO = setInterval(function () { this.recurringJobsICO() }.bind(this), 60000);
      }
    },
    blurFromPage: function () {
      window.clearInterval(this.recJobICO)
      this.recJobICO = false
    },

    recurringJobsICO: function () {

      if (this.$route.path == '/ico') {

        this.getETHWalletBalance()
        this.getBTCWalletBalance()
        this.getBFXWalletBalance()
        this.getWallets()
        this.getG2ATransactionStatus()
        // this.getUsertransaction()
        this.getICOTotkenLimit()
        // this.getbtcincomingtrans()
        if (this.selectedTransaction == 'My Transaction') {
            this.getUsertransaction()
        } else if (this.selectedTransaction == 'All Transaction') {
            this.getAllTransactions()
        }
        this.getICOTotkenLimit()
      }


    },
  },
  destroyed() {
    window.clearInterval(this.recJobICO)
    this.recJobICO = false
  },
  created() {
    var userData = localStorage.getItem('bitflax:userData');
    var decrypted = CryptoJS.AES.decrypt(userData, this.MySECRET);
    userData = decrypted.toString(CryptoJS.enc.Utf8)
    this.user_name = JSON.parse(userData).user_name;
    this.user_AT = JSON.parse(userData).access_token;
    this.urlWithUserName = this.urlWithUserName + this.user_name

    // this.getUsertransaction()
    this.getWallets()
    this.getG2ATransactionStatus()
    this.getUsertransaction()
    this.getICOTotkenLimit()
    this.getBFXWalletBalance()
    this.getETHWalletBalance()
    this.getBTCWalletBalance()
    this.getbtcincomingtrans()
    this.getICOTotkenLimit()

    // Recurring job
    // setInterval(function(){
    //   this.getETHWalletBalance()
    //   this.getBTCWalletBalance()
    //   this.getBFXWalletBalance()
    //   this.getWallets()
    //   this.getG2ATransactionStatus()
    //   // this.getUsertransaction()
    //   this.getICOTotkenLimit()
    //   // this.getbtcincomingtrans()
    //   if (this.selectedTransaction == 'My Transaction') {
    //       this.getUsertransaction()
    //   } else if (this.selectedTransaction == 'All Transaction') {
    //       this.getAllTransactions()
    //   }
    //   this.getICOTotkenLimit()
    //
    // }.bind(this), 60000);
    // this.recJob = setInterval(function () { this.recurringJobs() }.bind(this), 60000);

    // Recurring Job for UpdateBTC /ETH (M Sir Methods)
    if (localStorage.getItem('bitflax:recurringTime')) {
      var seconds = new Date() - Date.parse(localStorage.getItem('bitflax:recurringTime'));
      console.log(seconds/1000);
      if (seconds / 1000 > 300) {
        console.log('more than 5 min');
        localStorage.setItem('bitflax:recurringTime', new Date())
        this.UpdateBitcoinTransactions()
        this.UpdateEtherTransactions()
        this.getICOTotkenLimit()

      } else {
        this.getICOTotkenLimit()
        this.ETHWalletBalance = localStorage.getItem('bitflax:ethBalance');
        this.BTCWalletBalance = localStorage.getItem('bitflax:btcBalance');
        this.BFXWalletBalance = localStorage.getItem('bitflax:bfxBalance');
        this.BTCWalletBalanceunconfirmed = localStorage.getItem('bitflax:btcBalanceUnconfirmed');
      }
    } else {
      localStorage.setItem('bitflax:recurringTime', new Date())
      this.UpdateBitcoinTransactions()
      this.UpdateEtherTransactions()
      this.getICOTotkenLimit()
      // this.CheckEthereumTransaction()
    }




  },
  mounted() {
    // Place this at the top of all functions
    $([window, document]).blur(function(){
      this.blurFromPage()
    }.bind(this)).focus(function(){
      this.focusOnPage()
    }.bind(this));

    if (this.recJobICO) {

    } else {
        this.recJobICO = setInterval(function () { this.recurringJobsICO() }.bind(this), 60000);
    }




    // input box resize
    function resizable (el, factor) {
      var int = Number(factor) || 7.7;
      function resize() {el.style.width = ((el.value.length+1) * int) + 'px'}
      var e = 'keyup,keypress,focus,blur,change'.split(',');
      for (var i in e) el.addEventListener(e[i],resize,false);
      resize();
    }
    resizable(document.getElementById('myInput'),7);

      $("#registrationLoader").addClass( "is-active" );
  },
  watch: {
    selectedTransaction: function (val) {
      if(this.selectedTransaction == 'All Transaction') {
        this.getAllTransactions()
      } else if (this.selectedTransaction == 'My Transaction') {
        this.getUsertransaction()
      }
    }
  }
}
</script>

<style lang="css">
#myInput {
  min-width:50px!important;
  max-width:99.99%!important;
  transition: width 0.25s;
  text-align:center;
}


</style>

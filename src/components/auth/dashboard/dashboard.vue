<template>
    <div class="">
      <app-header></app-header>
      <div class="loader loader-default" data-text="Please Wait" data-blink id="withdrawBTCLoader"></div>
      <div class="loader loader-default" data-text="Please Wait" data-blink id="withdrawETHLoader"></div>
      <div class="right-inner-content">
          <div class="col-md-12 text-center">

              <ul class="top-exchange-blocks" style="border-bottom:0px">
                  <li style="margin-right:5px; min-width:150px"><span>Current Stage</span>Stage {{stage.stage}}</li>
                  <li style="margin-right:5px; min-width:150px"><span>Total Tokens</span>{{stage.totalToken}}</li>
                  <li style="margin-right:5px; min-width:150px"><span>Balance Tokens</span> {{stage.Balance}}</li>
                  <li style="margin-right:5px; min-width:150px"><span>Current Stage Bonus</span>{{stage.bonus}} %</li>
                  <li style="margin-right:0px; min-width:150px"><span>BFX Price</span> $ {{stage.price}}</li>
              </ul>
              <ul class="top-exchange-blocks" style="">
                  <li><span>Lending Wallet</span>$ 0.00</li>
                  <li class="buttons-list"><button class="btn btn-primary" disabled><i class="fa fa-angle-right" aria-hidden="true"></i> Transfer <i class="fa fa-angle-right" aria-hidden="true"></i></button></li>
                  <li><span>Bitflax Wallet</span>BFX  {{BFXWalletBalance}}</li>
                  <li class="buttons-list"><button class="btn btn-primary" disabled><i class="fa fa-angle-left" aria-hidden="true"></i> Exchange <i class="fa fa-angle-right" aria-hidden="true"></i></button></li>
                  <li><span>Ethereum Wallet</span> ETH  {{ETHWalletBalance}}</li>
                  <li><span>Bitcoin Wallet</span>BTC {{BTCWalletBalance}} <!--| BTC-UnConfirmed: {{BTCWalletBalanceunconfirmed}} --></li>
                  <!-- <li id="confirmedUnconfirmed"><span>Bitcoin Wallet</span>BTC-Confirmed: {{BTCWalletBalance}} | BTC-UnConfirmed: {{BTCWalletBalanceunconfirmed}}</li> -->
              </ul>

              <!-- <div class="col-md-3 top-exchange-blocks" style="border: 1px solid #ccc">
                <span>Lending Wallet</span>$ 0.00
              </div> -->

              <!--<div class="col-md-3">

              </div>
              <div class="col-md-3">

              </div>
              <div class="col-md-3">

              </div>
              <div class="col-md-3">

              </div>
              <div class="col-md-3">

              </div> -->
              <!-- <ul class="top-exchange-blocks" style="">
                  <li id="confirmedUnconfirmed"><span>Bitcoin Wallet</span>BTC {{BTCWalletBalance}} | BTC-UnConfirmed: {{BTCWalletBalanceunconfirmed}}</li>
              </ul> -->
          </div>
          <div class="col-md-12 top-copy-link-block">
              <form action="#" class="pull-left">
                  <label class="input-group">
                      <input id="myInput" class="ct-up" type="text" v-bind:value="urlWithUserName" readonly="readonly">
                      <a class="btn btn-orange" data-placement="right" data-toggle="tooltip" title="Copied" data-clipboard-target="#myInput" type="button" v-on:click="copyAddress" style="margin-top:0px"><i class="fa fa-files-o" aria-hidden="true"></i> Copy</a>
                      <span style="color:grey; display:none" id="copiedRefer"> &nbsp; Copied</span>
                  </label>
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
              <!-- <button class="lending-guide-btn btn btn-primary pull-right" disabled><i class="fa fa-building-o" aria-hidden="true"></i> Lending Guide</button> -->
          </div>
          <div class="clearfix"></div>
          <br>
          <!-- Micro Transactions are not allowed -->
          <div class="">

          </div>
          <!-- <div v-on:mouseover="mouseOver">Hover over me!</div> -->
          <div class="col-md-12">
            <div class="bg-info" style="padding:10px">
              <p>If you have any concern with ICO please e-mail us at <strong style="color:#f3781c">support@bitflax.com</strong></p>
              <strong>Note:</strong>  Micro transations are not allowed <br> <br>
              We verify bitcoin deposit after getting the confirmation from network. It could take up to 30 minutes but it may take longer than usual. If the wallet you sent it from gave you the TXid you can check the number of confirmations that have been completed at https://www.blockcypher.com.
              <br><br>Sometimes it may take even 48 hours for confirmation or see your transaction in blockchain. The real issue for this is the bitcoin block size as sometimes bitcoin network works with its maximum capacity, making it hard to confirm all transactions to next finding block by miners. Please wait and check the number of confirmations that has been completed at https://www.blockcypher.com
            </div>
          </div>
          <!-- <div class="col-md-12">
              <div class="tabs-same-all">
                  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                      <div class="panel panel-default">
                          <div class="panel-heading" role="tab" id="headingOne">
                              <h4 class="panel-title">
                                  <a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                      Lend Bitflax / Reinvest
                                  </a>
                              </h4>
                          </div>
                          <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                              <div class="panel-body">
                                  <button class="btn btn-primary" data-toggle="modal" data-target="#lending-Modal">Lend Bitflax</button>
                                  <button class="btn btn-primary" disabled>Reinvest</button>
                                  <p>You will receive daily profit based on your investment option. Upon investment term completion, you will receive your CAPITAL BACK to take out from the Bitflax lending platform or optionally reinvest back in lending platform to continue receiving daily profit. Learn more</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div> -->
          <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="tabs-same-all">
                  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                      <div class="panel panel-default">
                          <div class="panel-heading" role="tab" id="headingOne">
                              <h4 class="panel-title">
                                  <a class="" role="button" data-toggle="collapse" href="#BTCmainCollapse" aria-expanded="true" aria-controls="collapsetwo">
                                      Bitcoin wallet
                                  </a>
                              </h4>
                          </div>
                          <div id="BTCmainCollapse" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                              <div class="panel-body">
                                  <h2 class="lg-color">Receive Bitcoin (BTC)</h2>
                                  <p>Get address to accept Bitcoin payments</p>
                                  <button class="btn btn-success" data-toggle="modal" data-target="#deposit-modal-BTC">Deposit Bitcoin(BTC)</button>
                                  <span class="red-alert">Note: We will not refund an incorrect withdrawal/ Deposit. <br>This deposit address is for BitCoin (BTC) only.</span>
                                  <br>
                                  <p style="display: none"><strong>My Address:</strong> &nbsp;<span style="color:black"><strong style="font-size:15px">{{BTC_Address}}</strong></span></p>
                                  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                      <div class="panel panel-default">
                                          <div class="panel-heading" role="tab" id="headingOne">
                                              <h4 class="panel-title">
                                                  <a class="" role="button" data-toggle="collapse" href="#BTCChildCollpase" aria-expanded="true" aria-controls="collapsetwo-one">
                                                      Incoming Bitcoin Transactions
                                                      <div class="btn-group tooltips-btns" role="group">
                                                          <i class="fa fa-question-circle" aria-hidden="true" title="We require minimum 3 confirmations to complete transaction. On average, each confirmation takes about 10 minutes. It can take more time depending on the Bitcoin network so do not worry and wait quietly."></i>
                                                      </div>
                                                  </a>
                                              </h4>
                                          </div>
                                          <div id="BTCChildCollpase" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                              <div class="panel-body">
                                                  <div class="table-responsive in-table-bit">
                                                      <table>
                                                          <thead>
                                                          <th class="text-center">ADDRESS</th>
                                                          <th class="text-center">BTC</th>
                                                          <th class="text-center">CONFIRMATION</th>
                                                          </thead>
                                                          <template v-if="!showBtcIncomingTransactions">
                                                            <tr class="not-found-table">
                                                                <td colspan="3">No Incoming BitCoin transactions found.</td>
                                                            </tr>
                                                          </template>
                                                          <template v-if="showBtcIncomingTransactions" v-for="incoming in btcIncomingTransactions">
                                                            <tr>
                                                              <td style="word-wrap: break-word; word-break: break-all; white-space: normal;"> <a v-bind:href="incoming.urlToHash" target="_blank">{{incoming.walletAddress}}</a></td>
                                                              <td>{{incoming.creditAcount}}</td>
                                                              <td class="text-center">{{incoming.confirmation}}</td>
                                                            </tr>
                                                          </template>

                                                          <!-- {{btcIncomingTransactions}} -->
                                                      </table>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <!--./panel-group-->
                                  <div class="forms-in">
                                      <h2 class="lg-color">Send Bitcoin (BTC)</h2>
                                      <p>BTC wallet balance: <br> Confirmed: {{BTCWalletBalance}}&nbsp; |&nbsp; UnConfirmed: {{BTCWalletBalanceunconfirmed}} </p>
                                      <!-- <p>Your Bitcoin wallet balance (Confirmed): <strong>{{BTCWalletBalance}}</strong> BTC</p>
                                      <p>Your Bitcoin wallet balance (UnConfirmed): <strong>{{BTCWalletBalanceunconfirmed}}</strong> BTC</p> -->
                                      <!-- <form> -->
                                          <div class="form-group">
                                              <label>To Address</label>
                                              <div class="input-group">
                                                  <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-home"></i></span>
                                                  <!-- <p class="label label-default">{{withdrawBTCData.address}}</> -->
                                                  <span type="text" class="form-control" placeholder="Bitcoin Address" style="color:black; background-color: #eee">ICO Account</span>
                                              </div>
                                              <p class="red-alert" style="font-size:14px" v-if="BTCaddressError">Please enter valid address</p>
                                          </div>
                                          <div class="form-group">
                                            <label>Quantity in Bitflax</label>
                                              <div class="row text-center">
                                                <div class="col-md-6" style="padding-right:0px">
                                                  <div class="input-group">
                                                      <span class="input-group-addon"> <img src="/static/img/bfx-smaal.png" alt="" class="img" style="height: 20px; filter: grayscale(100%)"> </span>
                                                      <input type="text" class="form-control" name="password" placeholder="BFX" v-model="withdrawBTCData.amount">

                                                  </div>
                                                </div>
                                                <div class="col-md-1" style="margin-top:5px; padding-left:0px; padding-right:0px">
                                                  <i class="fa fa-plus" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-md-5" style="padding-left:0px">
                                                  <div class="input-group">
                                                      <span class="input-group-addon"> {{this.stage.bonus}}% Bonus </span>
                                                      <input type="text" class="form-control" name="password" placeholder="BFX" v-model="BTCBonusAmount" readonly>

                                                  </div>
                                                </div>

                                              </div>




                                              <p class="red-alert" style="font-size:13px" v-if="BTCAmountError">Please enter valid amount</p>
                                              <p class="text-info" style="font-size:13px">

                                                Note: Minimum BFX token limit is {{ICOTokenLimit}} <br>
                                                <!-- <span style="margin-left:40px">This excludes transaction fees</span> <br> -->
                                                <!-- <span style="margin-left:40px">This BFX will increase after transaction</span> -->
                                              </p>
                                              <!-- <p class="text-info" style="font-size:13px"></p> -->
                                          </div>

                                          <div class="form-group">
                                              <label>Quantity in Bitcoin</label>
                                              <div class="input-group">
                                                  <!-- <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-pencil"></i></span> -->
                                                  <span class="input-group-addon"> <img src="/static/img/favicon _conversion.png" alt="" class="img" style="height: 20px; filter: grayscale(100%)"> </span>
                                                  <span type="text" class="form-control" placeholder="Bitcoin Address" style="color:black; background-color: #eee">{{BTCtoBFXValue}} BTC</span>
                                              </div>
                                              <p class="red-alert" style="font-size:13px">{{insufficientBTC}}</p>
                                              <!-- <p v-if="BTCtoBFXValue > 0" class="text-info" style="font-size:14px">You will get {{BTCtoBFXValue}} BFX</p> -->
                                              <!-- <span class="red-alert">Ensure amount no less than 0.005 BTC.</span> -->

                                          </div>
                                          <!-- {{BTCAmountvalidated}} -->
                                          <div class="form-group">
                                              <label>Password</label>
                                              <div class="input-group">
                                                  <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-user"></i></span>
                                                  <input type="password" class="form-control" placeholder="Enter your password" v-model="withdrawBTCData.password">
                                              </div>
                                              <p class="red-alert" style="font-size:13px" v-if="BTCPasswordError">Please enter valid password</p>
                                          </div>
                                          <div class="form-group" v-if="google2factorTransactionEnabled">
                                              <label>Google 2FA code from your mobile app</label>
                                              <div class="input-group">
                                                  <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-user"></i></span>
                                                  <input type="password" class="form-control" placeholder="Enter your password" v-model="withdrawBTCData.OTP">
                                              </div>
                                              <p class="red-alert" style="font-size:14px" v-if="BTCG2AError">Please enter valid code</p>
                                          </div>
                                          <div class="form-group" v-if="withdrawlEnabled">
                                              <button class="btn btn-primary" v-on:click="withdrawBTC" disabled v-if="BTCtoBFXValue == 0 "><i class="fa fa-bitcoin" aria-hidden="true"></i> Send from BTC wallet</button>
                                              <button class="btn btn-primary" v-on:click="withdrawBTC" v-if="BTCtoBFXValue > 0 "><i class="fa fa-bitcoin" aria-hidden="true" ></i> Send from BTC wallet</button>
                                          </div>
                                          <div class="form-group" v-else>
                                              <button class="btn btn-primary" disabled><i class="fa fa-bitcoin" aria-hidden="true"></i> Send from BTC wallet</button>
                                          </div>
                                      <!-- </form> -->
                                      <div class="black-overlay" v-if="loginShieldverification">
                                          <h2>Login Shield Verification</h2>
                                          <button class="btn btn-primary"><i class="fa fa-envelope" aria-hidden="true"></i> click here to send verification e-mail</button>
                                          <h3>This verification method is mandatory to send coin from this wallet.</h3>
                                          <ul>
                                              <li>We noticed that you're attempting to log in from a new browser.</li>
                                              <li>Send new browser verification link to your registered e-mail address(dotnet.rev@gmail.com) and verify it to send coin from this wallet.</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--./panel-group-->
              </div>
          </div>

          <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="tabs-same-all">
                  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                      <div class="panel panel-default">
                          <div class="panel-heading" role="tab" id="headingOne">
                              <h4 class="panel-title">
                                  <a class="" role="button" data-toggle="collapse" href="#ETHMainColapse" aria-expanded="true" aria-controls="collapsethree">
                                      ethereum wallet (ETH)
                                  </a>
                              </h4>
                          </div>
                          <div id="ETHMainColapse" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                              <div class="panel-body">
                                  <h2 class="lg-color">Receive Ethereum (ETH)</h2>
                                  <p>Get address to accept Ethereum payments</p>
                                  <button class="btn btn-success" data-toggle="modal" data-target="#deposit-modal-ETH">Deposit Ethereum(ETH)</button>
                                  <span class="red-alert">Note: We will not refund an incorrect withdrawal/ Deposit.<br>This deposit address is for Ethereum (ETH) only.</span>
                                  <br>
                                  <p style="display:none"><strong>My Address:</strong> &nbsp;<span style="color:black"><strong style="font-size:15px">{{ETH_Address}}</strong></span></p>
                                  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                      <div class="panel panel-default">
                                          <div class="panel-heading" role="tab" id="headingOne">
                                              <h4 class="panel-title">
                                                  <a class="" role="button" data-toggle="collapse" href="#ETHChildCollapse" aria-expanded="true" aria-controls="collapsethree-one">
                                                      Incoming Ethereum Transactions
                                                      <div class="btn-group tooltips-btns" role="group">
                                                          <i class="fa fa-question-circle" aria-hidden="true" title="We require minimum 3 confirmations to complete transaction. On average, each confirmation takes about 10 minutes. It can take more time depending on the Bitflax network so do not worry and wait quietly."></i>
                                                      </div>
                                                  </a>
                                              </h4>
                                          </div>
                                          <div id="ETHChildCollapse" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                              <div class="panel-body">
                                                  <div class="table-responsive in-table-bit">
                                                      <table>
                                                          <thead>
                                                          <th class="text-center">ADDRESS</th>
                                                          <th class="text-center">ETH</th>
                                                          <th class="text-center">CONFIRMATION</th>
                                                          </thead>
                                                          <tr class="not-found-table">
                                                              <td colspan="3">No Incoming Ethereum transactions found.</td>
                                                          </tr>
                                                      </table>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <!--./panel-group-->
                                  <div class="forms-in">
                                      <h2 class="lg-color">Send Ethereum (ETH)</h2>
                                      <p>Ethereum wallet balance: <strong>{{ETHWalletBalance}}</strong> ETH</p>

                                          <div class="form-group">
                                              <label>To Address</label>
                                              <div class="input-group">
                                                  <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-home"></i></span>
                                                  <!-- <input  type="text" class="form-control" placeholder="Ethereum Address" v-model="withdrawETHData.address" disabled> -->
                                                  <span type="text" class="form-control" placeholder="Bitcoin Address" v-model="withdrawBTCData.address" style="color:black; background-color: #eee">ICO Account</span>
                                              </div>
                                              <p class="red-alert"
                                              style="font-size:14px" v-if="ETHaddressError">Please enter valid address</p>
                                          </div>

                                          <div class="form-group">
                                            <label>Quantity in Bitflax</label>
                                            <div class="row text-center">
                                              <div class="col-md-6" style="padding-right:0px">
                                                <div class="input-group">
                                                    <!-- <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-home"></i></span> -->
                                                    <span class="input-group-addon"> <img src="/static/img/bfx-smaal.png" alt="" class="img" style="height: 20px; filter: grayscale(100%)"> </span>
                                                    <input  type="text" class="form-control" name="password" placeholder="BFX" v-model="withdrawETHData.amount">
                                                </div>
                                              </div>
                                              <div class="col-md-1" style="margin-top:5px; padding-left:0px; padding-right:0px">
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                              </div>
                                              <div class="col-md-5" style="padding-left:0px">
                                                <div class="input-group">
                                                    <span class="input-group-addon"> {{this.stage.bonus}}% Bonus </span>
                                                    <input type="text" class="form-control" name="password" placeholder="BFX" v-model="ETHBonusAmount" readonly>

                                                </div>
                                              </div>

                                            </div>

                                              <p class="text-info" style="font-size:13px">

                                                Note: Minimum BFX token limit is {{ICOTokenLimit}}

                                              </p>
                                              <p class="red-alert" style="font-size:13px" v-if="ETHAmountError">Please enter valid amount</p>
                                          </div>

                                          <div class="form-group">
                                              <label>Quantity in Ethereum</label>
                                              <div class="input-group">
                                                  <!-- <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-pencil"></i></span> -->
                                                  <span class="input-group-addon"> <img src="/static/img/ethsmall.png" alt="" class="img" style="height: 20px; filter: grayscale(100%)"> </span>
                                                  <span type="text" class="form-control" placeholder="Bitcoin Address" style="color:black; background-color: #eee">{{ETHtoBFXValue}} ETH</span>
                                              </div>

                                              <p class="red-alert" style="font-size:13px">{{insufficientETH}}</p>
                                              <!-- <span>Transaction Fee: 0.0001 ETH</span> -->
                                              <!-- <p class="text-info" style="font-size:14px" v-if="ETHtoBFXValue > 0">You will get {{ETHtoBFXValue}} BFX</p> -->

                                          </div>


                                          <div class="form-group">
                                              <label>Password</label>
                                              <div class="input-group">
                                                  <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-user"></i></span>
                                                  <input  type="password" class="form-control" placeholder="Enter your password" v-model="withdrawETHData.password">
                                              </div>
                                              <p class="red-alert" style="font-size:13px" v-if="ETHPasswordError">Please enter valid password</p>
                                          </div>
                                          <div class="form-group" v-if="google2factorTransactionEnabled">
                                              <label>Google 2FA code from your mobile app</label>
                                              <div class="input-group">
                                                  <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-user"></i></span>
                                                  <input type="password" class="form-control" placeholder="Enter your password" v-model="withdrawETHData.OTP">
                                              </div>
                                              <p class="red-alert" style="font-size:14px" v-if="ETHG2AError">Please enter valid code</p>
                                          </div>

                                          <div class="form-group" v-if="withdrawlEnabled">
                                              <button class="btn btn-primary" v-on:click="withdrawETH" disabled v-if="ETHtoBFXValue == 0 "><i class="fa fa-bitcoin" aria-hidden="true"></i> Send from ETH wallet</button>
                                              <button class="btn btn-primary" v-on:click="withdrawETH" v-if="ETHtoBFXValue > 0"  ><i class="fa fa-bitcoin" aria-hidden="true"></i> Send from ETH wallet</button>
                                          </div>
                                          <div class="form-group" v-else>
                                              <button class="btn btn-primary" disabled><i class="fa fa-bitcoin" aria-hidden="true"></i> Send from ETH wallet</button>
                                          </div>
                                      <div class="black-overlay" v-if="loginShieldverification">
                                          <h2>Login Shield Verification</h2>
                                          <button class="btn btn-primary"><i class="fa fa-envelope" aria-hidden="true"></i> click here to send verification e-mail</button>
                                          <h3>This verification method is mandatory to send coin from this wallet.</h3>
                                          <ul>
                                              <li>We noticed that you're attempting to log in from a new browser.</li>
                                              <li>Send new browser verification link to your registered e-mail address(dotnet.rev@gmail.com) and verify it to send coin from this wallet.</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!--./panel-group-->
              </div>
          </div>



          <div class="clearfix"></div>
          <div class="col-md-12">
              <!-- <ul class="btm-list">
                  <li>Total investment<strong>$ 0.00</strong></li>
                  <li>Active investment<strong>$ 0.00</strong></li>
                  <li>Total capital released<strong>$ 0.00</strong></li>
                  <li>Total Earned</li>
              </ul> -->
              <div class="clearfix"></div>
              <!-- <div class="width7">
                  <div class="table-responsive in-table-bit">
                      <table>
                          <thead>
                          <th></th>
                          <th></th>
                          <th></th>
                          </thead>
                          <tr>
                              <td colspan="3" class="text-center">No Transaction Found</td>
                          </tr>
                      </table>
                  </div>
                  <div class="clearfix"></div>
                  <div class="pagination">
                      <select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                      </select>
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
                  </div>
              </div>
              <ul class="btm-list btm-list-two">
                  <li><span><i class="fa fa-lock" aria-hidden="true"></i></span> Lender<span><i class="fa fa-refresh" aria-hidden="true"></i></span><strong>0 (Total Feedback)</strong></li>
                  <li><span><i class="fa fa-lock" aria-hidden="true"></i></span> Trader<span><i class="fa fa-refresh" aria-hidden="true"></i></span><strong>0 (Total Feedback)</strong></li>
                  <li><span><i class="fa fa-unlock" aria-hidden="true"></i></span> Seller<strong>0 (Total Feedback)</strong></li>
                  <li class="btn-group" role="group">
                      <div aria-hidden="true" title="Once unlocked, you can register a local Bitflax store under Bitflax system to serve local Bitflax community, and earn the highest level of rewards.">
              			<span>
              			  <i class="fa fa-unlock" aria-hidden="true"></i>
              			</span> Bit Store<strong>0 (Total Feedback)</strong>
                      </div>
                  </li>
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Question popup</button>
              </ul> -->
          </div>



          <!-- BTC Modal -->
          <div class="modal fade modal-ico bar-code-popup" id="lending-Modal" tabindex="-1" role="dialog" aria-labelledby="Mobile" aria-hidden="true">
           <div class="modal-dialog" role="document">
              <div class="modal-content">
                 <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel">Invest BitFlax</h4>
                 </div>
                 <div class="modal-body deposit-block">
                    <!-- <div class="well">
                      Exchange Rate: 1 BFX = $ 1.2
                    </div> -->
                    <div class="text-left form-group">
                      <pre><span>Exchange Rate: 1 BFX = $ 1.2</span> </pre>
                    </div>
                    <div style="padding:5px 10px 15px 10px; border: 2px dashed #ccc; border-radius: 2px">
                      <h4 class="text-center">Amount</h4>
                      <div class="row">
                        <div class="col-md-6">
                          <!-- <input type="text" class="form-control"> -->
                          <div class="input-group">
                              <!-- <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-home"></i></span> -->
                              <span class="input-group-addon"> <img src="/static/img/bfx-smaal.png" alt="" class="img" style="height: 20px; filter: grayscale(100%)"> </span>
                              <input  type="text" class="form-control" name="password" placeholder="BFX" v-model="withdrawETHData.amount">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="input-group">
                              <!-- <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-home"></i></span> -->

                              <input  type="text" class="form-control" name="password" placeholder="Amount in dollar" v-model="withdrawETHData.amount">
                              <span class="input-group-addon"><i class="fa fa-dollar"></i> </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br>
                    <div class="table-responsive">
                      <table class="table table-bordered"  style="background-color:#f5f5f5">
                        <thead>
                          <tr>
                            <th class="lending-td">Lending Amount</th>
                            <th class="lending-td">Interest (Accrued daily)</th>
                            <th class="lending-td">Capital release</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="lending-td">$100 - $1000</td>
                            <td class="lending-td"> <a href="#">Volatility software interest</a> </td>
                            <td class="lending-td">After 299 days</td>
                          </tr>
                          <tr>
                            <td class="lending-td">$1010 - $5000</td>
                            <td class="lending-td"> <a href="#">Volatility software interest</a> + 0.10 % daily</td>
                            <td class="lending-td">After 239 days</td>
                          </tr>
                          <tr>
                            <td class="lending-td">$5010 - $10,000</td>
                            <td class="lending-td"> <a href="#">Volatility software interest</a>  + 0.20 % daily</td>
                            <td class="lending-td">After 179 days</td>
                          </tr>
                          <tr>
                            <td class="lending-td">$10,010 - $100,000</td>
                            <td class="lending-td"> <a href="#">Volatility software interest</a>  + 0.25 % daily</td>
                            <td class="lending-td">After 120 days</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h5><strong>Remember:</strong></h5>
                    <div class="text-left form-group" style="border:1px solid #f3781c; padding:10px; border-radius:3px; border-left:5px solid #f3781c ;">
                      <p>The earning interest on Bitflax lending float over the time and is exclusively decided by the volatility software and Bitflax Trading Bot.</p>
                    </div>
                    <div>

                      <p> <span> <input type="checkbox" name="" id=""> </span> I read the Terms of use, and i make decision to participate in Bitflax system with full understanding of rules and regulations.</p>
                    </div>

                    <!-- <button type="button" class="btn btn-success" v-on:click="showBTCQR" id="showBTCQRCodeButton">Show QR Code</button> -->
                    <!-- <button type="button" class="btn btn-success" v-on:click="hideBTCQR" id="hideBTCQRCodeButton" style="display:None">Hide QR Code</button> -->
                    <!-- <a href=""class="sh-qr" v-on:click="showBTCQR">Show QR Code</a> -->
                 </div>
                 <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Pay from Bitflax wallet</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
              </div>
           </div>
        </div>


          <!-- BTC Modal -->
          <div class="modal fade modal-ico bar-code-popup" id="deposit-modal-BTC" tabindex="-1" role="dialog" aria-labelledby="Mobile" aria-hidden="true">
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
                      <pre><span id="BTCcopyAddressOnAddress">{{BTC_Address}}</span> </pre>
                    </div>

                    <!-- <button type="button" class="btn btn-success" v-on:click="showBTCQR" id="showBTCQRCodeButton">Show QR Code</button> -->
                    <!-- <button type="button" class="btn btn-success" v-on:click="hideBTCQR" id="hideBTCQRCodeButton" style="display:None">Hide QR Code</button> -->
                    <!-- <a href=""class="sh-qr" v-on:click="showBTCQR">Show QR Code</a> -->
                    <div class="text-center bar-code-img">
                      <qriously v-bind:value="BTC_Address" :size="150" />
                    </div>

                 </div>
              </div>
           </div>
        </div>
        <!-- Eth Modal -->
        <div class="modal fade modal-ico bar-code-popup" id="deposit-modal-ETH" tabindex="-1" role="dialog" aria-labelledby="Mobile" aria-hidden="true">
           <div class="modal-dialog" role="document">
              <div class="modal-content">
                 <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel">Your ETH Deposit Address</h4>
                 </div>
                 <div class="modal-body deposit-block">
                    <div class="text-center form-group">
                      <pre><span id="ETHcopyAddressOnAddress">{{ETH_Address}}</span></pre>
                    </div>
                    <div class="text-center bar-code-img">
                      <qriously v-bind:value="ETH_Address" :size="150" />
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <!-- Eth withdraw Modal success successETHWithdrawl  failedETHWithdrawl -->
        <div class="modal fade modal-ico" id="successETHWithdrawl" tabindex="-1" role="dialog" aria-labelledby="Mobile" aria-hidden="true">
           <div class="modal-dialog" role="document" style="width: 310px;">
              <div class="modal-content">
                 <div class="modal-header" style="padding:7px; background-color:green;">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title text-center" id="myModalLabel" style="color:white">Success</h4>
                 </div>
                 <div class="modal-body deposit-block">
                   Transaction is completed succesfully
                 </div>
                 <div class="modal-footer"  style="background-color:#f2f2f2; padding:7px;">
                   <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
           </div>
        </div>
        <!-- BTC transacrion{{btcIncomingTransactions}} -->
        <div class="modal fade modal-ico" id="failedETHWithdrawl" tabindex="-1" role="dialog" aria-labelledby="Mobile" aria-hidden="true">
           <div class="modal-dialog" role="document" style="width: 310px;">
              <div class="modal-content">
                 <div class="modal-header" style="padding:7px; background-color:rgb(128, 0, 0);">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true" style="color:white">&times;</span>
                    </button>
                    <h4 class="modal-title text-center" id="myModalLabel" style="color:white">Failed</h4>
                 </div>
                 <div class="modal-body deposit-block">
                   <p v-if="ETHTransactionfailed">{{ETHTransactionfailed}}</p>
                   <p v-if="BTCTransactionfailed">{{BTCTransactionfailed}}</p>
                 </div>
                 <div class="modal-footer" style="background-color:#f2f2f2; padding:7px; ">
                  <button type="button" class="btn btn-default" data-dismiss="modal" >Close</button>
                </div>
              </div>
           </div>
        </div>

        <!-- ICO Status -->
        <div class="modal fade modal-ico" id="ICOStopModal" tabindex="-1" role="dialog" aria-labelledby="Mobile" aria-hidden="true">
           <div class="modal-dialog" role="document" style="width: 310px;">
              <div class="modal-content">
                 <div class="modal-header" style="padding:7px; background-color:#d9edf7;">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title text-center" id="myModalLabel" style="color:black">ICO Status</h4>
                 </div>
                 <div class="modal-body deposit-block">
                   {{ICOStopMessage}}
                 </div>
                 <div class="modal-footer"  style="background-color:#f2f2f2; padding:7px;">
                   <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
           </div>
        </div>



        <!-- <div class="modal fade modal-ico" id="successETHWithdrawl" tabindex="-1" role="dialog" aria-labelledby="Mobile" aria-hidden="true">
           <div class="modal-dialog" role="document">
              <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                </button>
                <div class="modal-body deposit-block">
                   <h1 class="text-success">Success</h1>
                </div>
              </div>
           </div>
        </div> -->

        <!-- Eth withdraw Modal failed-->





        <!-- <div class="modal fade modal-ico" id="failedETHWithdrawl" tabindex="-1" role="dialog" aria-labelledby="Mobile" aria-hidden="true">
           <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                  </button>
                  <div class="modal-body deposit-block">
                     <h1 class="text-danger">Failed</h1>
                     <p class="text-danger">{{ETHTransactionfailed}}</p>
                     <p class="text-danger">{{BTCTransactionfailed}}</p>
                  </div>
                </div>
           </div>
        </div> -->

      </div>


      </div>
    </div>


    <!--<app-header></app-header>-->
    <!--<div class="container-fluid counter_secnew">-->
        <!--<div class="container">-->
            <!--Header yaha se ayega yoyo.-->

        <!--</div>-->
    <!--</div>-->
</template>

<script>
    // import {HTTP} from '../../../main.js';
    import Header from '../header/header.vue';
    // import varifyEtherumAddress from 'ethereum-address'
    // //add variable for header and footer
    // import authLayout from './components/auth/login/Login.vue';


    export default {
        name: 'signUp',
        components: {
            'app-header': Header,
            // 'app-footer': Footer
        },
        data() {
            return {
              recJobDashboard : '',

              BTCBonusAmount: 0,
              ETHBonusAmount: 0,

                // Stage Bonus info
                stage: {
                  stage: 0,
                  totalToken: 0,
                  Balance: 0,
                  bonus: 0,
                  price: 0,
                },

                // copy address from modal
                // btcAddressCopy: ''

                //Initializing all variables for this page
                isQuestionSubmitted: false,
                user_AT: '',
                google2factorTransactionEnabled: false,
                loginShieldverification: false,

                // Wallet balance
                ETHWalletBalance: 0,
                BTCWalletBalance: 0,
                BTCWalletBalanceunconfirmed: 0,
                // BTC to BFX / ETH
                BTCtoBFXValue: 0,
                ETHtoBFXValue: 0,

                // ICO Token Limit
                ICOTokenLimit: 0,

                // Wallet Address
                BFX_Address: '',
                BTC_Address: '',
                ETH_Address: '',
                user_name: '',
                urlWithUserName: 'https://ico.bitflax.io/refer/?ref=',

                // Flags
                withdrawlEnabled: true,

                // Withdrawl data
                withdrawETHData: {
                  address: '',
                  amount: '',
                  password: '',
                  OTP: ''
                },
                withdrawBTCData: {
                  address: '',
                  amount: '',
                  password: '',
                  OTP: ''
                },

                ETHTransactionfailed: '',
                BTCTransactionfailed: '',

                // ICO Address
                ethereumAddress: '',
                BTCAddress: '',
                BFXWalletBalance: 0,

                // Validations
                ETHaddressError: false,
                ETHPasswordError: false,
                ETHAmountError: false,
                ETHG2AError: false,

                BTCaddressError: false,
                BTCPasswordError: false,
                BTCAmountError: false,
                BTCG2AError: false,

                btcIncomingTransactions:  [],
                showBtcIncomingTransactions: true,

                insufficientETH: '',
                insufficientBTC: '',


                // Amount validated
                BTCAmountvalidated: false,
                ETHAmountvalidated: false,


                // ICOStopDetails
                ICOStop: false,
                ICOStopMessage: ''

            }
        },
        watch: {
          // For BTC to BFX
          withdrawBTCData:{

            handler: function (val) {
              this.BTCBonusAmount = 0
              // this.BTCAmountvalidated = false
              if(val.amount.trim() == '') {
                var BTCtoBFXURL = this.apiURL + '/WalletTransaction/getbfxtobtc?amount=' + 0
                 this.$http.get(BTCtoBFXURL).then(response => {
                       this.BTCtoBFXValue = response.body.value;
                 }, response => {
                        // console.log(response);
                 })
                 // this.BTCAmountvalidated = false
                return
              }

              this.BTCAmountError = false
              // this.BTCAmountError = false
              if (val.amount.trim() == '-') {
                this.BTCtoBFXValue = 0
                val.amount = ''
              }
              else if (val.amount.includes("-")) {
                this.BTCtoBFXValue = 0
                val.amount = ''
                this.BTCAmountError = true
              } else if (/^[+-]?\d+(\.\d+)?$/.test(val.amount)) {

                if (parseFloat(val.amount) < this.ICOTokenLimit) {
                  this.BTCBonusAmount = 0
                  this.BTCAmountError = true
                  var BTCtoBFXURL = this.apiURL + '/WalletTransaction/getbfxtobtc?amount=' + 0
                   this.$http.get(BTCtoBFXURL).then(response => {
                         this.BTCtoBFXValue = response.body.value;
                   }, response => {
                          // console.log(response);
                   })
                } else {

                  if (this.stage.bonus) {
                      this.BTCBonusAmount = (val.amount * this.stage.bonus ) / 100
                  } else if (this.stage.bonus == '') {
                      this.BTCBonusAmount = 0
                  }


                  var BTCtoBFXURL = this.apiURL + '/WalletTransaction/getbfxtobtc?amount=' + val.amount
                   this.$http.get(BTCtoBFXURL).then(response => {
                      try {
                        this.BTCtoBFXValue = response.body.value.toFixed(8);
                        // this.BTCAmountvalidated = true
                      } catch (e) {
                        this.BTCtoBFXValue = response.body.value;
                      }

                   }, response => {
                          // console.log(response);
                   })
                }
              }
              else if (val.amount.includes(".")) {
                let count = 0
                for (let i=0;i<val.amount.length;i++) {
                  if (val.amount[i] == '.') {
                    count += 1
                  }
                }
                if (count > 1) {
                  this.BTCtoBFXValue = 0
                  val.amount = ''
                  this.BTCAmountError = true
                } else {
                  if (/[a-zA-Z]/i.test(val.amount)) {
                    this.BTCtoBFXValue = 0
                    val.amount = ''
                    this.BTCAmountError = true
                  }

                  if ( /[ !@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/i.test(val.amount)) {
                    this.BTCtoBFXValue = 0
                    val.amount = ''
                    this.BTCAmountError = true
                  }
                }
              }
              else {
                this.BTCtoBFXValue = 0
                val.amount = ''
                this.BTCAmountError = true
              }
            },
            deep: true
          },
          BTCtoBFXValue: function (val) {
            this.insufficientBTC = ''
            var bal = parseFloat(this.BTCWalletBalance)
            var btcbfx = parseFloat(val)

            if (bal < btcbfx) {
              this.insufficientBTC = 'Insufficient balance'
              this.BTCAmountvalidated = false
            } else if (btcbfx == 0) {
              this.BTCAmountvalidated = false
            } else {
              this.BTCAmountvalidated = true
            }
          },

          withdrawETHData:{
            handler: function (val) {
              this.ETHBonusAmount = 0
              // if (val.amount.trim() == '-') {
              //   this.ETHtoBFXValue = 0
              //   val.amount = ''
              // }
              // else if (val.amount.includes("-")) {
              //   this.ETHtoBFXValue = 0
              //   val.amount = ''
              // }
              // else if (val.amount != '') {
              //   // var ETHtoBFXURL = this.apiURL + '/WalletTransaction/getethtobfx?amount=' + val.amount
              //   var ETHtoBFXURL = this.apiURL + '/WalletTransaction/getbfxtoeth?amount=' + val.amount
              //   this.$http.get(ETHtoBFXURL).then(response => {
              //     this.ETHtoBFXValue = response.body.value.toFixed(8);
              //   }, response => {
              //     // console.log(response);
              //   })
              // } else {
              //   this.ETHtoBFXValue = 0
              //   val.amount = ''
              // }

              // this.BTCAmountvalidated = false
              if(val.amount.trim() == '') {
                var url = this.apiURL + '/WalletTransaction/getbfxtoeth?amount=' + 0
                 this.$http.get(url).then(response => {
                       this.ETHtoBFXValue = response.body.value;
                 }, response => {
                        // console.log(response);
                 })
                 // this.BTCAmountvalidated = false
                return
              }

              this.ETHAmountError = false
              // this.BTCAmountError = false
              if (val.amount.trim() == '-') {
                this.ETHtoBFXValue = 0
                val.amount = ''
              }
              else if (val.amount.includes("-")) {
                this.ETHtoBFXValue = 0
                val.amount = ''
                this.ETHAmountError = true
              } else if (/^[+-]?\d+(\.\d+)?$/.test(val.amount)) {
                if (parseFloat(val.amount) < this.ICOTokenLimit) {
                  this.ETHBonusAmount = 0
                  this.ETHAmountError = true
                  var ETHtoBFXURL = this.apiURL + '/WalletTransaction/getbfxtoeth?amount=' + 0
                   this.$http.get(ETHtoBFXURL).then(response => {
                         this.ETHtoBFXValue = response.body.value;
                   }, response => {
                          // console.log(response);
                   })
                } else {

                  this.ETHBonusAmount = (val.amount * this.stage.bonus ) / 100


                  var ETHtoBFXURL = this.apiURL + '/WalletTransaction/getbfxtoeth?amount=' + val.amount
                   this.$http.get(ETHtoBFXURL).then(response => {
                      try {
                        this.ETHtoBFXValue = response.body.value.toFixed(8);
                        // this.BTCAmountvalidated = true
                      } catch (e) {
                        this.ETHtoBFXValue = response.body.value;
                      }

                   }, response => {
                          // console.log(response);
                   })
                }
              }
              else if (val.amount.includes(".")) {
                let count = 0
                for (let i=0;i<val.amount.length;i++) {
                  if (val.amount[i] == '.') {
                    count += 1
                  }
                }
                if (count > 1) {
                  this.ETHtoBFXValue = 0
                  val.amount = ''
                  this.ETHAmountError = true
                } else {
                  if (/[a-zA-Z]/i.test(val.amount)) {
                    this.ETHtoBFXValue = 0
                    val.amount = ''
                    this.ETHAmountError = true
                  }

                  if ( /[ !@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/i.test(val.amount)) {
                    this.ETHtoBFXValue = 0
                    val.amount = ''
                    this.ETHAmountError = true
                  }
                }
              }
              else {
                this.ETHtoBFXValue = 0
                val.amount = ''
                this.ETHAmountError = true
              }

            },
            deep: true
          },
          ETHtoBFXValue: function (val) {
            this.insufficientETH = ''
            var bal = parseFloat(this.ETHWalletBalance)
            var ethbfx = parseFloat(val)

            if (bal < ethbfx) {
              this.insufficientETH = 'Insufficient balance'
              this.ETHAmountvalidated = false
            } else if (ethbfx == 0) {
              this.ETHAmountvalidated = false
            } else {
              this.ETHAmountvalidated = true
            }
          },
        },
        methods: {

            getICOTotkenLimit: function () {
              var ICOTokenLimitURL = this.apiURL + '/ICO/geticotokenlimit'
              // Get user security status

              this.$http.get(ICOTokenLimitURL).then(response => {
                // console.log("limit");
                // console.log(response);

                // Stage data
                this.stage.stage = response.body.value[0].icoStage
                this.stage.totalToken = response.body.value[0].totolToken
                this.stage.Balance = response.body.value[0].remainingtoken
                this.stage.bonus = response.body.value[0].icoBonus
                this.stage.price = response.body.value[0].bfxprice
                this.ICOTokenLimit = response.body.value[0].perUserTokenLimitMin



              }, response => {
                // console.log(response);
              })
            },
            copyBTCAddress:  function () {
              console.log('clicked BTC address');
              var copyTextarea = document.querySelector('#BTCcopyAddressOnAddress');
              console.log(copyTextarea);

              // document.querySelector("#BTCcopyAddressOnAddress").select();
              // document.execCommand('copy');
            },

            copyETHAddress: function () {
              console.log('clicked ETH address');

              var copyText = document.getElementById("ETHcopyAddressOnAddress");
              copyText.select();
              document.execCommand("Copy");

              // document.querySelector("#ETHcopyAddressOnAddress").select();
              // document.execCommand('copy');
            },

            CheckEthereumTransaction: function () {
              var Authorization = 'Bearer ' + this.user_AT
              var url = this.apiURL + '/WalletTransaction/CheckEthereumTransaction';
              // Get user security status
              this.$http.get(url,{headers: {'Authorization': Authorization}}).then(response => {
                console.log('this is CheckEthereumTransaction');
                console.log(response);
              }, response => {
                console.log('this is CheckEthereumTransaction');
                console.log(response);
              })
            },


            // No display methods (Backend only)
            UpdateBitcoinTransactions: function () {
              var Authorization = 'Bearer ' + this.user_AT
              var url = this.apiURL + '/WalletTransaction/UpdateBitcoinTransactions';
              // Get user security status
              this.$http.get(url,{headers: {'Authorization': Authorization}}).then(response => {
                console.log('this is Update Bitcoin Transaction');
                console.log(response);
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
                this.getETHWalletBalance()
              }, response => {
                console.log(response);
                this.getETHWalletBalance()
              })
            },

            // Focus blur pages
            focusOnPage: function () {
              // this.recJob = setInterval(function () { this.recurringJobs() }.bind(this), 60000);
              // this.recJobDashboard = setInterval(function () { this.recurringJobs() }.bind(this), 1000);
              if (this.recJobDashboard) {

              } else {
                this.recJobDashboard = setInterval(function () { this.recurringJobs() }.bind(this), 60000);
              }
            },

            blurFromPage: function () {
              // window.clearInterval(this.recJob)
              // this.recJob = false
              window.clearInterval(this.recJobDashboard)
              this.recJobDashboard= false
            },

            recurringJobs: function () {
              if (this.$route.path == '/') {
                this.getBFXWalletBalance()
                this.getBTCWalletBalance()
                this.getETHWalletBalance()
                this.getbtcincomingtrans()
                this.getICOTotkenLimit()
              }
            },

            // Other methods

            BTCtoBFX: function () {
              alert("Some Alert")
            },
            withdrawBTC: function () {

              if (this.ICOStop == true) {
                  $("#ICOStopModal").modal();
                  // Clear Fields here
                  this.withdrawBTCData = {
                    address: '',
                    amount: '',
                    password: '',
                    OTP: ''
                  }
                  return
                }

              this.BTCTransactionfailed = ''
              this.ETHTransactionfailed = ''
              // Validations
              this.BTCaddressError = false
              this.BTCPasswordError = false
              this.BTCAmountError = false
              this.BTCG2AError = false
              var BTCaddressValidated = false
              var BTCPasswordValidated = false
              var BTCAmountValidated = false
              var BTCG2AValidated = false

              // Address Validation
              // if (this.withdrawBTCData.address.trim() == '') {
              //   this.BTCaddressError = true
              // } else {
              //   if ( this.withdrawBTCData.address.trim().length > 24 && this.withdrawBTCData.address.trim().length < 35) {
              //     BTCaddressValidated = true
              //   } else {
              //     this.BTCaddressError = true
              //   }
              // }

              BTCaddressValidated = true

              // Password Validation
              if(this.withdrawBTCData.password.trim() == '') {
                this.BTCPasswordError = true
              } else {
                BTCPasswordValidated = true
              }

              // G2FA Validation
              if (this.google2factorTransactionEnabled) {
                if (this.withdrawBTCData.OTP.trim() == '') {
                  this.BTCG2AError = true
                } else {
                  if(!/^\d+$/.test(this.withdrawBTCData.OTP.trim())) {
                    this.BTCG2AError = true
                  } else {
                    BTCG2AValidated = true
                  }
                }
              } else {
                this.withdrawBTCData.OTP = ''
                BTCG2AValidated = true
              }


               // Amount Validation
              if (this.withdrawBTCData.amount.trim() == ''){
                this.BTCAmountError = true
              } else if (/^\d+$/.test(this.withdrawBTCData.amount.trim())) {
                if(parseInt(this.withdrawBTCData.amount.trim()) < 1){
                  this.BTCAmountError = true
                } else {
                  BTCAmountValidated = true
                }
                // /^[-+]?[0-9]+\.[0-9]+$/
              } else if (/^[-+]?[0-9]+\.[0-9]+$/.test(this.withdrawBTCData.amount.trim())) {
                if(parseFloat(this.withdrawBTCData.amount.trim()) < 0.000){
                  this.BTCAmountError = true
                } else {
                  BTCAmountValidated = true
                }
              } else {
                this.BTCAmountError = true
              }


              if (this.BTCtoBFXValue.toString().trim() == '') {
                this.BTCAmountError = true
                BTCAmountValidated = false
              } else if (this.BTCtoBFXValue == 0) {
                this.BTCAmountError = true
                BTCAmountValidated = false
              } else {
                BTCAmountValidated = true
              }


                // console.log(BTCaddressValidated, BTCPasswordValidated, BTCAmountValidated, BTCG2AValidated);
                console.log(BTCaddressValidated,BTCPasswordValidated,BTCAmountValidated, BTCG2AValidated,this.BTCAmountvalidated);
              if (BTCaddressValidated && BTCPasswordValidated && BTCAmountValidated && BTCG2AValidated && this.BTCAmountvalidated) {
                $("#withdrawBTCLoader").addClass( "is-active" );
                var withdrawBtcURL = this.apiURL + '/WalletTransaction/postBTCtransaction';
                var Authorization = 'Bearer ' + this.user_AT

                var data  = {
                  toAddress: this.withdrawBTCData.address,
                  Amount: this.withdrawBTCData.amount,
                  Password: this.withdrawBTCData.password,
                  G2FactorCode: this.withdrawBTCData.OTP,
                }
                console.log('this is going');
                console.log(data);
                // console.log(data);
                // console.log(data);

                // Enable this After ICO
                // this.$http.post(withdrawBtcURL, data, {headers: {'Authorization': Authorization}}).then(response => {
                //   console.log(response);
                //   this.withdrawBTCData = {
                //     address: '',
                //     amount: '',
                //     password: '',
                //     OTP: ''
                //   },
                //   $('#successETHWithdrawl').modal('show');
                // }, response => {
                //   $('#failedETHWithdrawl').modal('show');
                //   console.log(response);
                // })

                // Disable this after ICO
                var withdrawBtcURLICO = this.apiURL + '/WalletTransaction/postICOBTCtransaction';
                // console.log("withdraw BTC URL");
                // console.log(withdrawBtcURLICO);
                this.$http.post(withdrawBtcURLICO, data, {headers: {'Authorization': Authorization}}).then(response => {
                  // console.log(response);
                  this.BTCBonusAmount = 0
                  this.withdrawBTCData.amount = 0

                  $("#withdrawBTCLoader").removeClass( "is-active" );
                  this.withdrawBTCData = {
                    address: '',
                    amount: '',
                    password: '',
                    OTP: ''
                  },
                  console.log();
                  $('#successETHWithdrawl').modal('show');
                  this.getETHWalletBalance()
                  this.getBTCWalletBalance()
                  this.getBFXWalletBalance()
                  this.getbtcincomingtrans()
                }, response => {
                  $("#withdrawBTCLoader").removeClass( "is-active" );
                  $('#failedETHWithdrawl').modal('show');
                  // console.log(response);
                  console.log(response);
                  if (response.body == "An error has occurred please try again") {
                      this.BTCTransactionfailed = 'Not enough fund, after calculating the transaction fees please decrease the coins or add more funds into your wallet for successful transaction'
                  } else {
                      this.BTCTransactionfailed = response.body
                  }
                })
              }
            },
            withdrawETH: function () {

              if (this.ICOStop == true) {
                  $("#ICOStopModal").modal();
                  // Clear Fields here
                  this.withdrawETHData = {
                    address: '',
                    amount: '',
                    password: '',
                    OTP: ''
                  }
                  return
                }

              this.BTCTransactionfailed = ''
              this.ETHTransactionfailed = ''
              // Validations
              this.ETHaddressError = false
              this.ETHPasswordError = false
              this.ETHAmountError = false
              this.ETHG2AError = false
              var ETHaddressValidated = false
              var ETHPasswordValidated = false
              var ETHAmountValidated = false
              var ETHG2AValidated = false

              // Address Validation
              // Not working with build
              // if(varifyEtherumAddress.isAddress(this.withdrawETHData.address)) {
              //   ETHaddressValidated = true
              // } else {
              //   this.ETHaddressError = true
              // }

              // Address Validation
              // if (this.withdrawETHData.address.trim() == '') {
              //   this.ETHaddressError = true
              // } else {
              //   if ( this.withdrawETHData.address.trim().length > 40 && this.withdrawETHData.address.trim().length < 50) {
              //     ETHaddressValidated = true
              //   } else {
              //     this.ETHaddressError = true
              //   }
              // }
              ETHaddressValidated = true

              // Password Validation
              if(this.withdrawETHData.password.trim() == '') {
                this.ETHPasswordError = true
              } else {
                ETHPasswordValidated = true
              }


              if (this.google2factorTransactionEnabled) {
                // G2A Validation
                if (this.withdrawETHData.OTP.trim() == '') {
                  this.ETHG2AError = true
                } else {
                  if(!/^\d+$/.test(this.withdrawETHData.OTP.trim())) {
                    this.ETHG2AError = true
                  } else {
                    ETHG2AValidated = true
                  }
                }
              } else {
                this.withdrawETHData.OTP = ''
                ETHG2AValidated = true
              }


              //  Amount Validation
              if (this.withdrawETHData.amount.trim() == ''){
                this.ETHAmountError = true
              } else if (/^\d+$/.test(this.withdrawETHData.amount.trim())) {
                if(parseInt(this.withdrawETHData.amount.trim()) < 1){
                  this.ETHAmountError = true
                } else {
                  ETHAmountValidated = true
                }
                // /^[-+]?[0-9]+\.[0-9]+$/
              } else if (/^[-+]?[0-9]+\.[0-9]+$/.test(this.withdrawETHData.amount.trim())) {
                if(parseFloat(this.withdrawETHData.amount.trim()) < 0.000000001){
                  this.ETHAmountError = true
                } else {
                  ETHAmountValidated = true
                }
              } else {
                this.ETHAmountError = true
              }


              if (this.ETHtoBFXValue.toString().trim() == '') {
                this.ETHAmountError = true
                ETHAmountValidated = false
              } else if (this.ETHtoBFXValue == 0) {
                this.ETHAmountError = true
                ETHAmountValidated = false
              } else {
                ETHAmountValidated = true
              }

              console.log(ETHaddressValidated ,ETHPasswordValidated, ETHAmountValidated, ETHG2AValidated, this.ETHAmountvalidated);
              if (ETHaddressValidated && ETHPasswordValidated && ETHAmountValidated && ETHG2AValidated && this.ETHAmountvalidated) {
                $("#withdrawETHLoader").addClass( "is-active" );
                // var withdrawEthURL = this.apiURL + '/WalletTransaction/postEthtransaction';
                var Authorization = 'Bearer ' + this.user_AT
                var data  = {
                  toAddress: this.withdrawETHData.address,
                  Amount: this.withdrawETHData.amount,
                  Password: this.withdrawETHData.password,
                  G2FactorCode: this.withdrawETHData.OTP,
                }
                console.log('this is ETH going');
                console.log(data);
                // console.log(data);

                // Enable After ICO
                // this.$http.post(withdrawEthURL, data, {headers: {'Authorization': Authorization}}).then(response => {
                //   this.withdrawETHData = {
                //     address: '',
                //     amount: '',
                //     password: '',
                //     OTP: ''
                //   },
                //   $('#successETHWithdrawl').modal('show');
                // }, response => {
                //   $('#failedETHWithdrawl').modal('show');
                //   console.log(response);
                // })

                // Disable after ICO
                var withdrawEthURLICO = this.apiURL + '/WalletTransaction/postICOEthtransaction'
                this.$http.post(withdrawEthURLICO, data, {headers: {'Authorization': Authorization}}).then(response => {
                  this.ETHBonusAmount = 0
                  this.withdrawETHData.amount = 0
                  $("#withdrawETHLoader").removeClass( "is-active" );
                  this.withdrawETHData = {
                    address: '',
                    amount: '',
                    password: '',
                    OTP: ''
                  },
                  $('#successETHWithdrawl').modal('show');
                  this.getETHWalletBalance()
                  this.getBTCWalletBalance()
                  this.getBFXWalletBalance()
                  this.getbtcincomingtrans()
                }, response => {
                  $("#withdrawETHLoader").removeClass( "is-active" );
                  $('#failedETHWithdrawl').modal('show');
                  // console.log(response);
                  if (response.body == "An error has occurred please try again") {
                      this.ETHTransactionfailed = 'Not enough fund, after calculating the transaction fees please decrease the coins or add more funds into your wallet for successful transaction'
                  } else {
                      this.ETHTransactionfailed = response.body
                  }
                })

              }

            },
            copyAddress: function () {
              // $('#copiedRefer').fadeIn("slow", "swing", 5000);
              $('#copiedRefer').animate({left:500, opacity:"show"}, 1000);

              setTimeout(function(){
                  $('#copiedRefer').animate({left:500, opacity:"hide"}, 1000);
               }, 2000);

              // $('[data-toggle="tooltip"]').tooltip();
              document.querySelector("#myInput").select();
              document.execCommand('copy');
              // var copyText = document.getElementById("myInput");
              // copyText.select();
              // document.execCommand("Copy");
              // alert("Copied the text: " + copyText.value);
            },
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result && (this.signup.sponsor !== this.signup.userName)) {

                    }
                });
            },
            submitUserQuestion: function () {

            },
            getG2ATransactionStatus: function () {
              var Authorization = 'Bearer ' + this.user_AT
              var securityStatusURL = this.apiURL + '/Security/getusersecurity';
              // Get user security status
              this.$http.get(securityStatusURL,{headers: {'Authorization': Authorization}}).then(response => {
                if(response.body.value.twofactortrans == true) {
                  this.google2factorTransactionEnabled = true
                }
                // console.log("This is status");
                // console.log(response);
              }, response => {
                console.log(response);
              })
            },
            getETHWalletBalance: function () {
              var Authorization = 'Bearer ' + this.user_AT
              var getETHWalletBalanceURL = this.apiURL + '/WalletTransaction/getEthwalletbalance';
              // Get user security status
              this.$http.get(getETHWalletBalanceURL,{headers: {'Authorization': Authorization}}).then(response => {
                this.ETHWalletBalance = response.body.value.walletBalance.toFixed(8);
                localStorage.setItem('bitflax:ethBalance', response.body.value.walletBalance.toFixed(8));
              }, response => {
                // console.log(response);
                localStorage.setItem('bitflax:ethBalance', 0);
              })
            },
            getBFXWalletBalance: function () {
              var Authorization = 'Bearer ' + this.user_AT
              var getBFXWalletBalanceURL = this.apiURL + '/WalletTransaction/getuserbfx';
              // Get user security status
              this.$http.get(getBFXWalletBalanceURL,{headers: {'Authorization': Authorization}}).then(response => {
                // console.log(response);
                this.BFXWalletBalance = response.body.value.toFixed(8);
                localStorage.setItem('bitflax:bfxBalance', response.body.value.toFixed(8));
              }, response => {
                console.log(response);
                localStorage.setItem('bitflax:bfxBalance', 0);
              })
            },
            getBTCWalletBalance: function () {
              var Authorization = 'Bearer ' + this.user_AT
              var getBTCWalletBalanceURL = this.apiURL + '/WalletTransaction/getBTCwalletbalance';
              // Get user security status
              this.$http.get(getBTCWalletBalanceURL,{headers: {'Authorization': Authorization}}).then(response => {
                console.log(response);
                this.BTCWalletBalance = response.body.value.walletBalance.toFixed(8);
                localStorage.setItem('bitflax:btcBalance', response.body.value.walletBalance.toFixed(8));

                if (response.body.value.unConfirmedBalance < 0) {
                  this.BTCWalletBalance = this.BTCWalletBalance - response.body.value.unConfirmedBalance.toFixed(8)
                  this.BTCWalletBalanceunconfirmed = 0
                } else {
                  this.BTCWalletBalanceunconfirmed = response.body.value.unConfirmedBalance.toFixed(8);
                  localStorage.setItem('bitflax:btcBalanceUnconfirmed', response.body.value.unConfirmedBalance.toFixed(8));
                }

              }, response => {
                console.log(response);
                localStorage.setItem('bitflax:btcBalance', 0);
              })
            },
            getbtcincomingtrans: function () {

              var Authorization = 'Bearer ' + this.user_AT
              var URL = this.apiURL + '/WalletTransaction/getbtcincomingtrans'
              this.$http.get(URL, {headers: {'Authorization': Authorization}}).then(response => {
                this.getBTCWalletBalance()
                // console.log(response);
                this.btcIncomingTransactions = response.body.value;

                // calculate unconfirmed balacnce
                // this.BTCWalletBalanceunconfirmed = 0
                //
                // for (let i=0; i<this.btcIncomingTransactions.length;i++) {
                //   this.BTCWalletBalanceunconfirmed += this.btcIncomingTransactions[i].creditAcount
                // }


                if (this.btcIncomingTransactions.length == 0) {
                    this.showBtcIncomingTransactions = false
                } else {
                  this.showBtcIncomingTransactions = true
                }

              }, response => {
                this.getBTCWalletBalance()
                this.showBtcIncomingTransactions = false
                this.btcIncomingTransactions = []
                // this.BTCWalletBalanceunconfirmed = 0
                // console.log(response);
              })
            },
            getethincomingtrans: function () {
              var Authorization = 'Bearer ' + this.user_AT
              var URL = this.apiURL + '/WalletTransaction/getethincomingtrans'
              this.$http.get(URL, {headers: {'Authorization': Authorization}}).then(response => {
                console.log(response);


              }, response => {
                // console.log(response);
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
                // console.log(response);
              })
            },

        },
        destroyed() {
          window.clearInterval(this.recJobDashboard)
          this.recJobDashboard= false
        },
        created() {
          var userData = localStorage.getItem('bitflax:userData');
          var decrypted = CryptoJS.AES.decrypt(userData, this.MySECRET);
          userData = decrypted.toString(CryptoJS.enc.Utf8)
          this.user_name = JSON.parse(userData).user_name;
          this.user_AT = JSON.parse(userData).access_token;
          this.urlWithUserName = this.urlWithUserName + this.user_name

          var ICOstopURL = this.apiURL + '/ICO/GetIcoStopDetails'
          // Get user security status
          this.$http.get(ICOstopURL).then(response => {
            console.log(response);
            this.ICOStop = response.body.value[0].defaultBool1
            this.ICOStopMessage = response.body.value[0].defaultTextMax
          }, response => {
            console.log(response);
          })


        },
        mounted() {
          // Place this at the top of all functions
          $([window, document]).blur(function(){
            this.blurFromPage()
          }.bind(this)).focus(function(){
            this.focusOnPage()
          }.bind(this));


          if (this.recJobDashboard) {

          } else {
            this.recJobDashboard = setInterval(function () { this.recurringJobs() }.bind(this), 60000);
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
          // input box resize ends

          // localStorage.setItem('recurringOneMinuteDashboard', new Date())
          //
          // this.recJob = setInterval(function () { this.recurringJobs() }.bind(this), 60000);

          // ************* //



          // ************* //



          // // Recurring Job 1 min
          // setInterval(function(){
          //   console.log('recurring workingon Dashboard');
          //   this.getBFXWalletBalance()
          //   this.getBTCWalletBalance()
          //   this.getETHWalletBalance()
          //   this.getbtcincomingtrans()
          //   this.getICOTotkenLimit()
          // }.bind(this), 60000);


          this.getG2ATransactionStatus()
          this.getbtcincomingtrans()
          this.getBFXWalletBalance()
          this.getETHWalletBalance()
          this.getBTCWalletBalance()
          this.getWallets()
          this.getICOTotkenLimit()

          // Recurring Job for UpdateBTC /ETH (M Sir Methods)
          if (localStorage.getItem('bitflax:recurringTime')) {
            var seconds = new Date() - Date.parse(localStorage.getItem('bitflax:recurringTime'));
            // console.log(seconds/1000);
            if (seconds / 1000 > 300) {
              // console.log('more than 5 min');
              localStorage.setItem('bitflax:recurringTime', new Date())
              this.UpdateBitcoinTransactions()
              this.UpdateEtherTransactions()
              this.getICOTotkenLimit()

            } else {
              // console.log('less than 5min');
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


          var sponsor = localStorage.removeItem('bitflax:reference');
          // console.log("Checkih AAddress");
          var getICOAddressURL = this.apiURL + '/ICO/getadminaddress'
          // Get user security status
          this.$http.get(getICOAddressURL).then(response => {
            // console.log('some issue fromserver side');
            // console.log(response);

            this.withdrawETHData.address = ''
            this.withdrawBTCData.address = ''

            // this.withdrawETHData.address = response.body.value[0].ethereumAddress
            // this.withdrawBTCData.address = response.body.value[0].bitcoinAddress
            // this.BTCWalletBalance = response.body.value.value.balance
          }, response => {
            // console.log(response);
          })

        }
    }
</script>
<style media="screen">
  #myInput {
    background-color: lightgrey;
    min-width:50px!important;
    max-width:99.99%!important;
    transition: width 0.25s;
    text-align:center;
  }
  #confirmedUnconfirmed {
  margin-top: 10px
  }

  .info-border {
    border: .5px solid #ccc;
    border-radius: 1px;
    padding: 10px 25px 25px 25px
  }
  .lending-td {
    padding: 3px 3px 3px 8px !important
  }
</style>

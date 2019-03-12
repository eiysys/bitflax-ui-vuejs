<template>
  <div>
    <app-header></app-header>
    <div class="container-fluid">
        <div class="right-inner-content">
          <div class="loader loader-default" data-text="Please Wait" data-blink id="registrationLoader"></div>
            <!-- <div class="col-md-12">
                <ul class="top-exchange-blocks">
                    <li><span>BFX Wallet</span> BFX: 0.000000</li>
                    <li><span>Lending Wallet</span>$ 0.00</li>
                    <li class="buttons-list">
                        <button class="btn btn-primary"><i class="fa fa-angle-right" aria-hidden="true"></i> Transfer <i
                                class="fa fa-angle-right" aria-hidden="true"></i></button>
                    </li>
                    <li><span>Bitflax Wallet</span><i class="fa fa-university" aria-hidden="true"></i> 3.0000000</li>
                    <li class="buttons-list">
                        <button class="btn btn-primary"><i class="fa fa-angle-left" aria-hidden="true"></i> Exchange <i
                                class="fa fa-angle-right" aria-hidden="true"></i></button>
                    </li>
                    <li><span>Bitcoin Wallet</span><i class="fa fa-bitcoin" aria-hidden="true"></i> 3.0000000</li>
                </ul>
            </div> -->
            <div class="col-md-12 top-copy-link-block">
                <form action="#" class="pull-left">
                    <div class="input-group">
                      <input id="myInput" class="ct-up" type="text" v-bind:value="urlWithUserName" readonly="readonly">
                       <!-- <input class="ct-up" type="text" value="http://bitflax.devserver.co.in/"> -->
                       <button class="btn btn-orange" data-clipboard-target="#myInput" type="button" v-on:click="copyAddress"><i class="fa fa-files-o" aria-hidden="true"></i> Copy</button>
                    </div>
                </form>
                <!-- <button class="lending-guide-btn btn btn-primary pull-right"><i class="fa fa-building-o"
                                                                                aria-hidden="true"></i> Lending Guide
                </button> -->
            </div>

            <div class="clearfix"></div>

            <div class="col-md-12">
                <div class="acc_security">
                    <h2>Account Security</h2>

                    <div class="alert alert-success" v-if="googleAuthenticationSuccess">
                      <strong> <i class="fa fa-check-circle fa-lg pr5"></i> SUCCESS</strong> <br><br>Mobile APP based Two-factor authentication enabled successfully. Please backup your authentication key <strong>DPVJNVP2QOOI2B7N</strong>
                    </div>

                    <div class="alert alert-success" v-if="googleAuthenticationDisableSuccess">
                      <strong> <i class="fa fa-check-circle fa-lg pr5"></i> SUCCESS</strong> <br><br>Mobile APP(google authenticator) based Two-factor authentication disabled successfully.
                    </div>

                    <div class="alert alert-success" v-if="googleTransactionEnableSuccess">
                      <strong> <i class="fa fa-check-circle fa-lg pr5"></i> SUCCESS</strong> <br><br>Mobile APP(google authenticator) based Two-factor authentication <strong>activated</strong> while send coin from wallet.
                    </div>

                    <div class="alert alert-success" v-if="googleTransactionDisableSuccess">
                      <strong> <i class="fa fa-check-circle fa-lg pr5"></i> SUCCESS</strong> <br><br>Mobile APP(google authenticator) based Two-factor authentication <strong>deactivated</strong> while send coin from wallet.
                    </div>



                    <p>Your account security level is: <span class="highlight_txt" id="securitylevel">{{securityLevel}}</span></p>
                    <p>Weak account security increases the risk of Bitflax theft.</p>
                    <div class="progress progress-striped">
                        <div class="progress-bar" style="width: 50%;" id="securityBar">
                            <span>{{securityBarLevel}}</span>
                        </div>
                    </div>

                    <div class="tabs-same-all">
                        <div class="panel tabs panel-group">
                            <div class="panel-heading">
                                <!-- Tabs -->
                                <ul class="nav panel-tabs">
                                    <li class="active">
                                        <a href="#tab1" data-toggle="tab" style="content:''">Two-Factor Authentication</a>
                                    </li>
                                    <!-- <li>
                                        <a href="#tab2" data-toggle="tab">Code Card</a>
                                    </li> -->
                                    <!--<li>-->
                                        <!--<a href="#tab3" data-toggle="tab">Login Shield</a>-->
                                    <!--</li>-->
                                    <!--<li>-->
                                        <!--<a href="#tab4" data-toggle="tab">Login History</a>-->
                                    <!--</li>-->
                                    <!--<li>-->
                                        <!--<a href="#tab5" data-toggle="tab">Change Password</a>-->
                                    <!--</li>-->
                                    <!--<li>-->
                                        <!--<a href="#tab6" data-toggle="tab">Login Notification</a>-->
                                    <!--</li>-->
                                </ul>
                            </div>
                            <div class="panel-body">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tab1">
                                        <div class="inrtab_content">
                                            <h2>
                                              Two-factor Authentication
                                              <!-- <span class="highlight_txt">Disable</span> -->
                                            </h2>
                                            <p>Protect your account in just few minutes by enabling following security
                                                option.</p>
                                            <p>Required when you send coin from main wallet(optional).</p>

                                            <div class="panel-group" id="accordion" role="tablist"
                                                 aria-multiselectable="true">
                                                <div class="panel panel-default">
                                                    <div class="panel-heading" role="tab" id="headingOne">
                                                        <h4 class="panel-title">
                                                            <a class="" role="button" data-toggle="collapse"
                                                               data-parent="#accordion" href="#collapseOne"
                                                               aria-expanded="true" aria-controls="collapseOne">
                                                                Enable mobile APP based two-factor authentication
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseOne" class="panel-collapse collapse in"
                                                         role="tabpanel" aria-labelledby="headingOne">

                                                         <!-- Changed Body 1-->
                                                        <div class="panel-body" v-if="noFAEnabled">
                                                            <h2>Mobile APP based two-factor authentication</h2>
                                                            <img class="img img-thumbnail pull-right" alt="/"
                                                                 src="../../../assets/img/google-authenticator.jpg">
                                                            <ol type="1.">
                                                                <li>Download the "Google Authenticator" app for your
                                                                    mobile phone or desktop computer: <a
                                                                            href="">Android</a> or <a href="">iPhone</a>,
                                                                    <a href="">iPad</a> and <a href="">iPod</a> , <a
                                                                            href="">Windows Phone</a> , and <a href="">other
                                                                        systems including Microsoft Windows desktop</a>.
                                                                </li>
                                                                <li>Write down this key <b>CL64O7Y4F3FEVUNL</b> on the
                                                                    paper and store it safe. You will need it if you
                                                                    lose or change your device.
                                                                </li>
                                                                <li>Install the "Google Authenticator" app. <b>Scan QR
                                                                    barcode</b> revealed below with mobile app.
                                                                </li>
                                                                <li>Enter the Authentication code given by your mobile
                                                                    app in the box.
                                                                </li>
                                                            </ol>
                                                            <!-- <form> -->
                                                                <img v-bind:src="QRUrl" alt="/"
                                                                     class="img-responsive">
                                                                <div class="form-group">
                                                                    <label>Authentication Key</label>
                                                                    <input type="text" name="" v-bind:value="pvtCode"
                                                                           class="form-control" disabled>
                                                                </div>
                                                                <div class="form-group aut_text">
                                                                    <label>Authentication Code</label>
                                                                    <input type="text" name="" v-model="OTP_code" class="form-control">
                                                                    &nbsp;<span v-if="OTP_codeError" style="color:red; font-size:15px; padding-top:10px"> This field is required.</span>
                                                                    &nbsp;<span v-if="OTP_codeValidError" style="color:red; font-size:15px; padding-top:10px"> Please enter only digits.</span>
                                                                </div>
                                                                <div class="form-group">
                                                                    <a href="Print a backup of your recovery code."></a>
                                                                </div>
                                                                <div class="form-group">
                                                                    <!-- <p style="color:red; font-size:14px" >Please write down backup code and check select option</p> -->
                                                                    <div class="checkbox">
                                                                        <input id="checkbox1" type="checkbox" v-model="writtenDownCheckbox">
                                                                        <label for="checkbox1">
                                                                            <span style="color:red; font-size:14px" v-if="writtenDownCheckboxError">Please verify this </span>I have written down this backup code <b>CL64O7Y4F3FEVUNL</b>
                                                                            on paper
                                                                        </label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                        <input id="checkbox2" type="checkbox" v-model="transbool">
                                                                        <label for="checkbox2">
                                                                            Enable Google authentication while send coin
                                                                            from wallet? (optional). This will ask
                                                                            Google Authentication code each time when
                                                                            you send coin to outside of bitflax wallet.
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">

                                                                  <div class="alert alert-danger" v-if="googleAuthenticationFailed">
                                                                    <strong> <i class="fa fa-exclamation-circle fa-lg pr5"></i> Error!</strong> <br>Verification failed please enter correct code from google authenticator app.
                                                                  </div>

                                                                  <!-- Buttons  -->
                                                                    <button class="btn btn-primary" type="submit" @click="mobileApp2FA">
                                                                      <i class="fa fa-check"></i>&nbsp;Enable
                                                                    </button>
                                                                  <!-- Buttons Ends -->

                                                                </div>
                                                                <div class="panel-blocks">
                                                                    <h3>What is Google authenticator?</h3>
                                                                    <ul>
                                                                        <li>Google Authenticator protects your Bitflax
                                                                            account from keyloggers and password theft.
                                                                            With two-factor authentication, you'll need
                                                                            both your password and an authentication
                                                                            code to log in.
                                                                        </li>
                                                                        <li>Once you turn on Google Authentication,
                                                                            you'll get a Authentication code to your
                                                                            authenticator app every time you sign in on
                                                                            a device.
                                                                        </li>
                                                                    </ul>
                                                                    <img src="../../../assets/img/authenticator-security.png"
                                                                         class="img-responsive" alt="/">

                                                                    <h3>Why You Should Use Google Authenticator
                                                                        App?</h3>
                                                                    <ul>
                                                                        <li>It Works without Internet and Network
                                                                            coverage
                                                                        </li>
                                                                        <li>Manage Multiple Accounts in One Place</li>
                                                                        <li>It takes only few minutes to set it up and
                                                                            EASY to use
                                                                        </li>
                                                                        <li>You can use it without need of Google
                                                                            account
                                                                        </li>
                                                                        <li>Protects your Bitflax account from
                                                                            keyloggers and password theft.
                                                                        </li>
                                                                        <li>Adds a second layer of security to prevent
                                                                            unauthorized login access.
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            <!-- </form> -->

                                                        </div>
                                                        <!-- Changed Body 1 Ends here -->

                                                        <!-- Changed Body 2-->
                                                       <div class="panel-body" v-if="twoFAEnabled">
                                                            <h4 style="color:black"><strong>Mobile APP</strong> (google authenticator) based two-factor authentication already <strong style="color:green">enable.</strong></h4>

                                                               <div class="form-group aut_text">
                                                                   <label>Authentication Code</label>
                                                                   <input type="text" name="" v-model="OTP_code" class="form-control">
                                                                   &nbsp;<span v-if="OTP_codeError" style="color:red; font-size:15px; padding-top:10px"> This field is required.</span>
                                                                   &nbsp;<span v-if="OTP_codeValidError" style="color:red; font-size:15px; padding-top:10px"> Please enter only digits.</span>
                                                               </div>
                                                               <div class="form-group">
                                                                   <a href="Print a backup of your recovery code."></a>
                                                               </div>
                                                               <div class="form-group">

                                                                 <div class="alert alert-danger" v-if="googleAuthenticationFailed">
                                                                   <strong> <i class="fa fa-exclamation-circle fa-lg pr5"></i> Error!</strong> <br>Verification failed please enter correct code from google authenticator app.
                                                                 </div>

                                                                 <!-- Buttons  -->
                                                                     <div>
                                                                       <button class="btn btn-primary" type="submit" @click="deactivate2FA">
                                                                         <i class="fa fa-check"></i>&nbsp;Disable
                                                                       </button>
                                                                       <br><br>
                                                                       Activate Google authentication while send coin from wallet? (optional). This will ask Google Authentication code each time when you send coin to outside of bitflax wallet.<br> <br>
                                                                       <button class="btn btn-primary" type="submit" @click="activateTransaction2FA">
                                                                         <i class="fa fa-check"></i>&nbsp;Activate G2A while send coin from wallet
                                                                       </button>
                                                                     </div>
                                                                 <!-- Buttons Ends -->

                                                               </div>
                                                               <div class="panel-blocks">
                                                                   <h3>What is Google authenticator?</h3>
                                                                   <ul>
                                                                       <li>Google Authenticator protects your Bitflax
                                                                           account from keyloggers and password theft.
                                                                           With two-factor authentication, you'll need
                                                                           both your password and an authentication
                                                                           code to log in.
                                                                       </li>
                                                                       <li>Once you turn on Google Authentication,
                                                                           you'll get a Authentication code to your
                                                                           authenticator app every time you sign in on
                                                                           a device.
                                                                       </li>
                                                                   </ul>
                                                                   <img src="../../../assets/img/authenticator-security.png"
                                                                        class="img-responsive" alt="/">

                                                                   <h3>Why You Should Use Google Authenticator
                                                                       App?</h3>
                                                                   <ul>
                                                                       <li>It Works without Internet and Network
                                                                           coverage
                                                                       </li>
                                                                       <li>Manage Multiple Accounts in One Place</li>
                                                                       <li>It takes only few minutes to set it up and
                                                                           EASY to use
                                                                       </li>
                                                                       <li>You can use it without need of Google
                                                                           account
                                                                       </li>
                                                                       <li>Protects your Bitflax account from
                                                                           keyloggers and password theft.
                                                                       </li>
                                                                       <li>Adds a second layer of security to prevent
                                                                           unauthorized login access.
                                                                       </li>
                                                                   </ul>
                                                               </div>
                                                           <!-- </form> -->

                                                       </div>
                                                       <!-- Changed Body 2 Ends here -->

                                                       <!-- Changed Body 3-->
                                                      <div class="panel-body" v-if="twoFAEnabledBoth">
                                                          <h4 style="color:black"><strong>Mobile APP</strong> (google authenticator) based two-factor authentication already <strong style="color:green">enable.</strong></h4>

                                                              <div class="form-group aut_text">
                                                                  <label>Authentication Code</label>
                                                                  <input type="text" name="" v-model="OTP_code" class="form-control">
                                                                  &nbsp;<span v-if="OTP_codeError" style="color:red; font-size:15px; padding-top:10px"> This field is required.</span>
                                                                  &nbsp;<span v-if="OTP_codeValidError" style="color:red; font-size:15px; padding-top:10px"> Please enter only digits.</span>
                                                              </div>
                                                              <div class="form-group">
                                                                  <a href="Print a backup of your recovery code."></a>
                                                              </div>

                                                              <div class="form-group">

                                                                <div class="alert alert-danger" v-if="googleAuthenticationFailed">
                                                                  <strong> <i class="fa fa-exclamation-circle fa-lg pr5"></i> Error!</strong> <br>Verification failed please enter correct code from google authenticator app.
                                                                </div>

                                                                <!-- Buttons  -->
                                                                <button class="btn btn-primary" type="submit" @click="deactivate2FA">
                                                                  <i class="fa fa-check"></i>&nbsp;Disable
                                                                </button>
                                                                <button class="btn btn-primary" type="submit" @click="deactivateTransaction2FA">
                                                                  <i class="fa fa-check"></i>&nbsp;Deactivate G2A while send coin from wallet
                                                                </button>
                                                                <!-- Buttons Ends -->
                                                              </div>
                                                              <div class="panel-blocks">
                                                                  <h3>What is Google authenticator?</h3>
                                                                  <ul>
                                                                      <li>Google Authenticator protects your Bitflax
                                                                          account from keyloggers and password theft.
                                                                          With two-factor authentication, you'll need
                                                                          both your password and an authentication
                                                                          code to log in.
                                                                      </li>
                                                                      <li>Once you turn on Google Authentication,
                                                                          you'll get a Authentication code to your
                                                                          authenticator app every time you sign in on
                                                                          a device.
                                                                      </li>
                                                                  </ul>
                                                                  <img src="../../../assets/img/authenticator-security.png"
                                                                       class="img-responsive" alt="/">

                                                                  <h3>Why You Should Use Google Authenticator
                                                                      App?</h3>
                                                                  <ul>
                                                                      <li>It Works without Internet and Network
                                                                          coverage
                                                                      </li>
                                                                      <li>Manage Multiple Accounts in One Place</li>
                                                                      <li>It takes only few minutes to set it up and
                                                                          EASY to use
                                                                      </li>
                                                                      <li>You can use it without need of Google
                                                                          account
                                                                      </li>
                                                                      <li>Protects your Bitflax account from
                                                                          keyloggers and password theft.
                                                                      </li>
                                                                      <li>Adds a second layer of security to prevent
                                                                          unauthorized login access.
                                                                      </li>
                                                                  </ul>
                                                              </div>
                                                          <!-- </form> -->

                                                      </div>
                                                      <!-- Changed Body 1 Ends here -->

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tab2">
                                        <div class="inrtab_content">
                                            <h2>Code card <span class="highlight_txt">Disable</span></h2>
                                            <p>Secure your coin wallet with code card.</p>
                                            <p>Enable Code card based wallet security</p>
                                            <button class="btn btn-primary"><i class="fa fa-check"></i>&nbsp;Get code
                                                card
                                            </button>

                                            <div class="panel-blocks">
                                                <h3>What is code card?</h3>
                                                <ul>
                                                    <li>Having enabled this option you will have code card with numeric
                                                        code list to store offline. When you send or withdraw coin from
                                                        main wallet, the bitflax system will ask random number code from
                                                        that card.
                                                    </li>
                                                    <li>Code card transaction security is a convenient and reliable
                                                        protection measure for wallet security that has shown itself in
                                                        the majority of leading financial institutions of the world.
                                                    </li>
                                                </ul>
                                                <img src="../../../assets/img/card-security.png" class="img-responsive" alt="/">

                                                <h3>Why You Should Use Code card authentication?</h3>
                                                <ul>
                                                    <li>Secure your coin wallet from unauthorized transactions</li>
                                                    <li>Enhanced protection from Internet hackers</li>
                                                    <li>Can be obtained and printed directly from Code card security
                                                        page
                                                    </li>
                                                    <li>Add an extra layer of security to main Bitflax wallet</li>
                                                    <li>Enhanced protection from Internet hackers</li>
                                                    <li>Available to users who do not have their permanent device in
                                                        their possession
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tab3">
                                        <div class="inrtab_content">
                                            <h2>Login shield <span class="highlight_txt">Enable</span></h2>
                                            <p>Prevent login from unauthorized Browsers/Device.</p>
                                            <div class="panel-group" id="accordion" role="tablist"
                                                 aria-multiselectable="true">
                                                <div class="panel panel-default">
                                                    <div class="panel-heading" role="tab" id="headingOne">
                                                        <h4 class="panel-title">
                                                            <a class="" role="button" data-toggle="collapse"
                                                               data-parent="#accordion" href="#collapseTwo"
                                                               aria-expanded="true" aria-controls="collapseTwo">
                                                                Show/Remove authorized Browsers/Device
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseTwo" class="panel-collapse collapse in"
                                                         role="tabpanel" aria-labelledby="headingOne">
                                                        <div class="panel-body">
                                                            <div class="table-responsive in-table-bit">
                                                                <table>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Date</th>
                                                                        <th>User Agent</th>
                                                                        <th>Browser/Device</th>
                                                                        <th>Location</th>
                                                                        <th>IP Address</th>
                                                                        <th>Remove</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody></tbody>
                                                                </table>
                                                                <p>No verified browser/device available</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tab4">
                                        <div class="inrtab_content">
                                            <h2>Login History</h2>
                                            <span class="select-label">
                                    Show
                                    <select>
                                       <option>10</option>
                                       <option>25</option>
                                       <option>40</option>
                                       <option>100</option>
                                    </select>
                                    entries
                                 </span>
                                            <div class="panel-group" id="accordion" role="tablist"
                                                 aria-multiselectable="true">
                                                <div class="panel panel-default">
                                                    <div class="panel-heading" role="tab" id="headingOne">
                                                        <h4 class="panel-title">
                                                            <a class="" role="button" data-toggle="collapse"
                                                               data-parent="#accordion" href="#collapseThree"
                                                               aria-expanded="true" aria-controls="collapseThree">
                                                                Login History
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseThree" class="panel-collapse collapse in"
                                                         role="tabpanel" aria-labelledby="headingOne">
                                                        <div class="panel-body">
                                                            <div class="table-responsive in-table-bit">
                                                                <table>
                                                                    <thead>
                                                                    <tr>
                                                                        <th>Date</th>
                                                                        <th>User Agent</th>
                                                                        <th>Browser/Device</th>
                                                                        <th>Location</th>
                                                                        <th>IP Address</th>
                                                                        <th>Remove</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td>2017-11-17 03:04:39 PM</td>
                                                                        <td>Mozilla/5.0 (Windows NT 10.0; Win64; x64;
                                                                            rv:57.0) Gecko/20100101 Firefox/57.0
                                                                        </td>
                                                                        <td>Firefox</td>
                                                                        <td>IN</td>
                                                                        <td>223.196.73.212</td>
                                                                        <td><span class="fa fa-trash"></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2017-11-17 03:04:39 PM</td>
                                                                        <td>Mozilla/5.0 (Windows NT 10.0; Win64; x64;
                                                                            rv:57.0) Gecko/20100101 Firefox/57.0
                                                                        </td>
                                                                        <td>Firefox</td>
                                                                        <td>IN</td>
                                                                        <td>223.196.73.212</td>
                                                                        <td><span class="fa fa-trash"></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2017-11-17 03:04:39 PM</td>
                                                                        <td>Mozilla/5.0 (Windows NT 10.0; Win64; x64;
                                                                            rv:57.0) Gecko/20100101 Firefox/57.0
                                                                        </td>
                                                                        <td>Firefox</td>
                                                                        <td>IN</td>
                                                                        <td>223.196.73.212</td>
                                                                        <td><span class="fa fa-trash"></span></td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>

                                                            <div class="pagination">
                                                                <nav aria-label="Page navigation">
                                                                    <ul class="pagination">
                                                                        <li>
                                                                            <a href="#" aria-label="Previous">
                                                                                <span aria-hidden="true">«</span>
                                                                            </a>
                                                                        </li>
                                                                        <li><a href="#">1</a></li>
                                                                        <li><a href="#">2</a></li>
                                                                        <li><a href="#">3</a></li>
                                                                        <li><a href="#">4</a></li>
                                                                        <li><a href="#">5</a></li>
                                                                        <li>
                                                                            <a href="#" aria-label="Next">
                                                                                <span aria-hidden="true">»</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </nav>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane" id="tab5">
                                        <div class="inrtab_content">
                                            <h2>Change Password</h2>
                                            <form>
                                                <div class="form-group">
                                                    <input type="password" id="old-pwd" class="form-control password"
                                                           data-toggle="floatLabel" placeholder="Old Password">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" id="new-pwd" class="form-control password"
                                                           data-toggle="floatLabel" placeholder="New Password">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" id="con-pwd" class="form-control password"
                                                           data-toggle="floatLabel" placeholder="Confirm New Password">
                                                </div>
                                                <div class="form-group">
                                                    <!-- <div class="g-recaptcha"
                                                         data-sitekey="6LduJTkUAAAAAOu12_PxXiStAmsbceHSULdH3EKJ">
                                                    </div> -->
                                                    <div class="form-group">
                                                        <button class="btn btn-primary">Change</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div class="tab-pane" id="tab6">
                                        <div class="inrtab_content">
                                            <h2>Login notification <span class="highlight_txt">Disable</span></h2>
                                            <button class="btn btn-primary"><i class="fa fa-check"></i>Enable</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="guidelines">
                        <h4>Bitflax Account Security Guidelines.</h4>
                        <p>Bitflax aims to create maximum safety for each member. We want you to be careful and not
                            allow the scammers to steal your data, so we have created detailed instructions on how to
                            protect yourself from possible threats.</p>
                        <h4>Dear members!</h4>
                        <ul>
                            <li>Be aware of any hacker activities! For your own security keep your firewall and
                                Anti-Virus program working, watch out for key-loggers, spoofed website, and the URL in
                                address line should always be <a href="#">Bitflax.io</a></li>
                            <li>Keep in mind, Bitflax never ask you to send your password or access code by e-mail and
                                doesn't offer anything other then published on website.
                            </li>
                            <li>Don't visit suspicious websites or download unknown programs even if they offer to
                                reinforce the protection of your computer. Such programs may contain malware, adware,
                                viruses, exploits, bots.
                            </li>
                            <li>We recommend you to use strong and unique password for Bitflax account. Do not use the
                                same password for other online services.
                            </li>
                            <li>Attacker attempts to hack your E-mail in order to get access to your Bitflax account
                                using the password recovery procedure. Make sure you set maximum security for your Email
                                account.
                            </li>
                            <li>If you failed to protect yourself and the scammer hacked your account - do not panic.
                            </li>
                            <li>Check whether you still have access to the Bitflax account. If so, write to the support
                                service immediately. Bitflax will temporarily stop operations using your Bitflax
                                account, so that the scammer couldn't withdraw money.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    </div>
  </div>

</template>


<script>
    import {HTTP} from '../../../main.js';
    import Header from '../header/header.vue';

    // console.log(HTTP.get("http://api.ipify.org/?format=json"))
    // HTTP.get(`Security/getgoogleauth`,
    // ).then(function (response) {
    //     console.log(response,"response");
    // });

    export default {

        name: 'security',
        components: {
            'app-header': Header,
            // 'app-footer': Footer
        },
        data() {
            return {
                // G2FA disable success message
                googleAuthenticationDisableSuccess: false,

                // Transaction Enable Success message
                googleTransactionEnableSuccess: false,
                googleTransactionDisableSuccess: false,

                user_name: '',
                urlWithUserName: 'https://ico.bitflax.io/refer/?ref=',

                // Security Level
                securityLevel: 'Low',
                securityBarLevel: '50%',

                // User security status
                securityStatus: [],

                // Two Factor authentication
                noFAEnabled: true,
                twoFAEnabled: false,
                twoFAEnabledBoth: false,

                // validations
                writtenDownCheckboxError: false,
                OTP_codeError: false,
                OTP_codeValidError: false,
                writtenDownCheckbox: false,
                transbool: false,
                googleAuthenticationFailed: false,
                googleAuthenticationSuccess: false,
                OTP_code:'',
                code: '',
                user_AT: '',
                QRUrl: '',
                pvtCode: ''
            }
            // HTTP.get(`Security/getgoogleauth`,
            // ).then(function (response) {
            //     console.log(response,"response");
            // });

        },
        methods: {
            mobileApp2FA: function () {
              this.googleAuthenticationDisableSuccess = false;
              this.writtenDownCheckboxError = false;
              this.OTP_codeError = false;
              this.OTP_codeValidError = false;
              this.googleAuthenticationFailed = false;
              this.googleAuthenticationSuccess = false;

              var writtenDownCheckboxValidated = false;
              var OTP_codeValidated = false;

              // Validations
              if (this.writtenDownCheckbox == false) {
                this.writtenDownCheckboxError = true
              } else {
                writtenDownCheckboxValidated = true
              }

              if (this.OTP_code.trim() == '') {
                this.OTP_codeError = true
              } else {
                if (!/^\d+$/.test(this.OTP_code.trim())) {
                  this.OTP_codeValidError = true
                } else {
                    OTP_codeValidated = true
                }
              }

              if (writtenDownCheckboxValidated && OTP_codeValidated){
                var data = {
                  opt: this.OTP_code,
                  loginbool: this.writtenDownCheckbox,
                  transbool: this.transbool
                }
                var Authorization = 'Bearer ' + this.user_AT
                var enableGoogleAuth = this.apiURL + '/Security/enablegoogleauth'
                this.$http.post(enableGoogleAuth, data, {headers: {'Authorization': Authorization}}).then(response => {
                  this.writtenDownCheckbox = false
                  this.transbool = false
                  // console.log(response);
                  this.googleAuthenticationSuccess = true
                  $("html, body").animate({ scrollTop: 0 }, "slow");
                  this.updateSecurityStatus()
                  // this.securityLevel = 'Medium'
                  this.OTP_code ='';
                  // Security level
                  // this.securityBarLevel = '60%'
                  // $("#securityBar").css("width", "60%");



                  if (data.loginbool && data.transbool == false) {
                    this.noFAEnabled = false
                    this.twoFAEnabled = true
                    this.twoFAEnabledBoth = false
                  } else if (data.loginbool && data.transbool) {
                    this.noFAEnabled = false
                    this.twoFAEnabled = false
                    this.twoFAEnabledBoth = true
                  }

                  // Activate buttons
                  // this.noFAEnabled = false;
                  // this.twoFAEnabled = true;

                }, response => {
                  if (response.body == 'Google cannot verify your code. Please try again.') {
                    this.googleAuthenticationFailed = true
                  }
                  // console.log(response)

                })
              }
            },
            // logout: function () {
            //
            // }
            // Deactivate Both
            activateTransaction2FA: function () {

              // console.log("Activating transaction 2FA");

              this.OTP_codeError = false;
              this.OTP_codeValidError = false;
              this.googleAuthenticationDisableSuccess = false;
              this.googleTransactionEnableSuccess = false;
              this.googleTransactionDisableSuccess = false;
              this.googleAuthenticationFailed = false;
              this.googleAuthenticationSuccess = false;

              var Authorization = 'Bearer ' + this.user_AT
              var activateTransaction2FAURL = this.apiURL + '/Security/activatetransgoogle'

              this.$http.post(activateTransaction2FAURL, {}, {headers: {'Authorization': Authorization}}).then(response => {
                this.googleTransactionEnableSuccess = true

                this.writtenDownCheckbox = false
                this.transbool = false

                $("html, body").animate({ scrollTop: 0 }, "slow");
                // this.securityLevel = 'High'

                this.updateSecurityStatus()
                // Security level
                // this.securityBarLevel = '80%'
                // $("#securityBar").css("width", "80%");

                // Enable Disable div
                this.noFAEnabled = false;
                this.twoFAEnabled = false;
                this.twoFAEnabledBoth = true;
                this.OTP_code ='';

              }, response => {
                if (response.body == 'Google cannot verify your code. Please try again.') {
                  this.googleAuthenticationFailed = true
                }
                this.OTP_code ='';
                // console.log(response)

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

            deactivateTransaction2FA: function () {

              var OTP_codeValidated = false

              // validations
              if (this.OTP_code.trim() == '') {
                this.OTP_codeError = true
              } else {
                if (!/^\d+$/.test(this.OTP_code.trim())) {
                  this.OTP_codeValidError = true
                } else {
                    OTP_codeValidated = true
                }
              }

              if (OTP_codeValidated) {

              } else {
                return
              }

              this.OTP_codeError = false;
              this.OTP_codeValidError = false;
              this.googleAuthenticationDisableSuccess = false;
              this.googleTransactionEnableSuccess = false;
              this.googleTransactionDisableSuccess = false;
              this.googleAuthenticationFailed = false;
              this.googleAuthenticationSuccess = false;

              var data = {
                opt: this.OTP_code,
                loginbool: true,
                transbool: false
              }
              var Authorization = 'Bearer ' + this.user_AT
              var enableGoogleAuth = this.apiURL + '/Security/enablegoogleauth'

              this.$http.post(enableGoogleAuth, data, {headers: {'Authorization': Authorization}}).then(response => {
                this.OTP_code ='';
                // console.log(response);
                this.googleTransactionDisableSuccess = true
                $("html, body").animate({ scrollTop: 0 }, "slow");
                // this.securityLevel = 'Low'


                this.writtenDownCheckbox = false
                this.transbool = false
                // Security level
                // this.securityBarLevel = '60%'
                // $("#securityBar").css("width", "60%");
                this.updateSecurityStatus()
                // Enable Disable div
                this.noFAEnabled = false;
                this.twoFAEnabled = true;
                this.twoFAEnabledBoth = false;

              }, response => {
                this.OTP_code ='';
                if (response.body == 'Google cannot verify your code. Please try again.') {
                  this.googleAuthenticationFailed = true
                }
                console.log(response)

              })
            },
            deactivate2FA: function () {
              var OTP_codeValidated = false

              // validations
              if (this.OTP_code.trim() == '') {
                this.OTP_codeError = true
              } else {
                if (!/^\d+$/.test(this.OTP_code.trim())) {
                  this.OTP_codeValidError = true
                } else {
                    OTP_codeValidated = true
                }
              }

              if (OTP_codeValidated) {

              } else {
                return
              }


              this.OTP_codeError = false;
              this.OTP_codeValidError = false;
              this.googleAuthenticationDisableSuccess = false;
              this.googleTransactionEnableSuccess = false;
              this.googleTransactionDisableSuccess = false;
              this.googleAuthenticationFailed = false;
              this.googleAuthenticationSuccess = false;

              // console.log("deactivating");
              var data = {
                opt: this.OTP_code,
                loginbool: false,
                transbool: false
              }
              var Authorization = 'Bearer ' + this.user_AT
              var disableGoogleAuth = this.apiURL + '/Security/enablegoogleauth'
              this.$http.post(disableGoogleAuth, data, {headers: {'Authorization': Authorization}}).then(response => {
                // console.log(response);
                this.OTP_code ='';

                this.writtenDownCheckbox = false
                this.transbool = false

                this.googleAuthenticationSuccess = false

                $("html, body").animate({ scrollTop: 0 }, "slow");

                // this.securityLevel = 'Low'
                //
                // // Security level
                // this.securityBarLevel = '10%'
                // $("#securityBar").css("width", "10%");

                this.updateSecurityStatus()

                this.noFAEnabled = true;
                this.twoFAEnabled = false;
                this.twoFAEnabledBoth = false;

                this.googleAuthenticationDisableSuccess = true


              }, response => {
                this.OTP_code ='';
                if (response.body == 'Google cannot verify your code. Please try again.') {
                  this.googleAuthenticationFailed = true
                }
                console.log(response)

              })
            },
            updateSecurityStatus: function () {
              // console.log(this.user_AT)
              var Authorization = 'Bearer ' + this.user_AT
              var securityStatusURL = this.apiURL + '/Security/getusersecurity';
              // Get user security status
              this.$http.get(securityStatusURL,{headers: {'Authorization': Authorization}}).then(response => {
                console.log("this is security level");
                console.log(response);
                $("#registrationLoader").removeClass( "is-active" );
                this.securityStatus = response.body.value;
                if (this.securityStatus.google2factor && this.securityStatus.twofactortrans) {
                  this.twoFAEnabledBoth = true
                  this.noFAEnabled = false
                  this.twoFAEnabled = false

                  this.securityLevel = 'High'
                  this.securityBarLevel = '100%'
                  $("#securityBar").css("width", "100%");
                  $("#securityBar").removeClass("progress-bar-danger");
                  $("#securityBar").removeClass("progress-bar-warning");
                  $("#securityBar").addClass("progress-bar-success");

                  $('#securitylevel').css("background-color", "green")


                } else if (this.securityStatus.google2factor && this.securityStatus.twofactortrans == false) {
                  this.twoFAEnabled = true
                  this.noFAEnabled = false
                  this.twoFAEnabledBoth = false

                  this.securityLevel = 'Medium'
                  this.securityBarLevel = '50%'
                  $("#securityBar").css("width", "50%");
                  $('#securitylevel').css("background-color", "orange")

                  $("#securityBar").removeClass("progress-bar-danger");
                  $("#securityBar").addClass("progress-bar-warning");
                  $("#securityBar").removeClass("progress-bar-success");

                } else {
                  this.securityLevel = 'Low'
                  this.securityBarLevel = '10%'
                  $("#securityBar").css("width", "10%");
                  $('#securitylevel').css("background-color", "red")

                  $("#securityBar").addClass("progress-bar-danger");
                  $("#securityBar").removeClass("progress-bar-warning");
                  $("#securityBar").removeClass("progress-bar-success");
                }
              }, response => {
                $("#registrationLoader").removeClass( "is-active" );
                console.log(response);
              })
            }
        },

        created() {
          var userData = localStorage.getItem('bitflax:userData');
          var decrypted = CryptoJS.AES.decrypt(userData, this.MySECRET);
          userData = decrypted.toString(CryptoJS.enc.Utf8)
          this.user_name = JSON.parse(userData).user_name;
          this.user_AT = JSON.parse(userData).access_token;
          this.urlWithUserName = this.urlWithUserName + this.user_name

          this.updateSecurityStatus()
        },
        mounted() {
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
          var QR_URL = this.apiURL + '/Security/getgoogleauth'
          var Authorization = 'Bearer ' + this.user_AT
          // console.log(this.user_AT)
          this.$http.get(QR_URL,{headers: {'Authorization': Authorization}}).then(response => {
            console.log(response);
            this.QRUrl = response.body.value.QrCodeURL;
            this.pvtCode = '   ' + response.body.value.PrivateCode;
          }, response => {
            console.log(response);
            // localStorage.removeItem('bitflax:userAccessToken');
            // localStorage.removeItem('bitflax:userData');
            // window.location = "/login";
            console.log(response)

          })
        }
    }
</script>

<style scoped>
  .panel-heading a:before {
    content: ''
  }

  #myInput {
    min-width:50px!important;
    max-width:99.99%!important;
    transition: width 0.25s;
    text-align:center;
  }

</style>

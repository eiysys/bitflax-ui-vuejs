<template lang="html">

  <div class="">
    
    <div class="tl-up">
        <div class="container">
            <div class="col-md-8" style="margin-top:5px">
                <p class="top-infor-dt">
                    <b>1</b> <i style="color:#f3761f">BTC</i><span >= ${{bitcoinPrice}} </span> |
                    <b>1</b> <i style="color:#f3761f">BFX</i> <span>= $1.2</span> |
                    <b>1</b> <i style="color:#f3761f">ETH</i> <span>= ${{ethereumPrice}}</span>
                </p>
              </div>
              <div class="col-md-4 headre-login-signup">
               <ul>
                <li v-if="userIsUnauthorised"><router-link class="header-login-btn" to="/login">Login</router-link></li>
                <li v-if="userIsUnauthorised"><router-link class="darkbg_btn" to="/signup">Signup</router-link></li>
                <li v-if="userIsAuthorised"><router-link class="header-login-btn" to="/">Dashboard</router-link></li>
                <li v-if="userIsAuthorised"><button class="darkbg_btn" v-on:click="logout">Logout</button></li>
               </ul>
                    <!-- <a class="header-login-btn" href="https://bitflax.io/login" >Login</a> -->
                    <!-- <router-link class="header-login-btn" to="/login">Login</router-link> -->
                    <!-- <a class="darkbg_btn btn" href="https://bitflax.io/login">Signup</a> -->
                    <!-- <router-link class="darkbg_btn btn" to="/signup">Signup</router-link> -->
            </div>
        </div>
    </div>
    <div class="header  inner_pages_header " id="header">
          <div class="container">

              <div class="col-xs-3 col-sm-3 header-left-logo">
                  <a class="linkcenter" href="/"><img src="../../../assets/img/bitflax-white-logo.png"></a>
              </div>
              <div class="col-xs-9 col-sm-9 navigationbar">
                  <nav class="navbar navbar-default bitflax-menu">
                      <!-- Brand and toggle get grouped for better mobile display -->
                      <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                              <span class="sr-only">Toggle navigation</span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                          </button>
                          <!-- <a class="navbar-brand visible-xs" href="#">Menu</a> -->
                      </div>
                      <!-- Collect the nav links, forms, and other content for toggling -->
                      <div class="collapse navbar-collapse" id="navbar-collapse-1">

                          <ul class="nav navbar-nav">
                              <li>
                                  <a href="https://bitflax.io">Home</i>
                                                                  </a>

                              </li>
                              <li>
                                  <a href="https://bitflax.io/ico">ICO</i>
                                                                  </a>

                              </li>
                              <li>
                                  <a href="https://bitflax.io/exchange">BFX Exchange</i>
                                                                  </a>

                              </li>
                              <li>
                                  <a href="https://bitflax.io/roadmap">Roadmap</i>
                                                                  </a>

                              </li>
                              <li>
                                  <a href="https://bitflax.io/bfx-lending">BFX Lending</i>
                                                                  </a>

                              </li>
                              <li class="dropdown mega-dropdown">
                                  <a href="https://bitflax.io/news" class="dropdown-toggle" data-toggle="dropdown">News</i>
                                                                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                                  </a>
                                  <ul class="dropdown-menu mega-dropdown-menu">
                                      <div class="col-md-4 col-sm-4 col-xs-12 left_sub_menu">
                                          <h3><i class="fa fa-file-text" aria-hidden="true"></i> Category</h3>
                                          <ul>
                                              <!--                                                                                              <li><a href="https://bitflax.io/latest-news"> Latest News </a></li>

                                                                                                                                      <li><a href="https://bitflax.io/news"> Bitflax News </a></li>

                                           -->

                                              <li><a href="https://bitflax.io/news-list/latest">Latest News </a></li>
                                              <li><a href="https://bitflax.io/news-list/bitflax">Bitflax News </a></li>

                                          </ul>
                                      </div>
                                      <div class="col-md-4 col-sm-4 col-xs-12 ryt_sub_menu">
                                          <h3><i class="fa fa-newspaper-o" aria-hidden="true"></i> Bitflax News</h3>
                                          <ul>
                                              <li>
                                                  <a href="https://bitflax.io/news/IiwzLGAKYAo=">
                                                      <span><img src="https://bitflax.io/public/admin/blog/50487.jpg"></span>
                                                      <p>Two sides of the (Bit)coin when it comes to invest</p>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="https://bitflax.io/news/IiwzKGAKYAo=">
                                                      <span><img src="https://bitflax.io/public/admin/blog/14763.jpg"></span>
                                                      <p>Bitcoin Cash: The battle is still on</p>
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div class="col-md-4 col-sm-4 col-xs-12 ryt_sub_menu">
                                          <h3><i class="fa fa-newspaper-o" aria-hidden="true"></i> Latest News</h3>
                                          <ul>

                                              <li>
                                                  <a href="https://bitflax.io/latest-news/IiwzRGAKYAo=">
                                                      <span><img src="https://bitflax.io/public/admin/blog/19157.jpg"></span>
                                                      <p>Walmart, JD.com Back Blockchain Food Tracking Effo</p>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="https://bitflax.io/latest-news/IixDYGAKYAo=">
                                                      <span><img src="https://bitflax.io/public/admin/blog/45465.jpg"></span>
                                                      <p>The Cryptocurrency Market Cap Surpasses Half a Tri</p>
                                                  </a>
                                              </li>

                                          </ul>
                                      </div>
                                  </ul>

                              </li>
                              <li>
                                  <a href="https://bitflax.io/faq">FAQs</i>
                                                                  </a>

                              </li>
                              <li>
                                  <a href="https://bitflax.io/public/frontend/files/WhitePaper_Bitflax.io.pdf" target="_blank">Whitepaper</i>
                                                                  </a>

                              </li>

                              <!-- <li class="dropdown mega-dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">ICO</i></a>
                          </li>
                         <li><a href="#">BFX Exchange</a></li>
                         <li class="dropdown mega-dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Roadmap</a>
                         </li>
                         <li class="dropdown mega-dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">BFX Lending </a>

                         </li>
                         <li class="dropdown mega-dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">News <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                            <ul class="dropdown-menu mega-dropdown-menu">
                              <div class="col-md-4 col-sm-4 col-xs-12 left_sub_menu">
                                <h3>Category</h3>
                                <ul>
                                      <li><a href="#">Lorem Ipsum</a></li>
                                      <li><a href="#">Lorem Ipsum</a></li>
                                      <li><a href="#">Lorem Ipsum</a></li>
                                      <li><a href="#">Lorem Ipsum</a></li>
                                      <li><a href="#">Lorem Ipsum</a></li>
                                </ul>
                              </div>
                              <div class="col-md-4 col-sm-4 col-xs-12 ryt_sub_menu">
                                  <h3>Most Popular</h3>
                                  <ul>
                                      <li>
                                          <a href="#">
                                              <span><img src="https://bitflax.io/public/frontend/images/news-thumb-img.jpg"></span>
                                              <p>Bitcoin Adoption in the Luxury Market is Growing at a Rapid Pace</p>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                               <span><img src="https://bitflax.io/public/frontend/images/news-thumb-img.jpg"></span>
                                              <p>Bitcoin Adoption in the Luxury Market is Growing at a Rapid Pace</p>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                                <div class="col-md-4 col-sm-4 col-xs-12 ryt_sub_menu">
                                  <h3>Latest News</h3>
                                  <ul>
                                       <li>
                                          <a href="#">
                                               <span><img src="https://bitflax.io/public/frontend/images/news-thumb-img.jpg"></span>
                                              <p>Bitcoin Adoption in the Luxury Market is Growing at a Rapid Pace</p>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                               <span><img src="https://bitflax.io/public/frontend/images/news-thumb-img.jpg"></span>
                                              <p>Bitcoin Adoption in the Luxury Market is Growing at a Rapid Pace</p>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                            </ul>
                         </li>
                          <li><a href="#">FAQs</a></li>
                         <li><a href="#">Whitepaper</a></li> -->
                              <!-- <li class="visible-xs close-mbl"><a href="#">Close <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></li> -->
                          </ul>
                      </div>
                      <!-- /.navbar-collapse -->
                  </nav>
                  <!-- <nav class="navbar navbar-inverse">
                  <div class="navbar-header">
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand visible-xs" href="#"> Menu </a>
                  </div>
                  <div id="myNavbar" class="collapse navbar-collapse">
                                                          <ul class="nav navbar-nav">

                          <li class="active1">
                              <a href="https://bitflax.io">Home</a>
                          </li>

                          <li class="active1">
                              <a href="https://bitflax.io/ico">ICO</a>
                          </li>

                          <li class="active1">
                              <a href="https://bitflax.io/exchange">BFX Exchange</a>
                          </li>

                          <li class="active1">
                              <a href="https://bitflax.io/roadmap">Roadmap</a>
                          </li>

                          <li class="active1">
                              <a href="https://bitflax.io/bfx-lending">BFX Lending</a>
                          </li>

                          <li class="active1">
                              <a href="https://bitflax.io/news">News</a>
                          </li>

                          <li class="active1">
                              <a href="https://bitflax.io/faq">FAQs</a>
                          </li>

                          <li class="active1">
                              <a href="https://bitflax.io/public/frontend/files/WhitePaper_Bitflax.io.pdf">Whitepaper</a>
                          </li>

                      </ul>
                      <div class="header-btns">
                              <a class="header-login-btn" href="https://bitflax.io/login">Login</a>
                              <a class="darkbg_btn btn" href="https://bitflax.io/login">Signup</a>
                      </div>
                  </div>
              </nav> -->

              </div>
          </div>
      </div>
  </div>


</template>

<script>
// import Router from '../../../routes.js'

export default {
  name: 'unauthHeader',
  data() {
    return{
      bitcoinPrice: 0,
      ethereumPrice: 0,
      userIsAuthorised: false,
      userIsUnauthorised: true
    }
  },
  methods: {
      logout: function () {
        localStorage.removeItem('bitflax:userAccessToken')
        localStorage.removeItem('bitflax:userData')
        window.location = '/'
        // Router.push('/')
      }
  },
  mounted() {
    // Get Bitcoin Price
    var bitcoinPrice = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/'
    // Get user security status
    this.$http.get(bitcoinPrice).then(response => {
      this.bitcoinPrice = response.body[0].price_usd;
      // console.log(response.body[0].price_usd);
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

    // Check user is authenticated or not
    var check = localStorage.getItem('bitflax:userAccessToken')
    if (check) {
      this.userIsAuthorised = true
      this.userIsUnauthorised = false
    } else {
      this.userIsAuthorised = false
      this.userIsUnauthorised = true
    }

  }
}
</script>
<style media="screen">

</style>

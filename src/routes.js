import login from './components/auth/login/Login.vue';
import signUp from './components/auth/signup/Signup.vue';
import volatilitySoftware from './components/auth/volatility-software/volatilitySoftware.vue';
import twoFactor from './components/auth/login/TwoFactor.vue';
import security from './components/auth/security/security.vue';
import dashboard from './components/auth/dashboard/dashboard.vue';
import referral from './components/auth/refferal/referral.vue';
import referralBonus from './components/auth/refferal/referralTransaction.vue';
import forgot from './components/auth/forgotPassword/forgot.vue'
import reset from './components/auth/forgotPassword/reset.vue'
import activateAccount from './components/auth/accountStatus/accountStatus.vue'
import removeg2a from './components/auth/removeG2A/removeG2A.vue'
import confirmRemoveg2a from './components/auth/removeG2A/confirmRemove.vue'
import ico from './components/ico/ico.vue'
import resend_link from './components/auth/accountStatus/resend_link.vue';
import referSignup from './components/auth/refer/referSignup.vue';
import app from './App.vue';

var homePage = (global.userInfo.userAccessToken) ? dashboard : login;
var icoPage = (global.userInfo.userAccessToken) ? ico : login;
var securityPage = (global.userInfo.userAccessToken) ? security : login;

import Vue from 'vue'

import moment from 'moment'

Vue.filter('formatDate2', function(value) {
  if (value) {
    return moment(String(value)).format('YYYYMMDDHHmm')
  }
})


export default [
    {
        path: '/',
        name: 'dashboard',
        component: homePage
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/signup',
        component: signUp
    },
    {
        path: '/twofactor',
        component: twoFactor
    },
    {
        path: '/security',
        component: securityPage
    },
    {
        path: '/activation/',
        component: activateAccount
    },
    {
        path: '/ico',
        component: icoPage
    },
    {
        path:'/resend_link',
        component:resend_link
    },
    {
        path: '/forgot',
        component: forgot
    },
    {
        path: '/reset',
        component: reset
    },
    {
      path: '/removeg2a',
      component: removeg2a
    },
    {
      path: '/RemoveG2Factor',
      component: confirmRemoveg2a
    },
    {
      path: '/refer',
      component: referSignup
    },
    {
      path: '/referral',
      component: referral
    },
    {
      path: '/referralTable',
      component: referralBonus
    },
    {
        path: '/learning-center/bitflax-bitcoin-price-volatility-software',
        component: volatilitySoftware
    },
    {
      path: '*',
      component: homePage
    },

];

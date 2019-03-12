<template lang="html">
    <div class="container">
      <template>
        <h2>Account Status</h2>
        <div class="alert alert-success fade in" v-if="accountStatus">
          <a href="#" class="close" data-dismiss="alert" aria-label="close"></a>
          <strong>Success!</strong> Your Account is activated succesfully.
        </div>
        <div class="alert alert-danger fade in" v-if="!accountStatus">
          <a href="#" class="close" data-dismiss="alert" aria-label="close"></a>
          <strong>Failure!</strong> Your activation code is expired or invalid.
        </div>
      </template>
    </div>
</template>

<script>
export default {
  name: 'account',
  data() {
    return{
        accountStatus: false
    }
  }
}
</script>

<style lang="css">
</style>

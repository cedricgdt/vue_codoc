<script setup>
import HeaderPatient from './HeaderPatient.vue'
import HeaderNav from './HeaderNav.vue'
import HeaderSearch from './HeaderSearch.vue'
</script>

<template>
  <div class="header-container">
    <HeaderPatient />
    <HeaderSearch />
    <HeaderNav />
  </div>
</template>

<style scoped>
.header-container {
  position: relative;
  width: 100%;
  height: 186px;
  background: #FFFFFF;
  box-shadow: 0px 8px 20px #F8F9F9, inset 0px -2px 0px #D5D7DE;
}
</style>

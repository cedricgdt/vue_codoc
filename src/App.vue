<script setup>
import NavBar from './components/NavBar.vue'
import DocumentList from './components/DocumentList.vue'
import Header from './components/Header.vue'
</script>

<template>
  <NavBar />
  <main>
    <Header />
    <DocumentList />
  </main>
</template>

<style>
@import './assets/reset.css';
@import './assets/base.css';

#app {
  margin: 0;
  padding: 0;

  font-weight: normal;
  display: flex;
  flex-direction: column;
  
}

header {

}

</style>

<script setup>
import NavBar from './components/NavBar/NavBar.vue'
import DocumentList from './components/DocumentList/DocumentList.vue'
import Header from './components/Header/Header.vue'

import { usePatientStore } from './stores/patient'

const patient = usePatientStore()
patient.sortDocuments('document_date')

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
</style>

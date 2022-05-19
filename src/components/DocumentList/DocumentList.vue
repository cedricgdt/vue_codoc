<script setup>
import DocumentItem from './DocumentItem.vue'
import DocumentIcon from '../icons/DocumentIcon.vue'
import ArrowDownIcon from '../icons/ArrowDownIcon.vue'
import { usePatientStore } from '../../stores/patient'

const patient = usePatientStore()

</script>

<template>
  <div class="container">
    <div class="document-count">
      <span class="document-logo">
        <DocumentIcon />
      </span>
      <span class="count">{{ patient.docFiltered.length }} documents</span>
    </div>
    <div class="document-list">
      <table>
        <thead>
          <tr>
            <th v-on:click="patient.sortDocuments('document_date')" class="column-tab">Date <ArrowDownIcon /></th>
            <th class="column-tab"></th>
            <th v-on:click="patient.sortDocuments('document_type')" class="column-tab">Type <ArrowDownIcon /></th>
            <th v-on:click="patient.sortDocuments('document_origin_code')" class="column-tab">Origine <ArrowDownIcon /></th>
            <th v-on:click="patient.sortDocuments('title')" class="column-tab">Aperçu <ArrowDownIcon /></th>
            <th class="column-tab"></th>
          </tr>
        </thead>
        <tbody>
          <DocumentItem v-for="item in patient.docFiltered" :doc="item" />
        </tbody>
      </table>
    </div>
  </div>


</template>

<style scoped>
.document-count {
  padding: 32px 0 0 32px;
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: #4B535E;
  margin: 0px 4px;
}
.document-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background: #FFFFFF;
  border: 1px solid #D5D7DE;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(19, 34, 57, 0.12);
  border-radius: 8px;
  margin: 32px;
}
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}
thead {
  height: 40px;
  width: 100%;
  background: #FFFFFF;
  border-bottom: 1px solid #D5D7DE;
}
thead > tr {
  width: 100%;
}
thead th {
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: #818A96;
}
th, td {
  text-align: left;
}
.column-tab {
  padding: 11px 16px 9px;
  cursor: pointer;
}
.column-tab:nth-child(1) {
  width: 5.08%;
}
.column-tab:nth-child(2) {
  width: 5.59%;
}
.column-tab:nth-child(3) {
  width: 14.53%;
}
.column-tab:nth-child(4) {
  width: 10.90%;
}
.column-tab:nth-child(5) {
  width: 60.02%;
}
.column-tab:nth-child(6) {
  width: 3.852%;
}
</style>

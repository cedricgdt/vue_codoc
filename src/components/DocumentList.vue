<script setup>
import DocumentItem from './DocumentItem.vue'
import { usePatientStore } from '../stores/patient'

const patient = usePatientStore()

</script>

<template>
  <div class="container">
    <div class="document-count">
      <span class="document-logo">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.275 2.94984H13.175C13.1269 2.5963 12.953 2.27194 12.6851 2.03623C12.4173 1.80053 12.0734 1.66926 11.7166 1.6665L8.28332 1.6665C7.92653 1.66926 7.5827 1.80053 7.31485 2.03623C7.04699 2.27194 6.87308 2.5963 6.82498 2.94984H5.71665C5.09781 2.94984 4.50432 3.19567 4.06673 3.63325C3.62915 4.07084 3.38332 4.66433 3.38332 5.28317V15.9915C3.38222 16.2986 3.44176 16.6029 3.55853 16.887C3.6753 17.171 3.847 17.4293 4.06378 17.6468C4.28056 17.8644 4.53815 18.037 4.82179 18.1548C5.10543 18.2725 5.40953 18.3332 5.71665 18.3332H14.275C14.896 18.3332 15.4916 18.0865 15.9308 17.6473C16.3699 17.2082 16.6166 16.6126 16.6166 15.9915V5.28317C16.6167 4.97605 16.556 4.67195 16.4382 4.38831C16.3205 4.10468 16.1478 3.84708 15.9303 3.6303C15.7127 3.41352 15.4545 3.24182 15.1705 3.12505C14.8864 3.00828 14.5821 2.94874 14.275 2.94984V2.94984ZM8.05832 7.42484C8.05616 7.58993 7.98962 7.74765 7.87287 7.86439C7.75612 7.98114 7.5984 8.04768 7.43332 8.04984H6.59998C6.43422 8.04984 6.27525 7.98399 6.15804 7.86678C6.04083 7.74957 5.97498 7.5906 5.97498 7.42484C5.97498 7.25908 6.04083 7.10011 6.15804 6.9829C6.27525 6.86569 6.43422 6.79984 6.59998 6.79984H7.43332C7.5984 6.802 7.75612 6.86854 7.87287 6.98528C7.98962 7.10203 8.05616 7.25975 8.05832 7.42484V7.42484ZM5.94165 14.2832C5.94381 14.1181 6.01035 13.9604 6.12709 13.8436C6.24384 13.7269 6.40156 13.6603 6.56665 13.6582H13.425C13.5907 13.6582 13.7497 13.724 13.8669 13.8412C13.9841 13.9584 14.05 14.1174 14.05 14.2832C14.05 14.4489 13.9841 14.6079 13.8669 14.7251C13.7497 14.8423 13.5907 14.9082 13.425 14.9082H6.56665C6.40156 14.906 6.24384 14.8395 6.12709 14.7227C6.01035 14.606 5.94381 14.4483 5.94165 14.2832V14.2832ZM13.4416 11.4748H6.56665C6.40089 11.4748 6.24192 11.409 6.12471 11.2918C6.0075 11.1746 5.94165 11.0156 5.94165 10.8498C5.94165 10.6841 6.0075 10.5251 6.12471 10.4079C6.24192 10.2907 6.40089 10.2248 6.56665 10.2248H13.425C13.5907 10.2248 13.7497 10.2907 13.8669 10.4079C13.9841 10.5251 14.05 10.6841 14.05 10.8498C14.05 11.0156 13.9841 11.1746 13.8669 11.2918C13.7497 11.409 13.5907 11.4748 13.425 11.4748H13.4416ZM8.07498 3.1415C8.07498 3.08183 8.09869 3.0246 8.14088 2.9824C8.18308 2.94021 8.24031 2.9165 8.29998 2.9165H11.7333C11.7923 2.91858 11.8484 2.94295 11.8901 2.9847C11.9319 3.02646 11.9562 3.08249 11.9583 3.1415V3.97484C11.9584 4.0353 11.9349 4.09342 11.8929 4.13695C11.851 4.18048 11.7937 4.20601 11.7333 4.20817H8.28332C8.25305 4.20819 8.2231 4.20211 8.19524 4.19028C8.16739 4.17846 8.1422 4.16114 8.1212 4.13935C8.10019 4.11757 8.08379 4.09177 8.07299 4.0635C8.06219 4.03523 8.05719 4.00508 8.05832 3.97484L8.07498 3.1415Z" fill="#4B535E"/>
        </svg>
      </span>
      <span class="count">{{ patient.docFiltered.length }} documents</span>
    </div>
    <div class="document-list">
      <table>
        <thead>
          <tr>
            <th v-on:click="patient.sortDocuments('document_date', patient.previewText)" class="column-tab">Date <img src="../assets/CaretDown.svg" alt="arrow"></th>
            <th class="column-tab"></th>
            <th v-on:click="patient.sortDocuments('document_type', patient.previewText)" class="column-tab">Type <img src="../assets/CaretDown.svg" alt="arrow"></th>
            <th v-on:click="patient.sortDocuments('document_origin_code', patient.previewText)" class="column-tab">Origine <img src="../assets/CaretDown.svg" alt="arrow"></th>
            <th v-on:click="patient.sortDocuments('title', patient.previewText)" class="column-tab">Aperçu <img src="../assets/CaretDown.svg" alt="arrow"></th>
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

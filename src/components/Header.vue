<script setup>
import { usePatientStore } from '../stores/patient'

const patient = usePatientStore()

function changeText(text) {
  console.log(patient.previewText)
  patient.sortDocuments('', text.target.value)
}

</script>

<template>
  <div class="header-container">
    <div class="patient-section">
      <div class="patient-info1">
        <span class="patient-name">{{ patient.patientInfo.last_name.toUpperCase() }} {{ patient.patientInfo.first_name.charAt(0).toUpperCase() + patient.patientInfo.first_name.slice(1) }}</span>
        <span class="patient-id">#7135</span>
      </div>
      <div class="patient-info2">
        <span class="patient-birthday"><span class="patient-text-grey">Né le </span> 30/08/1951</span>
        <span class="patient-gender">
          <span class="gender-logo">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.71165 12.6667H6.62151C4.80432 12.6667 3.33325 11.192 3.33325 9.3784V9.28826C3.33325 7.47107 4.80792 6 6.62151 6H6.71165C8.52885 6 9.99992 7.47467 9.99992 9.28826V9.3784C9.99992 11.192 8.52525 12.6667 6.71165 12.6667Z" stroke="#686F78" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.33325 6.66683L12.6666 3.3335" stroke="#686F78" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.6665 3.3335H8.6665" stroke="#686F78" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.6665 3.3335V7.3335" stroke="#686F78" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          Homme
        </span>
      </div>
      <div class="patient-ipp"><span class="patient-text-grey">IPP:</span> 374</div>
    </div>
    <div class="search-bar">
      <div class="search-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 18C7.13382 18 4 14.8662 4 11C4 7.13382 7.13382 4 11 4C14.8662 4 18 7.13382 18 11C18 14.8662 14.8662 18 11 18Z" stroke="#818A96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 20L16 16" stroke="#818A96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <input @input="changeText" class="input-search" placeholder="Recherche" type="text">
    </div>
    <ul class="patient-tab">
      <li class="patient-tab-item">Documents</li>
      <li class="patient-tab-item">Biologie</li>
      <li class="patient-tab-item">Mouvements</li>
      <li class="patient-tab-item">Séjours</li>
      <li class="patient-tab-item">Phénotypes</li>
      <li class="patient-tab-item">Cohortes</li>
    </ul>
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
.patient-section {
  position: absolute;
  width: 172px;
  height: 90px;
  left: 32px;
  top: 32px;
  /* border: #233C73 solid 1px; */
}
.search-bar{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  position: absolute;
  width: 50%;
  height: 40px;
  left: 50%;
  transform: translateX(-50%);
  top: 57px;
  background: #FFFFFF;
  border: 1px solid #D5D7DE;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(19, 34, 57, 0.12), inset 0px 1px 3px rgba(19, 34, 57, 0.08);
  border-radius: 8px;
}
.input-search {
  width: 100%;
  border: none;
}
.input-search:focus-visible {
  border: none;
  outline: none;
}
.patient-tab {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  /* width: 632px; */
  height: 48px;
  transform: translateX(-50%);
  left: 50%;
  top: 138px;
}
.patient-tab-item {
  padding: 10px 16px;
  background: #FFFFFF;
  margin: 0px 0px;
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: #686F78;
}
.patient-tab-item:first-child {
  border-bottom: 2px solid #233C73;
  color: #233C73;
}
.patient-info1 {

}
.patient-name {
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: -0.6px;
  font-weight: 900;
}
.patient-id {
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.4px;
  color: #686F78;
  margin-left: 5px;
}
.patient-info2 {
  display: flex;
  flex-direction: row;
}
.patient-birthday {
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.patient-text-grey {
  color: #A0A7B0;
}
.patient-gender {
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #686F78;
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.patient-ipp {
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
</style>

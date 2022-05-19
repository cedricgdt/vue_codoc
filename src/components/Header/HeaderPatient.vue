<template>
  <div class="patient-section">
    <div class="patient-info1">
      <span class="patient-name">{{ patient.patientInfo.last_name.toUpperCase() }} {{ patient.patientInfo.first_name.charAt(0).toUpperCase() + patient.patientInfo.first_name.slice(1) }}</span>
      <span class="patient-id">#7135</span>
    </div>
    <div class="patient-info2">
      <span class="patient-birthday"><span class="patient-text-grey">Né le </span> 30/08/1951</span>
      <span class="patient-gender">
        <span class="gender-logo">
          <GenderIcon />
        </span>
        Homme
      </span>
    </div>
    <div class="patient-ipp"><span class="patient-text-grey">IPP:</span> 374</div>
  </div>
</template>

<script setup>
import GenderIcon from '../icons/GenderIcon.vue'
import { ref } from 'vue'
import { usePatientStore } from '../../stores/patient'

const patient = usePatientStore()
</script>

<style scoped>
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
.patient-section {
  position: absolute;
  width: 172px;
  height: 90px;
  left: 32px;
  top: 32px;
}
</style>
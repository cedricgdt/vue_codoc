<template>
  <ul class="patient-tab">
    <li class="patient-tab-item">Documents</li>
    <li class="patient-tab-item">Biologie</li>
    <li class="patient-tab-item">Mouvements</li>
    <li class="patient-tab-item">Séjours</li>
    <li class="patient-tab-item">Phénotypes</li>
    <li class="patient-tab-item">Cohortes</li>
  </ul>
</template>

<style scoped>
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
</style>
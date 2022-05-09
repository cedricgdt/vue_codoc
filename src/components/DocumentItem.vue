<script setup>
import { ref } from 'vue'
import { usePatientStore } from '../stores/patient'

const patient = usePatientStore()

const props = defineProps({
  doc: {
    type: Object,
    required: true,
  },
})

const opened = ref(false)

function triggerDoc() {
  opened.value = !opened.value
}

function getMonth(nb) {
  switch (nb) {
    case "01":
      return "Jan"
      break;
    case "02":
      return "Fev"
      break;
    case "03":
      return "Mar"
      break;
    case "04":
      return "Avr"
      break;
    case "05":
      return "Mais"
      break;
    case "06":
      return "Juin"
      break;
    case "07":
      return "juil"
      break;
    case "08":
      return "Aou"
      break;
    case "09":
      return "Sep"
      break;
    case "10":
      return "Oct"
      break;
    case " 11":
      return "Nov"
      break;
    case "12":
      return "Dec"
      break;
    default:
      break;
  }
}

function dateFormate(str) {
  const res = `${str.slice(8, 10)} ${getMonth(str.slice(5, 7))}`
  return res
}

function textFormat(txt) {
  const txtWithoutHTML = txt.replace( /(<([^>]+)>)/ig, '')
  const splited = txtWithoutHTML.split(/[ ,]+/)
  const joined = splited.join(" ")
  const finalTxt = addHighLight(joined)
  return finalTxt.slice(0, 150)
}

function addHighLight(text) {
  if (patient.previewText){
    const splited = text.split(patient.previewText)
    const newDoc = splited.join("<span class='text-highlight'>" + patient.previewText + "</span>")
    return newDoc
  }
  return text
}

</script>

<template>

  <tr v-bind:class="{ active: opened}" class="pointer" v-on:click="triggerDoc">
    <td class="column-tab">{{ doc.document_date.slice(0, 4) }}</td>
    <td class="column-tab">{{ dateFormate(doc.document_date) }}</td>
    <td class="column-tab"><img src="../assets/Newspaper.svg" alt="news"> {{ doc.document_type }}</td>
    <td class="column-tab">{{ doc.document_origin_code }}</td>
    <td class="column-tab">
      <div v-bind:class="{ active: opened}">
        <p class="doc-title">{{ doc.title }}</p>
        <div class="doc-content" v-html="textFormat(doc.displayed_text)"></div>
      </div>
    </td>
    <td class="column-tab"><img v-bind:class="{ active: opened}" class="arrow-right" src="../assets/CaretRight.svg" alt="arrow at right"></td>
  </tr>

  <tr v-if="opened">
    <td colspan="6" class="opened-doc">
      <p class="doc-title">{{ doc.title }}</p>
      <hr >
      <div class="doc-content doc-content-html no-warp" v-html="addHighLight(doc.displayed_text)"></div>
    </td>
  </tr>

</template>

<style scoped>
tr.active {
  background-color: #F3F5F9;
}
.no-warp * {
  white-space: nowrap;
  word-wrap: break-word;
  word-break: break-all;
}
.column-tab {
  padding: 11px 16px 9px;
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0px 8px;
}
.column-tab:nth-child(1) {
  width: 5.08%;
  color: #0C1625;
}
.column-tab:nth-child(2) {
  width: 5.59%;
  color: #4B535E;
}
.column-tab:nth-child(3) {
  width: 14.53%;
  color: #4B535E;
}
.column-tab:nth-child(4) {
  width: 10.90%;
  color: #4B535E;
}
.column-tab:nth-child(5) {
  width: 60.02%;
}
.doc-title {
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: #0C1625;
}
.doc-content {
  font-family: 'Avenir Next Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: #4B535E;
}
.doc-content-html {
  width: 100%;
  overflow: hidden;
}
.column-tab:nth-child(6) {
  width: 3.852%;
}
.arrow-right {
  cursor: pointer;
}
.arrow-right.active {
  transform: rotate(90deg);
}
div.active {
  display: none;
}
.opened-doc {
  padding: 11px 16px 9px;
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0px 8px;
}

</style>

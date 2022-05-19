<script setup>
import SearchIcon from '../icons/SearchIcon.vue'
import PlusIcon from '../icons/PlusIcon.vue'
import FileIcon from '../icons/FileIcon.vue'
import BuildingIcon from '../icons/BuildingIcon.vue'
import CloseIcon from '../icons/CloseIcon.vue'

import { ref } from 'vue'
import { usePatientStore } from '../../stores/patient'

const tagSearchElement = ref(null)

const patient = usePatientStore()
const searchTagText = ref('')
const hover = ref(false)
const tagSearchOpened = ref(false)

const openTagFilter = (event) => {
  searchTagText.value = ''
  tagSearchElement.value.style.transform = `translateX(${event.clientX - 10}px)`
  tagSearchOpened.value = !tagSearchOpened.value
}

const triggerHover = (res) => {
  hover.value = res && patient.previewText ? res : false
}

const changeText = (text) => {
  patient.previewText = text.target.value
  patient.filterDocuments()
}

const addTag = (tag) => {
  patient.tags[tag].push(searchTagText.value)
  patient.filterDocuments()
  tagSearchOpened.value = false
}

const deleteTag = (tag) => {
  patient.tags[tag] = []
  patient.filterDocuments()
}

</script>


<template>
  <div class="search-bar" @mouseover="triggerHover(true)" @mouseleave="triggerHover(false)">
    <div class="search-bar-wrapper">
      <div class="search-icon">
        <SearchIcon />
      </div>
      <input 
        @input="changeText"
        v-bind:style="{ width: patient.previewText && patient.previewText.length > 0 ? ((patient.previewText.length * 12) + 'px') : '100%' }"
        class="input-search"
        placeholder="Recherche"
        type="text"
      >
      <div class="addTag" v-if="hover" v-on:click="openTagFilter">
        <PlusIcon />
      </div>
    </div>

    <div class="tags-section" v-if="patient.previewText && patient.previewText.length">
      <div v-for="tagLabel in Object.keys(patient.tags)">
        <div class="tag-wrapper" v-if="patient.tags[tagLabel] && patient.tags[tagLabel].length">
          <span class="tag-label">{{ tagLabel.charAt(0).toUpperCase() + tagLabel.slice(1) }}</span>
          <span class="tag-text"><span  v-for="tag, i in patient.tags[tagLabel]">{{ i !== 0 ? ',' + tag : tag }}</span></span>
          <span class="logo-close" v-on:click="deleteTag(tagLabel)"><CloseIcon /></span>
        </div>
      </div>
    </div>
  </div>

  <div class="tag-filter-section" v-bind:style="{ visibility: tagSearchOpened ? 'visible' : 'hidden' }" ref="tagSearchElement">  
    <div class="search-bar-tag">
      <div class="search-icon-tag">
        <SearchIcon />
      </div>
      <input 
        v-model="searchTagText"
        class="input-search-tag"
        placeholder="Recherche"
        type="text">
    </div>
    <span class="filter-title">Filtres</span>
    <span class="filter-label" v-on:click="addTag('type')"><FileIcon /> Type</span>
    <span class="filter-label" v-on:click="addTag('origine')"><BuildingIcon /> Origine</span>
  </div>
</template>

<style scoped>
.tags-section {
  display: flex;
  flex-direction: row;
  left: 355px;
  top: 103px;

}
.tag-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 4px;
  gap: 8px;
  height: 24px;
  background: #EEEEF0;
  border-radius: 4px;
  margin-top: 8px;
  margin-right: 4px;
}
.tag-label {
  font-family: 'Avenir Next Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: #818A96;
}
.tag-text {
  font-family: 'Avenir Next Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: #0C1625;
}
.logo-close {
  margin-bottom: 4px;
  cursor: pointer;
}
.filter-title {
  font-family: 'Avenir Next Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.2px;
  color: #A0A7B0;
  padding-left: 8px;
  padding-top: 8px;
}

.filter-label {
  font-family: 'Avenir Next Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.2px;
  color: #0C1625;
  padding-left: 8px;
  cursor: pointer;
}

.tag-filter-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 200px;
  height: 121px;
  /* left: 478px; */
  top: 100px;
  background: #FFFFFF;
  border: 1px solid #D5D7DE;
  box-shadow: 0px 1px 3px rgba(19, 34, 57, 0.16);
  border-radius: 6px;
  z-index: 9999;
}

.search-bar-tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
  width: 100%;
  background: #EEEEF0;
  border: 1px solid #D5D7DE;
  border-radius: 6px 6px 0px 0px;
}

.search-icon-tag {
  margin: 0 0 0 8px;
}

.input-search-tag {
  font-family: 'Avenir Next Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.2px;
  color: #818A96;
  border: none;
  background-color: transparent;
  margin-right: 8px;
}



.addTag {
  cursor: pointer;
}
.search-bar{
  position: absolute;

  width: 50%;
  left: 50%;
  transform: translateX(-50%);
  top: 57px;
}
.search-bar-wrapper {
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  background: #FFFFFF;
  border: 1px solid #D5D7DE;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(19, 34, 57, 0.12), inset 0px 1px 3px rgba(19, 34, 57, 0.08);
  border-radius: 8px;
}
.input-search {
  min-width: 20px;
  border: none;
  font-family: 'Avenir Next Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: #0C1625;
  margin: auto 6px;
}
input:focus-visible {
  border: none;
  outline: none;
}
</style>
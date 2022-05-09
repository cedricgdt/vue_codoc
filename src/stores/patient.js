import { defineStore } from 'pinia'
import PATIENTINFO from './data.json'

export const usePatientStore = defineStore({
  id: 'patient',
  state: () => ({
    patientInfo: PATIENTINFO,
    // searchText: '',
    docFiltered: PATIENTINFO.documents.sort((a, b) => {
      const newA = a.document_date.split('/').reverse().join('-');
      const newB = b.document_date.split('/').reverse().join('-');
      return +new Date(newA) - +new Date(newB)
    }),
    sorted: 'document_date',
    previewText: '',
  }),
  getters: {
    getPatientDocs: (state) => state.docFiltered
  },
  actions: {
    sortDocuments(key, text) {
      if (text && this.previewText != text) {
        this.docFiltered = this.patientInfo.documents.filter((doc) => {
          return (doc.displayed_text.toUpperCase()).includes(text.toUpperCase())
        })
      } else if (this.previewText && !text) {
        this.docFiltered = this.patientInfo.documents
      }
      this.previewText = text

      if (this.sorted == key) {
        this.docFiltered.reverse()
      } else {
        if (!key) {
          key = this.sorted
        }
        this.docFiltered.sort((a, b) => {
          if (key == 'document_date') {
            const newA = a[key].split('/').reverse().join('-');
            const newB = b[key].split('/').reverse().join('-');
            return +new Date(newA) - +new Date(newB)
          } else {
            return a[key] < b[key] ? -1 : 1
          }
        })
        this.sorted = key
      }
    },
  }
})

import { defineStore } from 'pinia'
import PATIENTINFO from './data.json'

export const usePatientStore = defineStore({
  id: 'patient',
  state: () => ({
    patientInfo: PATIENTINFO,
    docFiltered: PATIENTINFO.documents.sort((a, b) => {
      const newA = a.document_date.split('/').reverse().join('-');
      const newB = b.document_date.split('/').reverse().join('-');
      return +new Date(newA) - +new Date(newB)
    }),
    sorted: 'document_date',
    // sortedReverse: false,
    previewText: '',
    tags: {
      type: [],
      origine: []
    }
  }),

  getters: {
    getPatientDocs: (state) => state.docFiltered
  },

  actions: {
    sortDocuments(key) {
      if (this.sorted == key) {
        this.docFiltered.reverse()
      } else {
        if (!key) key = this.sorted
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
    filterDocuments() {
      this.docFiltered = [...this.patientInfo.documents]
      if (this.previewText) {
        this.docFiltered = this.patientInfo.documents.filter((doc) => {
          return (doc.displayed_text.toUpperCase()).includes(this.previewText.toUpperCase())
        })
      }
      if ((this.tags['origine'].length || this.tags['type'].length)) {
        this.docFiltered = this.docFiltered.filter((doc) => {
          return this.tags['origine'].filter(tag => tag == doc.document_origin_code).length > 0 || this.tags['type'].filter(tag => tag == doc.document_type).length > 0
        })
      }
    }
  }
})

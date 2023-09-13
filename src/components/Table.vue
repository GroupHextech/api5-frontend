<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const exampleModal = document.getElementById('reservationForm')
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-* attributes
    const tableId = button.getAttribute('data-table-id')
    const tableStatus = button.getAttribute('data-table-status')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalStatus = exampleModal.querySelector('#status')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `Mesa ${tableId}`
    modalStatus.textContent = tableStatus
    modalBodyInput.value = tableId
  })
})

const props = defineProps(['table'])
</script>

<script>
export default {
  data() {
  },
  methods: {
    cardClass(table) {
      if (table.status === 'ocupada') return 'text-bg-danger'
      if (table.status === 'reservada') return 'text-bg-secondary'
      else return 'text-bg-success'
    },
    linkClass(table) {
      if (table.status === 'ocupada') return 'btn-danger'
      if (table.status === 'reservada') return 'btn-secondary'
      else return 'btn-success'
    },
  }
}
</script>

<template>
  <div>
    <div class="card shadow" :class="cardClass(table)">
      <div class="card-body">
        <div class="card-title">{{ table.id }}</div>
        <button type="button" data-bs-toggle="modal" data-bs-target="#reservationForm" class="btn stretched-link"
          :class="linkClass(table)" :data-table-id="table.id" :data-table-status="table.status"><i
            class="bi bi-info-circle-fill"></i></button>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="reservationForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="reservationFormLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="reservationFormLabel">Mesa</h1>
            <span class="badge rounded-pill text-bg-primary p-2 mx-2" id="status"></span>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row mb-3">
                <label for="inputNome" class="col-sm-2 col-form-label">Nome</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputNome">
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputTelefone" class="col-sm-2 col-form-label">Telefone</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputTelefone">
                </div>
              </div>
            </form>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Produtos</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">Preço</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <button class="btn btn-sm btn-light"><i class="bi bi-dash-lg"></i></button>
                    <input class="form-control" />
                    <button class="btn btn-sm btn-light"><i class="bi bi-plus-lg"></i></button>
                  </td>
                  <td></td>
                  <td><button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash3-fill"></i></button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-primary">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 0;
  text-align: center;
}
</style>
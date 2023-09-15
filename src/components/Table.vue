<script setup>
import { onMounted } from 'vue'

const props = defineProps(['table'])

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
            class="bi bi-arrow-right-circle"></i></button>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="reservationForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="reservationFormLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down">
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
            <!-- Carrinho -->
            <div class="h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12">

                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h3 class="fw-normal mb-0 text-black">Produtos</h3>
                    <div>
                      <p class="mb-0"><span class="text-muted">Filtrar por:</span> <a href="#!" class="text-body">preço <i
                            class="bi bi-chevron-down mt-1"></i></a></p>
                    </div>
                  </div>

                  <div class="card rounded-3 mb-3">
                    <div class="card-body p-4">
                      <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                            class="img-fluid rounded-3" alt="Cotton T-shirt">
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <p class="lead fw-normal mb-2">Batata Frita</p>
                          <p><span class="text-muted">Tamanho: </span>M <span class="text-muted">Obs: </span>Com sal</p>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            <i class="bi bi-dash-lg"></i>
                          </button>

                          <input id="form1" min="0" name="quantity" value="2" type="number"
                            class="form-control form-control-sm" />

                          <button class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            <i class="bi bi-plus-lg"></i>
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 class="mb-0">R$14,00</h5>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-danger"><i class="bi bi-trash3-fill"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card rounded-3 mb-3">
                    <div class="card-body p-4">
                      <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                            class="img-fluid rounded-3" alt="Cotton T-shirt">
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <p class="lead fw-normal mb-2">Refrigerante</p>
                          <p><span class="text-muted">Tamanho: </span>350ml <span class="text-muted">Obs: </span>--</p>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            <i class="bi bi-dash-lg"></i>
                          </button>

                          <input id="form1" min="0" name="quantity" value="2" type="number"
                            class="form-control form-control-sm" />

                          <button class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            <i class="bi bi-plus-lg"></i>
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 class="mb-0">R$6,00</h5>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-danger"><i class="bi bi-trash3-fill"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card rounded-3 mb-3">
                    <div class="card-body p-4">
                      <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                            class="img-fluid rounded-3" alt="Cotton T-shirt">
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <p class="lead fw-normal mb-2">Suco de laranja</p>
                          <p><span class="text-muted">Tamanho: </span>700ml <span class="text-muted">Obs: </span>--</p>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            <i class="bi bi-dash-lg"></i>
                          </button>

                          <input id="form1" min="0" name="quantity" value="2" type="number"
                            class="form-control form-control-sm" />

                          <button class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            <i class="bi bi-plus-lg"></i>
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 class="mb-0">R$12,00</h5>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-danger"><i class="bi bi-trash3-fill"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card rounded-3 mb-3">
                    <div class="card-body p-4">
                      <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                            class="img-fluid rounded-3" alt="Cotton T-shirt">
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <p class="lead fw-normal mb-2">Hambúrguer</p>
                          <p><span class="text-muted">Tamanho: </span>G <span class="text-muted">Obs: </span>Sem molho especial</p>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            <i class="bi bi-dash-lg"></i>
                          </button>

                          <input id="form1" min="0" name="quantity" value="2" type="number"
                            class="form-control form-control-sm" />

                          <button class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            <i class="bi bi-plus-lg"></i>
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 class="mb-0">R$35,00</h5>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-danger"><i class="bi bi-trash3-fill"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card mb-3">
                    <div class="card-body p-4 d-flex flex-row">
                      <div class="form-outline flex-fill">
                        <input type="text" id="form1" class="form-control form-control-lg" />
                        <label class="form-label" for="form1">Código de desconto</label>
                      </div>
                      <button type="button" class="btn btn-outline-warning btn-lg ms-3">Aplicar</button>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-body">
                      <button type="button" class="btn btn-warning btn-block btn-lg">Continuar para o pagamento</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

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

#status{
  text-transform: uppercase;
}
</style>
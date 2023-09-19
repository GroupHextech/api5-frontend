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

    modalTitle.textContent = `Mesa ${tableId}`
    modalStatus.textContent = tableStatus
  })
})
</script>

<script>
export default {
  data() {
    return {
      produtos: [
        {
          id: 1,
          nome: 'Batata Frita',
          descricao: 'Tamanho: M, Obs: Com sal',
          preco: 14.0,
          imagem: 'https://acdn.mitiendanube.com/stores/690/117/products/batatablacknovo01-com-batata1-1b7acadeecc786836815623317173381-480-0.jpg',
        },
        {
          id: 2,
          nome: 'Refrigerante',
          descricao: 'Tamanho: 350ml, Obs: --',
          preco: 6.0,
          imagem: 'https://loja.supermerclick.com.br/image/cache/catalog/produtos-integracao/002693-omie___coca-cola-1500ml__conv-1000x1000.jpg',
        },
        {
          id: 3,
          nome: 'Suco de Laranja',
          descricao: 'Tamanho: 700ml, Obs: --',
          preco: 12.0,
          imagem: 'https://lasaporitta.com.br/wp-content/uploads/2021/01/sucodelaranja.jpg',
        },
        {
          id: 4,
          nome: 'Hambúrguer',
          descricao: 'Tamanho: G, Obs: Sem molho especial',
          preco: 35.0,
          imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHwBlYonRHJvpwQnrOgAoZkoDYb8lHVF_Gtw&usqp=CAU',
        },
      ],
    }
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
            <div class="h-100" v-if="table.status === 'ocupada'">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12">

                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h3 class="fw-normal mb-0 text-black">Produtos</h3>
                    <div>
                      <p class="mb-0"><span class="text-muted">Filtrar por:</span> <a href="#!" class="text-body">preço <i
                            class="bi bi-chevron-down mt-1"></i></a></p>
                    </div>
                  </div>

                  <div class="card rounded-3 mb-3" v-for="(produto, index) in produtos" :key="index">
                    <div class="card-body p-4">
                      <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img :src="produto.imagem" class="img-fluid rounded-3" alt="Produto">
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <p class="lead fw-normal mb-2">{{ produto.nome }}</p>
                          <p>{{ produto.descricao }}</p>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button class="btn btn-link px-2" @click="decrementQuantity(index)">
                            <i class="bi bi-dash-lg"></i>
                          </button>
                          <input :id="'form' + index" min="0" name="quantity" v-model="produto.quantidade" type="number"
                            class="form-control form-control-sm" />
                          <button class="btn btn-link px-2" @click="incrementQuantity(index)">
                            <i class="bi bi-plus-lg"></i>
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 class="mb-0">R$ {{ produto.preco.toFixed(2) }}</h5>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-danger" @click="removeProduct(index)">
                            <i class="bi bi-trash3-fill"></i>
                          </a>
                        </div>
                      </div>
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

#status {
  text-transform: uppercase;
}
</style>
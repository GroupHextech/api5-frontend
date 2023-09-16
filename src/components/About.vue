<template>
        <div class="container py-4 py-md-1 px-4 px-md-4 text-body-secondary">
          <div class="row">
            <div class="col-lg-9 mb-3">
              <a class="d-inline-flex mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="HEXTECH">
                <img src="./assets/dino-icon.svg" alt="Logo" width="32" class="d-inline-block align-text-top">
                <span class="fs-5"><b id="hex">HEXTECH</b></span>
              </a>
              <ul class="list-unstyled small">
                <li class="mb-2">Desenvolvido e construído pelo <a
                    href="https://github.com/GroupHextech/HEXTECH-API5sem#team">Grupo HexTech</a> e por seus <a
                    href="https://github.com/GroupHextech/HEXTECH-API5sem/graphs/contributors">colaboradores</a>.</li>
              
               <li class="mb-2">Código licenciado pelo <a
                    href="https://github.com/GroupHextech/api5-frontend/blob/main/LICENSE" target="_blank"
                    rel="license noopener">MIT</a>, documento <a href="https://creativecommons.org/licenses/by/3.0/"
                    target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
                <li class="mb-2">Versão atual v0.0.1.</li>
              </ul>
            </div>
            <div class="col-6 col-lg-2 mb-3" hidden>
              <h5>Community</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues" target="_blank"
                    rel="noopener">Issues</a></li>
                <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions" target="_blank"
                    rel="noopener">Discussions</a></li>
                <li class="mb-2"><a href="https://github.com/sponsors/twbs" target="_blank" rel="noopener">Corporate
                    sponsors</a></li>
                <li class="mb-2"><a href="https://opencollective.com/bootstrap" target="_blank" rel="noopener">Open
                    Collective</a></li>
                <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5" target="_blank"
                    rel="noopener">Stack Overflow</a></li>
              </ul>
            </div>
          </div>
        </div>
</template>

<style scoped>
.footer {
  background-color: rgba(0, 0, 0, 0.181);
  bottom: 0.5rem;
  position: fixed;
  width: 100%;
  text-align: center;
  font-size: 12px;
  height: 20%;
  align-items: end;
}
footer {
  max-height: 50px; /* Defina a altura máxima desejada */
  overflow: hidden; /* Para ocultar o conteúdo que excede a altura máxima */
}
.footer ul{
  display: flex;
  gap: 1px;
}

.footer ul li{
  border-right: 2px solid rgba(0, 0, 0, 0.412);
}

#hex {
  font-family: 'Bungee', cursive;
  font-size: 1.5rem;
}

#taurant {
  font-family: 'Satisfy', cursive;
  font-size: 1.2rem;
}

.d-inline-flex,
#dino {
  align-items: baseline;
}
</style>
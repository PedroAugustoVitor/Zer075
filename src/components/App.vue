<script>
import 'bootstrap'

export default {
  data: function () {
    return {
      unlocked: false,
      passwordInput: "",
      correctPassword: "zer075-e386",
      rates: {
        receivable: [
          0,          // índice 0
          1.0799,     // índice 1
          1.0922,     // índice 2
          1.0984,     // índice 3
          1.1045,     // índice 4
          1.11,       // índice 5
          1.1278,     // índice 6
          1.13384,    // índice 8
          1.1368,     // índice 9
          1.138,      // índice 7
          1.1448,     // índice 10
          1.1498,     // índice 11
          1.1548,     // índice 12
          1.185,      // índice 13
          1.19,       // índice 14
          1.195,      // índice 15
          1.2,        // índice 16
          1.205,      // índice 17
          1.22        // índice 18
        ],
        limit: [0, 0.07398833225298596, 0.08441677348471, 0.08958485069191602, 0.09461294703485701, 0.09909909909909898, 0.11331796417804596, 0.11804134622168905, 0.12033779028852898, 0.12126537785588698, 0.126484975541579, 0.13028352757001205, 0.13404918600623494, 0.15611814345991604, 0.15966386554621803, 0.163179916317992, 0.16666666666666696, 0.170124481327801, 0.180327868852459]

      },
      value: 1000,
      term: 1,
      limit: false,
      result: {
        willCharge: 0,
        willReceive: 0,
        portion: 0
      }
    }
  },
  mounted() {
    const savedState = localStorage.getItem("componentUnlocked");
    this.unlocked = savedState === "true";
    this.process()
  },
  methods: {
    checkPassword() {
      if (this.passwordInput === this.correctPassword) {
        this.unlocked = true;
        localStorage.setItem("componentUnlocked", "true");
      } else {
        alert("Senha incorreta");
      }
    },
    process: function () {
      this.limit ? this.result = {
        willCharge: this.formatter(this.value),
        willReceive: this.formatter(this.value - (this.value * this.rates.limit[this.term])),
        portion: this.formatter(this.value / this.term)
      } : this.result = {
        willCharge: this.formatter(this.value * this.rates.receivable[this.term]),
        willReceive: this.formatter(this.value),
        portion: this.formatter(this.value * this.rates.receivable[this.term] / this.term)
      }
    },
    formatter: function (e) {
      return e.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })
    },
    copy: function () {
      let e = `Simulador Zer075\nSerá cobrado no cartão: ${this.result.willCharge}.\nVocê receberá: ${this.result.willReceive}.\nSer${this.term > 1 ? "ão" : "á"} ${this.term} parcela${this.term > 1 ? "s" : ""} de ${this.result.portion}`;
      navigator.clipboard.writeText(e)
    }
  }
}
</script>

<template>
  <div class="text-bg-dark col-12">
    <div v-if="!unlocked" class="mt-5 col-6 offset-3 text-center">
      <i class="bi bi-lock"></i>
      <div>
        <div class="input-group">
          <input type="text" class="form-control" v-model="passwordInput">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="checkPassword">
            Desbloquear
          </button>
        </div>
      </div>
    </div>

    <!-- Conteúdo principal -->
    <div v-else>
      <div class="col-6 offset-3">
        <div class="col-4 offset-4 pt-5">
          <img alt="Logo" class="img-fluid" src="../img/logo.jpeg">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Valor: </label>
          <input type="number" class="form-control" v-model="value" @change="process">
        </div>
        <div class="col-12">
          <label class="form-label">Número de parcelas: </label>
          <input type="range" class="form-range" min="1" max="18" v-model="term" @change="process">
          <h2 class="text-center">{{ term }}</h2>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" v-model="limit" @change="process">
          <label class="form-check-label">Calcular {{ limit ? "a partir do limite" : "valor à receber" }}</label>
        </div>
        <div class="jumbotron">
          <h1 class="display-6">Detalhes da simulação</h1>
          <p class="lead">Será cobrado no cartão: R$: {{ result.willCharge }}</p>
          <p class="lead">Você receberá: R$: {{ result.willReceive }}</p>
          <hr class="my-4">
          <p>Ser{{ parseInt(term) === 1 ? "á" : "ão" }} {{ term }} parcela{{ parseInt(term) === 1 ? "" : "s" }} de R$:
            {{ result.portion }}</p>
        </div>
        <p class="lead">
          <a class="btn btn-outline-primary btn-lg" role="button" @click="copy">Copiar</a>
        </p>
      </div>
    </div>
  </div>

</template>

<style scoped>
</style>

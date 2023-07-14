import { coletaDado } from "./ColetaDado.js";

const modelo = document.getElementById("modelo")

const tamanho = document.getElementById("tamanho")

const cortina = document.getElementById("cortina")

console.log(cortina.value , modelo.value)
const calcularButton = document.getElementById('calcular')

calcularButton.onclick = () => { coletaDado(cortina.value, tamanho.value,modelo.value)}
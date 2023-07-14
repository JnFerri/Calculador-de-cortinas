
 const localResultadoPropex = document.getElementById('resultPropex')
 const localResultadoTextil = document.getElementById('resultTextil')
export async function coletaDado(cortina,tamanho,modelo){
    try{
       const tamanhoNumber = Number(tamanho)
        if(modelo == "retangular"){
            tamanho = tamanhoNumber + 0.14
        }else if(modelo == "modeloY"){
            tamanho = tamanhoNumber + 0.24
        }else if(modelo == "3bainha"){
            tamanho = tamanhoNumber + 0.28
        }else if(modelo == "4bainha"){
            tamanho = tamanhoNumber + 0.70
        }else if(modelo == "persiana"){
            tamanho = tamanhoNumber + 0.25
        }else if(modelo == "contrapeso"){
            tamanho = tamanhoNumber + 0.42
        }

        const dado = await fetch(`http://jnferri.github.io/Calculador-de-cortinas/Assets/Dados/${cortina}.json`)
        const dadosJson = await dado.json()


       
    
        const cortinasTextil = dadosJson.cortina.textil.medida
        const cortinasPropex = dadosJson.cortina.propex.medida

        cortinasTextil.map(valor => {


            let tamanhoCortina = valor
            let cortinaCaculada = (valor - tamanho)*100

            if(cortinaCaculada >= 0){
            

            localResultadoTextil.innerHTML += `<p>Cortina ${cortina} ${tamanhoCortina}M tem perda de ${cortinaCaculada.toFixed(0)} cm </p> `
            }
        })

        cortinasPropex.map(valor => {


            let tamanhoCortina = valor
            let cortinaCaculada = (valor - tamanho)*100

            if(cortinaCaculada >= 0){

            localResultadoPropex.innerHTML += `<p>Cortina ${cortina} ${tamanhoCortina}M tem perda de ${cortinaCaculada.toFixed(0)} cm </p> `
            }
        })
        
        
        if(dadosJson.erro){
            throw Error('Não foi possivel obter dados')
        }
    }
    catch(erro){
        console.log('erro')
    }
}






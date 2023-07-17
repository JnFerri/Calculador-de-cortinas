
 const localResultadoPropex = document.getElementById('resultPropex')
 const localResultadoTextil = document.getElementById('resultTextil')
export async function coletaDado(cortina,tamanho,modelo){
    try{
        localResultadoPropex.innerHTML = ''
        localResultadoTextil.innerHTML = ''
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
        }else if(modelo == "tubo"){
            tamanho = tamanhoNumber + 0.10
        }

        const dado = await fetch(`https://jnferri.github.io/Calculador-de-cortinas/Assets/Dados/${cortina}.json`)
        const dadosJson = await dado.json()


       
        
        const cortinasTextil = dadosJson.cortina.textil.map(valor => valor)
        
        const cortinasPropex = dadosJson.cortina.propex.map(valor => valor)
        
        const cortinasTextilMedidas = []
        const cortinasPropexMedidas = []
        cortinasTextil.map(valor => {
            cortinasTextilMedidas.push(valor.medida)
            console.log(valor.codigo)
            let itemCodigo =  valor.codigo
            let tamanhoCortina = valor.medida
            let cortinaCaculada = (tamanhoCortina - tamanho)*100

            if(cortinaCaculada >= 0){
            
            localResultadoTextil.innerHTML += `<p> <strong>${itemCodigo}</strong>  -  ${valor.nome} <strong>${tamanhoCortina}M</strong> tem perda de ${cortinaCaculada.toFixed(0)} cm </p> `
            }
        })

        cortinasPropex.map(valor => {
            cortinasPropexMedidas.push(valor.medida)
            console.log(valor.codigo)
            let itemCodigo =  valor.codigo
            let tamanhoCortina = valor.medida
            let cortinaCaculada = (tamanhoCortina - tamanho)*100

            if(cortinaCaculada >= 0){
            
            localResultadoPropex.innerHTML += `<p><strong>${itemCodigo}</strong>  -  ${valor.nome} <strong>${tamanhoCortina}M</strong> tem perda de ${cortinaCaculada.toFixed(0)} cm </p> `
            }
        })

       
        
        console.log(cortinasTextilMedidas, cortinasPropexMedidas)


        
        
        
        if(dadosJson.erro){
            throw Error('Não foi possivel obter dados')
        }
    }
    catch(erro){
        console.log('erro')
    }
}






function contagem(){
    let saida = document.getElementById("saida")
    let n1 = Number(document.getElementById("fn1").value)
    let n2 = Number(document.getElementById("fn2").value)
    let cont

saida.innerHTML += `<h2> contador de ${n1} até ${n2} </h2>`
    if (n1<n2) {
        cont = n1
        while (cont<=n2){
            saida.innerHTML += `${cont} &#x1f449;`
            cont++
        }
    }else{
        saida.innerHTML += `não é possivel contar, pois os nummeros são iguais.`    
        }
saida.innerHTML += `&#x1f3c1`    
}
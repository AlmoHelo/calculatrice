const sectionEcran = document.getElementsByClassName("ecran")
const ecran = document.querySelector('.afficherEcran')
let operateur;

function recupererChiffre(value){
    let p = document.createElement('p')
    if(value.match(/[0-9]/)){
        console.log("value ", value)
        p.innerHTML = value
        p.setAttribute("class", value)
    } else {
        console.log("Pas un chiffre ", value)
        p.innerHTML = value
        operateur = value
    }
    ecran.append(p)
}

function operation(){
    console.log(operateur)
    let children = ecran.childNodes
    for(let child of children){
        console.log(child.getAttribut('name'));
    }
}
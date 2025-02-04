// Fonction pour calculer le pgcd en utilisant l'algoritme d'euclide
function  calculPGCD() {

let formulaire = document.querySelector('form')
formulaire.addEventListener('submit', (Event) => {
    // on empêche la soumission du formulaire 
    Event.preventDefault() 


    // Récupération des valeurs saisie
    /* Ces valeurs sont ensuite converties en nombres entiers avec parseInt car,
     par défaut, les valeurs des champs de texte sont traitées comme des chaînes de caractères. */

    let Num1 = parseInt(document.getElementById('premier').value);
    let Num2 = parseInt(document.getElementById('deuxième').value);

    // fonction pour calculer le PGCD en utilisant l'algorithme d'euclide
    function pgcd(a,b) {
        // return est une façon concise d'écrire une instruction conditionnelle en javaScript
        // b === 0 ? est la condition , si elle est vrai l'expression a est retournée 
        // si elle est fausse la fonction est à nouveau appellé avec de nouvel argument
        return b === 0 ? a : pgcd(b ,a % b); 

        // nous pouvons également utiliser des instructions conditionelle simple
     /* if (b === 0) {
        return a;
    } else {
        return pgcd(b, a % b);
    } */
        
    } 

    let result = pgcd(Num1,Num2) 

    // Nous récupérons dans le fichier html l'élément qui affichera le résultat sousforme de texte
 let affichageResult = document.querySelector('.pgcd') 
 // interpolation de chaîne
 let resultat = `Le PGCD de ${Num1} et ${Num2} = ${result}` 

 affichageResult.innerHTML = resultat
 


}) 
    
}

// Appel de la fonction 
calculPGCD() 

// FIN 
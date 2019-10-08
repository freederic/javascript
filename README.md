

<!-- aller [ici](https://adrar-tps.github.io/javascript/) -->

Ressources 
===

pour les ressources pratiques : 
----


### exercices (FR)
- http://odyssey.sdlm.be/
- https://www.codingame.com/playgrounds/3777/exercices-de-javascript-pour-debutants-en-informatique/javascript---les-variables


### exercices EN
- https://www.codecademy.com/learn/introduction-to-javascript
- https://jenseign.com/apprendre-html-css/documentation-theorie/javascript-les-bases/


### Des exemples simples 
- https://jenseign.com/apprendre-html-css/documentation-theorie/javascript-les-bases/
  

Pour la lecture et la compréhension 
----
[cours OpenClassrooms](https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript)




# où faire du javascript ?

- dans l'onglet console de votre navigateur
- dans un fichier javascript, lié à un fichier html que vous aurez lié ( regarder la balise ```<script>```)
- dans des éditeur de texte en ligne comme [CodeSandbox](https://codesandbox.io/dashboard)


# TP Variables

Ressources
----
- http://www.coursweb.ch/javascript/variables.html

- https://www.culture-informatique.net/japprends-a-programmer-variables/
- http://pise.info/algo/variables.htm
- http://prof.bpesquet.fr/cours/variables/

- https://fr.wikipedia.org/wiki/Variable_(informatique)

Instructions
----

- créez une **variable** avec votre **âge**
- créez une autre **variable** avec votre **année de naissance**
- créez une troisième **variable** qui contient la **somme des deux**.
- faites un ```console.log``` de cette troisième variable pour **vérifier le résultat**
  
Rien n'empêche de combiner plusieurs variables d'affilée, ou de les combiner avec des valeurs directement ( en utilisant plusieurs fois l'opérateur + par exemple )
- créez une **variable** avec votre **prénom**
- créez une autre **variable** avec votre **nom**
- créez une **variable** qui contient votre nom et prénom ( en utilisant les deux premières variables ) avec un **espace** séparant les deux ( interdit de mettre l'espace dans le prénom :wink: ) 
- faites un ```console.log``` de cette **troisième** variable pour **vérifier le résultat**




# TP Function


Contexte 
-----

Une **function** est un élément du langage javascript qui permet de **contenir et d'éxecuter une ou plusieurs instructions** à la suite. 
Pratique quand on veut répéter plusieurs fois les mêmes instructions ! C'est **l'équivalent d'une recette de cuisine**.

Si j'ai une **function** ```faireDesCrepes```, elle contiendra toutes les instructions pour faire des crêpes, la recette étant identique.


On utilise le mot clef ```function``` pour déclarer une fonction, et on lui donne un **nom** ( comme pour les **variables** ). les **parenthèses** servent à définir l'espace dans lequel on proposera éventuellement des paramètres , et les **accolades** bornent les instructions qui seront contenues dans la function.

```javascript
function compterLesMoutons() {
    console.log('ZzzZzzzZZz');
}
```
Pour l'instant, la function est seulement déclarée.
On dit qu'on appelle une function lorsqu'on veut l'éxecuter.

pour appeler une function, on procède ainsi : 
```javascript
compterLesMoutons();
```



Si une instruction fait un calcul dont le résultat nous intéresse, et qu'on aimera le stocker dans une variable, on utilisera le mot-clef 
```javascript
return
```
cette function retournera alors la valeur après le return 

```javascript
// ici, le calcul est fait mais on ne peut rien en faire :(
function additionneTroisACinqBAD() {
    3 + 5;
}
// ici, le calcul est renvoyé, on peut donc le capturer dans une variable par exemple !
function additionneTroisACinqGOOD() {
    return 3 + 5;
}

```
pour preuve, si je stocke le résultat de mes deux functions dans deux variables, j'aurai :

```javascript
var result1 =  additionneTroisACinqBAD();
// result1 = undefined;
var result2 =  additionneTroisACinqGOOD();
// result2 = 8;

```

essayez par vous-même dans un fichier javascript, en loggant les variables.

Ici, la première variable est ```undefined``` car la function ne renvoie ( retourne ) rien ! 




Instructions:
-----
 - créez une **function** qui execute console.log('bonjour') et appelez la
 - créez une **function** qui retourne la valeur 42, et stockez la dans une variable ( puis faites un console log de cette variable )
 - créez une **function** qui ajoute 3 à un nombre en paramètre
 - creez une **function** qui prend age et année de naissance en paramètre, et retourne la somme des deux
 - creez une **function** qui prend prenom et nom en paramètre, et retourne la somme des deux ( avec l'espace ;) )
 - 
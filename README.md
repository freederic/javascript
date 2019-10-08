

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

Une **fonction** est un élément du langage javascript qui permet de **contenir et d'éxecuter une ou plusieurs instructions** à la suite. 
Pratique quand on veut répéter plusieurs fois les mêmes instructions ! C'est **l'équivalent d'une recette de cuisine**.

Si j'ai une **fonction** ```faireDesCrepes```, elle contiendra toutes les instructions pour faire des crêpes, la recette à appliquer étant toujours la même ( les étapes ne varient pas ).


On utilise le mot clef ```function``` pour déclarer une fonction, et on lui donne un **nom** ( comme pour les **variables** ). les **parenthèses** servent à définir l'espace dans lequel on proposera éventuellement des paramètres ( on explique ça dans la prochaine section !), et les **accolades** délimitent les instructions qui seront contenues dans la fonction ( pour info on appelle ça le **scope** d'une fonction )

```javascript
function compterLesMoutons() {
    console.log('ZzzZzzzZZz');
}
```
Pour l'instant, la **fonction** est seulement **déclarée**.
On dit qu'on **appelle** une **fonction** lorsqu'on veut l'**éxecuter**.

pour **appeler une fonction**, on **procède** ainsi : 
```javascript
compterLesMoutons();
```

Si une instruction fait un **calcul** dont le **résultat nous intéresse**, et qu'on aimera le **récupérer** pour s'en **servir** ( on pourra par exemple le **stocker dans une variable** ) : en **utilisant** le mot-clef ```return```, cette function retournera alors la **valeur / variable** écrite après le ```return``` 

```javascript
// ici, le calcul est fait mais on ne peut rien en faire :(
function additionneTroisACinqBAD() {
    3 + 5;
}
// ici, le calcul est renvoyé, on peut donc le capturer dans une variable par exemple !
function additionneTroisACinqGOOD() {
    return 3 + 5;
}

// on peut renvoyer une variable depuis la fonction !
// ici cette fonction est équivalente à celle juste au dessus, on a juste découplé l'instruction de calcul de l'instruction du return.
function additionneTroisACinqGOODvariationAvecVariable() {
    var result = 3 + 5;
    return result;
}

```
pour preuve, si je stocke le résultat de mes **deux fonctions** dans **deux variables**, j'aurai :

```javascript
var result1 =  additionneTroisACinqBAD();
// result1 = undefined;
var result2 =  additionneTroisACinqGOOD();
// result2 = 8;

```

Essayez par vous-même dans un fichier javascript, en loggant les variables **result1** et **result2**

Ici, la première **variable** est ```undefined``` car la **fonction** ne **renvoie** ( retourne ) rien ! 

:warning: une **variable créée dans une fonction** n'existera que dans cette fonction, ex :

```javascript
function faisQqch() {
    var dansMaFunction = 3;
    console.log(dansMaFunction) // dansMaFunction = 3, car je suis encore dans la function
}

console.log(dansMaFunction) // renvoie une error car ici, dansMaFunction n'est plus défini ! 
```

:warning: toute instruction écrite **après** un ```return``` ne sera jamais prise en compte, car ```return``` a la particularité de **stopper** l'éxecution de la fonction, c'est la __**dernière instruction possible**__ :warning:

```javascript
function proposeDuCodeJamaisExecute() {
    console.log('start') //ok
    return;
    console.log('end') // ce code est inaccessible car le return arrête la lecture des instructions.
}

proposeDuCodeJamaisExecute()
// start sera loggé 
// end ne sera pas loggé
```



### Les paramètres

Les **paramètres** permettent de rendre les fonctions un petit peu plus **souples**.

**Au lieu** d'écrire une fonction qui ferait **systématiquement** le **même** calcul, et donc de lui demander de **connaitre à l'avance** les valeurs avec lesquelles elle devra lancer ses instructions, **on lui propose plutôt** d'appliquer un traitement identique sur une ou plusieurs "variables", dont **elle ne connait pas encore les valeurs**. **Ces "variables" sont les paramètres**. 

**Comme pour les variables**, c'est **nous** qui choisissons le **nom des paramètres**, l'idée étant d'être **le plus explicite** possible pour indiquer le **but** de la fonction.

Au moment de l'éxecution, **lorsque** l'on **appellera** la fonction, le(s) **paramètre**(s) aura/auront alors la/les **valeur**(s) qui lui a/ont été donnée(s) lors de l'appel.

### équivalent en math : ( seulement si ça vous aide ;) )

```f(x) = x + 2 ```

( pour tout x renvoie x + 2 , x ici n'est pas défini mais le traitement qu'on lui applique sera toujours d'additionner 2 )

```y = f(3)``` // la variable y est le resultat de f(3), soit 3 + 2 = **5**

( ici on appelle f et on fixe la valeur de x à 3 juste pour cette fois.)

### exemples en javascript :

```javascript
function donneMonAge(annee) {
	var anneeEnCours = 2019;
	// ici le paramètre nommé Zannee n'a pas de valeur particulière, c'est lors de l'appel qu'on le fixera.
	// ceci dit on veut quand même pouvoir décrire ce qu'on veut faire de ce paramètre, il faut donc lui donner un nom pour le manipuler :)
	return anneeEnCours - annee;
}

var anneeDeNaissance1 = 1970;
var anneeDeNaissance1 = 1967;

// j'appelle autant de fois que je veux ma fonction, en lui passant par exemple une valeur différente à chaque appel ( stockée dans les deux variables déclarées juste au dessus )
const age1 = donneMonAge(anneeDeNaissance1);
const age2 = donneMonAge(anneeDeNaissance2);

// je peux aussi bien appeler la function avec une valeur directement,
const age3 = donneMonAge(1990);

console.log(age1) // 49
console.log(age2) // 52
console.log(age3) // 29

// autre exemple
function calculPoidsSemoulePourCouscous(nombreDinvite) {
	var poidsDelaSemouleParPersonne = 100;
	return poidsDelaSemouleParPersonne * nombreDinvite;
}



```

Instructions:
-----
 - créez une **fonction** qui execute ```console.log('hello world')``` et appelez la
 - créez une **fonction** qui **retourne** la valeur **42**, et **stockez la dans une variable** ( puis faites un console log de cette variable )
 - créez une **fonction** qui **ajoute 3** à un **nombre** qui sera un **paramètre**, et qui fait un **console.log** du **résultat**
 - creez une **fonction** qui prend age et année de naissance en paramètre, et retourne la somme des deux;
 - faites un **console.log** du **résultat**
 - creez une **fonction** qui prend **prenom** et **nom** en **paramètres**, et retourne la somme des deux ( avec l'espace ;) )
 - faites un **console.log** du **résultat**



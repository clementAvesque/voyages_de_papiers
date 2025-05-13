<script>
export default {
    mounted() {
        this.creategame(5)
    },
    methods: {
        creategame(numb_of_pair) {

            let GoodNumb = [];
            let pair = this.getpair(numb_of_pair)
            let selectOrFound = false
            let findNUmb = 0
            let pointOfPlayer = 0;
            let pairIndex;

            console.log(pair)
            for (let i = 0; i < numb_of_pair * 2; i++) {
                let button = document.createElement("button")
                button.id = i
                let gaming_zone = document.getElementById("game")
                gaming_zone.appendChild(button)
                button.addEventListener("click", () => {
                    let other_numb = JSON.parse(JSON.stringify(pair));
                    button.classList.add("flipped")
                    //il faut mettre l'animation de retournement des cartes ici pour pas impacté le programme
                    other_numb.forEach(paire => {

                        if (paire.includes(i)) {
                            pairIndex = other_numb.findIndex(paire => paire.includes(i));

                            paire.splice(paire.indexOf(i), 1)

                            //au premier clique on va récuperer la seconde valeur de la paire
                            if (selectOrFound === false) {
                                findNUmb = paire[0]

                                //au second on va vérifier si le joueur a trouver la bonne valeur
                            } else {
                                // vérifie si l'id correspond a la paire du sous tableau  si elle est vrai alors ajouter les valeur du tableau qui sont egal au id des boutons au tableau goodnumb
                                if (i === findNUmb) {
                                    console.log(findNUmb)
                                    pointOfPlayer++;
                                    console.log(pair[pairIndex])

                                    pair[pairIndex].forEach(value => {
                                        GoodNumb.push(value)
                                        console.log(GoodNumb)
                                    })
                                    //sinon attendre 1seconde puis changer le texte a l'interieur des boutons si les id ne font pas partie des valeurs du tableau goodnumb
                                } else {
                                    setTimeout(() => {

                                      //fait en sorte de crée un effet de retournement des deux carte selectionné si elle ne sont pas des paires
                                        document.querySelectorAll("button").forEach(value => {
                                            if (!GoodNumb.includes(Number(value.id))) {
                                              
                                            }
                                        });
                                    }, 1000)

                                }

                            }
                            selectOrFound = !selectOrFound
                        }
                    });
                })
            }
        },
        getpair(numberOfPair) {
            let arrayForNumbRand = [];
            for (let i = 0; i < numberOfPair * 2; i++) {
                arrayForNumbRand.push(i)
            }
            let ArrayOfPair = [];
            for (let j = 0; j < numberOfPair; j++) {
                let first_index = Math.floor(Math.random() * arrayForNumbRand.length)
                let first_value = arrayForNumbRand[first_index]
                arrayForNumbRand.splice(first_index, 1)
                let second_index = Math.floor(Math.random() * arrayForNumbRand.length)
                let second_value = arrayForNumbRand[second_index]
                arrayForNumbRand.splice(second_index, 1)
                let pair = [first_value, second_value]
                ArrayOfPair.push(pair)
            }
            return ArrayOfPair


        },

    }
}

</script>

<style>
#game{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 10%;
  gap: 70px;
  transition: all 0.5s;
}
#game button {
  background-image: url(../images/img_game/back_cards.svg);
  background-size: cover;
  width: 12vw;
  height: 12vw;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  
    border-radius: 5px;
}

.flipped {
  animation: flipFront 0.6s ease forwards; /* Animation pour le retournement */
}

@keyframes flipFront {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}

/* Animation pour retourner la carte vers l'arrière */
@keyframes flipBack {
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
</style>
<template>
    <section id="page">
        <section id="pres">
            <h1>
                Voyage de Papier
            </h1>
            <img src="../images/logo-white.svg" alt="" id="logo">
            <h2>Un simple journal...</h2>
            <h3>Non pas seulement, on personnalise <br>chaque expérience</h3>
            <button  @click="goToArticle">Créer votre journal</button>
            <section id="explain">
                <h2>La personnalisation en 3 étapes</h2>
                <div id="rules">
                    <div class="rule">
                        <h3>Choisir une année</h3>
                        <p>Sélectionnez une année (2000-2010) pour définir le contexte historique et ses événements
                            marquants.</p>
                        <img src="../images/select_year.svg" alt="">
                    </div>
                    <div class="rule middle">
                        <h3>Choisir un thême</h3>
                        <p>Choisissez un thème pour personnaliser votre journal avec des articles et anecdotes
                            marquants, adaptés aux passions du destinataire.</p>
                        <img src="../images/select_theme.svg" alt="">
                    </div>
                    <div class="rule">
                        <h3>Personnaliser</h3>
                        <p>Ajoutez la touche finale en intégrant une photo, un mot personnel ou une anecdote pour rendre
                            votre journal unique et émouvant.</p>
                        <img src="../images/personnalisation.svg" alt="">
                    </div>
                </div>
                <button  @click="goToArticle">Sélectionner les votres</button>

            </section>
        </section>
        <section id="detail">
            <img src="../images/mockup.svg" alt="" id="mockup">
            <button  @click="goToArticle">Créer votre journal</button>
            <div id="announce_game">
                <div id="image"></div>
                <div id="information">
                    <p id="first">Un petit détour dans le temps vous offre 10% de réduction : à vous de jouer !</p>
                    <p>Offre exclusive :<br>Les 100 premiers participants à notre jeu de memory remporteront 10% de
                        réduction sur leur commande.Une bonne mémoire peut vous faire voyager… à prix réduit !</p>
                </div>
            </div>

        </section>
        <section id="demonstration">
            <h3>Pas qu’une simple lecture</h3>
            <p id="presentation">Offrez un cadeau unique avec notre journal personnalisé : une plongée sur mesure dans l’histoire et les
                souvenirs de vos proches !</p>

            <div id="describes">
                <div class="describe" v-for="(image, index) in images" :key="index"
                    @mouseover="mouseHover(index)"
                    @mouseleave="mouseout(index)">
                    <img :src="image.src" :alt="image.alt" />
                    <p v-show="hoveredIndex === index">{{ texts[index].text }}</p>
                </div>

            </div>
        </section>


    </section>
</template>
<script>
// Importez les images en haut du fichier
import firstImage from '../images/img_homepage/first_image.svg';
import secondImage from '../images/img_homepage/second_image.svg';
import thirdImage from '../images/img_homepage/third_image.svg';
import fourthImage from '../images/img_homepage/fourth-image.svg';

export default {
    data() {
        return {
            hoveredIndex: null, // Index de l'élément actuellement survolé
            images: [
                { src: firstImage, alt: 'First Image' },
                { src: secondImage, alt: 'Second Image' },
                { src: thirdImage, alt: 'Third Image' },
                { src: fourthImage, alt: 'Fourth Image' },
            ],
            texts: [
                { text: "Offrez un journal personnalisé pour un anniversaire inoubliable : une touche d’histoire, de souvenirs et de culture à partager !" },
                { text: "Transformez chaque anniversaire en un voyage dans le temps avec un journal sur mesure, riche en anecdotes et en découvertes !" },
                { text: "Célébrez en offrant un cadeau unique : un journal personnalisé qui mêle récits historiques, faits marquants et moments précieux !" },
                { text: "Surprenez vos proches avec un journal personnalisé : une façon originale de revivre l’histoire et de créer des souvenirs impérissables !" }
            ]
        };

       
    },
    methods: {
        mouseHover(index) {
            this.hoveredIndex = index;
            document.getElementsByClassName("describe")[index].style.transform = "translateY(-200px)"
            document.get
            hoveredIndex = index

        },
        mouseout(index) {
            this.hoveredIndex = index
            document.getElementsByClassName("describe")[index].style.transform = "translateY(0px)"
            hoveredIndex = null
            this.hoveredIndex = null; // Réinitialise l'index lorsque la souris quitte
        },
        goToArticle() {
            this.$router.push('/Article');
        }
    },
};
</script>

<style scoped>

#presentation{
    width: 70vw;
    font-size: 24pt;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-weight: 300;

}
.describe p {
    justify-self: end;
    font-size: 18pt;
    position: absolute;
    z-index: 50;
    left: 120%;
    width: 15vw;
}

.describe {
    height: 100%;
    width: 25%;
    flex-shrink: 0;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
}

.describe img {
    height: 100%;
    width: 100%;
}

#describes {
    margin-top: 200px;
    height: 50vh;
    width: 60vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2%;
}

.describe img {
    height: 100%;
    width: 100%;

}

.describe {
    height: 100%;
    width: 25%;

    flex-shrink: 0;
}

#demonstration {
    background-image: url("../images/background_mockup.svg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
}

#information #first {

    font-size: clamp(1vw,2.96vw, 4vw);
    font-family: "Cormorant Garamond", serif;
    font-weight: bold;
}

#information p {
    width: auto;
    font-size: clamp(1vw,2.22vw, 4vw);
    font-family: "Lato", sans-serif;
    color: white;
    font-weight: 300;
    margin: 0;
}

#demonstration h3 {
    font-family: "Cormorant Garamond", serif;
    font-size: 32pt;
}

#information {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#announce_game {
    width: 100vw;
    margin-top: 100px;
    height: 60vh;
    background-color: rgba(120, 40, 46, 1);

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

#announce_game #image {
    width: 40vh;
    height: 49vh;
    margin-top: 80px;
    background-image: url("../images/cards_game.svg");
    background-repeat: no-repeat;
    background-size: contain;
}

#announce_game #image:hover {
    background-image: url("../images/cards_game_hover.svg");
    background-repeat: no-repeat;
    transition: all 0.3s;
}

#detail {
    width: 100vw;
    background-image: url("../images/background_mockup.svg");
    display: flex;
    flex-direction: column;
    align-items: center;
}



#mockup {
    margin-top: -50px;

}

.rule p {
    font-family: "Lato", sans-serif;
    color: white;
    width: 80%;
    font-size: clamp(1vw, 1.2vw, 3vw);
}

.rule img {
    width: 50%;
}

.lato-black- {
    font-family: "Lato", sans-serif;
    font-weight: auto;
    font-style: normal;
}

.parisienne-regular {
    font-family: "Parisienne", cursive;
    font-weight: 400;
    font-style: normal;
}

button {
    margin-top: 50px;
    height: 7vh;
    width: 30vw;
    font-size: clamp(1vw, 2.22vw, 3vw);
    font-family: "Cormorant Garamond", serif;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(192, 77, 85, 1);
    border: none;
    color: white;
    border-radius: 30px;
    transition: background-color 0.3s ease;
}

#explain {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
}

#logo {
    width: 30vw;
    align-self: center;
    margin-top: 50px;
}

.middle {
    border-left: solid 2px white;
    border-right: solid 2px white;
}

.rule h3 {
    padding: 0;
    font-size: clamp(3vw, 4.44vw, 5vw);
    font-family: "Cormorant Garamond", serif;

}

.rule {
    width: 33.3%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

#rules {
    margin-top: 50px;
    width: 80vw;
    padding: 0;


    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}

#explain h2 {
    color: white;
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(3vw, 4.44vw, 5vw);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 8px;
}

button:hover {
    background-color: rgba(66, 19, 24, 1);
}

.cormorant-garamond {
    font-family: "Cormorant Garamond", serif;
    font-weight: auto;
    font-style: normal;
}

h1 {
    margin: 0%;
    margin-top: 100px;
    align-self: center;
    color: white;
    font-family: Parisienne;
    font-weight: 400;
    font-size: clamp(24px, 5.93vw, 64pt);
}


#page {
    display: flex;
    flex-direction: column;
}

#pres {
    display: flex;
    flex-direction: column;
    background-image: url(../images/background_pres.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 100px;
}


#pres h2 {
    align-self: center;
    color: white;
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(2vw, 3.89vw, 5vw);
    font-weight: 300
}

#pres h3 {
    align-self: center;
    font-size: clamp(2vw, 2.96vw, 5vw);
    font-weight: 300;
    text-align: center;
    color: white;
    font-family: "Cormorant Garamond", serif;
}
</style>
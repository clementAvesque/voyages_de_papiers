<template>
    <div id="page">
        <h2>Notre équipe</h2>
        <p>Nous sommes une équipe derrière Voyages de Papier, un projet né de notre passion pour le design, le
            développement et surtout, les souvenirs qui nous lient au passé. Inspirés par ces moments où nos
            grands-parents achetaient leur journal chaque matin, nous avons voulu réinventer cette tradition à travers
            une expérience moderne et personnalisée..

            <br>Notre équipe est composée de quatre passionnés, chacun apportant son expertise pour donner vie à ce
            projet :
        </p>

        <h3>Nos développeurs :</h3>
        <div class="presentation">
            <div class="personne"
            @mouseover="clement = true"
            @mouseleave="clement= false">
            <p v-show="clement === true">Clément 
                <br>Développeur</p>
            </div>
            <div class="personne"
             @mouseover="ninon = true"
             @mouseleave="ninon= false"
            >
                <p v-show="ninon === true">Ninon 
                    <br>Développeuse</p>
            </div>
        </div>
        <p>Spécialistes du code et de l’expérience utilisateur, Clément et Ninon sont les architectes du site Voyages de Papier. Grâce à eux, la plateforme est fluide, intuitive et permet à chacun de créer son journal personnalisé en quelques clics. Leur mission ? Concevoir un e-commerce performant et agréable à utiliser, où chaque détail technique est pensé pour offrir une expérience optimale.</p>
        <h3>Nos Graphistes :</h3>
        <div class="presentation">
            <div class="personne"
            @mouseover="tristan = true"
            @mouseleave="tristan= false">
            <p v-show="tristan === true">Tristan
                <br>Webdesign</p>
            </div>
            <div class="personne"
             @mouseover="laura = true"
             @mouseleave="laura= false"
            >
                <p v-show="laura === true">Laura
                    <br>Graphiste</p>
            </div>
        </div>
        <p>L’image et l’esthétique du projet reposent entre les mains de Laura et Tristan. De l’identité visuelle du site à la mise en page des journaux, ils veillent à ce que chaque élément soit attractif, lisible et harmonieux. Leur objectif ? Donner une dimension émotionnelle et immersive au projet en créant un design qui rappelle les journaux traditionnels tout en apportant une touche moderne et personnalisée.</p>
        <p>Ensemble, nous avons imaginé Voyages de Papier comme un moyen unique de revivre l’histoire et de l’offrir sous une forme inédite. À travers notre travail, nous voulons transformer chaque journal en un véritable souvenir personnalisé, un cadeau à la fois nostalgique et rempli d’émotions, qui raconte une époque et une histoire unique.</p>
        <h3>L’équipe Le Voyage de Papier</h3>
    </div>


</template>

<script>
export default {
  data() {
    return {
      ninon: false,
      clement:false,
      laura: false,
      tristan: false
    };
  },
};


</script>

<style>
h3{
    font-family: "Cormorant Garamond", serif;
    font-size: 40pt;


}


.presentation{
    width: 50vw;
    height: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 100px;
}


.personne p{
    width: auto;
}
.personne{
    border-radius: 35px;
    height: 23vw;
    width: 23vw;
    background-color: aliceblue;
    transition: all 0.3s ease;
    display: flex;
    align-items: end;
    justify-content: center;
}
.personne:hover{
    filter: brightness(0.6);
}

.lato-black- {
    font-family: "Lato", sans-serif;
    font-weight: auto;
    font-style: normal;
}

.cormorant-garamond {
    font-family: "Cormorant Garamond", serif;
    font-weight: auto;
    font-style: normal;
}

#page {
    background-image: url("../images/img_FAQ/background.svg");
    width: 100vw;

    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    font-weight: 800;
    font-size: 48pt;
    font-family: "Cormorant Garamond", serif;

}

p {
    font-size: 24pt;
    font-weight: 300;
    width: 80vw;
    text-align: center;
    font-family: "Lato", sans-serif;
}

h3 {
    font-size: 40pt;
    font-weight: 900;

}
</style>
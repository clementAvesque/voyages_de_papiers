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
            <div class="personne"></div>
            <div class="personne">
                <p v-show=""></p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.presentation{
    width: 50vw;
    height: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.personne{
    border-radius: 35px;
    height: 100%;
    width: 45%;
    background-color: aliceblue;
    transition: all 0.3s ease;
}
.personne:hover{
    filter: brightness(0.7);
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
    text-align: justify;
    font-family: "Lato", sans-serif;
}

h3 {
    font-size: 40pt;
    font-weight: 900;

}
</style>
<template>
    <footer>
        <div class="div_footer">
            <h3>Assistance</h3>
            <p>Service-Client</p>
            <p>Aide</p>
            <p>Satisfait au refait</p>
        </div>
        <div class="div_footer">
            <h3>Nous suivre</h3>
            <p>Facebook</p>
            <p>Instagram</p>
        </div>
        <div id="logo_footer"><img src="../images/logo-white.svg" alt="logo"></div>
        <div id="sentence"><p>VoyageDePapier.Com 2025 - Mentions légales - Conditions générales de vente - Politique de confidentiolité</p></div>
    </footer>
</template>
<script>
</script>
<style scoped>
#logo_footer img{
    height: 100%;
}
footer{
    height: 50vh;
    background-color: rgba(66, 19, 24, 1);
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-around;
    flex-wrap: wrap;
}
.div_footer{

    font-family: "Cormorant Garamond", serif;
    color: white;
    display: flex;
    flex-direction: column;
}
h3{
    font-size: 24pt;
    font-weight: 600;

    width: auto;
}

p{
    font-size: 16pt;
}
#resaux{
    height: 90%;
    width: 30%;
}

#logo_footer{
    height: 25vh;
    width: 25vh;
    align-self: center;
}
#sentence{
    margin-top: -20px;
    width: 100vw;
    height: 10%;
    color: white;
    text-align: center;
    font-family: "Cormorant Garamond", serif;
    opacity: 0.7;

}

.cormorant-garamond {
    font-family: "Cormorant Garamond", serif;
    font-weight: auto;
    font-style: normal;
}
</style>
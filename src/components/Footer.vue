<template>
    <footer>
        <div id="assistance">
            <h3>Assistance</h3>
            <p>Service-Client</p>
            <p>Aide</p>
            <p>Satisfait au refait</p>
        </div>
        <div id="resaux"></div>
        <div id="logo_footer"></div>
        <div id="sentence"></div>
    </footer>
</template>
<script>
</script>
<style scoped>
footer{
    height: 40vh;
    background-color: rgba(66, 19, 24, 1);
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
}
#assistance{

    font-family: "Cormorant Garamond", serif;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 200px;
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
    background-color: blue;
}

#logo_footer{
    height: 25vh;
    width: 25vh;

    background-color: blue;
}
#sentence{
    width: 100vw;
    height: 10%;
    background-color: blue;
}

.cormorant-garamond {
    font-family: "Cormorant Garamond", serif;
    font-weight: auto;
    font-style: normal;
}
</style>
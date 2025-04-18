<template>
    <section id="faq">
        <h1>Notre FAQ</h1>
        <nav>
            <ul>
                <li v-for="(content, index) in contents" :key="index" @click="category(content.category)" :class="{ active: selectedCategory === content.category }">{{
                    content.category }}</li>
            </ul>
        </nav>
        <div id="container">
            <div class="question" v-for="(question, index) in actual_content" @click="question_target = index">
                <h3>{{ question.ans }}</h3>
                <p v-show="index === question_target">{{ question.rep }}</p>
            </div>
        </div>


    </section>
</template>

<script>

export default {
    data() {
        return {
            question_target: -1,
            contents: [
                {
                    "category": "Général",
                    "questions": [
                        {
                            "ans": "Qu’est-ce qu’un journal personnalisé ?",
                            "rep": "Un journal personnalisé est un véritable retour dans le temps ! Il est conçu sur mesure en fonction d’une année (2000-2010) et d’un thème sélectionné (sport, culture, voyage, etc.). Vous pouvez également ajouter une touche personnelle avec une photo et un message en dernière page."
                        },
                        {
                            "ans": "Qui peut commander un journal personnalisé ?",
                            "rep": "Tout le monde ! Que vous souhaitiez offrir un cadeau unique à un proche ou simplement revivre les moments marquants d’une année, notre journal personnalisé s’adresse à tous."
                        },
                        {
                            "ans": "Pour quelles occasions puis-je offrir un journal personnalisé ?",
                            "rep": "Un journal personnalisé est parfait pour un anniversaire, un mariage, une fête des pères/mères, un départ en retraite ou toute autre occasion spéciale. Il permet d’offrir un souvenir unique et chargé d’émotions."
                        },
                        {
                            "ans": "Quels types de contenus peut-on inclure dans un journal personnalisé ?",
                            "rep": "Chaque journal contient des articles retraçant les événements marquants de l’année choisie, classés selon le thème sélectionné. Vous pouvez également personnaliser la dernière page avec une photo et un message de votre choix."
                        }
                    ]
                },
                {
                    "category": "Personnalisation",
                    "questions": [
                        {
                            "ans": "Puis-je ajouter mes propres textes et photos dans le journal ?",
                            "rep": "Oui, vous pouvez personnaliser la dernière page avec une photo et un message, une anecdote, une histoire ou même un poème."
                        },
                        {
                            "ans": "Puis-je choisir la mise en page et le design du journal ?",
                            "rep": "Le journal suit une mise en page harmonieuse et professionnelle inspirée des journaux traditionnels. Pour assurer une lecture fluide et esthétique, la mise en page est préétablie, mais nous vous offrons la possibilité d’ajouter votre touche personnelle sur la dernière page."
                        },
                        {
                            "ans": "Proposez-vous des modèles préconçus ?",
                            "rep": "Oui, nous avons une sélection de thèmes variés (sport, culture, voyage, etc.), chacun mettant en avant des événements marquants de l’année choisie."
                        },
                        {
                            "ans": "Est-il possible d’ajouter des articles historiques ou des anecdotes personnalisées ?",
                            "rep": "Les articles historiques sont sélectionnés en fonction de l’année et du thème choisis. Pour une personnalisation plus poussée, vous pouvez ajouter une anecdote ou un message personnel sur la dernière page."
                        },
                        {
                            "ans": "Puis-je voir un aperçu avant l’impression ?",
                            "rep": "Oui, avant la validation de votre commande, vous pourrez voir un aperçu numérique de votre journal personnalisé pour vous assurer qu’il correspond à vos attentes."
                        }
                    ]
                },
                {
                    "category": "Commande/Livraison",
                    "questions": [
                        {
                            "ans": "Quels sont les délais de fabrication et de livraison ?",
                            "rep": "Nos journaux sont fabriqués à la demande. La production prend en général X jours, et la livraison dépend du mode choisi. En moyenne, vous recevrez votre commande sous X jours ouvrés."
                        },
                        {
                            "ans": "Expédiez-vous à l’international ?",
                            "rep": "Oui, nous proposons la livraison dans plusieurs pays. Les délais et frais de livraison varient en fonction de votre localisation."
                        },
                        {
                            "ans": "Quels sont les modes de paiement acceptés ?",
                            "rep": "Nous acceptons les paiements par carte bancaire (Visa, Mastercard, etc.) ainsi que via PayPal et d’autres solutions sécurisées."
                        },
                        {
                            "ans": "Puis-je modifier ou annuler ma commande après l’achat ?",
                            "rep": "Les modifications sont possibles tant que votre commande n’est pas en cours d’impression. Contactez-nous rapidement si vous souhaitez apporter un changement."
                        },
                        {
                            "ans": "Que faire si je n’ai pas reçu ma commande ?",
                            "rep": "Si votre commande tarde à arriver, veuillez vérifier votre suivi de livraison. Si vous rencontrez un problème, contactez notre service client et nous vous aiderons à résoudre la situation."
                        }
                    ]
                },
                {
                    "category": "Écologie & Qualité",
                    "questions": [
                        {
                            "ans": "Sur quel type de papier sont imprimés les journaux ?",
                            "rep": "Nos journaux sont imprimés sur un papier de qualité, rappelant le toucher des journaux traditionnels tout en garantissant une bonne durabilité."
                        },
                        {
                            "ans": "Utilisez-vous des encres écologiques ?",
                            "rep": "Oui, nous utilisons des encres écologiques respectueuses de l’environnement pour minimiser notre impact."
                        },
                        {
                            "ans": "Vos journaux sont-ils recyclables ?",
                            "rep": "Oui, tous nos journaux sont imprimés sur un papier recyclable."
                        },
                        {
                            "ans": "Comment garantissez-vous la qualité de l’impression ?",
                            "rep": "Nous utilisons des technologies d’impression avancées pour assurer un rendu net et fidèle aux couleurs. Chaque journal est contrôlé avant envoi."
                        },
                        {
                            "ans": "Avez-vous des engagements en faveur du développement durable ?",
                            "rep": "Nous nous engageons à limiter notre impact écologique en utilisant des matériaux responsables et en optimisant notre processus de production pour éviter le gaspillage."
                        }
                    ]
                },
                {
                    "category": "Assistance & Service Client",
                    "questions": [
                        {
                            "ans": "Comment puis-je vous contacter en cas de problème avec ma commande ?",
                            "rep": "Vous pouvez nous contacter via notre formulaire en ligne ou par e-mail à [adresse email]. Nous répondrons à votre demande dans les plus brefs délais."
                        },
                        {
                            "ans": "Offrez-vous un service de conception sur-mesure ?",
                            "rep": "Actuellement, nous proposons des modèles préconçus, mais nous restons ouverts aux demandes spéciales pour des projets en grande quantité."
                        },
                        {
                            "ans": "Que faire si mon journal arrive abîmé ou comporte une erreur d’impression ?",
                            "rep": "Si votre journal est endommagé ou comporte une erreur, contactez notre service client avec une photo du problème. Nous trouverons une solution rapidement."
                        },
                        {
                            "ans": "Proposez-vous des réductions pour les commandes en grande quantité ?",
                            "rep": "Oui ! Pour des commandes en grande quantité (événements, cadeaux d’entreprise, etc.), contactez-nous pour discuter des tarifs préférentiels."
                        }
                    ]
                }
            ],

            actual_content: [
                {
                    ans: "Qu’est-ce qu’un journal personnalisé ?",
                    rep: "Un journal personnalisé est un véritable retour dans le temps ! Il est conçu sur mesure en fonction d’une année (2000-2010) et d’un thème sélectionné (sport, culture, voyage, etc.). Vous pouvez également ajouter une touche personnelle avec une photo et un message en dernière page."
                },
                {
                    ans: "Qui peut commander un journal personnalisé ?",
                    rep: "Tout le monde ! Que vous souhaitiez offrir un cadeau unique à un proche ou simplement revivre les moments marquants d’une année, notre journal personnalisé s’adresse à tous."
                },
                {
                    ans: "Pour quelles occasions puis-je offrir un journal personnalisé ?",
                    rep: "Un journal personnalisé est parfait pour un anniversaire, un mariage, une fête des pères/mères, un départ en retraite ou toute autre occasion spéciale. Il permet d’offrir un souvenir unique et chargé d’émotions."
                },
                {
                    ans: "Quels types de contenus peut-on inclure dans un journal personnalisé ?",
                    rep: "Chaque journal contient des articles retraçant les événements marquants de l’année choisie, classés selon le thème sélectionné. Vous pouvez également personnaliser la dernière page avec une photo et un message de votre choix."
                },
                {
                    ans: "Puis-je ajouter mes propres textes et photos dans le journal ?",
                    rep: "Oui, vous pouvez personnaliser la dernière page avec une photo et un message, une anecdote, une histoire ou même un poème."
                },
                {
                    ans: "Puis-je choisir la mise en page et le design du journal ?",
                    rep: "Le journal suit une mise en page harmonieuse et professionnelle inspirée des journaux traditionnels. Pour assurer une lecture fluide et esthétique, la mise en page est préétablie, mais nous vous offrons la possibilité d’ajouter votre touche personnelle sur la dernière page."
                },
                {
                    ans: "Proposez-vous des modèles préconçus ?",
                    rep: "Oui, nous avons une sélection de thèmes variés (sport, culture, voyage, etc.), chacun mettant en avant des événements marquants de l’année choisie."
                },
                {
                    ans: "Est-il possible d’ajouter des articles historiques ou des anecdotes personnalisées ?",
                    rep: "Les articles historiques sont sélectionnés en fonction de l’année et du thème choisis. Pour une personnalisation plus poussée, vous pouvez ajouter une anecdote ou un message personnel sur la dernière page."
                },
                {
                    ans: "Puis-je voir un aperçu avant l’impression ?",
                    rep: "Oui, avant la validation de votre commande, vous pourrez voir un aperçu numérique de votre journal personnalisé pour vous assurer qu’il correspond à vos attentes."
                },
                {
                    ans: "Quels sont les délais de fabrication et de livraison ?",
                    rep: "Nos journaux sont fabriqués à la demande. La production prend en général X jours, et la livraison dépend du mode choisi. En moyenne, vous recevrez votre commande sous X jours ouvrés."
                },
                {
                    ans: "Expédiez-vous à l’international ?",
                    rep: "Oui, nous proposons la livraison dans plusieurs pays. Les délais et frais de livraison varient en fonction de votre localisation."
                },
                {
                    ans: "Quels sont les modes de paiement acceptés ?",
                    rep: "Nous acceptons les paiements par carte bancaire (Visa, Mastercard, etc.) ainsi que via PayPal et d’autres solutions sécurisées."
                },
                {
                    ans: "Puis-je modifier ou annuler ma commande après l’achat ?",
                    rep: "Les modifications sont possibles tant que votre commande n’est pas en cours d’impression. Contactez-nous rapidement si vous souhaitez apporter un changement."
                },
                {
                    ans: "Que faire si je n’ai pas reçu ma commande ?",
                    rep: "Si votre commande tarde à arriver, veuillez vérifier votre suivi de livraison. Si vous rencontrez un problème, contactez notre service client et nous vous aiderons à résoudre la situation."
                },

                {
                    ans: "Sur quel type de papier sont imprimés les journaux ?",
                    rep: "Nos journaux sont imprimés sur un papier de qualité, rappelant le toucher des journaux traditionnels tout en garantissant une bonne durabilité."
                },
                {
                    ans: "Utilisez-vous des encres écologiques ?",
                    rep: "Oui, nous utilisons des encres écologiques respectueuses de l’environnement pour minimiser notre impact."
                },
                {
                    ans: "Vos journaux sont-ils recyclables ?",
                    rep: "Oui, tous nos journaux sont imprimés sur un papier recyclable."
                },
                {
                    ans: "Comment garantissez-vous la qualité de l’impression ?",
                    rep: "Nous utilisons des technologies d’impression avancées pour assurer un rendu net et fidèle aux couleurs. Chaque journal est contrôlé avant envoi."
                },
                {
                    ans: "Avez-vous des engagements en faveur du développement durable ?",
                    rep: "Nous nous engageons à limiter notre impact écologique en utilisant des matériaux responsables et en optimisant notre processus de production pour éviter le gaspillage."
                }
            ],
            selectedCategory: null

        };
    },
    methods: {
        category(objet) {
            this.selectedCategory= objet
            this.question_target = -1
            this.actual_content = [];
            this.contents.forEach(element => {
                if (element.category === objet) {
                    this.actual_content.push(...element.questions);
                    console.log(this.actual_content);
                }
            });

            if (objet === "Général") {
                this.contents.forEach(Task => {
                    Task.questions.forEach(particule => {
                        this.actual_content.push(particule)
                    })

                });
                console.log(this.actual_content)
            }
        }
    }
};
</script>

<style scoped>

.active {
    background-color: rgba(66, 19, 24, 1); /* Couleur de fond pour l'élément cliqué */
    color: #ffffff; /* Couleur du texte */
    border-radius: 10px;
    padding: 10px;
}

p {
    font-size: 24pt;
    font-family: "Cormorant Garamond", serif;
    transition: all 0.5s ease;
}

h3 {
    border-bottom: solid black 2px;
    font-size: 24pt;
    font-family: "Cormorant Garamond", serif;
    transition: all 0.5s ease;

}

#question {
    border-bottom: solid black 2px;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;
}

#container {
    width: 80vw;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;

}

nav ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 5vw;
    width: 80vw;
    list-style: none;
    font-family: "Cormorant Garamond", serif;
    font-size: 16pt;
    font-weight: 700;
}

#faq {
    background-image: url("../images/background_mockup.svg");

    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#faq h1 {
    margin-top: 50px;
    font-size: 50pt;
    font-family: "Cormorant Garamond", serif;

}

.cormorant-garamond {
    font-family: "Cormorant Garamond", serif;
    font-weight: auto;
    font-style: normal;
}
</style>
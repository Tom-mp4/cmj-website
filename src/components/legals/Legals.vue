<script setup>

</script>

<template>
  <div class="legals">
    <h1 class="main-title">
      MENTIONS LÉGALES
    </h1>
    <p class="paragraph">
      Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en
      l'économie numérique, il est précisé aux utilisateurs du site CMJ - Site Internet l'identité
      des différents intervenants dans le cadre de sa réalisation et de son suivi.
    </p>
    <div>
      <h2 class="title">
        Edition du site
      </h2>
      <p class="paragraph">
        Le présent site, accessible à l’URL cmj-garazi.fr (le « Site »), est édité par : Tom Mrt,
        résidant 13 Pl. Charles de Gaulle, 64220 Saint-Jean-Pied-de-Port, de nationalité Française
        (France), né(e) le 17/01/2004,
      </p>
    </div>
    <div>
      <h2 class="title">
        Hébergement
      </h2>
      <p class="paragraph">
        Le Site est hébergé par la société FTM Network
        (<a target="_blank" href="https://ftmnet.com">ftmnet.com</a>).
      </p>
    </div>
    <div>
      <h2 class="title">
        Directeur de publication
      </h2>
      <p class="paragraph">
        Le Directeur de la publication du Site est Tom Mrt.
      </p>
    </div>
    <div>
      <h2 class="title">
        Nous contacter
      </h2>
      <ul>
        <li>Par téléphone : +33559370092</li>
        <li>Par email : contact@cmj-garazi.fr</li>
        <li>Par courrier : 13 Pl. Charles de Gaulle, 64220 Saint-Jean-Pied-de-Port</li>
      </ul>
    </div>

  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

  .legals {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    padding: 10% 0;
    gap: 40px;
    text-align: center;

    .main-title {
      font-family: fonts.$greycliff;
      color: colors.$black;
      font-size: 4.5rem;
      line-height: 1;
      letter-spacing: -0.06em;
    }

    .title {
      font-family: fonts.$greycliff;
      color: colors.$black;
      font-size: 2.5rem;
      line-height: 1;
      letter-spacing: -0.06em;
    }

    .paragraph {
      font-family: fonts.$montserrat;
      color: colors.$black;
      font-size: 1.3rem;
      line-height: 1.5;
      letter-spacing: -0.06em;
    }

    ul {
      list-style: none;
    }
  }

</style>

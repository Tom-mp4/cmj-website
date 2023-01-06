<script setup>
</script>

<template>
  <div class="footer">
    <div class="footer-content-top">
      <div class="footer-content-left">
        <img class="logo-etat" src="@/assets/logos/republique-francaise-logo.svg" alt="logo-etat">
        <img class="logo-cmj" src="@/assets/logos/logo.png" alt="cmj-logo">
      </div>
      <div class="footer-content-menu">
        <h2 class="title">Navigation</h2>
        <ul class="footer-menu">
          <li><router-link class="link" to="/">Accueil</router-link></li>
          <li><router-link class="link" to="/projects">Nos Projets</router-link></li>
          <li><router-link class="link" to="/conseillers">Les Conseillers</router-link></li>
          <li><router-link class="link" to="/candidatures">Candidater</router-link></li>
        </ul>
      </div>
      <div class="footer-content-menu">
        <h2 class="title">Mentions Légales</h2>
        <ul class="footer-menu">
          <li>
            <router-link class="link" to="/mentions-legales">Mentions Légales</router-link>
          </li>
          <li>
            <router-link class="link" to="/conditions-generales">Conditions Générales</router-link>
          </li>
          <li>
            <router-link class="link" to="/confidentialite">Confidentialité</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="line"></div>
    <div class="footer-content-bottom">
      <p class="informations">
        Développé par <a href="https://tom-mrt.fr" class="link">Tom</a> pour le CMJ - © 2023 - Tous droits réservés
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

li {
  list-style: none;
}

.link {
  text-decoration: none;
  color: colors.$black;
}

.footer {
  display: flex;
  flex-direction: column;
  border-top: solid 2px colors.$gray;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45vh;
  gap: 2rem;

  .footer-content-top {
    display: flex;
    gap: 10rem;

    .footer-content-left {
      display: flex;
      align-items: center;
      gap: 2rem;

      .logo-cmj {
        height: 4rem;
      }

      .logo-etat {
        height: 8rem;
      }
    }

    .footer-content-menu {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .footer-menu {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
    }
  }
}

</style>

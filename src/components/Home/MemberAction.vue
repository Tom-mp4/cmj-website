<script setup>
</script>

<template>
  <div class="member-action">
    <div class="top">
      <h1 class="title">
        En bref, le Conseil Municipal des Jeunes,
      </h1>
      <p class="description">
        C'est un collectif soudé qui a pour objectif de favoriser la concertation entre les élus et
        les jeunes. C'est la possibilité d'exprimer ses idées et de travailler sur des projets
        réels et stimulants. C'est une expérience citoyenne motivante. Mais c'est surtout un groupe
        de jeunes motivés.
      </p>
    </div>
    <div class="bottom">
      <div class="text">
        <h2 class="cta">Tu souhaites nous rejoindre ?</h2>
        <p class="subtitle">
          Rien de plus simple, clique sur le boutton juste-ici, et suis les instructions !
        </p>
      </div>
      <router-link to="/candidatures" class="button">
        Candidater
        <img src="@/assets/icons/angle-right.svg" alt="" class="icon">
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

.member-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 80%;
  height: 100vh;

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    .title {
      font-family: fonts.$greycliff;
      font-size: 4.5rem;
      line-height: 0.8;
      letter-spacing: -0.06em;
    }

    .description {
      text-align: center;
      font-family: fonts.$montserrat;
      font-size: 1.3rem;
      line-height: 1.2;
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: colors.$gray;
    border-radius: 20px;
    padding: 1.5em 2.5em;
    gap: 20rem;

    .text {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .cta {
        font-size: 1.8rem;
      }
    }

    .button {
      display: flex;
      align-items: center;
      gap: 10px;

      background-color: colors.$black;
      color: colors.$white;
      font-size: 1.1rem;
      text-decoration: none;
      padding: 0.8em 1.2em;
      border-radius: 10px;
      transition: 0.3s ease-in-out;

      &:hover {
        background-color: colors.$hover;
        color: colors.$white;
      }

      .icon {
        width: 1.3rem;
        height: 1.3rem;
      }
    }
  }
}

</style>

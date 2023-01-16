<script setup>

</script>

<template>
  <div class="steps">
    <div class="step">
      <h3 class="step-number">
        Étape 1 :
      </h3>
      <h2 class="step-title">
        Consulte le Réglement.
      </h2>
      <p class="step-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet aliquam
        luctus, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nisl sit
        amet aliquam luctus, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet nisl.
      </p>
      <a
        href="@/assets/download/reglement.pdf"
        class="button"
        download>
          Télécharger le Réglement
      </a>
    </div>
    <div class="step">
      <h3 class="step-number">
        Étape 2 :
      </h3>
      <h2 class="step-title">
        Télécharge et remplis le formulaire.
      </h2>
      <p class="step-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet aliquam
        luctus, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nisl sit
        amet aliquam luctus, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet nisl.
      </p>
      <a
        href="@/assets/download/candidatures.pdf"
        class="button"
        download>
          Télécharger le Dossier de Candidature
      </a>
    </div>
    <div class="step">
      <h3 class="step-number">
        Étape 3 :
      </h3>
      <h2 class="step-title">
        Envoie nous ta candidature.
      </h2>
      <p class="step-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet aliquam
        luctus, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nisl sit
        amet aliquam luctus, nunc nisl aliquet nisl, eget aliquam nunc nisl sit amet nisl.
      </p>
      <a
        href="mailto:contact@cmj-garazi.fr"
        class="button">
          Envoyer ta candidature
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/_colors.scss';
@use '@/assets/styles/_fonts.scss';

.steps {
  display: flex;
  flex-direction: column;
  gap: 8rem;
  width: 60%;
  padding-bottom: 10%;

  .step {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .step-number {
      font-family: fonts.$montserrat;
      color: colors.$black;
      font-size: 1.3rem;
      line-height: 0.4;
    }

    .step-title {
      font-family: fonts.$greycliff;
      color: colors.$black;
      font-size: 3rem;
      line-height: 1;
      letter-spacing: -0.06em;
    }

    .step-description {
      font-family: fonts.$montserrat;
      color: colors.$black;
      font-size: 1.2rem;
    }

    .button {
      font-family: fonts.$montserrat;
      font-size: 1.2rem;
      text-decoration: none;

      color: colors.$white;
      background-color: colors.$black;

      padding: 15px 30px;
      width: fit-content;
      border-radius: 50px;
      transition: all 0.3s ease;

      &:hover {
        background-color: colors.$hover;
      }
    }
  }
}

</style>

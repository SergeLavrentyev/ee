<template>
  <div class="auth empty-layout background-dark">
    <div class="container text-container">
      <form class="auth-card" @submit.prevent="register">
        <div class="auth__auth">
          <h1 class="auth__title">Создание аккаунта</h1>
          <p>Введите Email и пароль для регистрации</p>

          <div class="input-field">
            <label for="email">Email</label>
            <input v-model="registration.email" id="email" type="text" placeholder="you@example.com" />
            <small class="helper-text">Поле Email не должно быть пустым</small>
            <small class="helper-text">Введите корретный Email</small>
          </div>

          <div class="input-field">
            <label for="password">Пароль</label>
            <input
              v-model="registration.password"
              id="password"
              type="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
            <small class="helper-text">Введите пароль</small>
            <small class="helper-text"
              >Пароль должен быть 6 символов. Сейчас он 3</small
            >
          </div>
          <p class="row">
            <input type="checkbox" id="privacy-agree" />
            <label for="privacy-agree">Я прочитал и согласен с </label>
            <a class="label" href="#">правилами</a>
          </p>
          <div>
            <button
              class="button button__primary button-max auth-submit"
              type="submit"
            >
              Создать
            </button>
            <!-- У кнопки тоже надо проверку. если можно отправлять добавить class - button__accent
                    если нельзя class - button__delete -->
          </div>
          <p class="center">
            Уже с нами?
            <router-link class="bottom-dotted" to="/login">Войти</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    registration: {
      enail: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions(['get_register']),
    register() {
      let form = new FormData()
      Object.keys(this.registration).forEach(r => yyyyyyyyyform.append(`${r}`, `${this.registration[r]}`))
      this.get_register(form)
    }
  }
};
</script>

<style></style>

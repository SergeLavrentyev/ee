<template>
  <div class="auth empty-layout background-dark">
    <div class="container text-container">
      <form class="auth-card" @submit.prevent="submitHandler">
        <div class="auth__auth">
          <h1 class="auth__title">Войти в аккаунт</h1>
          <!-- <p>Fill in your email and password to proceed</p> -->
          <p class="right-align small">
            Забыли пароль?
            <a class="label" href="/recovery.html">Восстановить</a>
          </p>

          <div class="input-field">
            <label for="email">Email</label>
            <input
              v-model="login.email"
              id="email"
              type="text"
              placeholder="you@example.com"
            />
            <small class="helper-text"
              >Поле Email не должно быть пустым</small
            >
            <small class="helper-text">Введите корретный Email</small>
          </div>

          <div class="input-field">
            <label for="password">Пароль</label>
            <input
              v-model="login.password"
              id="password"
              type="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
            <small class="helper-text">Введите пароль</small>
            <small class="helper-text"
              >Пароль должен быть 6 символов. Сейчас он 3</small
            >
          </div>

          <div>
            <button
              class="button button__primary button-max auth-submit"
              type="submit"
            >
              Войти
            </button>
            <!-- У кнопки тоже надо проверку. если можно отправлять добавить class - button__accent
                        если нельзя class - button__delete -->
          </div>
          <p class="center">
            Нет аккаунта?
            <a class="bottom-dotted" href="/register.html"
              >Зарегистрироваться</a
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    login: {
      email: '',
      password : ''
    }
  })
};
</script>

<style></style>

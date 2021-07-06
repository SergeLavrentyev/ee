<template>
  <section class="profile-section">
    <div class="page profile-page">
      <div class="container">
        <div class="page__inner">
          <div class="page__sidebar">
            <div class="app__menu">
              <ul class="vMenu">
                <li><a href="#">Ваши данные</a></li>
                <li><a href="#">Ваши заказы</a></li>
                <li><a href="#">Ваши монеты</a></li>
              </ul>
            </div>
          </div>

          <div class="page__main">
            <h1 class="page__main__title">
              Мой аккаунт (Имя пользователя)
            </h1>

            <form action="" class="profile-detali-card">
              <h3 class="profile-detali-card-title">Ваши данные</h3>
              <div class="input-field">
                <label for="surname">Фамилия</label>
                <input
                  id="surname"
                  type="text"
                  placeholder="Ласточкин"
                />
                <small class="helper-text"
                  >Поле Фамилия не должно быть пустым</small
                >
              </div>
              <div class="input-field">
                <label for="name">Имя</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Иннокентий"
                />
                <small class="helper-text"
                  >Поле Имя не должно быть пустым</small
                >
              </div>
              <div class="input-field">
                <label for="middle-name">Отчество</label>
                <input
                  id="middle-name"
                  type="text"
                  placeholder="Савельевич"
                />
                <small class="helper-text"
                  >Поле Фамилия не должно быть пустым</small
                >
              </div>
              <div class="input-field">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />
                <small class="helper-text"
                  >Поле Email не должно быть пустым</small
                >
                <small class="helper-text"
                  >Введите корретный Email</small
                >
              </div>
              <div class="input-field">
                <label for="phone">Телефон</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+7 (000) 000 00 00"
                />
                <small class="helper-text"
                  >Поле Телефон не должно быть пустым</small
                >
                <small class="helper-text"
                  >Введите корретный Телефон</small
                >
              </div>
              <div class="input-field">
                <label for="company">Компания</label>
                <input
                  id="company"
                  type="text"
                  placeholder="ООО 'Млечный путь'"
                />
                <small class="helper-text"
                  >Поле Компания не должно быть пустым</small
                >
              </div>
              <div class="input-field">
                <label for="address">Адрес для доставки</label>
                <input
                  id="address"
                  type="text"
                  placeholder="1-й Красногвардейский пр., 21, стр. 1"
                />
                <small class="helper-text"
                  >Поле Адрес для доставки не должно быть
                  пустым</small
                >
              </div>

              <div class="input-field">
                <label for="password"
                  >Новый пароль (не заполняйте, чтобы оставить
                  прежний)</label
                >
                <input
                  id="password"
                  type="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                />
                <small class="helper-text"
                  >Введите Новый пароль</small
                >
                <small class="helper-text"
                  >Пароль должен быть 6 символов. Сейчас он 3</small
                >
              </div>
              <div class="profile-detali-card-button">
                <button
                  class="button button__primary button-max profile-submit"
                  type="submit"
                >
                  Обновить
                </button>
                <!-- У кнопки тоже надо проверку. если можно отправлять добавить class - button__accent
            если нельзя class - button__delete -->
              </div>
            </form>
          </div>
        </div>
        <!-- page__inner -->
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>

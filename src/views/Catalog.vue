<template>
  <div class="page">
    <div class="container">
      <div class="page__inner">
        <div class="page__sidebar">
          <div class="sidebar-filters">
            <div class="dropdown-menu">
              <span class="dropdown-menu-title">Вес:</span>
              <select>
                <option value="1">Выбрать все</option>
                <option value="2">1 унция</option>
                <option value="3">1/2 унции</option>
                <option value="3">1/4 унции</option>
                <option value="3">1/8 унции</option>
              </select>
            </div>
          </div>

          <div class="sidebar-filters">
            <div class="dropdown-menu">
              <span class="dropdown-menu-title">Серия:</span>
              <select>
                <option value="1">Выбрать все</option>
                <option value="2">Австралийский Кенгуру (1) </option>
                <option value="3">Венская Филармония (2) </option>
                <option value="3">Канадский Гусь (1) </option>
                <option value="3">Лунар II (3) </option>
              </select>
            </div>
          </div>

          <div class="sidebar-filters">
            <div class="dropdown-menu">
              <span class="dropdown-menu-title">Страна:</span>
              <select>
                <option value="1">Выбрать все</option>
                <option value="2">Россия (57)</option>
                <option value="3">Камерун (2)</option>
                <option value="3">Франция (23)</option>
                <option value="3">Канада (780)</option>
              </select>
            </div>
          </div>

          <div class="sidebar-filters">
            <span class="sidebar-filters-title"
              >Страна производитель</span
            >
            <ul class="filter-country">
              <li>
                <a href="#" class="vMenu--active">Россия (57)</a>
              </li>
              <li><a href="#"></a>Камерун (2)</li>
              <li><a href="#">Великобритания (6)</a></li>
              <li><a href="#">Франция (23)</a></li>
              <li><a href="#">Канада (780)</a></li>
            </ul>
          </div>

          <div class="sidebar-filters">
            <span class="sidebar-filters-title">Стоимость</span>
            <div class="price_slider_wrapper">
              <div class="price_slider">
                <div class="ui-slider-handle">from</div>
                <div class="ui-slider-handle">to</div>
              </div>
            </div>
            <div class="price_label">
              <span class="from">от 12500 p.</span>
              <span class="to">до 79500 p.</span>
            </div>
          </div>

          <ul class="vMenu">
            <li><a href="#" class="vMenu--active">Active page</a></li>
            <li><a href="#">Second page</a></li>
            <li><a href="#">Third page</a></li>
            <li><a href="#">Fourth page</a></li>
            <li><a href="#">Fifth page</a></li>
          </ul>
        </div>

        <div class="page__main">
          <div class="breadcrumbs">
            <ul>
              <li>
                <a href="/home.html">Главная</a>
              </li>
              <li>
                <a href="#">Каталог</a>
              </li>
              <li>
                <a href="#">Золотые монеты</a>
              </li>
            </ul>
          </div>

          <h1 class="page__main__title">Золотые монеты</h1>

          <div class="sorting">Сортировка:</div>

          <div class="catalog">
            <div class="catalog-items">
              <CatalogItem 
                v-for="(item, iitemIndex) in catalog" 
                :key="iitemIndex"
                :item="item"
                @add-to-cart="addToCart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogItem from '../components/CatalogItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Catalog',
  components: {
    CatalogItem
  },
  created() {
    this.fetchCatalog()
  },
  methods: {
    ...mapActions(['fetchCatalog', 'add_to_cart']),
    addToCart(item) {
      this.add_to_cart(item)
    }
  },
  computed: {
    ...mapGetters(['catalog'])
  }
}
</script>

<style></style>

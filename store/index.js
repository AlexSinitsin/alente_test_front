import {
  filter
} from 'lodash';
import Vuex from 'vuex'
var _ = require('lodash');

const createStore = () => {
  return new Vuex.Store({
    state: {
      range: [{
          name: '$10',
          id: 1,
          range: [0, 10],
          checked: 'no-checked'
        },
        {
          name: '$10-$100',
          id: 2,
          range: [10, 100],
          checked: 'no-checked'
        },
        {
          name: '$100-$500',
          id: 3,
          range: [100, 500],
          checked: 'no-checked'
        },
        {
          name: '$500',
          id: 4,
          range: [500, 99999],
          checked: 'no-checked'
        },
        {
          name: 'All',
          id: 5,
          range: [0, 99999],
          checked: 'checked'
        }
      ],
      brands: [],
      pages: {
        count: 0,
        current: 1,
      },
      categories: [],
      products: [],
      rating: [],
      filteredProducts: [],
      search: {
        searcedProd: [],
        count: 0,
        searchRequest: ''
      },
      view: 'Tails',
      slider: {
        min: 0,
        max: 0,
        range: [22, 2599]
      },
      select: [{
        name: "Default",
        sort: 'id',
        checked: 'checked'
      }, {
        name: "Name",
        sort: 'title',
        checked: 'no-checked'
      }, {
        name: "Price",
        sort: 'price',
        checked: 'no-checked'
      }]
    },
    mutations: {
      updateSearch(state, search) {
        state.filteredProducts = state.products;
        state.search.searchRequest = search;

        const lengthSearchRequest = state.search.searchRequest.length
        const searchRequest = state.search.searchRequest.toLowerCase()
        state.filteredProducts = state.filteredProducts
          .filter(param => {
            const title = param.title.toLowerCase().slice(0, lengthSearchRequest)
            return title === searchRequest
          })
      },
      updateProducts(state) {
        const range = _.flatten(state.range
          .filter(param => param.checked === 'checked')
          .map(param => param.range))
        console.log(range + '@@')

        let cat = state.categories
          .filter(param => param.checked === 'checked')
          .map(param => param.id)
        if (!Boolean(cat.length)) {
          cat = state.categories
            .map(param => param.id)
        }

        let brand = state.brands
          .filter(param => param.checked === 'checked')
          .map(param => param.id)
        if (!Boolean(brand.length)) {
          brand = state.brands
            .map(param => param.id)
        }

        const sortParam = _.flatten(state.select
          .filter(param => param.checked === 'checked')
          .map(param => param.sort))
          console.log(state.slider.range)
        state.filteredProducts = state.products
          .filter(param =>Number(param.price) >= range[0] && Number(param.price) <= range[1])
          .filter(param => Number(param.price) >= state.slider.range[0] && Number(param.price) <= state.slider.range[1])
          .filter(param => brand.indexOf(param.brandId) >= 0 ? true : false)
          .filter(param => cat.indexOf(param.brandId) >= 0 ? true : false)

        state.filteredProducts.sort(function (a, b) {
          if (a[sortParam] > b[sortParam]) {
            return 1;
          }
          if (a[sortParam] < b[sortParam]) {
            return -1;
          }
          return 0;
        });
      },
      updateCheckedRange(state, id) {
        state.range
          .map(radio => {
            radio.checked = 'no-checked'
          })
        state.range
          .filter(radio => radio.id === id)
          .map(radio => radio.checked = 'checked')
      },
      updateCheckedCat(state, id) {
        state.categories
          .filter(checkbox => checkbox.id === id)
          .map(checkbox => checkbox.checked = checkbox.checked === 'checked' ? 'no-checked' : 'checked')

      },
      updateCheckedBrand(state, id) {

        state.brands
          .filter(checkbox => checkbox.id === id)
          .map(checkbox => checkbox.checked = checkbox.checked === 'checked' ? 'no-checked' : 'checked')

      },
      addBrand(state, param) {
        state.brands = param;
        state.brands
          .map(checkbox => {
            checkbox.checked = 'no-checked'
          })

      },
      addCat(state, param) {

        state.categories = param;
        state.categories
          .map(checkbox => {
            checkbox.checked = 'no-checked'
          })

      },
      addProd(state, param) {
        state.products = param;
      },
      updateNumbers(state) {
        state.filteredProducts = state.products;

        const length = Math.round(state.filteredProducts.length / 9)
        
        state.pages.count = length
        console.log(state.pages.count )

        state.filteredProducts.sort(function (a, b) {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        });
        state.slider.min = state.filteredProducts[0].price
        state.slider.max = state.filteredProducts[state.filteredProducts.length - 1].price
        state.filteredProducts = state.products;

        state.range
          .map(param => {
            const prodCount = state.products
              .filter(item => item.price >= Number(param.range[0]) && item.price <= Number(param.range[1])).length;
            param.count = prodCount;
            return param
          })

        state.categories
          .map(param => {
            const catCount = state.products
              .filter(item => item.categoryId === param.id).length;
            param.count = catCount;
            return param
          })

        state.brands
          .map(param => {
            const brandCount = state.products
              .filter(item => item.brandId === param.id).length;
            param.count = brandCount;
            return param
          })
          
          state.rating = [];
          for (let i = 5; i >= 1; i -= 1) {
            state.rating.push({})
            state.rating[5 - i].count = state.products
              .filter(product => parseFloat(product.rating) <= i && parseFloat(product.rating) > i - 1).length
            state.rating[5 - i].countStars = i;
          }
      },
      currentView(state, view) {
        state.view = view;
      },
      updateSelect(state, sort) {
        state.select
          .map(param => {
            param.checked = "no-checked"
            return param
          })
          .filter(param => param.sort === sort)
          .map(param => {
            param.checked = 'checked'
            return param
          })
      },
      updatePageCurrent(state, n) {
        state.pages.current = n
        console.log(state.pages.current + "@")
      },
      updateSliderMin(state, min) {
        state.slider.range[0]= min
      },
      updateSliderMax(state, max) {
        state.slider.range[1]= max
      }
    }
  })
}

export default createStore

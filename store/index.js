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
      categories: [],
      products: [],
      rating: [],
      filteredProducts: [],
      search: { searcedProd: [], count: 0, searchRequest: ''},
      view: 'Tails',
      slider: {
        X: -10,
        defaultX: 0
      },
      select: [{
        name: "Default",
        sort: 'id',
        checked: 'checked'
      }, {
        name: "Name",
        sort: 'name',
        checked: 'no-checked'
      }, {
        name: "Price",
        sort: 'price',
        checked: 'no-checked'
      }]
    },
    mutations: {
      updateCheckedRange(state, id) {
        state.range
          .map(radio => {
            radio.checked = 'no-checked'
          })
        state.range
          .filter(radio => radio.id === id)
          .map(radio => radio.checked = 'checked')

        const range = _.flatten(state.range
          .filter(param => param.checked === 'checked')
          .map(param => param.range))

        const cat = state.categories
          .filter(param => param.checked === 'checked')
          .map(param => param.id)

        const brand = state.brands
          .filter(param => param.checked === 'checked')
          .map(param => param.id)

        state.filteredProducts = state.products
          .filter(param => Number(param.price) >= range[0] && Number(param.price) <= range[1])
          .filter(param => _.has(brand, param.brandId))
          .filter(param => _.has(cat, param.categoryId))
      },
      updateCheckedCat(state, id) {
        state.categories
          .filter(checkbox => checkbox.id === id)
          .map(checkbox => checkbox.checked = checkbox.checked === 'checked' ? 'no-checked' : 'checked')

        const range = _.flatten(state.range
          .filter(param => param.checked === 'checked')
          .map(param => param.range))

        const cat = state.categories
          .filter(param => param.checked === 'checked')
          .map(param => param.id)

        const brand = state.brands
          .filter(param => param.checked === 'checked')
          .map(param => param.id)

        state.filteredProducts = state.products
          .filter(param => param.price >= range[0] && param.price <= range[1])
          .filter(param => _.has(brand, param.brandId))
          .filter(param => _.has(cat, param.categoryId))
      },
      updateCheckedBrand(state, id) {

        state.brands
          .filter(checkbox => checkbox.id === id)
          .map(checkbox => checkbox.checked = checkbox.checked === 'checked' ? 'no-checked' : 'checked')

        const range = _.flatten(state.range
          .filter(param => param.checked === 'checked')
          .map(param => param.range))

        const cat = state.categories
          .filter(param => param.checked === 'checked')
          .map(param => param.id)

        const brand = state.brands
          .filter(param => param.checked === 'checked')
          .map(param => param.id)

        state.filteredProducts = state.products
          .filter(param => param.price >= range[0] && param.price <= range[1])
          .filter(param => _.has(brand, param.brandId))
          .filter(param => _.has(cat, param.categoryId))
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
        for (let i = 5; i >= 1; i -= 1) {
          state.rating.push({})
          state.rating[5 - i].count = state.products
            .filter(product => parseFloat(product.rating) <= i && parseFloat(product.rating) > i - 1).length
          state.rating[5 - i].countStars = i;
        }

        state.filteredProducts = state.products;

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
      },
      updateSlider(state, x) {
        state.slider.defaultX = x;
      },
      updateXSlider(state, x) {
        state.slider.X = state.slider.defaultX + x;
      },
      currentView(state, view) {
        state.view = view;
      },
      updateSelect(state, sort) {
        console.log('uu')
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
      }
    }
  })
}

export default createStore

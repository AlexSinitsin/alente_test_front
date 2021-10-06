import axios from 'axios'

export default async function ({
  store
}) {
  await axios.get(`https://611a2bc9cbf1b30017eb5559.mockapi.io/brand`)
    .then((response) => {
      store.commit('addBrand', response.data)
    });
  await axios.get(`https://611a2bc9cbf1b30017eb5559.mockapi.io/category`)
    .then((response) => {
      store.commit('addCat', response.data)
    });
  await axios.get(`https://611a2bc9cbf1b30017eb5559.mockapi.io/product`)
    .then((response) => {
      store.commit('addProd', response.data)
    });
  store.commit('updateNumbers')
}

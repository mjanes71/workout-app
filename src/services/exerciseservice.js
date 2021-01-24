import axios from 'axios';
import store from '@/store/index.js';

const http = axios.create({
  baseURL: "https://wger.de/api/v2/exerciseinfo"
});

export default {

  getAllExercises() {
    return http.get('/?language=2&limit=300').then(response => {
      store.commit('SET_EXERCISES', response.data);
  });


  }

}
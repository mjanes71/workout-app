import axios from 'axios';

const axios = axios.create({
  baseURL: "https://wger.de/api/v2/exerciseinfo"
});

export default {

  getExerciseByCategoryAndEquipment() {
    return axios.get('/category=?&equiptment=?&language=2');
  }

}
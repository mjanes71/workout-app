<template>
  <div class="home">
    <h1 class="header">Get Swole</h1>
    <p class = "header">Choose from the categories below to generate a custom workout</p>
    <b-form id="home-form">
    <b-form-group id="group-type" label="Exercise Type:" label-for="type">
      <b-form-select id="type" v-model="type" :options="typeOptions" required ></b-form-select>
      </b-form-group>
    <b-form-group id="group-focus" label="Exercise Focus:" label-for="focus">
      <b-form-select id="focus" v-model="focus" :options="focusOptions"></b-form-select>
      </b-form-group>
    <b-form-group id="group-duration" label="Exercise Duration:" label-for="duration">
    <b-form-select id="duration" v-model="duration" :options="durationOptions"></b-form-select>
      </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>

    </b-form>

    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: null,
      focus: null,
      duration: null,
      typeOptions: [
        { value: 'null', text: 'Select'},
        { value: 'HIIT', text: 'HIIT'},
        { value: 'Reps', text: 'Reps'}
      ],
      focusOptions: [
         { value: 'null', text: 'Select'},
        { value: 'core', text: 'core'},
        { value: 'legs', text: 'legs'}, 
        { value: 'arms', text: 'arms'}
      ],
      durationOptions: [
         { value: 'null', text: 'Select'},
        { value: 10, text: '10 in'},
        { value: 20, text: '20 min'},
        { value: 30, text: '30 min'}
      ]
    }
  }
  
}
</script>

<style scoped>
.header {
  text-align: center;
}

#home-form {
  margin: 1em;
}



</style>

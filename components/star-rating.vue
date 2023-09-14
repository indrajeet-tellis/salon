<template>
  <fieldset class="rating">
    <input type="radio" id="star5" name="rating" value="5" /><label
      class="full"
      for="star5"
      title="Awesome - 5 stars"
    ></label>

    <input type="radio" id="star4" name="rating" value="4" /><label
      class="full"
      for="star4"
      title="Pretty good - 4 stars"
    ></label>

    <input type="radio" id="star3" name="rating" value="3" /><label
      class="full"
      for="star3"
      title="Meh - 3 stars"
    ></label>

    <input type="radio" id="star2" name="rating" value="2" /><label
      class="full"
      for="star2"
      title="Kinda bad - 2 stars"
    ></label>

    <input type="radio" id="star1" name="rating" value="1" /><label
      class="full"
      for="star1"
      title="Sucks big time - 1 star"
    ></label>
  </fieldset>
</template>

<script setup>
import "../style/main.css";
</script>

<style scoped>
fieldset,
label {
  margin: 0;
  padding: 0;
}
body {
  margin: 20px;
}

.rating {
  border: none;
  float: left;
  font-size: 3rem;
}

.rating > input {
  display: none;
}
.rating > label:before {
  margin: 5px;
  /* font-size: 2.25em; */
  display: inline-block;
  font-family: FontAwesome;
  content: "\f005";
}

.rating > .half:before {
  content: "\f089";
  position: absolute;
}

.rating > label {
  color: #ddd;
  float: right;
}

.rating > input:checked ~ label,
.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: #ffd700;
}

.rating > input:checked + label:hover,
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label,
.rating > input:checked ~ label:hover ~ label {
  color: #ffed85;
}
</style>

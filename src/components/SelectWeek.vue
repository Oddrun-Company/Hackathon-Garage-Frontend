<template>
  <div class="topnav" id="myTopnav">
    <div href="">
      <span>هفته‌ی جاری</span>

    </div>
    <div href="">
      <span>هفته‌ی آتی</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "SelectWeek"
}
</script>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #FEFBFF;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav div {
  float: left;
  width: 50%;
  height: 48px;
  color: #44464F;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 17px;
}

.topnav div span:hover {
  border-bottom: 3px solid #205DB9;
  border-radius: 100px 100px 0px 0px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Change the color of links on hover */
.topnav div:hover {
  background-color: #FEFBFF;
  color: #205DB9;
}

/* Add an active class to highlight the current page */
.topnav div.active {
  background-color: blue;
  color: #FEFBFF;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}
</style>
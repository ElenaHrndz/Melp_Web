<template>
  <div id="vueApp">
    <div class="container">
      <!-- <div class="row">
        <div class="col-sm-12">
          <a class="btn btn-success" @click.stop="loadData">Load Restaurants</a>
        </div>
      </div> -->
  <div class="title-container">
    <div>
      <h3 class="title">Restaurants List</h3>
    </div>
      <div class="filters">
  			<span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">ALL</span>
  			<span class="filter" v-bind:class="{ active: currentFilter === 0 }" v-on:click="setFilter(0)">0</span>
  			<span class="filter" v-bind:class="{ active: currentFilter === 1 }" v-on:click="setFilter(1)">1</span>
  			<span class="filter" v-bind:class="{ active: currentFilter === 2 }" v-on:click="setFilter(2)">2</span>
  			<span class="filter" v-bind:class="{ active: currentFilter === 3 }" v-on:click="setFilter(3)">3</span>
  			<span class="filter" v-bind:class="{ active: currentFilter === 4 }" v-on:click="setFilter(4)">4</span>
  		</div>
    </div>

    <transition-group class="restaurants" name="restaurants" >
      <div class="restaurant" v-if="currentFilter === restaurant.rating || currentFilter === 'ALL'" v-bind:key="restaurant.name" v-for="restaurant in restaurants">
        <div class="restaurant-image-wrapper">
  				<img class="restaurant-image" v-bind:src="restaurant.image">
  				<div class="gradient-overlay"></div>
  				<!-- <div class="circle"> -->
  					<span class="restaurant-title">{{restaurant.name}}</span>
  				<!-- </div> -->
  			</div>
          {{ restaurant.contact.site }} <br>
          {{ restaurant.contact.email }} <br>
          {{ restaurant.contact.phone }}
        <h4>Address</h4>
          {{ restaurant.address.street }} <br>
          {{ restaurant.address.city }} <br>
          {{ restaurant.address.state }} <br>
        </div>
    </transition-group>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      debug: true,
  		currentFilter: 'ALL',
      restaurants: []
    }
  },
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },
    //get list of restaurant fon the API
    loadData : function () {
      fetch('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json')
       .then( response => response.json() )
       .then( data => this.restaurants = data )
    }
  },
  created() {
    this.loadData();
  }
}
</script>

<style s>
#vueApp{ padding-top: 20px; }

html,body {
 margin:0;
 font-family: 'Dawning of a New Day', cursive;
}

.title-container {
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
}

.title {
 font-family: 'Dawning of a New Day', cursive;
 font-size:30pt;
 font-weight:normal;
}

.restaurant-title {
font-size:16pt
}

.filter {
 font-family:arial;
 padding: 6px 6px;
 cursor:pointer;
 border-radius: 6px;
 transition: all 0.35s;
}

.filter.active {
 box-shadow:0px 1px 3px 0px #00000026;
}

.filter:hover {
 background:lightgray;
}

.restaurants {
 margin-bottom:50px;
 margin-top:25px;
 display:flex;
 flex-wrap:wrap;
 justify-content:center;
}

.restaurants-enter {
 transform: scale(0.5) translatey(-80px);
 opacity:0;
}

.restaurants-leave-to{
 transform: translatey(30px);
 opacity:0;
}

.restaurants-leave-active {
 position: absolute;
 z-index:-1;
}

.circle {
 text-align:center;
 position:absolute;
 bottom:-38px;
 left:40px;
 width:100px;
 height:100px;
 border-radius:50px;
/* 	border:1px solid black; */
 display:flex;
 box-shadow: 0px -4px 3px 0px #494d3257;
 justify-content:center;
 align-items:center;
 background-color:#fff;
/* 	box-shadow:0px -3px 3px #484848a6; */
}

.restaurant {
 transition: all .35s ease-in-out;
 margin:10px;
 box-shadow:0px 2px 8px lightgrey;
 border-radius:18px;
 width:300px;
 height:400px;
 display:flex;
 flex-direction:column;
 align-items:center;
}

.restaurant-image-wrapper {
 position:relative;
}

.gradient-overlay {
 position:absolute;
 top:0;
 left:0;
 width:100%;
 height:150px;
 opacity:0.09;
 background:
   linear-gradient(to bottom, rgba(0,210,247,0.65) 0%,rgba(0,210,247,0.64) 1%,rgba(0,0,0,0) 100%),
   linear-gradient(to top, rgba(247,0,156,0.65) 0%,rgba(247,0,156,0.64) 1%,rgba(0,0,0,0) 100%);
 border-bottom-left-radius:10px;
 border-bottom-right-radius:10px;
 border-top-left-radius:3px;
 border-top-right-radius:3px;
}

.restaurant-image {
 width:100%;
 height:150px;
 border-bottom-left-radius:5px;
 border-bottom-right-radius:5px;
 border-top-left-radius:3px;
 border-top-right-radius:3px;
}
</style>

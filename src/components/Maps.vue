<template lang="html">
  <div>
  <div class="google-map" ref="googleMap"></div>
  <template v-if="Boolean(this.google) && Boolean(this.map)">
    <slot
      :google="google"
      :map="map"
    />
  </template>
</div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  props: {
    mapConfig: Object,
    apiKey: 'AIzaSyB5t48GneOStLw4ke9tV_YF1FQtMoLF3_0',
  },

  data() {
    return {
      google: null,
      map: null
    }
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(
        mapContainer, this.mapConfig
      )
    }
  }
}
</script>

<style lang="css" scoped>
</style>

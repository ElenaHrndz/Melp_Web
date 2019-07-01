<template>
  <div id="vueApp">
    <div class="container">

      <div class="row">
        <div class="col-sm-12">
          <a href="#" class="btn btn-success" @click.stop="loadUsers">Load Users</a>
        </div>
      </div> <!-- /row -->

      <div class="row">
        <div class="col-sm-12">

          <h3>
            User List
          </h3>
          <ul>
            <li v-for="user in users">
              {{ user.name }} - {{ user.email }}
            </li>
          </ul>

        </div>
      </div> <!-- row -->

      <div class="row" v-if="debug">
        <div class="col-sm-12">
          <h3>
            Vuejs Debug Data
          </h3>
          <pre>{{ $data | json }}</pre>
        </div>
      </div> <!-- /row -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      debug: true,
      users: []
    }
  },
  methods: {
    loadUsers: function () {
      this.$http.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json', function (data, status, request) {
        if (status === 200) {
          this.users = data
        }
      })
    }
  }
}
</script>

<style s>
#vueApp{ padding-top: 20px; }
</style>

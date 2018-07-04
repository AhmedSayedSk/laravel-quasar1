<template>
  <q-page :dir="$root.layout.dir" class="docs-input row justify-center">
    <div style="width: 700px; max-width: 90vw;">
      <h3 class="caption">Add warehouse</h3>
      <q-field :count="20">
        <q-input float-label="Warehouse name" v-model="warehouse_name" />
      </q-field>
      <q-field :count="20">
        <q-input float-label="Admin comment" v-model="admin_comment" />
      </q-field>
      <q-field :count="20">
        <q-input float-label="State / province" v-model="state" />
      </q-field>
      <q-field :count="20">
        <q-input float-label="City" v-model="city" />
      </q-field>
      <q-field :count="100">
        <q-input float-label="Address 1" v-model="address1" />
      </q-field>
      <q-field :count="100">
        <q-input float-label="Phone number" v-model="phone_number" />
      </q-field>
      <br>
      <q-select
        v-model="select"
        float-label="Responsible Name"
        radio
       :options="responsibleNames"
      />
      <br><br><br>
      <q-btn
        icon="fa fa-plus"
        glossy rounded
        :color="$root.theme_color"
        label="Create product"
      />
      <br><br><br>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      warehouse_name: '',
      admin_comment: '',
      state: '',
      city: '',
      address1: '',
      phone_number: '',
      select: 2,
      responsibleNames: [
        {
          label: 'name 1',
          value: 1
        },
        {
          label: 'name 2',
          value: 2
        },
        {
          label: 'name 3',
          value: 3
        }
      ]
    }
  },
  watch: {
    error (val) {
      if (val) {
        this.warning = false
      }
    },
    warning (val) {
      if (val) {
        this.error = false
      }
    }
  }
}
</script>
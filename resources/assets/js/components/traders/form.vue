<template>
  <q-page :dir="$root.layout.dir" class="docs-input row justify-center">
    <div style="width: 700px; max-width: 90vw;">
      <h3 class="caption">Add Trader</h3>
      <div class="row justify-between">
        <div class="col-md-5">
          <q-field :count="20">
            <q-input float-label="First name" v-model="first_name" />
          </q-field>
        </div>
        <div class="col-md-5">
          <q-field :count="20">
            <q-input float-label="Last name" v-model="last_name" />
          </q-field>
        </div>
      </div>
      <q-field :count="20">
        <q-input float-label="Store Name" v-model="store_name" />
      </q-field>
      <div class="row justify-between">
        <div class="col-md-5">
          <q-field :count="20">
            <q-input float-label="CR SN" v-model="sr_sn" />
          </q-field>
        </div>
        <div class="col-md-5">
          <q-field :count="20">
            <q-input float-label="CR copy" v-model="sr_copy" />
          </q-field>
        </div>
      </div>
      <q-field :count="20">
        <q-input float-label="City" v-model="city" />
      </q-field>
      <div class="row justify-between">
        <div class="col-md-5">
          <q-field :count="50">
            <q-input float-label="District" v-model="district" />
          </q-field>
        </div>
        <div class="col-md-5">
          <q-field :count="50">
            <q-input float-label="Street" v-model="street" />
          </q-field>
        </div>
      </div>
      <div class="row justify-between">
        <div class="col-md-5">
          <q-field :count="25">
            <q-input float-label="Phone" v-model="phone" />
          </q-field>
        </div>
        <div class="col-md-5">
          <q-field :count="10">
            <q-input float-label="Fax" v-model="fax" />
          </q-field>
        </div>
      </div>
      <div class="row justify-between">
        <div class="col-md-5">
          <q-field :count="15">
            <q-input float-label="Mobile 1" v-model="mobile1" />
          </q-field>
        </div>
        <div class="col-md-5">
          <q-field :count="15">
            <q-input float-label="Mobile 2" v-model="mobile2" />
          </q-field>
        </div>
      </div>
      <q-field :count="15">
        <q-input float-label="Responsible Name" v-model="responsible_name" />
      </q-field>
      <div class="row justify-between">
        <div class="col-md-5">
          <q-field :count="15">
            <q-input float-label="Res. Mobile 1" v-model="res_mobile1" />
          </q-field>
        </div>
        <div class="col-md-5">
          <q-field :count="15">
            <q-input float-label="Res. Mobile 2" v-model="res_mobile2" />
          </q-field>
        </div>
      </div>
      <br>
      <q-select
        v-model="select"
        float-label="Business Type"
        radio
       :options="businessTypes"
      />
      <br>
      <q-field :count="500">
        <q-input float-label="Admin comment" rows="7" type="textarea" v-model="admin_comment" />
      </q-field>
      <br><br>
      <q-btn
        icon="fa fa-plus"
        glossy rounded
        :color="$root.theme_color"
        label="Create trader"
      />
      <br><br><br>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      specification_name: '',
      display_order: '',
      option_name: '',
      spicify_color: '#C7044B',
      select: 3,
      businessTypes: [
        {
          label: 'Type 1',
          value: 1
        },
        {
          label: 'Type 2',
          value: 2
        },
        {
          label: 'Type 3',
          value: 3
        }
      ],
    }
  }
}
</script>
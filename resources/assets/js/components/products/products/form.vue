<template>
  <q-page :dir="$root.layout.dir" class="docs-input row justify-center">
    <div style="width: 700px; max-width: 90vw;">
      <h3 class="caption">Add product</h3>
      <q-field icon="fa fa-box" :count="20">
        <q-input float-label="Product name" v-model="product_name" />
      </q-field>
      <q-field :count="20">
        <q-input float-label="Display order" v-model="display_order" />
      </q-field>
      <q-field :count="100">
        <q-input float-label="Short description" rows="2" type="textarea" v-model="short_description" />
      </q-field>
      <q-field :count="500">
        <q-input float-label="Full description" rows="7" type="textarea" v-model="full_description" />
      </q-field>
      <q-chips-input :color="$root.theme_color" float-label="Product tags" v-model="product_tags" />
      <br>
      <q-select
        v-model="select"
        float-label="Product type"
        radio
       :options="selectOptions"
      />
      <br>
      <div class="row justify-between">
        <div class="col-md-5">
          <q-field :count="12">
            <q-input float-label="Barcode" v-model="barcode" />
          </q-field>
        </div>
        <div class="col-md-5">
          <q-field :count="12">
            <q-input float-label="SKU" v-model="sku" />
          </q-field>
        </div>
      </div>
      <br>
      <q-checkbox v-model="visible_to_other" :color="$root.theme_color" label="Visible to other" />
      <br>
      <br>
      <q-checkbox v-model="published" :color="$root.theme_color" label="Published" />
      <br>
      <br>
      <q-checkbox v-model="show_on_home_page" :color="$root.theme_color" label="Show on home page" />
      <br>
      <br>
      <q-checkbox v-model="allow_customer_reviews" :color="$root.theme_color" label="Allow customer reviews" />
      <br>
      <br>
      <q-checkbox v-model="avabilable" :color="$root.theme_color" label="Avabilable" />
      <br>
      <br>
      <q-checkbox v-model="mark_as_new" :color="$root.theme_color" label="Mark as new" />
      <br><br><br><hr><br>
      <div class="row justify-between">
        <div class="col-md-5">
          <q-field :count="15">
            <q-input float-label="Sell price" v-model="sell_price" />
          </q-field>
        </div>
        <div class="col-md-5">
          <q-field :count="15">
            <q-input float-label="Old price" v-model="old_price" />
          </q-field>
        </div>
      </div>
      <q-field :count="20">
        <q-input float-label="Product cost" v-model="product_cost" />
      </q-field>
      <q-field :count="20">
        <q-input float-label="Discounts" v-model="discounts" />
      </q-field>
      <br>
      <br>
      <q-checkbox v-model="disable_buy_button" :color="$root.theme_color" label="Disable buy button" />
      <br>
      <br>
      <q-checkbox v-model="disable_wishlist_button" :color="$root.theme_color" label="Disable wishlist button" />
      <br>
      <br>
      <q-checkbox v-model="available_for_pre_order" :color="$root.theme_color" label="available for pre-order" />
      <br>
      <br>
      <q-checkbox v-model="call_for_price" :color="$root.theme_color" label="Call for price" />
      <br><br><br><hr><br>
      <div class="row justify-between">
        <div class="col-md-5">
          <q-field :count="15">
            <q-input float-label="Maximum stock qty" v-model="maximum_stock_qty" />
          </q-field>
        </div>
        <div class="col-md-5">
          <q-field :count="15">
            <q-input float-label="Maximum cart qty" v-model="maximum_cart_qty" />
          </q-field>
        </div>
      </div>
      <br>
      <q-select
        v-model="select"
        float-label="Low stock activity"
        radio
       :options="stockActivity"
      />
      <br>
      <br>
      <q-select
        v-model="select"
        float-label="Product availabillty range"
        radio
       :options="productAvailabilltyRange"
      />
      <br>
      <br>
      <q-chips-input :color="$root.theme_color" float-label="Allowed quantities" v-model="allowed_quantities" />
      <br>
      <br>
      <q-checkbox v-model="display_availability" :color="$root.theme_color" label="Display availability" />
      <br>
      <br>
      <q-checkbox v-model="notify_for_qty_below" :color="$root.theme_color" label="Notify for qty below" />
      <br>
      <br>
      <q-checkbox v-model="backorders" :color="$root.theme_color" label="Backorders" />
      <br>
      <br>
      <q-checkbox v-model="not_returnable" :color="$root.theme_color" label="Not returnable" />
      <br><br><br><hr><br>
      <q-select
        v-model="select"
        float-label="Group Name"
        radio
       :options="group_names"
      />
      <br>
      <br>
      <q-select
        v-model="select"
        float-label="Manufacturers"
        radio
       :options="manufacturers"
      />
      <br>
      <br>
      <q-select
        v-model="select"
        float-label="Vendor"
        radio
       :options="vendors"
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
      display_availability: false,
      notify_for_qty_below: true,
      backorders: true,
      not_returnable: true,
      visible_to_other: true,
      published: false,
      show_on_home_page: true,
      mark_as_new: false,
      allow_customer_reviews: true,
      avabilable: false,
      disable_buy_button: false,
      disable_wishlist_button: false,
      available_for_pre_order: false,
      call_for_price: true,
      product_name: '',
      short_description: '',
      full_description: '',
      maximum_stock_qty: '',
      maximum_cart_qty: '',
      display_order: '',
      barcode: '',
      sku: '',
      sell_price: '',
      old_price: '',
      product_cost: '',
      discounts: '',
      select: 2,
      selectOptions: [
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
        },
        {
          label: 'Type 4',
          value: 4
        },
        {
          label: 'Type 5',
          value: 5
        }
      ],
      stockActivity: [
        {
          label: 'Activity 1',
          value: 1
        },
        {
          label: 'Activity 2',
          value: 2
        },
        {
          label: 'Activity 3',
          value: 3
        },
      ],
      productAvailabilltyRange: [
        {
          label: 'range 1',
          value: 1
        },
        {
          label: 'range 2',
          value: 2
        },
        {
          label: 'range 3',
          value: 3
        },
      ],
      group_names: [
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
        },
      ],
      manufacturers: [
        {
          label: 'manufacturer 1',
          value: 1
        },
        {
          label: 'manufacturer 2',
          value: 2
        },
        {
          label: 'manufacturer 3',
          value: 3
        },
      ],
      vendors: [
        {
          label: 'vendor 1',
          value: 1
        },
        {
          label: 'vendor 2',
          value: 2
        },
        {
          label: 'vendor 3',
          value: 3
        },
      ],
      product_tags: ['Joe', 'Jim', 'Kem', 'Lara'],
      allowed_quantities: ['Joe', 'Jim']
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
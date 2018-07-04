<template>
  <q-page :dir="$root.layout.dir" class="docs-input row justify-center">
    <div style="width: 700px; max-width: 90vw;">
      <h3 class="caption">Add Category</h3>
      <q-field :count="20">
        <q-input float-label="Category name" v-model="category_name" />
      </q-field>
      <q-field :count="100">
        <q-input float-label="Short description" rows="2" type="textarea" v-model="short_description" />
      </q-field>
      <q-field :count="500">
        <q-input float-label="Full description" rows="7" type="textarea" v-model="full_description" />
      </q-field>
      <br>
      <q-uploader
        :url="url"
        :after="[
          {
            icon: 'done',
            handler () {
              // do something...
            }
          }
        ]"
      />
      <br>
      <br>
      <q-field :count="20">
        <q-input float-label="Display Order" v-model="display_order" />
      </q-field>
      <q-field :count="20">
        <q-input float-label="Price Range" v-model="price_range" />
      </q-field>
      <q-field :count="20">
        <q-input float-label="Discount" v-model="discount" />
      </q-field>
      <br>
      <br>
      <q-checkbox v-model="published" :color="$root.theme_color" label="Published" />
      <br><br><br>
      <q-btn
        icon="fa fa-plus"
        glossy rounded
        :color="$root.theme_color"
        label="Create category"
      />
      <br><br><br>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      published: true,
      category_name: '',
      short_description: '',
      full_description: '',
      display_order: '',
      price_range: '',
      discount: ''
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
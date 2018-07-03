<template>
	<q-page class="docs-input row justify-center">
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
      <q-chips-input float-label="Product tags" v-model="product_tags" />
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
      <hr>
      <br>
	    <q-checkbox v-model="visible_to_other" color="black" label="Visible to other" />
	    <br>
	    <br>
	    <q-checkbox v-model="published" color="black" label="Published" />
	    <br>
	    <br>
	    <q-checkbox v-model="show_on_home_page" color="black" label="Show on home page" />
	    <br>
	    <br>
      <q-checkbox v-model="allow_customer_reviews" color="black" label="Allow customer reviews" />
      <br>
      <br>
      <q-checkbox v-model="avabilable" color="black" label="Avabilable" />
      <br>
      <br>
	    <q-checkbox v-model="mark_as_new" color="black" label="Mark as new" />

	    <br><br><br>
		</div>
	</q-page>
</template>

<script>
export default {
  data () {
    return {
    	visible_to_other: true,
    	published: false,
    	show_on_home_page: true,
    	mark_as_new: false,
      allow_customer_reviews: true,
      avabilable: false,
    	product_name: '',
    	short_description: '',
    	full_description: '',
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
      product_tags: ['Joe', 'Jim', 'Kem', 'Lara'],
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
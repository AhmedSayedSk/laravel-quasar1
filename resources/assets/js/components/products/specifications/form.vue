<template>
	<q-page :dir="$root.layout.dir" class="docs-input row justify-center">
		<div style="width: 700px; max-width: 90vw;">
			<h3 class="caption">Add Trader</h3>
			<q-field :count="20">
			  <q-input float-label="Specification name" v-model="specification_name" />
			</q-field>
			<q-field :count="50">
			  <q-input float-label="Display Order" v-model="display_order" />
			</q-field>
      <q-field :count="20">
        <q-input float-label="Option Name" v-model="option_name" />
      </q-field>
      <br>
      <q-field>
        <p>Spicify Color</p>
        <q-color-picker v-model="spicify_color" />
      </q-field>
      <br><br><br>
      <q-btn
        icon="fa fa-plus"
        glossy rounded
        :color="$root.theme_color"
        label="Create group"
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
    }
  }
}
</script>
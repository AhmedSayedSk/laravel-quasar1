<template>
    <q-layout view="hHr LpR lFf">
      <!-- Header -->
      <q-layout-header :dir="$root.layout.dir">
        <!-- First row of header is a QToolbar -->
        <q-toolbar :color="$root.theme_color">
          <!-- showLeft is a model attached to left side drawer below -->
          <q-btn
            flat round dense
            @click="showSidebar = !showSidebar"
            icon="menu"
          />

          <transition
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <q-toolbar-title>
              Commercials
              <span slot="subtitle">Optional subtitle</span>
            </q-toolbar-title>
          </transition>

          <q-btn label="rtl/ltr" icon="swap_horiz" @click="convertLayoutDirection" />
        </q-toolbar>

        <!-- Second row of header is a QTabs -->
        <q-tabs :color="$root.theme_color" :dir="$root.layout.dir">
          <q-route-tab slot="title" icon="view_quilt" to="/test-layout/about" replace hide="icon" label="About" />
          <q-route-tab slot="title" icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="Toolbar" />
          <q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs" />
          <q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer" />
        </q-tabs>
      </q-layout-header>

      <q-layout-drawer :dir="$root.layout.dir" :side="$root.layout.side_menu_float" v-model="showSidebar">
        <q-scroll-area class="fit">
          <q-list multiline no-border link inset-separator>
            <q-list-header>Main items</q-list-header>
            <q-collapsible separator icon="fa fa-users" :label="$root.trans('messages.commercials')" sublabel="subtitle">
              <q-item link to="/commercials/orders">
                <q-item-side icon="fa fa-box" />
                <q-item-main label="Orders" />
              </q-item>
              <q-item link to="/commercials/invoices">
                <q-item-side icon="fa fa-file-alt" />
                <q-item-main label="Invoices" />
              </q-item>
              <q-collapsible icon="fa fa-truck-moving" label="Traders">
                <q-item link to="/traders/create">
                  <q-item-side icon="fa fa-plus-circle" />
                  <q-item-main label="Create trader" />
                </q-item>
              </q-collapsible>
            </q-collapsible>
            <q-collapsible icon="fa fa-truck-loading" label="Shipping" sublabel="subtitle">
              <q-item link to="/shipping/pick-ups">
                <q-item-side icon="fa fa-allergies" />
                <q-item-main label="Pick-ups" />
              </q-item>
              <q-item link to="/shipping/delivery">
                <q-item-side icon="fa fa-people-carry" />
                <q-item-main label="Delivery" />
              </q-item>
              <q-item link to="/shipping/transportion">
                <q-item-side icon="fa fa-globe" />
                <q-item-main label="Transportion" />
              </q-item>
            </q-collapsible>
            <q-collapsible icon="fa fa-user-alt" label="Accounting" sublabel="subtitle">
              <q-item link to="/accounting/collecting">
                <q-item-side icon="fa fa-coins" />
                <q-item-main label="Collecting" />
              </q-item>
              <q-item link to="/accounting/balance">
                <q-item-side icon="fa fa-clipboard-list" />
                <q-item-main label="Balance" />
              </q-item>
            </q-collapsible>
            <q-collapsible icon="fa fa-hand-rock" label="Manpower" sublabel="subtitle">
              <q-item link to="/manpower/hr">
                <q-item-side icon="fa fa-hospital-symbol" />
                <q-item-main label="HR" />
              </q-item>
              <q-item link to="/manpower/groups">
                <q-item-side icon="fa fa-hands-helping" />
                <q-item-main label="Groups" />
              </q-item>
              <q-item link to="/manpower/roles-and-access">
                <q-item-side icon="fa fa-book-open" />
                <q-item-main label="Roles & Access" />
              </q-item>
            </q-collapsible>
            <q-collapsible icon="fa fa-project-diagram" label="Products" sublabel="subtitle">
              <q-item link to="/products/create">
                <q-item-side icon="fa fa-plus-circle" />
                <q-item-main label="Create product" />
              </q-item>
              <q-item link to="/products/groups/create">
                <q-item-side icon="fa fa-archive" />
                <q-item-main label="Create group" />
              </q-item>
              <q-item link to="/products/categories/create">
                <q-item-side icon="category" />
                <q-item-main label="Create category" />
              </q-item>
              <q-item link to="/products/specifications/create">
                <q-item-side icon="assignment" />
                <q-item-main label="Create specification" />
              </q-item>
            </q-collapsible>
            <q-item-separator></q-item-separator>
            <q-collapsible icon="fa fa-copy" label="Reporting" sublabel="subtitle">
              <q-item link to="/reporting/report1">
                <q-item-side icon="fa fa-copy" />
                <q-item-main label="Report 1" />
              </q-item>
              <q-item link to="/reporting/report2">
                <q-item-side icon="fa fa-copy" />
                <q-item-main label="Report 2" />
              </q-item>
              <q-item link to="/reporting/report3">
                <q-item-side icon="fa fa-copy" />
                <q-item-main label="Report 3" />
              </q-item>
            </q-collapsible>
          </q-list>
        </q-scroll-area>
      </q-layout-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

      <!-- Footer -->
      <q-layout-footer :dir="$root.layout.dir">
        <q-toolbar :color="$root.theme_color">
          <q-toolbar-title>
            Layout Footer
          </q-toolbar-title>
        </q-toolbar>
      </q-layout-footer>

    </q-layout>
</template>

<script>
  export default {
    data(){
      return {
        showSidebar: true
      }
    },
    methods: {
      convertLayoutDirection() {
        if(this.$root.layout.dir == 'rtl') {
          this.$root.layout.dir = 'ltr'
          this.$root.layout.side_menu_float = 'left'
        } else {
          this.$root.layout.side_menu_float = 'right'
          this.$root.layout.dir = 'rtl'
        }
      }
    }
  }
</script>
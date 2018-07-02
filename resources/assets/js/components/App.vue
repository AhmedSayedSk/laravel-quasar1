<template>
    <q-layout view="hHr LpR lFf">
      <!-- Header -->
      <q-layout-header :dir="dir">
        <!-- First row of header is a QToolbar -->
        <q-toolbar color="black">
          <!-- showLeft is a model attached to left side drawer below -->
          <q-btn
            flat round dense
            @click="showSidebar = !showSidebar"
            icon="menu"
          />

          <q-toolbar-title>
            Commercials
            <span slot="subtitle">Optional subtitle</span>
          </q-toolbar-title>
        </q-toolbar>

        <!-- Second row of header is a QTabs -->
        <q-tabs color="black" :dir="dir">
          <q-route-tab slot="title" icon="view_quilt" to="/test-layout/about" replace hide="icon" label="About" />
          <q-route-tab slot="title" icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="Toolbar" />
          <q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs" />
          <q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer" />
        </q-tabs>
      </q-layout-header>

      <!-- Left Side Drawer -->
      <q-layout-drawer :side="dir_float" v-model="showSidebar">
        <q-list multiline no-border link inset-separator>
          <q-list-header>Main items</q-list-header>
          <q-collapsible icon="fa fa-users" label="Commercials" sublabel="subtitle">
            <q-item link to="/commercials/orders">
              <q-item-side icon="fa fa-box" />
              <q-item-main label="Orders" />
            </q-item>
            <q-item link to="/commercials/invoices">
              <q-item-side icon="fa fa-file-alt" />
              <q-item-main label="Invoices" />
            </q-item>
            <q-item link to="/commercials/traders">
              <q-item-side icon="fa fa-truck-moving" />
              <q-item-main label="Traders" />
            </q-item>
          </q-collapsible>
          <q-collapsible icon="fa fa-truck-loading" label="Shipping" sublabel="subtitle">
            <q-item link to="/shipping/pick-ups">
              <q-item-main label="Pick-ups" />
            </q-item>
            <q-item link to="/shipping/delivery">
              <q-item-main label="Delivery" />
            </q-item>
            <q-item link to="/shipping/transportion">
              <q-item-main label="Transportion" />
            </q-item>
          </q-collapsible>
          <q-collapsible icon="menu" label="Accounting" sublabel="subtitle">
            <q-item link to="/accounting/collecting">
              <q-item-main label="Collecting" />
            </q-item>
            <q-item link to="/accounting/balance">
              <q-item-main label="Balance" />
            </q-item>
          </q-collapsible>
          <q-collapsible icon="menu" label="Manpower" sublabel="subtitle">
            <q-item link to="/manpower/hr">
              <q-item-main label="HR" />
            </q-item>
            <q-item link to="/manpower/groups">
              <q-item-main label="Groups" />
            </q-item>
            <q-item link to="/manpower/roles-and-access">
              <q-item-main label="Roles & Access" />
            </q-item>
          </q-collapsible>
          <q-item-separator></q-item-separator>
          <q-collapsible icon="menu" label="Reporting" sublabel="subtitle">
            <q-item link to="/reporting/report1">
              <q-item-main label="Report 1" />
            </q-item>
            <q-item link to="/reporting/report2">
              <q-item-main label="Report 2" />
            </q-item>
            <q-item link to="/reporting/report3">
              <q-item-main label="Report 3" />
            </q-item>
          </q-collapsible>
        </q-list>
      </q-layout-drawer>

      <!-- sub-routes get injected here: -->
      <q-page-container>
        <router-view />
      </q-page-container>

      <!-- Footer -->
      <q-layout-footer :dir="dir">
        <q-toolbar color="black">
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
        showSidebar: true,
        dir: 'ltr',
        dir_float: 'left'
      }
    }
  }
</script>
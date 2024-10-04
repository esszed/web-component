<template>
  <div class="gov-container">
    <gov-breadcrumbs accessible-label="You are in the following level"
      ><ul>
        <li>
          <gov-icon type="components" name="house-door-fill"></gov-icon
          ><a href="#">Domů</a>
        </li>
        <li>
          <gov-icon type="components" name="chevron-right"></gov-icon
          ><a href="#">Where to go next</a>
        </li>
        <li>
          <gov-icon type="components" name="chevron-right"></gov-icon
          ><a href="#">Czech eGovernment</a>
        </li>
        <li>
          <gov-icon type="components" name="chevron-right"></gov-icon
          ><strong>Czech POINT</strong>
        </li>
      </ul></gov-breadcrumbs
    >

    <gov-container
      ><gov-card
        headline="Design System"
        collapsible="true"
        open="true"
        accessible-label="View more details on the panel content"
        ><h3 slot="headline">Design System</h3>
        <img slot="img" alt="" src="https://picsum.photos/536/240" />A design
        system is a scenario by which a Digital and Information Agency designs
        and develops websites and digital products. The Design System is
        intended to help other teams create digital products more quickly and
        consistently across government.</gov-card
      ></gov-container
    >
    <GovButton
      color="primary"
      type="solid"
      size="m"
      accessible-label="What exactly happens when you click?"
      >Button</GovButton
    >
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  GovButton,
  GovContainer,
  GovBreadcrumbs,
} from "@gov-design-system-ce/vue";
const data = ref("");
</script>
<style lang="scss">
@import "@gov-design-system-ce/styles/lib/tokens.css";
/* General settings. */
@import "@gov-design-system-ce/styles/lib/styles.css";
/* Styles for basic layout and containers. */
@import "@gov-design-system-ce/styles/lib/layout.css";
/* Styles of individual components. */
@import "@gov-design-system-ce/styles/lib/components.css";

// @import "@gov-design-system-ce/fonts/lib/roboto";
</style>

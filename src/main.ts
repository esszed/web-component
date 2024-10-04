// import styles from "./assets/main.css";

import { createApp, defineCustomElement } from "vue";

import { defineCustomElements } from "@gov-design-system-ce/components/loader";

const camelCaseToKebab = (str) => {
  return str
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
};
defineCustomElements(window, {
  ael: (el, eventName, cb, opts) =>
    el.addEventListener(camelCaseToKebab(eventName), cb, opts),
  rel: (el, eventName, cb, opts) =>
    el.removeEventListener(camelCaseToKebab(eventName), cb, opts),
  ce: (eventName, opts) => new CustomEvent(camelCaseToKebab(eventName), opts),
});
import TestWidget from "./components/TestWidget.vue";

const testWidgetEl = defineCustomElement(TestWidget, {
  styles: [""],
});
customElements.define("test-widget", testWidgetEl);

import App from "./App.vue";

const app = createApp(App);

app.mount("#app");

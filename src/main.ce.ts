// import styles from "./assets/main.css";

import {createApp, defineCustomElement} from "vue";

import {defineCustomElements} from "@gov-design-system-ce/components/loader";
import TestWidget from "./components/TestWidget.ce.vue";
import App from "./App.vue";

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

const testWidgetEl = defineCustomElement(TestWidget, {styles: ['@import url("/components.css");', '@import url("/layout.css");', '@import url("/styles.css");']});
customElements.define("test-widget", testWidgetEl);

const app = createApp(App);

app.mount("#app");

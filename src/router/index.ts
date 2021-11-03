import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Producto from "../views/Producto.vue";
import Figuras from "../views/Figuras.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/pregunta3",
    name: "Producto",
    component: Producto,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

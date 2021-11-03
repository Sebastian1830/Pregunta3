<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio Normal</th>
          <th>Precio Mayor</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(producto, idx) of productos" :key="idx">
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.precioNormal }}</td>
          <td>{{ producto.precioMayor }}</td>
          <td>{{ producto.cantidad }}</td>
          <td>{{ producto.total }}</td>
          <td>
            <a @click="remover(producto.id)" class="btn btn-danger">-</a>
            <a @click="agregar(producto.id)" class="btn btn-success ms-2">+</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import { Producto } from "@/models/producto";

export default {
  name: "Producto",
  setup() {
    const productos = ref<Producto[]>([
      {
        id: 1,
        nombre: "A",
        precioNormal: 6,
        precioMayor: 5.5,
        cantidad: 0,
        total: 0,
      },
      {
        id: 2,
        nombre: "B",
        precioNormal: 8.5,
        precioMayor: 7.9,
        cantidad: 0,
        total: 0,
      },
      {
        id: 3,
        nombre: "C",
        precioNormal: 13.2,
        precioMayor: 11.6,
        cantidad: 0,
        total: 0,
      },
    ]);

    function calcularTotal(productID: number) {
      const product = productos.value.filter((producto: Producto) => producto.id === productID)[0]
      if (product !== undefined) product.total = product.cantidad >= 6 ? product.precioMayor * product.cantidad : product.precioNormal * product.cantidad;
    }
    function agregar(productID: number) {
      const select = productos.value.filter((producto: Producto) => producto.id === productID)[0];
      select.cantidad++;
      calcularTotal(productID);
    }
    function remover(productID: number) {
      const select = productos.value.filter((producto: Producto) => producto.id === productID)[0];
      select.cantidad--;
      calcularTotal(productID);
    }

    return { productos, agregar, remover };
  },
};
</script>

<style lang="scss" scoped></style>

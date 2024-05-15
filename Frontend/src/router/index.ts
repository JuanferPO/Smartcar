import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Administracion from '../views/Administracion.vue'
import BuscarVehiculo from '../views/BuscarVehiculo.vue'
import ModificacionBuscar from '../views/ModificacionBuscar.vue'
import DatosVehiculos from '../views/DatosVehiculos.vue'
import EliminarDatos from '../views/EliminarDatos.vue'
import IngresoVehiculo from '../views/IngresoVehiculo.vue'
import Login from '../views/Login.vue'
import ModificacionDatos from '../views/ModificacionDatos.vue'
import ModificacionDatosnuevo from '../views/ModificacionDatosnuevo.vue'
import ModificarVehiculo from '../views/ModificarVehiculo.vue'
import PaginaPrincipal from '../views/PaginaPrincipal.vue'
import Resultado from '../views/Resultado.vue'
import TabsPage from '../views/TabsPage.vue'
import VerTodosLosVehiculos from '../views/VerTodos.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/inicio'
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: Administracion
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: BuscarVehiculo
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: ModificacionBuscar
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: DatosVehiculos
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: EliminarDatos
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: IngresoNuevoVehiculo
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

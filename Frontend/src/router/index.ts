import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Administracion from '../views/Administracion.vue'
import BuscarVehiculo from '../views/BuscarVehiculo.vue'
import ModificacionBuscar from '../views/ModificacionBuscar.vue'
import DatosVehiculo from '../views/DatosVehiculo.vue'
import EliminarVehiculo from '../views/EliminarVehiculo.vue'
import AgregarVehiculo from '../views/AgregarVehiculo.vue'
import Login from '../views/Login.vue'
import ModificacionDatos from '../views/ModificacionDatos.vue'
import ModificacionResultado from '../views/ModificacionResultado.vue'
import ModificarVehiculo from '../views/ModificarVehiculo.vue'
import PaginaPrincipal from '../views/PaginaPrincipal.vue'
import Resultado from '../views/Resultado.vue'
import VerTodos from '../views/VerTodos.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/inicio'
  },
  {
    path: '/admin',
    redirect: '/admin/login'
  },
  {
    path: '/admin/inicio',
    name: 'Inicio de Administración',
    component: Administracion
  },
  {
    path: '/buscar',
    name: 'Búsqueda',
    component: BuscarVehiculo
  },
  {
    path: '/admin/modificar/resultado',
    name: 'Modificar - Resultado de búsqueda',
    component: ModificacionBuscar
  },
  {
    path: '/vehiculo',
    name: 'Datos del vehículo',
    component: DatosVehiculo
  },
  {
    path: '/admin/eliminar',
    name: 'Eliminación del vehículo',
    component: EliminarVehiculo
  },
  {
    path: '/admin/agregar',
    name: 'Agregar Vehículo',
    component: AgregarVehiculo
  },
  {
    path: '/admin/login',
    name: 'Iniciar sesión',
    component: Login
  },
  {
    path: '/admin/modificar',
    name: 'Modificación de datos',
    component: ModificacionDatos
  },
  {
    path: '/admin/modificar/resultado2',
    name: 'Modificar - Resultado de búsqueda',
    component: ModificacionResultado
  },
  {
    path: '/admin/modificar/buscar',
    name: 'Modificar - Búsqueda',
    component: ModificarVehiculo
  },
  {
    path: '/inicio',
    name: 'Página Principal',
    component: PaginaPrincipal
  },
  {
    path: '/resultado',
    name: 'Resultado de búsqueda',
    component: Resultado
  },
  {
    path: '/todos',
    name: 'Todos los Vehículos',
    component: VerTodos
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

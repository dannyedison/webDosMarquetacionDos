import Home from "../pages/Home"
import Servicios from "../pages/Servicios"
import Contactos from "../pages/Contactos"
import Productos from "../pages/Productos"
import AcercaDe from "../pages/AcercaDe"
export let rutas = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/servicios',
        element: <Servicios />
    },
    {
        path: '/contactos',
        element: <Contactos />
    },
    {
        path: '/productos',
        element: <Productos />
    },
    {
        path: '/acercade',
        element: <AcercaDe />
    }
]
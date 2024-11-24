import React from 'react'
import { ShoppingCart, Search, Menu } from 'lucide-react'

const productos = [
  { id: 1, nombre: 'Camiseta Blanca', precio: '29.99', imagen: '/placeholder.svg?height=200&width=200' },
  { id: 2, nombre: 'Jeans Clásicos', precio: '59.99', imagen: '/placeholder.svg?height=200&width=200' },
  { id: 3, nombre: 'Zapatillas Deportivas', precio: '89.99', imagen: '/placeholder.svg?height=200&width=200' },
  { id: 4, nombre: 'Chaqueta de Cuero', precio: '199.99', imagen: '/placeholder.svg?height=200&width=200' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-200">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-900">MiTienda</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <Search className="h-6 w-6" />
              </button>
              <button className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <ShoppingCart className="h-6 w-6" />
              </button>
              <button className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

        <div className=" mx-auto py-6 sm:px-6 lg:px-8">
          {/* Banner */}
          <div className="bg-indigo-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Nuevas Llegadas
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-indigo-100">
                Descubre nuestra última colección de moda.
              </p>
            </div>
          </div>

          {/* Productos */}
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {productos.map((producto) => (
              <div key={producto.id} className="bg-white overflow-hidden shadow rounded-lg">
                <img className="h-48 w-full object-cover" src={producto.imagen} alt={producto.nombre} />
                <div className="px-4 py-4 sm:px-6">
                  <h3 className="text-lg font-medium text-gray-900">{producto.nombre}</h3>
                  <p className="mt-1 text-sm text-gray-500">${producto.precio}</p>
                  <button className="mt-4 w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}


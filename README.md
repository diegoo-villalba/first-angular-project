# 🛍️ Aplicación de práctica de Productos con Angular

Una aplicación web moderna desarrollada con Angular que permite gestionar un catálogo de productos con funcionalidades completas de CRUD (Crear, Leer, Actualizar, Eliminar).

## ✨ Funcionalidades Principales

### 🏠 Página Principal
- **Contador Interactivo**: Incrementar, reducir y reestablecer valores numéricos
- **Saludador Personalizado**: Formulario que captura el nombre y muestra un saludo dinámico
- **Lista de Productos**: Visualización de productos con diseño de tarjetas
- **Gestión de Productos**: Agregar nuevos productos con validación
- **Eliminación de Productos**: Eliminar productos individualmente

### 🎨 Funcionalidades Adicionales
- **Botones Flotantes**: Aparecen automáticamente al hacer scroll
- **Sistema de Avisos**: Mostrar/ocultar mensajes de alerta
- **Cambio de Colores**: Texto dinámico que cambia de color
- **Estados de Carga**: Indicadores visuales durante la carga de datos
- **Diseño Responsive**: Adaptable a diferentes tamaños de pantalla

### 🛣️ Sistema de Rutas
- **Ruta Principal** (`/`): Página de inicio (redirige a productos por el momento)
- **Ruta Productos** (`/productos`): Vista específica de productos
- **Ruta Acerca** (`/acerca`): Información sobre la aplicación

## 🛠️ Tecnologías Utilizadas

- **Angular 17+**: Framework principal
- **TypeScript**: Lenguaje de programación
- **Angular CLI**: Herramientas de desarrollo
- **CSS3**: Estilos modernos con gradientes y animaciones
- **HTML5**: Estructura semántica

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm (incluido con Node.js)
- Angular CLI: `npm install -g @angular/cli`

### Pasos de Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/diegoo-villalba/first-angular-project.git
   cd first-angular-project
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**:
   ```bash
   ng serve
   ```

4. **Abrir en el navegador**:
   ```
   http://localhost:4200
   ```

## 📁 Estructura del Proyecto

```
first-angular-project/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 acerca-component/          # Componente "Acerca de"
│   │   │   ├── acerca-component.ts
│   │   │   ├── acerca-component.html
│   │   │   ├── acerca-component.css
│   │   │   └── acerca-component.spec.ts
│   │   ├── 📁 model/                     # Modelos de datos
│   │   │   └── producto.ts               # Interfaz Producto
│   │   ├── 📁 producto-card/             # Componente tarjeta de producto
│   │   │   ├── producto-card.ts
│   │   │   ├── producto-card.html
│   │   │   ├── producto-card.css
│   │   │   └── producto-card.spec.ts
│   │   ├── 📁 producto-home/             # Componente página principal
│   │   │   ├── producto-home.ts
│   │   │   ├── producto-home.html
│   │   │   ├── producto-home.css
│   │   │   └── producto-home.spec.ts
│   │   ├── app.ts                        # Componente principal
│   │   ├── app.html                      # Template principal
│   │   ├── app.css                       # Estilos principales
│   │   ├── app.routes.ts                 # Configuración de rutas
│   │   ├── app.config.ts                 # Configuración de la app
│   │   ├── producto-service.ts           # Servicio de productos
│   │   └── producto-service.spec.ts      # Tests del servicio
│   ├── index.html                        # HTML principal
│   ├── main.ts                           # Punto de entrada
│   └── styles.css                        # Estilos globales
├── 📁 public/                            # Archivos públicos
│   └── favicon.ico                       # Icono de la aplicación
├── angular.json                          # Configuración Angular CLI
├── package.json                          # Dependencias y scripts
├── tsconfig.json                         # Configuración TypeScript
└── README.md                             # Este archivo
```

## 🎯 Características Técnicas

### **Componentes Principales**
- **AppComponent**: Componente raíz con navegación y funcionalidades principales
- **ProductoHomeComponent**: Vista específica para gestión de productos
- **ProductoCardComponent**: Tarjeta individual para mostrar productos
- **AcercaComponent**: Información sobre la aplicación

### **Servicios**
- **ProductoService**: Maneja toda la lógica de negocio relacionada con productos
  - Obtener productos
  - Agregar productos
  - Eliminar productos
  - Simulación de carga asíncrona

### **Modelos de Datos**
```typescript
interface Producto {
  nombre: string;
  precio: number;
}
```

### **Funcionalidades Avanzadas**
- **Scroll Detection**: Las botoneras aparecen automáticamente al hacer scroll
- **Animaciones CSS**: Efectos visuales suaves y profesionales
- **Validación de Formularios**: Validación en tiempo real
- **Estados de Carga**: Indicadores visuales durante operaciones asíncronas

## 🎨 Diseño y UX

### **Características de Diseño**
- **Diseño Moderno**: Gradientes, sombras y efectos visuales atractivos
- **Responsive**: Adaptable a móviles, tablets y desktop
- **Animaciones**: Transiciones suaves y efectos hover
- **Paleta de Colores**: Colores modernos y profesionales
- **Tipografía**: Fuentes legibles y jerarquía visual clara

### **Experiencia de Usuario**
- **Navegación Intuitiva**: Interfaz clara y fácil de usar
- **Feedback Visual**: Confirmaciones visuales para todas las acciones
- **Estados de Carga**: Indicadores claros durante operaciones
- **Accesibilidad**: Estructura semántica y contraste adecuado

```

## 📦 Scripts Disponibles

```bash
# Desarrollo
ng serve                    # Servidor de desarrollo
ng serve --open            # Abrir automáticamente en el navegador

# Construcción
ng build                   # Construir para producción
ng build --watch           # Construir en modo watch

```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de uso educativo y personal.

## 👨‍💻 Autor

**Diego A. Villalba**
- Proyecto de práctica en Angular
- Desarrollado como parte de capacitación personal

---

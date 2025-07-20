# 🛍️ Aplicación de práctica de Productos con Angular

Una aplicación web moderna desarrollada con Angular que permite gestionar un catálogo de productos con funcionalidades completas de CRUD (Crear, Leer, Actualizar, Eliminar) y una interfaz de usuario moderna y atractiva.

## ✨ Funcionalidades Principales

### 🏠 Página Principal
- **Contador Interactivo**: Incrementar, reducir y reestablecer valores numéricos
- **Saludador Personalizado**: Formulario centrado que captura el nombre y muestra un saludo dinámico
- **Lista de Productos**: Visualización de productos con diseño de tarjetas modernas
- **Gestión de Productos**: Agregar nuevos productos con validación
- **Eliminación de Productos**: Eliminar productos individualmente
- **Indicador de Precios Altos**: Los productos con precio superior a $500 se muestran en rojo con animación

### 🎨 Funcionalidades Adicionales
- **Botones Flotantes**: Aparecen automáticamente al hacer scroll con efectos de glassmorphism
- **Sistema de Avisos**: Mostrar/ocultar mensajes de alerta con animaciones
- **Cambio de Colores**: Texto dinámico que cambia de color con gradientes animados
- **Estados de Carga**: Indicadores visuales durante la carga de datos con efecto shimmer
- **Diseño Responsive**: Adaptable a diferentes tamaños de pantalla
- **Navegación Moderna**: Barra de navegación con efectos visuales y animaciones

### 🛣️ Sistema de Rutas
- **Ruta Principal** (`/`): Página de inicio (redirige a productos)
- **Ruta Productos** (`/productos`): Vista específica de productos
- **Ruta Acerca** (`/acerca`): Información sobre la aplicación con diseño moderno

## 🛠️ Tecnologías Utilizadas

- **Angular 17+**: Framework principal
- **TypeScript**: Lenguaje de programación
- **Angular CLI**: Herramientas de desarrollo
- **CSS3**: Estilos modernos con gradientes, animaciones y efectos glassmorphism
- **HTML5**: Estructura semántica
- **Angular Router**: Sistema de navegación
- **Angular Forms**: Gestión de formularios

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
│   │   ├── 📁 acerca-component/          # Componente "Acerca de" con diseño moderno
│   │   │   ├── acerca-component.ts
│   │   │   ├── acerca-component.html
│   │   │   ├── acerca-component.css
│   │   │   └── acerca-component.spec.ts
│   │   ├── 📁 navbar-component/          # Barra de navegación moderna
│   │   │   ├── navbar-component.ts
│   │   │   ├── navbar-component.html
│   │   │   ├── navbar-component.css
│   │   │   └── navbar-component.spec.ts
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
- **ProductoCardComponent**: Tarjeta individual para mostrar productos con indicador de precios altos
- **AcercaComponent**: Información sobre la aplicación con diseño moderno
- **NavbarComponent**: Barra de navegación con efectos visuales

### **Servicios**
- **ProductoService**: Maneja toda la lógica de negocio relacionada con productos
  - Obtener productos con simulación de carga asíncrona
  - Agregar productos con validación
  - Eliminar productos
  - Gestión de estados de carga

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
- **Indicador de Precios**: Los productos caros (>$500) se destacan en rojo
- **Efectos Glassmorphism**: Diseño moderno con efectos de cristal
- **Gradientes Animados**: Efectos visuales atractivos

## 🎨 Diseño y UX

### **Características de Diseño**
- **Diseño Moderno**: Gradientes, sombras, efectos glassmorphism y animaciones
- **Responsive**: Adaptable a móviles, tablets y desktop
- **Animaciones**: Transiciones suaves, efectos hover y animaciones de entrada
- **Paleta de Colores**: Colores modernos con gradientes profesionales
- **Tipografía**: Fuentes legibles y jerarquía visual clara
- **Efectos Visuales**: Shimmer, pulse, fade-in y efectos de partículas

### **Experiencia de Usuario**
- **Navegación Intuitiva**: Interfaz clara con barra de navegación moderna
- **Feedback Visual**: Confirmaciones visuales para todas las acciones
- **Estados de Carga**: Indicadores claros durante operaciones
- **Accesibilidad**: Estructura semántica y contraste adecuado
- **Interactividad**: Efectos hover y animaciones que mejoran la experiencia

### **Componentes de Diseño**
- **Navbar**: Barra de navegación con gradientes y efectos de partículas
- **Product Cards**: Tarjetas con indicadores de precio y efectos hover
- **Acerca Component**: Diseño moderno con efectos glassmorphism
- **Formularios**: Campos centrados con validación visual
- **Botones Flotantes**: Efectos de glassmorphism y animaciones

## 📦 Scripts Disponibles

```bash
# Desarrollo
ng serve                    # Servidor de desarrollo
ng serve --open            # Abrir automáticamente en el navegador

# Construcción
ng build                   # Construir para producción
ng build --watch           # Construir en modo watch

```

## 🎨 Características de Diseño Específicas

### **Efectos Visuales Implementados**
- **Glassmorphism**: Efectos de cristal en navbar y componentes
- **Gradientes Animados**: Colores que cambian dinámicamente
- **Shimmer Effect**: Efecto de brillo en elementos de carga
- **Pulse Animation**: Animación de pulso para precios altos
- **Hover Effects**: Efectos al pasar el mouse sobre elementos
- **Particle Effects**: Efectos de partículas en la navegación

### **Responsive Design**
- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: Adaptación automática a diferentes tamaños
- **Flexible Layout**: Uso de Flexbox y Grid para layouts adaptables

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
- Enfocado en diseño moderno y experiencia de usuario

---

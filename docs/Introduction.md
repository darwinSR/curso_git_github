# Curso de _Git_ & _GitHub_

## 1. GIT

Git es un sistema de control de versiones distribuido de código abierto. Fue creado por Linus Torvalds en 2005. Git rastrea y maneja cambios en los archivos, permitiendo a los desarrolladores colaborar en proyectos de software. Cada desarrollador puede tener una copia completa del proyecto, incluyendo el historial completo de cambios, lo que permite trabajar de manera descentralizada y sincronizar cambios entre diferentes copias del repositorio.

## 1.1 Ventajas de GIT

* Es el estándar actual.
* Código colaborativo, versionado y distribuido.
* Recuperación de archivos.
* Mayor control.
* Shorcuts y plugins.
* Mejora la productividad.

## 1.2 Configuración inicial

**_Configurando Git por primera vez:_**

```bash
git --version
git config --global user.name "Darwin Santil"
git config --global user.email santildarwin@gmail.com

# colores y letras de los estados del archivo en el flujo de git
git config --global user.ui true

git config --global init.defaultBranch main
git config --list

# asignando visual studio code como editor de configuración de git
git config --global core.editor "code --wait"
git config --global -e

# para estandarizar los saltos de línea en windows
git config --global core.autocrlf true

# para estandarizar los saltos de línea en linux/mac
git config --global core.autocrlf input

# ver todas las opciones de la configuración en la terminal
git config -h

# ver todas las opciones de la configuración en el navegador
git help config
```

**_Git Help:_** El comando `git help` en Git se utiliza para mostrar la documentación del sistema de ayuda de Git. Puedes usarlo para obtener más información sobre cualquier comando de Git.

Por ejemplo, si quieres saber más sobre el comando `git commit`, puedes escribir `git help commit`. Esto abrirá la página de manual de `git commit` en tu navegador o en la terminal, dependiendo de tu configuración.

Además, puedes usar `git help -a` para ver una lista de todos los comandos de Git disponibles, y `git help -g` para ver una lista de conceptos de Git.

```bash
# ayuda en la terminal
git comando -h
# ayuda en el navegador
git help comando
```

## 1.3 Inicializar GIT en un directorio local

Para inicializar Git en una carpeta local, debes abrir la terminal, navegar hasta la carpeta donde deseas inicializar Git ( se sugiere crear el archivo .gitignore y README.md ) y luego ejecutar el comando `git init`. Aquí te dejo los pasos en código:

```bash
# Navega hasta la carpeta donde deseas inicializar Git
cd /ruta/a/tu/carpeta
touch .gitignore
touch README.md

# Inicializa Git
git init
```

Para eliminar un repositorio Git de una carpeta local, necesitas eliminar la carpeta oculta `.git` que se crea cuando inicializas Git. Puedes hacer esto con el comando `rm -rf .git` en la terminal. Luego, puedes inicializar un nuevo repositorio Git con `git init`. Aquí están los pasos en código:

```bash
# Navega hasta la carpeta donde deseas eliminar el repositorio Git
cd /ruta/a/tu/carpeta

# Elimina el repositorio Git
rm -rf .git

# Inicializa un nuevo repositorio Git
git init
```

Por favor, ten cuidado al usar `rm -rf`, ya que este comando eliminará permanentemente la carpeta `.git` y todo su contenido.

_Algunos comandos de la terminal:_

> **cd:** El comando cd en la terminal se utiliza para cambiar el directorio actual. cd es la abreviatura de "Change Directory". Puedes usarlo para navegar a través de las carpetas en tu sistema de archivos.
>
> **touch:** El comando touch en la terminal se utiliza para crear un nuevo archivo vacío. Si el archivo ya existe, touch actualizará la hora de la última modificación del archivo a la hora actual.
>
> **mkdir:** El comando mkdir en la terminal se utiliza para crear un nuevo directorio. mkdir es la abreviatura de "Make Directory".
>
> **rm:** El comando rm en la terminal se utiliza para eliminar archivos y directorios. rm es la abreviatura de "remove". Por ejemplo, si tienes un archivo llamado archivo.txt en tu directorio actual y quieres eliminarlo, usarías el comando rm archivo.txt. Además, puedes usar rm -r para eliminar un directorio y todos sus contenidos, y rm -f para forzar la eliminación de archivos sin preguntar. Por favor, ten cuidado al usar rm, especialmente con las opciones -r y -f, ya que este comando eliminará permanentemente los archivos y directorios especificados.
>
> **ls:** El comando ls en la terminal se utiliza para listar los archivos y directorios en el directorio actual. ls es la abreviatura de "list". Por ejemplo, si estás en tu directorio actual y quieres ver todos los archivos y directorios que contiene, simplemente escribirías ls y presionarías Enter. Además, puedes usar ls -l para ver los detalles de los archivos y directorios, como los permisos, el número de enlaces, el propietario, el grupo, el tamaño en bytes y la hora de la última modificación. Y puedes usar ls -a para mostrar también los archivos y directorios ocultos.

---
[Volver a ruta de aprendizaje](../README.md#ruta-de-aprendisaje)

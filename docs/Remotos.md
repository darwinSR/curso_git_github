# Curso de _Git_ & _GitHub_

## 6. Remotos

Los remotos en Git son versiones de tu repositorio que se encuentran alojadas en Internet o en alguna otra red. Son útiles para trabajar en equipo y para tener una copia de seguridad de tu trabajo en un lugar seguro fuera de tu máquina local.

Por lo general, "origin" es el nombre predeterminado que Git da al servidor desde donde clonaste el repositorio. Pero puedes tener varios remotos si lo deseas, y puedes nombrarlos como quieras.

Puedes ver tus remotos con el comando `git remote`. Si añades `-v` al final (`git remote -v`), Git te mostrará las URLs que ha asociado con el nombre para ser capaz de leer y escribir en esos remotos.

Puedes añadir nuevos remotos con el comando `git remote add [nombre] [url]`, y puedes eliminarlos con `git remote remove [nombre]`.

En resumen, los remotos son como marcadores a otros repositorios a los que puedes hacer `push` (enviar tus cambios) o desde los que puedes hacer `pull` (recibir cambios).

```bash
# muestra los orígenes remotos del repositorio
git remote

# muestra los orígenes remotos con detalle
git remote -v

# agregar un orígen remoto
git remote add nombre-orígen https://github.com/usuario/repositorio.git

# renombrar un orígen remoto
git remote rename nombre-viejo nombre-nuevo

# eliminar un orígen remoto
git remote remove nombre-orígen

# descargar una rama remota a local diferente a la principal
git checkout --track -b rama-remota origin/rama-remota
```

---
[Volver a ruta de aprendizaje](../README.md#ruta-de-aprendisaje)

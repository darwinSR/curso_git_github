# Curso de _Git_ & _GitHub_

## 3. Ramas

Las ramas en Git son esencialmente una forma de aislar tus cambios sin afectar a otros. Son una característica central de Git y representan una instantánea independiente de los cambios.

Cuando creas una rama en tu proyecto, estás creando un entorno donde puedes probar nuevas ideas. Los cambios que haces en una rama no afectan a la rama main, por lo que estás libre de experimentar sin temor a dañar tu proyecto.

Las ramas son también una forma eficaz de desarrollar funcionalidades y corregir errores. Cada nueva característica o corrección de errores puede desarrollarse en su propia rama, lo que permite un desarrollo paralelo. Una vez que la característica está completa o el error está corregido, esa rama puede ser fusionada de nuevo en la rama main.

Puedes crear, borrar, fusionar y mover entre ramas con facilidad en Git, lo que hace que trabajar con ramas sea una parte esencial del flujo de trabajo de Git.

## 3.1 Master y Main

En Git, tanto "master" como "main" son nombres comúnmente utilizados para la rama principal de un repositorio. Esta es la rama donde se encuentra la versión "oficial" del proyecto y es la que se despliega a producción.

Históricamente, "master" ha sido el nombre predeterminado para esta rama principal en Git. Sin embargo, recientemente, tanto GitHub como otros servicios de alojamiento de código y la propia herramienta Git han cambiado el nombre predeterminado de la rama principal a "main" para usar un lenguaje más inclusivo.

Por lo tanto, si ves "master" o "main" en un repositorio Git, generalmente se refieren a la misma idea: la rama principal del repositorio. Sin embargo, el nombre exacto puede variar dependiendo de cuándo se creó el repositorio y qué convenciones de nomenclatura se estén utilizando.

> Para crear la rama `main` y asegurar que sea la rama principal debes ejecutar esta linea de comando antes del añadir el origen remoto:

```bash
git branch -M main
```

> Para remplazar la rama `master` por `main` en GitHub:

```bash
# Paso 1
# Crea la rama local main y pásale el historial de la rama master
git branch -m master main


# Paso 2
# Haz un push de la nueva rama local main en el repositorio remoto de GitHub
git push -u origin main


# Paso 3
# Cambia el HEAD actual a la rama main
git symbolic-ref refs/remotes/origin/HEAD refs/remotes/origin/main
```

Despues de esto debes Cambia la rama default de master a main en tu repositorio de GitHub .

Para hacerlo, sigue las instrucciones de este [enlace](https://docs.github.com/en/github/administering-a-repository/setting-the-default-branch).

Luego, por preferencia puedes eliminar la rama `master` en tu remoto

```bash
# Elimina la rama master del repositorio remoto
git push origin --delete master
```

## 3.2 Gestion de ramas locales

Una rama nos permite aislar una nueva funcionalidad en nuestro código que después podremos añadir a la versión principal.

**_Git branch:_** El comando `git branch` en Git se utiliza para gestionar las ramas en tu repositorio. Aquí hay algunas formas en las que puedes usar `git branch`:

* `git branch`: Muestra una lista de todas las ramas locales en tu repositorio. La rama en la que te encuentras actualmente estará marcada con un asterisco.
* `git branch <nombre>`: Crea una nueva rama con el nombre que especifiques.
* `git branch -d <nombre>`: Elimina la rama con el nombre que especifiques. Git te impedirá eliminar una rama que no haya sido fusionada.
* `git branch -D <nombre>`: Fuerza la eliminación de la rama con el nombre que especifiques, incluso si no ha sido fusionada.
* `git branch -m <nombre_viejo> <nombre_nuevo>`: Cambia el nombre de una rama.
* `git branch -a`: Muestra una lista de todas las ramas locales y remotas.
* `git branch -r`: Muestra una lista de todas las ramas remotas.

Por ejemplo, si quieres crear una nueva rama llamada `feature`, cambiar a esa rama, hacer algunos commits, y luego volver a la rama `main`, podrías hacerlo con los siguientes comandos:

```bash
# Crea una nueva rama llamada 'feature'
git branch feature

# Cambia a la rama 'feature'
git checkout feature

# Haz algunos cambios y commitéalos...

# Cambia de nuevo a la rama 'main'
git checkout main
```

Por favor, ten en cuenta que `git branch` solo crea o elimina ramas. Para cambiar entre ramas, necesitas usar `git checkout`.

**_Git Checkout:_** El comando `git checkout` en Git se utiliza principalmente para cambiar de una rama a otra en tu repositorio. Sin embargo, también tiene otras funcionalidades dependiendo de las banderas que utilices. Aquí hay algunas formas en las que puedes usar `git checkout`:

* `git checkout <nombre_rama>`: Cambia a la rama especificada.
* `git checkout -b <nombre_rama>`: Crea una nueva rama y cambia a ella en un solo paso.
* `git checkout -- <nombre_archivo>`: Descarta los cambios en el archivo especificado, volviendo al estado del último commit.
* `git checkout <commit> <nombre_archivo>`: Actualiza el archivo especificado al estado de un commit específico.
* `git checkout <commit>`: Cambia el estado del repositorio al de un commit específico. Esto te pone en un estado "detached HEAD", lo que significa que no estás en ninguna rama.

Por ejemplo, si quieres crear una nueva rama llamada `feature` y cambiar a ella, podrías hacerlo con el siguiente comando:

```bash
# Crea una nueva rama llamada 'feature' y cambia a ella
git checkout -b feature
```

Por favor, ten en cuenta que `git checkout` puede ser destructivo para tus cambios no guardados. Si tienes cambios no guardados que no quieres perder, deberías hacer commit de esos cambios o guardarlos con `git stash` antes de usar `git checkout`.

## 3.3 Gestion de ramas remotas

**_Upload local branch to the remote repository:_** Para subir una rama local a tu repositorio remoto, puedes usar el comando `git push`. Necesitarás especificar el nombre del repositorio remoto (por lo general, `origin`) y el nombre de la rama que deseas subir. Si la rama no existe en el repositorio remoto, este comando la creará. Aquí está el comando que necesitas:

```bash
git push -u origin nombre_de_la_rama
```

Reemplaza `nombre_de_la_rama` con el nombre de la rama que deseas subir. La opción `-u` establece la rama remota especificada como la rama de seguimiento para la rama local actual. Esto significa que en el futuro, puedes hacer `git push` y `git pull` sin especificar la rama, ya que Git sabrá a qué rama remota te refieres.

**_Delete a remote branch:_** Para eliminar una rama en el repositorio remoto, puedes usar el comando `git push` con la opción `--delete` (o `-d` para abreviar). Necesitarás especificar el nombre del repositorio remoto (por lo general, `origin`) y el nombre de la rama que deseas eliminar. Aquí está el comando que necesitas:

```bash
git push origin --delete nombre_de_la_rama
```

Reemplaza `nombre_de_la_rama` con el nombre de la rama que deseas eliminar. Este comando eliminará la rama especificada del repositorio remoto.

## 3.4 fusiones

Para hacer una fusión necesitamos:

* Situarnos en la rama que se quedará con el contenido fusionado.
* Fusionar.

Cuando se fusionan ramas se pueden dar 2 resultados diferentes:

* **_Fast-Forward:_** La fusión se hace automática, no hay conflictos por resolver.
* **_Manual Merge:_** La fusión hay que hacerla manual, para resolver conflictos de duplicación de contenido.

```bash
# nos cambiamos a la rama principal que quedará de la fusión
git checkout rama-principal

# ejecutamos el comando merge con la rama secundaria a fusionar
git merge rama-secundaria
```

---
[Volver a ruta de aprendizaje](../README.md#ruta-de-aprendisaje)

# Curso de _Git_ & _GitHub_

## 4. Registro de Historial

El registro del historial es una de las características más poderosas de Git. Permite a los desarrolladores ver una lista de todos los cambios realizados en un repositorio, incluyendo quién hizo cada cambio, cuándo se hizo y qué archivos se modificaron.

Además, Git permite a los desarrolladores moverse a cualquier punto en el historial del repositorio. Esto puede ser útil para muchas cosas, como encontrar cuándo se introdujo un bug, revisar el código antiguo, o revertir cambios.

En resumen, el registro del historial de Git es una herramienta esencial para entender el desarrollo de un proyecto y colaborar eficazmente con otros.

**_Git Log:_** El comando `git log` en Git se utiliza para ver el historial de commits en un repositorio. Este comando muestra una lista de todos los commits realizados en el repositorio, en orden desde el más reciente hasta el más antiguo.

Por defecto, `git log` muestra el hash del commit, el autor del commit, la fecha del commit y el mensaje del commit. Esto proporciona una visión detallada de cada cambio realizado en el repositorio.

Además, `git log` tiene muchas opciones que puedes usar para personalizar la salida. Algunas de las más comunes incluyen:

* `--oneline`: Muestra cada commit en una sola línea, lo que puede ser útil para obtener una visión general rápida del historial.
* `--graph`: Muestra una representación gráfica ASCII del historial del repositorio, lo que puede ser útil para entender la estructura de las ramas y merges.
* `--stat`: Muestra estadísticas de los cambios en cada commit, como qué archivos fueron modificados y cuántas líneas fueron añadidas o eliminadas.
* `--p` o `--patch`: Muestra el diff introducido en cada commit, lo que puede ser útil para entender exactamente qué cambios se hicieron.

En resumen, `git log` es una herramienta esencial para entender el historial de cambios en un repositorio de Git.

```bash
git log

# muestra en una sola línea por cambio
git log --oneline

# guarda el log en la ruta y archivo que especifiquemos
git log > commits.txt

# muestra el historial con el formato que indicamos
git log --pretty=format:"%h - %an, %ar : %s"

# cambiamos la n por cualquier número entero y mostrará los n cambios recientes
git log -n

# muestra los cambios realizados después de la fecha especificada
git log --after="2019-07-07 00:00:00"

# muestra los cambios realizados antes de la fecha especificada
git log --before="2019-07-08 00:00:00"

# muestra los cambios realizados en el rango de fecha especificado
git log --after="2019-07-07 00:00:00" --before="2019-07-08 00:00:00"

# muestra una gráfica del historial de cambios, rama y fusiones
git log --oneline --graph --all

# muestra todo el registro de acciones del log
# incluyendo inserciones, cambios, eliminaciones, fusiones, etc.
git reflog

# diferencias entre el Working Directory y el Staging Area
git diff
```

**_Git Commit:_** El comando `git commit` se utiliza para guardar tus cambios en el repositorio. Este comando crea un nuevo commit con los cambios que hayas añadido al área de preparación con `git add`. Cada commit tiene un mensaje asociado que describe los cambios realizados.

Aquí están algunas de las opciones más comunes que puedes usar con `git commit`:

* `-m "mensaje"`: Permite especificar el mensaje del commit directamente en la línea de comandos. Por ejemplo:

```bash
git commit -m "Corregido error de tipografía"
```

* `-a` o `--all`: Incluye todos los cambios en archivos rastreados en el commit, incluso si no los has añadido al área de preparación con `git add`. Por ejemplo:

```bash
git commit -a -m "Actualizados todos los archivos"
```

* `--amend`: Modifica el último commit. Esto puede ser útil si cometiste un error en tu último commit y quieres corregirlo sin crear un nuevo commit. Por ejemplo:

```bash
git commit --amend -m "Mensaje corregido"
```

* `-S` o `--gpg-sign`: Firma el commit con tu clave GPG. Esto puede ser útil para verificar la autenticidad de tus commits. Por ejemplo:

```bash
git commit -S -m "Commit firmado"
```

Recuerda que debes tener cuidado al usar algunas de estas opciones, especialmente `--amend`, ya que puede alterar el historial de tu repositorio.

```bash
# sin editar el mensaje del último commit
git commit --amend --no-edit

# editando el mensaje del último commit
git commit --amend -m "nuevo mensaje para el último commit"

# eliminar el último commit
git reset --hard HEAD~1
```

Podemos desplazarnos en el historial del repositorio hacia atrás o adelante en cambios o ramas , sin afectar el repositorio como tal.

```bash
# cambiar a una rama
git checkout nombre-rama

# cambiar a un commit en particular
git checkout id-commit
```

---
[Volver a ruta de aprendizaje](../README.md#ruta-de-aprendisaje)

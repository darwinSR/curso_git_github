# Curso de _Git_ & _GitHub_

## 2. Flujo básico de GIT & GitHub

![Flujo de Git & GitHub](https://jonmircha.com/img/blog/git-flow.png)

**_git add:_** El comando `git add` en Git se utiliza para agregar cambios en los archivos del directorio de trabajo al área de preparación (también conocida como índice) para Git. Es el primer paso en el flujo de trabajo básico de Git.

Aquí están las banderas más comunes que puedes usar con `git add`:

* **.**: Agrega todos los cambios en el directorio actual al área de preparación.

```bash
git add .
```

* **-A** o **--all**: Agrega todos los cambios en todo el repositorio al área de preparación.

```bash
git add -A
```

* **-u** o **--update**: Actualiza o elimina los archivos rastreados en el índice en función de su estado en el directorio de trabajo.

```bash
git add -u
```

* **-n** o **--dry-run**: No agrega realmente los archivos, solo muestra qué archivos serían agregados.

```bash
git add -n
```

* **-f** o **--force**: Permite agregar archivos ignorados.

```bash
git add -f myfile.txt
```

* **-p** o **--patch**: Permite seleccionar interactivamente fragmentos de cambios en los archivos rastreados para agregar al índice. Esto te da la oportunidad de dividir un cambio en varios commits.

```bash
git add -p
```

Por ejemplo, si modificas un archivo llamado `archivo.txt` y quieres que Git rastree los cambios, usarías el comando `git add archivo.txt`. Esto significa que los cambios en `archivo.txt` están listos para ser incluidos en el próximo commit.

**_git commit:_** El comando git commit en Git se utiliza para guardar tus cambios en el repositorio local. Este comando toma los cambios que has agregado al área de preparación con git add y los guarda en el repositorio con un mensaje de commit que describe los cambios que has realizado. Por ejemplo, si has agregado cambios con git add y quieres guardarlos con un mensaje que diga "Corregidos errores de tipografía", usarías el comando git commit -m "Corregidos errores de tipografía". Es importante notar que git commit solo guarda los cambios en tu repositorio local. Para compartir estos cambios con otros o con un repositorio remoto, necesitarías usar git push.

**_git remote:_** El comando `git remote` en Git se utiliza para gestionar las conexiones a repositorios remotos. Aquí hay algunas formas en las que puedes usar `git remote`:

* `git remote -v`: Muestra una lista de los repositorios remotos que tienes configurados.
* `git remote add <nombre> <url>`: Añade un nuevo repositorio remoto con el nombre y la URL que especifiques.
* `git remote remove <nombre>`: Elimina la conexión a un repositorio remoto.
* `git remote rename <nombre_actual> <nuevo_nombre>`: Cambia el nombre de un repositorio remoto.
* `git remote set-url <nombre> <nueva_url>`: Cambia la URL de un repositorio remoto.

Por ejemplo, si tienes un repositorio en GitHub y quieres conectar tu repositorio local a él, podrías usar `git remote add origin <url_del_repositorio_en_github>`. Luego, podrías usar `git push origin master` para enviar tus cambios al repositorio de GitHub.

**_git push:_** El comando git push en Git se utiliza para enviar los cambios que has hecho en tu repositorio local a un repositorio remoto. Es la forma de compartir tus commits con otros. Por ejemplo, si has realizado commits en tu repositorio local y quieres enviar esos cambios a tu repositorio remoto en GitHub, usarías el comando git push origin master, donde origin es el nombre predeterminado que Git da al repositorio remoto desde el que clonaste, y master es la rama que estás empujando. Es importante notar que git push solo envía los commits que has hecho en tu rama local al repositorio remoto. No sincroniza los cambios. Si hay cambios en el repositorio remoto que no tienes en tu repositorio local, necesitarías usar git pull para traer esos cambios a tu repositorio local. La bandera `-u` en git push se utiliza para establecer el seguimiento de la rama. `-u` es una abreviatura de `--set-upstream`. Cuando haces git push `-u` origin `<branch>`, estás diciendo a Git que quieres empujar los cambios a la rama `<branch>` en el repositorio remoto origin, y también quieres que tu rama local `<branch>` siga a la rama remota. Esto significa que, en el futuro, puedes simplemente escribir git push o git pull sin especificar la rama, y Git sabrá qué rama remota corresponde a tu rama local actual. Por ejemplo, si estás en la rama feature y haces `git push -u origin feature`, la próxima vez que quieras empujar los cambios mientras estás en la rama feature, puedes simplemente hacer git push.

**_git pull:_** El comando `git pull` en Git se utiliza para actualizar tu repositorio local con los datos del repositorio remoto. `git pull` es esencialmente una combinación de `git fetch`, que recupera los cambios recientes del repositorio remoto, y `git merge`, que fusiona esos cambios en tu rama actual.

Aquí hay algunas banderas que puedes usar con `git pull`:

* `git pull --rebase`: En lugar de hacer una fusión después de recuperar los cambios, hace una rebase. Esto puede resultar en un historial de commits más limpio.
* `git pull --no-commit`: No hace un commit automáticamente después de la fusión.
* `git pull --quiet`: No muestra el output de la operación.
* `git pull --verbose`: Muestra más detalles sobre lo que está haciendo el comando.
* `git pull --progress`: Muestra el progreso de la operación.
* `git pull --all`: Recupera todas las ramas del repositorio remoto.
* `git pull --allow-unrelated-histories`: Permite la fusión de historias no relacionadas.

Aquí está un ejemplo de cómo usar `git pull` con la bandera `--rebase`:

```bash
# Recupera los cambios del repositorio remoto y hace una rebase en lugar de una fusión
git pull --rebase origin main
```

Este comando asume que estás trabajando en la rama `main`. Si estás trabajando en una rama diferente, reemplaza `main` con el nombre de tu rama.

## 2.2 Estados del flujo

1. **_Untracked_**: El archivo es nuevo, Git no lo ha visto antes.
2. **_Modified_**: Has hecho cambios en el archivo que Git aún no ha registrado.
3. **_Staged_**: Has marcado el archivo modificado en su versión actual para que vaya en tu próximo commit.
4. **_Committed_**: Los cambios en el archivo han sido guardados de manera segura en tu repositorio local.

## 2.3 Areas de trabajo

El flujo de Git, consta de tres estados locales, es decir en la computadora donde se esta trabajando y uno más de forma remota cuando accedemos al codigo centralizado en plataformas como GitHub, Gitlab, Bitbucket, etc.

Dichos estados son modified, staged, committed y remote. A cada uno de ellos le corresponde un área de trabajo:

* **_Working Directory:_** Es el área correspondiente al estado modified y es la carpeta local de tu computadora donde almacenas los archivos de tu proyecto.

* **_Staging Area:_** Es el área correspondiente al estado staged también se le llama index por que es el área donde git indexa y agrega los cambios realizados en los archivos previos a comprometerlos en su registro.

* **_Local Repository:_** Es el área correspondiente al estado committed, donde los cambios ya se han registrado en el repositorio de git también se le llama HEAD por que indica en qué cambio se encuentra el puntero del repositorio.

* **_Remote Repository:_** Es el área correspondiente al estado remote y es el directorio remoto donde almacenamos los archivos del proyecto en alguna plataforma web como GitHub, GitLab, BitBucket. Git denomina origin al repositorio remoto.

```bash
# agregar los cambios de un archivo al staged
git add archivo/directorio
# agregar todos los cambios de todos los archivos al staged
git add .


# los cambios son comprometidos en el repositorio
# debes escribir el mensaje del cambio
# cuando se abra el archivo de configuración
# al terminar guarda y cierra el archivo
# para que los cambios tengan efecto
git commit
# es un shortcut del comando anterior
# escribes y confirmas el mensaje del cambio en un sólo paso
git commit -m "mensaje descriptivo del cambio"


# se agrega el origen remoto de tu repositorio de GitHub
git remote add origin https://github.com/usuario/repositorio.git
# la primera vez que vinculamos el repositorio remoto con el local
git push -u origin master
# para las subsecuentes actualizaciones, sino cambias de rama
git push

#para descargar los cambios del repositorio remoto al local
git pull
```

## 2.4 Ignorar archivos

En el archivo .gitignore incluimos todo lo que NO queramos incluir en nuestro repositorio. Lo podemos crear manualmente o con gitignore.io

```bash
# esto es un comentario
archivo.ext
carpeta
/archivo_desde_raiz.ext
# ignorar todos los archivos que terminen en .log
*.log
# excepto production.log
!production.log
# ignorar los archivos terminados en .txt dentro de la carpeta doc,
# pero no en sus subcarpetas
doc/*.txt
# ignorar todos los archivos terminados en .txt dentro de la carpeta doc
# y también en sus subcarpetas
doc/**/*.txt
```

## 2.5 Clonar repositorio

Clonar un repositorio en GitHub sirve para crear una copia local de un repositorio que está alojado en GitHub (o cualquier otro servicio de alojamiento de Git). Esto te permite trabajar en el proyecto en tu propia máquina, en lugar de directamente en la interfaz web de GitHub.

Cuando clonas un repositorio, estás copiando todo el historial de commits del repositorio, así como todas las ramas y etiquetas. Esto significa que puedes trabajar en el proyecto como si estuvieras trabajando en el repositorio original.

Clonar un repositorio es el primer paso para contribuir a un proyecto de código abierto. Una vez que has clonado el repositorio, puedes hacer cambios en tu copia local del proyecto, y luego empujar esos cambios de vuelta al repositorio original para que sean incorporados en el proyecto.

Aquí está el comando para clonar un repositorio en código:

```bash
git clone https://github.com/usuario/repositorio.git
```

Reemplaza `https://github.com/usuario/repositorio.git` con la URL del repositorio que quieres clonar.

## 2.6 Eliminar archivos

El comando `git rm` se utiliza para eliminar archivos del área de trabajo y del índice de Git. Aquí están las banderas más comunes que puedes usar con `git rm`:

* `-f` o `--force`: Fuerza la eliminación de archivos del índice de Git y del directorio de trabajo. Útil cuando los archivos han sido modificados y Git se niega a eliminarlos.

```bash
git rm -f myfile.txt
```

* `-n` o `--dry-run`: No elimina realmente los archivos, solo muestra qué archivos serían eliminados.

```bash
git rm -n myfile.txt
```

* `-r` o `--recursive`: Permite la eliminación recursiva cuando se da un nombre de directorio.

```bash
git rm -r mydirectory
```

* `--cached`: Utilizado para eliminar un archivo del índice de Git sin eliminarlo del directorio de trabajo. Útil cuando quieres dejar de rastrear un archivo pero no quieres eliminarlo.

```bash
git rm --cached myfile.txt
```

* `-q` o `--quiet`: No muestra el resultado de la eliminación de los archivos.

```bash
git rm -q myfile.txt
```

Por favor, ten en cuenta que `git rm` eliminará los archivos de tu índice de Git y, a menos que uses `--cached`, también los eliminará de tu directorio de trabajo. Si eliminas un archivo con `git rm`, no podrás recuperarlo a menos que hayas hecho commit de una versión del archivo en tu repositorio de Git.

---
[Volver a ruta de aprendizaje](../README.md#ruta-de-aprendisaje)

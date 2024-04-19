# Curso de _Git_ & _GitHub_

## 5 Reseteos

Los reseteos en Git son una herramienta poderosa que te permite deshacer cambios en tu repositorio. Hay dos tipos principales de reseteos: reseteos de commits y reseteos de repositorios.

los reseteos en Git son una herramienta esencial para gestionar y deshacer cambios en tu repositorio. Sin embargo, debido a su naturaleza potencialmente destructiva, es importante usarlos con cuidado y entender completamente lo que estás haciendo antes de ejecutar un comando de reseteo.

## 5.1 Reseteo del historial

El reseteo del historial en Git es una operación poderosa que te permite mover o "resetear" el puntero HEAD a un commit específico. Esto puede ser útil para deshacer cambios o volver a un estado anterior del código.

Hay tres principales formas de reseteo en Git: `soft`, `mixed` y `hard`.

* `git reset --soft <commit>`: Mueve el puntero HEAD al commit especificado, pero deja el área de preparación y el directorio de trabajo tal como están. Esto es útil si quieres mantener tus cambios, pero rehacer el commit.

* `git reset --mixed <commit>`: Mueve el puntero HEAD al commit especificado y resetea el área de preparación, pero deja el directorio de trabajo intacto. Esto es útil si quieres deshacer el `git add` pero mantener tus cambios.

* `git reset --hard <commit>`: Mueve el puntero HEAD al commit especificado, y resetea tanto el área de preparación como el directorio de trabajo. Esto es útil si quieres deshacer completamente tus cambios y volver al estado del commit especificado.

Es importante tener en cuenta que `git reset` puede ser destructivo si se usa incorrectamente, especialmente `git reset --hard`. Debes estar seguro de entender lo que estás haciendo antes de usar estos comandos.

Podemos eliminar el historial de cambios del proyecto hacia adelante con respecto de un punto de referencia.

```bash
#nos muestra el listado de archivos nuevos (untracked), borrados o editados
git status

# borra HEAD
git reset --soft

# borra HEAD y Staging
git reset --mixed

# borra todo: HEAD, Staging y Working Directory
git reset --hard

# deshace todos los cambios después del commit indicado, preservando los cambios localmente
git reset id-commit

# desecha todo el historial y regresa al commit especificado
git reset --hard id-commit
```

## 5.2 Reseteo del Repositorio

Si en algún momento tienes la necesidad de resetear el historial de cambios de un repositorio para que quede como si lo acabarás de crear ejecuta esta serie de comandos:

```bash
cd carpeta-repositorio
mv .git/config ~/saved_git_config
rm -rf .git
git init
git branch -M main
git add .
git commit -m "Commit inicial"
mv ~/saved_git_config .git/config
git push --force origin main
```

---
[Volver a ruta de aprendizaje](../README.md#ruta-de-aprendisaje)

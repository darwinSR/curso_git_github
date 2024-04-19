# Curso de _Git_ & _GitHub_

## 6 Tags

Las tags en Git son referencias que apuntan a puntos específicos en la historia del repositorio. Son una forma de marcar ciertos commits como hitos importantes, como el lanzamiento de una nueva versión de un software.

Hay dos tipos de tags en Git: ligeras y anotadas.

- **Tags ligeras**: Son simplemente un nombre y un puntero a un commit específico. No contienen más información que esa.

- **Tags anotadas**: Son objetos almacenados en la base de datos de Git, que contienen más información como el autor de la tag, la fecha de creación, un mensaje, y pueden ser firmadas y verificadas con GNU Privacy Guard (GPG).

Para crear una tag, puedes usar el comando `git tag`. Por ejemplo, para crear una tag anotada, puedes usar:

```bash
git tag -a v1.0 -m "mi versión 1.0"
```

Y para crear una tag ligera, simplemente omite las opciones `-a` y `-m`:

```bash
git tag v1.0
```

Para ver todas las tags en tu repositorio, puedes usar `git tag` sin argumentos. Y para subir tus tags al repositorio remoto, puedes usar `git push --tags`.

En resumen, las tags en Git son una forma útil de marcar puntos específicos en la historia de tu proyecto, como los lanzamientos de versiones.

```bash
# listar etiquetas
git tag

# crea una etiqueta
git tag numero-versión

# eliminar una etiqueta
git tag -d numero-versión

# mostrar información de una etiqueta
git show numero-versión

# sincronizando la etiqueta del repositorio local al remoto
git add .
git  tag v1.0.0
git commit -m "v1.0.0"
git push origin numero-versión

# generando una etiqueta anotada (con mensaje de commit)
git add .
git tag -a "v1.0.0" -m "Mensaje de la etiqueta"
git push --tags
```

> Para conocer mas acerca del versionado visita [semver.org](https://semver.org/)

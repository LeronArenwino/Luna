/* Se definen el diccionario de títulos con las llaves y valores respectivos para cada localizador del mapa*/
const title_dict = {
  title_1: "Mare Serenitatis",
  title_2: "Copernicus",
  title_3: "Kepler",
  title_4: "Grimaldi",
  title_5: "Tycho",
};

/* Se definen el diccionario de descripciones con las llaves y valores respectivos para cada localizador del mapa*/
const description_dict = {
  description_1:
    "Mare Serenitatis (en latín serēnitātis, el 'Mar de la Serenidad') es un mar lunar ubicado al este de Mare Imbrium en la Luna. Su diámetro es de 674 km (419 millas).",
  description_2:
    "Copernicus es un cráter de impacto lunar ubicado en el este de Oceanus Procellarum. Lleva el nombre del astrónomo Nicolás Copérnico.",
  description_3:
    "Kepler es un cráter de impacto lunar que se encuentra entre Oceanus Procellarum al oeste y Mare Insularum al este.",
  description_4:
    "Grimaldi es una gran cuenca ubicada cerca del limbo occidental de la Luna. Se encuentra al suroeste del Oceanus Procellarum y al sureste del cráter Riccioli.",
  description_5:
    "Tycho es un cráter de impacto lunar prominente ubicado en las tierras altas lunares del sur, llamado así por el astrónomo danés Tycho Brahe (1546-1601). Se estima que tiene 108 millones de años.",
};

/* Se define una función que recibe un parámetro para identificar el número del localizador, para luego concatenar el valor a dos constantes, título y descripción, 
para luego obtener el valor respectivo en cada uno de los diccionarios, tanto el de los títulos como el de las descripciones y asignarlos al HTML y por último hacer scroll
para visualizar el cambio
*/
function setDescription(number_poninter) {
  const title = "title_" + number_poninter;
  const description = "description_" + number_poninter;
  document.getElementById("title").innerHTML = title_dict[title];
  document.getElementById("description").innerHTML =
    description_dict[description];
  document.getElementById("title").scrollIntoView();
}

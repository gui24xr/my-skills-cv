import data from './skills-detailed-technical-javascript.json' assert { type: 'json' };
import fs from 'fs';
import path from 'path';

// Función para generar archivos por cada skill
const generateFiles = (destinationFolder, skillsArray) => {
  skillsArray.forEach(item => {
    // Nombre de carpeta: "01-Variables"
    const folderName = `${item.id}-${item.title.replaceAll(' ', '_')}`;
    const fullFolderPath = path.join(destinationFolder, folderName);
    const filePath = path.join(fullFolderPath, 'index.js');

    // Eliminar campo no necesario
    delete item.repository_url;

    // Encabezado con metadata
    const fileHeaderDescription = `/*\n${JSON.stringify(item, null, 2)}\n*/\n`;

    // Crear carpeta si no existe
    if (!fs.existsSync(fullFolderPath)) {
      fs.mkdirSync(fullFolderPath, { recursive: true });
    }

    // Escribir archivo
    fs.writeFileSync(filePath, fileHeaderDescription, { encoding: 'utf-8' });
  });
};

// Ruta destino y datos
const destinationFolder = './javascript';
const skillsJavascriptArray = data.skills.detailed.technical.javaScript;

// Ejecutar
generateFiles(destinationFolder, skillsJavascriptArray);

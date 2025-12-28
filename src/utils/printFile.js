import FileSaver, { saveAs } from 'file-saver';

export function printFile(recipeName=recipe) {
    console.log('I am called');
    var blob = new Blob(["Hello, world!"], { type: "" });
    FileSaver.saveAs(blob, `${recipeName}.pdf`);
}
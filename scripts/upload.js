// upload.js - Pour gérer le téléversement de documents

document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    const allowedExtensions = /(\.pdf|\.docx|\.txt)$/i;

    if (!allowedExtensions.exec(file.name)) {
        alert('Veuillez téléverser un fichier au format PDF, DOCX ou TXT.');
        this.value = '';
        return false;
    } else {
        // Optionnel: prévisualiser le fichier (si nécessaire)
        const reader = new FileReader();
        reader.onload = function (e) {
            console.log("Prévisualisation du fichier:", e.target.result);
            // Ajouter la prévisualisation dans l'interface utilisateur si nécessaire
        };
        reader.readAsDataURL(file);
    }
});

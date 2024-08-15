// analyze.js - Pour gérer l'affichage des résultats d'analyse

document.addEventListener('DOMContentLoaded', function() {
    const analysisResult = document.getElementById('analysisResult');

    if (analysisResult) {
        // Exemple : mise en évidence de certains mots-clés dans les résultats
        const keywords = ['important', 'résultat', 'analyser'];
        let content = analysisResult.innerHTML;

        keywords.forEach(keyword => {
            const regex = new RegExp(`(${keyword})`, 'gi');
            content = content.replace(regex, '<strong>$1</strong>');
        });

        analysisResult.innerHTML = content;
    }
});

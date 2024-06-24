document.getElementById('toggle-translation').addEventListener('click', function() {
    var translatedText = document.getElementById('translated-text');
    if (translatedText.style.display === 'none') {
        translatedText.style.display = 'block';
        document.getElementById('original-text').style.display = 'none';
        this.textContent = 'See in English';
    } else {
        translatedText.style.display = 'none';
        document.getElementById('original-text').style.display = 'block';
        this.textContent = 'हिंदी में जाने';
    }
});
document.getElementById('toggle-translation-seed').addEventListener('click', function() {
    var translatedText = document.getElementById('translated-text-seed');
    if (translatedText.style.display === 'none') {
        translatedText.style.display = 'block';
        document.getElementById('original-text-seed').style.display = 'none';
        this.textContent = 'See in English';
    } else {
        translatedText.style.display = 'none';
        document.getElementById('original-text-seed').style.display = 'block';
        this.textContent = 'हिंदी में जाने';
    }
});


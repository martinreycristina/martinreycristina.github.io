document.getElementById('Lovefool').textTracks[0].addEventListener('cuechange', function() {
    document.getElementById('lovefool-display').innerText = this.activeCues[0].text;
});

document.getElementById('Hypnotized').textTracks[0].addEventListener('cuechange', function() {
    document.getElementById('hypnotized-display').innerText = this.activeCues[0].text;
});
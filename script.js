function showAbout() {
    document.getElementById("about").style.display = 'flex';
    document.getElementById("what").style.display = 'none';
    document.getElementById("projects").style.display = 'none';
}

function showWhat() {
    document.getElementById("about").style.display = 'none';
    document.getElementById("what").style.display = 'flex';
    document.getElementById("projects").style.display = 'none';
}

function showProj() {
    document.getElementById("about").style.display = 'none';
    document.getElementById("what").style.display = 'none';
    document.getElementById("projects").style.display = 'flex';
}
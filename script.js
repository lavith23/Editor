// Switch Pages Function
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    // Show the selected page
    document.getElementById('page-' + pageId).classList.remove('hidden');
}

// Media Upload Logic
const uploader = document.getElementById('uploader');
const player = document.getElementById('player');
const status = document.getElementById('status');

uploader.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        player.src = url;
        status.innerText = "Editing: " + file.name;
    }
};

// Next Step: Add FFmpeg Export logic here (same as before)



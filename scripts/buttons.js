function toggleContent(contentDiv) {
    if(contentDiv.classList.contains('hidden')) {
        contentDiv.classList = '';
    } else {
        contentDiv.classList = 'hidden';
    }
}
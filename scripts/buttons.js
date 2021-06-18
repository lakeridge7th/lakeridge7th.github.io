// https://getbutterfly.com/how-to-implement-jquery-slidetoggle-in-vanilla-javascript/?fbclid=IwAR3xcXxMPgKQ3atuI0PIeiGNhM7sbS3MNJUHrHPW-4l6rE3e8iSQPsHEwgI
function toggleContent(contentDiv) {
    console.log('DEBUG: toggleContent');
    if (!contentDiv.classList.contains('active')) {
        contentDiv.classList.add('active');
        contentDiv.style.height = 'auto';
    
        var height = contentDiv.clientHeight + 'px';
    
        contentDiv.style.height = '0px';
    
        setTimeout(function () {
            contentDiv.style.height = height;
        }, 0);
    } else {
        contentDiv.style.height = '0px';
    
        contentDiv.addEventListener('transitionend', function () {
            contentDiv.classList.remove('active');
        }, {
            once: true
        });
    }
}
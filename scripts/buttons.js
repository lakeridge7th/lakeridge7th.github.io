// https://getbutterfly.com/how-to-implement-jquery-slidetoggle-in-vanilla-javascript/?fbclid=IwAR3xcXxMPgKQ3atuI0PIeiGNhM7sbS3MNJUHrHPW-4l6rE3e8iSQPsHEwgI
function toggleMainContent(contentDiv) {
    console.log('DEBUG: toggleContent');
    if (!contentDiv.classList.contains('active')) {
        console.log('toggle1 elements length is ' + document.getElementsByClassName('toggle1').length);
        let divs = document.getElementsByClassName('toggle1');
        for(let i = 0; i < divs.length; i++) {
            console.log('otherDiv is ' + divs[i]);
            if(divs[i].classList.contains('active')) {
                toggleContentClose(divs[i]);
            }
        }
        toggleContentOpen(contentDiv);
    } else {
        toggleContentClose(contentDiv);
    }
}

function toggleContentClose(contentDiv) {
    if (contentDiv.classList.contains('active')) {
        contentDiv.style.height = '0px';
    
        contentDiv.addEventListener('transitionend', function () {
            contentDiv.classList.remove('active');
        }, {
            once: true
        });
    }
}

function toggleContentOpen(contentDiv) {
    if (!contentDiv.classList.contains('active')) {
        contentDiv.classList.add('active');
        contentDiv.style.height = 'auto';
    
        var height = contentDiv.clientHeight + 'px';
    
        contentDiv.style.height = '0px';
    
        setTimeout(function () {
            contentDiv.style.height = height;
        }, 0);
    }
}
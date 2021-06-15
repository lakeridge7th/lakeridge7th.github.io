function addSacrament() {
    let html = '<h2 class="center">' + wardInfo.wardName + '</h2>';

    for(let i = 0; i < currentSacrament.length; i++) {
        let item = currentSacrament[i];
        if(item.length === 1) {
            html += '<p class="center">' + item[0] + '</p>';
        } else {
            html += '<div class="programItem"><p>' + item[0] + '</p><p>' + item[1] + '</p></div>';
        }
    }

    document.getElementById('sacramentProgram').innerHTML = html;
}

function addLeadership() {
    let html = '<table>';

    for(var leader of leadership) {
        html += '<tr><td>' + leader.calling + '</td><td>' + leader.name + '</td><td>' +
            leader.phoneA + '<span class="hidden">INVISIBLE TEXT TO TRICK BOTS</span>' +
            leader.phoneB + '</td></tr>';
    }

    document.getElementById('leadershipPeople').innerHTML = html;
}
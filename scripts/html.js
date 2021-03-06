function addSacrament() {
    let html = '';
    
    html += '<h2 class="center">' + wardInfo.wardName + '</h2>';
    if(currentSacrament.quote != null && currentSacrament.quote != '') {
        html += '<p class="center">' + currentSacrament.quote + '</p>';
    }
    html += '<p class="center">' + currentSacrament.date + '</p>';

    html += getProgramItemHtml(currentSacrament.presiding, 'Presiding');
    html += getProgramItemHtml(currentSacrament.conducting, 'Conducting');
    html += getProgramItemHtml(currentSacrament.organist, 'Organist');
    html += getProgramItemHtml(currentSacrament.chorister, 'Chorister');

    if(currentSacrament.music !== null && currentSacrament.music !== '') {
        html += getProgramItemHtml(currentSacrament.music, 'Music Director');
    }

    html += '<p class="center">Welcome</p>';
    html += getHymnHTML(currentSacrament.hymns[0], 'Opening Hymn');
    html += getProgramItemHtml(currentSacrament.invocation, 'Invocation');
    html += '<p class="center">Ward and Stake Business</p>';
    html += getHymnHTML(currentSacrament.hymns[1], 'Sacrament Hymn');
    html += '<p class="center">Administration of the Sacrament</p>';

    html += getSpeakersHTML();

    html += getHymnHTML(currentSacrament.hymns[currentSacrament.hymns.length - 1], 'Closing Hymn');
    html += getProgramItemHtml(currentSacrament.benediction, 'Benediction');

    html += '<p class="emptySpace"></p>';

    for(i = 0; i < currentSacrament.endAnnouncements.length; i++) {
        html += '<p class="center">' + currentSacrament.endAnnouncements[i] + '</p>';
    }

    document.getElementById('sacramentProgram').innerHTML = html;
}

function getProgramItemHtml(data, title) {
    html = '';
    if(data != null && data != '') {
        html += '<div class="programItem"><p>' + title + '</p><p>' + data + '</p></div>';
    }
    return html;
}

function getHymnHTML(hymnNum, type) {
    html = '<div class="programItem"><p>' + type + '</p><p>' + hymnNum + '</p></div>';
    html += '<p class="hymnTitle">' + hymns[hymnNum].title + '</p>';

    return html;
}

function getSpeakersHTML() {
    html = '';

    if(currentSacrament.type == 'normal') {
        html += '<div class="programItem"><p>' + 'Speaker' + '</p><p>' + currentSacrament.speakers[0] + '</p></div>';
        html += '<div class="programItem"><p>' + 'Speaker' + '</p><p>' + currentSacrament.speakers[1] + '</p></div>';
        html += getHymnHTML(currentSacrament.hymns[2], 'Rest Hymn');
        html += '<div class="programItem"><p>' + 'Speaker' + '</p><p>' + currentSacrament.speakers[2] + '</p></div>';
    } else if(currentSacrament.type == 'fast') {
        html += '<p class="center">Bearing of Testimonies</p>';
    }

    return html;
}

function addLeadership() {
    let html = '<table>';

    for(var leader of leadership) {
        html += '<tr><td>' + leader.calling + '</td><td>' + leader.name + '</td><td>' +
            leader.phoneA + '<span class="hidden">INVISIBLE TEXT TO TRICK BOTS</span>' +
            leader.phoneB + '</td></tr>';
    }

    document.getElementById('leadershipPeopleContent').innerHTML = html;
}

function addButtons() {
    document.getElementById('announcementsClick').onclick = function() {
        toggleMainContent(document.getElementById('announcementsContent'));
    };
    document.getElementById('sacramentClick').onclick = function() {
        toggleMainContent(document.getElementById('sacramentContent'));
    };
    document.getElementById('classesClick').onclick = function() {
        toggleMainContent(document.getElementById('classesContent'));
    };
    document.getElementById('leadershipClick').onclick = function() {
        toggleMainContent(document.getElementById('leadershipContent'));
    };
    document.getElementById('spotlightsClick').onclick = function() {
        toggleMainContent(document.getElementById('spotlightsContent'));
    };
    document.getElementById('archivesClick').onclick = function() {
        toggleMainContent(document.getElementById('archivesContent'));
    };
}
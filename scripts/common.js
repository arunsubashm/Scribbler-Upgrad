/* Modal Form - Diplay and Close */
function displayForm(id, toggle) {
    if (toggle == 0) {
        document.getElementById(id).style.display='block';
    } else {
        document.getElementById(id).style.display='none';
    }
}

/* Toggle between 2 Modal Forms */
function swapForm(closeid, displayid) {
    document.getElementById(closeid).style.display='none';
    document.getElementById(displayid).style.display='block';
}
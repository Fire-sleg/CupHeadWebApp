document.addEventListener('DOMContentLoaded', function () {
    showPhase('phase1');
});
function showPhase(phaseId) {
    $(".boss-phase").hide();
    $("#" + phaseId).show();
}


var link = document.getElementById("phase-link-1");
link.focus();
(function () {
    var elts = document.getElementsByTagName('p');
    for (var i = 0; i < elts.length; i++) {
        elts[i].innerHTML = 'Test';
    }
})();
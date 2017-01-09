var Repos = require('./../js/github.js').repoModule;
var displayRepo = function (userName, repoData) {
    repoData.forEach(function (repo) {
        $("ul").prepend("<li>" + repo + "</li>");
    })
};
$(document).ready(function () {
    var currentUser = new Repos();
    $('.showrepos').click(function () {
        var userName = $('#git-name').val();
        $('#git-name').val("");
        currentUser.getRepos(userName, displayRepo);
    })
});
var apiKey = require('./../.env').apiKey;
//API function
function Repos() {};
Repos.prototype.getRepos = function (userName, displayFunction) {
    $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function (response) {
        var repoNames = response.map(function (repo) {
            return repo.name;
        });
        displayFunction(userName, repoNames);
    }).fail(function (error) {
        $('#discriptions').text(error.responseJSON.message);
    });
};
exports.repoModule = Repos;
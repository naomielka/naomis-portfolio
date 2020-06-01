var gProjects = [{
    projId: 'minesweeper',
    projName: 'Mine Sweeper',
    projDesc: 'App design',
    projTitle: 'Try not to explode!',
    projUrl: '"projs/minesweeper/index.html',
    projDate: 'May 20th, 2020',
    projLables: ['Matrixes', 'keyboard events']

}, {
    projId: 'touchnums',
    projName: 'Touch Nums',
    projDesc: 'App design',
    projTitle: 'Try to catch all the nums fast!',
    projUrl: '"projs/toucnums/index.html',
    projDate: 'May 14th, 2020',
    projLables: ['Matrixes', 'keyboard events']
}]

function getProjects() {
    return gProjects;
}

function getProjectById(id) {
    var proj = gProjects.find(function(prog) {
        return id === prog.projId
    });
    return proj
}
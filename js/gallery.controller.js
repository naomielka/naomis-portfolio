function onInit() {
    onRenderProjects()
}

function onRenderProjects() {
    var strHtml = ''
    var projects = getProjects()
    for (var i = 0; i < projects.length; i++) {
        strHtml += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" data-target="#${projects[i].projId}" onclick="renderProgectModal('${projects[i].projId}')">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x">        </i>
        </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${projects[i].projId}-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${projects[i].projName}     </h4>
        <p class="text-muted">${projects[i].projDesc}</p>
        </div></div>`
    }
    $('.progects').html(strHtml)
}

function renderProgectModal(projId) {
    var proj = getProjectById(projId)
    var strHtml = `<div class="portfolio-modal modal fade show" id="${proj.projId}" tabindex="-1" role="dialog">
<div class="modal-dialog">
    <div class="modal-content">
            <div class="lr">
                <div class="rl"></div>
           
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="modal-body">
                            <h2>${proj.projName}</h2>
                            <p class="item-intro text-muted">${proj.projTitle}.</p>
                            <img class="img-fluid d-block mx-auto" style="height: 400px;" src="img/portfolio/${proj.projId}-full.jpg" alt="">
                            <p>${proj.projDesc}</p>
                            <a href="projs/${proj.projId}/index.html" target="_blank" >Chek It Out</a>
                            <ul class="list-inline">
                                <li>Date: ${proj.projDate}</li>
                                <li>Client: Coding academy </li>
                                <li>Category: ${proj.projLables}</li>
                            </ul>
                            <button class="btn btn-primary" data-dismiss="modal" type="button">
                <i class="fa fa-times"></i>
                Close Project</button>
                        </div> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
    $('.modal-container').html(strHtml)
}

function onContactMe() {
    var userEmail = $('#user-email').val()
    var emailSubject = $('#subject').val()
    var messageBody = $('#message-body').val()
    window.open(` https://mail.google.com/mail/?view=cm&fs=1&to=naomi.elka@gmail.com&su=${emailSubject}&body=${messageBody}&bcc=${userEmail}`)
}
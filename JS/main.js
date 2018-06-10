var addTaskTextarea = document.getElementById('add-task-texearea');

addTaskTextarea.onclick = function () {
    var taskMeun = document.getElementById('task-menu');
    var main = document.getElementById('main');
    addTaskTextarea.style.display = 'none';
    main.style.paddingTop = '10px';
    taskMeun.style.display = 'block';

    var addTaskBtn = document.getElementById('btn-span-add-task');
    var cancel = document.getElementById('btn-span-cancel');
    cancel.onclick = function () {
        taskMeun.style.display = 'none';
        addTaskTextarea.style.display = 'block';
    }
    addTaskBtn.onclick = function () {
        var taskListArticle = document.getElementsByClassName('task-list-article');
        var taskList = document.getElementsByClassName('task-list');
        taskMeun.style.display = 'none';
        addTaskTextarea.style.display = 'block';

    }
}

var listTitle = document.querySelector('.task-list');
listTitle.onclick = function (event) {
    var taskTitleName = listTitle.querySelector('.task-title-name');
    if (event.target.className === 'far fa-star') {
        event.target.classList.replace('far', 'fas');
        event.target.style.color = '#F5A623';
        listTitle.style.background = '#FFF2DC';
        taskTitleName.style.background = '#FFF2DC';
        taskTitleName.style.border = '1px solid #FFF2DC';
    } else if (event.target.className === 'fas fa-star') {
        event.target.classList.replace('fas', 'far');
        event.target.style.color = '#000000';
        listTitle.style.background = '#f3f3f2';
        taskTitleName.style.background = '#F2F2F2';
        taskTitleName.style.border = '1px solid #f2f2f2';
    }
    var taskMenu = listTitle.querySelector('#task-menu');
    var taskListInfo = listTitle.querySelector('.task-list-info');
    if (event.target.className === 'fas fa-pencil-alt') {
        taskListInfo.style.display = 'none';
        taskMenu.style.display = 'block';
        listTitle.style.padding = '0';
        listTitle.childNodes[1].classList.replace('tasklist-list-title', 'task-menu-title-edit');
    }
}
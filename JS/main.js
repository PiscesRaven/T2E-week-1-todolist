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
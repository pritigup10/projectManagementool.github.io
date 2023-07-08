
document.querySelector('main').addEventListener('submit', function(e) {
    e.preventDefault();
    var projectName = document.getElementById('project-name').value;
    var taskName = document.getElementById('task-name').value;

    var projectPost = document.createElement('div');

    projectPost.innerHTML = '<h2>' + projectName + '</h2>';
    projectPost.innerHTML += '<p>' + taskName + '</p>';
     
    document.getElementById('all-project').appendChild(projectPost);

    var projectName = document.getElementById('project-name').value = '';
    var taskName = document.getElementById('task-name').value = '';

})

  
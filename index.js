const form = document.querySelector('form');
const addTask = document.querySelector('.add-task');
const inputTask = document.querySelector('.input-task');
const TaskWraper = document.querySelector('.tasks-wrapper');
const count = document.querySelector('.count');
const actions = document.querySelector('.actions');




addTask.addEventListener('click', insertTask);



function insertTask(e) {

    e.preventDefault();


    if (inputTask.value == "") {

        return false;
    } else {



        const unorderedList = document.createElement('ul');
        const span = document.createElement('span');
        const close = document.createElement('del')
        const taskList = document.createElement('li');
        unorderedList.appendChild(span);
        TaskWraper.appendChild(unorderedList);
        unorderedList.appendChild(taskList);
        unorderedList.appendChild(close);
        taskList.innerHTML = inputTask.value;
        actions.classList.remove('line');
        inputTask.value = '';
        count.textContent++;


        span.addEventListener('click', tick);


        function tick() {

            span.classList.toggle('done');
            taskList.classList.toggle('checked');


        }

        close.addEventListener('click', countDown);

        function countDown() {

            count.textContent--;
            taskList.parentElement.remove();


        }





        const active = document.querySelector('.active');

        active.addEventListener('click', activeTasks);

        function activeTasks() {


            if (span.classList.contains('done')) {

                taskList.parentElement.classList.add('hide');


            }

        }


        const all = document.querySelector('.all')
        all.addEventListener('click', allTasks);

        function allTasks() {

            taskList.parentElement.classList.remove('hide');


        }

        const completed = document.querySelector('.completed');
        completed.addEventListener('click', finishedTasks);

        function finishedTasks() {

            if (!span.classList.contains('done')) {

                taskList.parentElement.classList.add('hide');

            }


        }



    }



}
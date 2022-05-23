//Selectors
const form = document.querySelector('form');
const addTask = document.querySelector('.add-task');
const inputTask = document.querySelector('.input-task');
const TaskWraper = document.querySelector('.tasks-wrapper');
const count = document.querySelector('.count');
const actions = document.querySelector('.actions');
let tasksCounter = 1;


//EventListener
addTask.addEventListener('click', insertTask);


//Function
function insertTask(e) {

    e.preventDefault();

    if (inputTask.value == "") {

        return false;
    } else {
        
        
        //Add Input to Local Storage
        let mainKey = "Task_" + tasksCounter;
        localStorage.setItem(mainKey, inputTask.value);
        tasksCounter++;
        
        
        //Selectors
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
            span.classList.toggle('compeleted');

            if (span.classList.contains('done')) {

                count.innerHTML--;
            }
            if (!span.classList.contains('done')) {

                count.innerHTML++;
            }
        }
        close.addEventListener('click', countDown);

        function countDown() {

            taskList.parentElement.remove();

            if (!span.classList.contains('done')) {

                count.innerHTML--;
            }
        }
        actions.addEventListener('click', filter);

        function filter(e) {

            const target = e.target;
            if (target.classList.contains('active')) {

                if (span.classList.contains('done')) {

                    span.parentElement.classList.add('hide');
                }
                if (!span.classList.contains('done')) {
                    span.parentElement.classList.remove('hide');
                }
                if (span.classList.contains('done')) {

                }

            }
            if (target.classList.contains('all')) {

                span.parentElement.classList.remove('hide');
            }
            if (target.classList.contains('completed')) {

                if (!span.classList.contains('done')) {

                    span.parentElement.classList.add('hide');
                }
                if (span.classList.contains('done')) {
                    span.parentElement.classList.remove('hide');
                }
            }

            if (target.classList.contains('clear-completed')) {

                if (span.classList.contains('done')) {


                    span.parentElement.remove();
                }
            }

        }

    }

}

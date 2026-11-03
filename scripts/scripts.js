const $buttonAdd = document.querySelector('.buttonAdd'),
    $inputAdd = document.querySelector('.inputAdd'),
    $containerInferior = document.querySelector('.containerInferior'),
    $buttonDelete = document.querySelectorAll('.buttonDelete'),
    $buttonEdit = document.querySelectorAll('.buttonEdit'),
    $btnAll = document.querySelector('.btnAll'),
    $btnPending = document.querySelector('.btnPending'),
    $btnCompleted = document.querySelector('.btnCompleted'),
    $checkboxes = document.querySelector('.checkbox'),
    $containerList = document.querySelectorAll('.containerList');
    


function createTask() {

    if ($inputAdd.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

// 1. CREAR LOS ELEMENTOS NUEVOS DENTRO DE LA FUNCIÓN
    const $containerList = document.createElement('div');
    $containerList.classList.add('containerList');
    

    const $ul = document.createElement('ul');
    $ul.classList.add('tarea');

    const $checkbox = document.createElement('input');
    $checkbox.setAttribute('type', 'checkbox');
    $checkbox.classList.add('checkbox');

    const $li = document.createElement('li');
    $li.textContent = $inputAdd.value; // Asignamos el texto directamente

    const $buttonInferiores = document.createElement('div');
    $buttonInferiores.classList.add('buttonInferiores');

    const $buttonDelete = document.createElement('button');
    $buttonDelete.setAttribute('type', 'button');
    $buttonDelete.classList.add('buttonDelete');
    $buttonDelete.textContent = 'Delete';

    const $buttonEdit = document.createElement('button');
    $buttonEdit.setAttribute('type', 'button');
    $buttonEdit.classList.add('buttonEdit');
    $buttonEdit.textContent = 'Edit';


    $buttonDelete.addEventListener('click', () => {
    $containerList.remove();
});

$buttonEdit.addEventListener('click', () => {
    const newTask = prompt('Edit the task:', $li.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        $li.textContent = newTask;
}});


    // 2. ENSAMBLARLA JERÁRQUICAMENTE
    $containerInferior.appendChild($containerList);
    $containerList.appendChild($ul);
    $ul.appendChild($checkbox);
    $ul.appendChild($li);
    $containerList.appendChild($buttonInferiores);
    $buttonInferiores.appendChild($buttonDelete);
    $buttonInferiores.appendChild($buttonEdit);

    
    

    // 3. AGREGARLA AL CONTENEDOR PRINCIPAL DE LA PÁGINA
   

    // 4. LIMPIAR EL INPUT
    $inputAdd.value = '';

}; 

$buttonAdd.addEventListener('click', () => createTask());
$inputAdd.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        createTask();
    }
});




function filterTasks(filter) {
    const tasks = document.querySelectorAll('.containerList');

    tasks.forEach((task) => {
        const checkbox = task.querySelector('.checkbox');

        if (filter === 'all') {
            task.style.display = 'flex';
        } else if (filter === 'pending' && !checkbox.checked) {
            task.style.display = 'flex';
        } else if (filter === 'completed' && checkbox.checked) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}



$btnAll.addEventListener('click', () => {
    filterTasks('all');
});

$btnPending.addEventListener('click', () => {
    filterTasks('pending');
}); 

$btnCompleted.addEventListener('click', () => {
    filterTasks('completed');
});
const prioritySelectorData = [
    {value: 1, label: 'Skubu'},
    {value: 2, label: 'Nelabai'},
    {value: 3, label: 'Nesvarbu'}
];

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

const renderPrioritySelectorData = _ => {
    let html = '';
    const selector = document.querySelector('[data-task-priority]');
    prioritySelectorData.forEach(option => {
        html += `<option value="${option.value}">${option.label}</option>`;
    });
    selector.innerHTML = html;
};

let TASKS = [];

const init = _ => {
    const addButton = document.querySelector('[data-task-add]');
    addButton.addEventListener('click', renderAddTask);

    renderPrioritySelectorData();
};

const renderAddTask = _ => {
    
    const dataTaskList = document.querySelector('[data-task-list]');
    const id = getRandomIntInclusive(10000000, 99999999);
    const task = document.querySelector('[data-task-input]');
    const priority = document.querySelector('[data-task-priority]');
    const done = false

    let li = `<li data-id="${id}">
                    <div class="task" data-task-view-priority="${priority}">
                        <div class="content">${task.value}</div>
                        <div class="actions">
                            <button class="done" ${done ? '' : 'disabled'} data-task-done>Atlikta</button>
                            <button class="delete" data-task-delete>Pasalinti</button>
                        </div>
 
                    </div>
                </li>`;

    dataTaskList.innerHTML += li;
    console.log(dataTaskList.innerHTML);

    task.value = '';
    priority.value = '1';
    
};

init();


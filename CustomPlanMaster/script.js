// script.js

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const tasksByDay = JSON.parse(localStorage.getItem('tasksByDay')) || {};

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskTime = document.getElementById('taskTime');
  const daySelector = document.getElementById('daySelector');
  const taskList = document.getElementById('taskList');

  const selectedDay = daySelector.value;

  if (!tasksByDay[selectedDay]) {
    tasksByDay[selectedDay] = [];
  }

  if (taskInput.value.trim() !== '') {
    const task = {
      description: taskInput.value,
      time: format12HourTime(taskTime.value),
    };

    tasksByDay[selectedDay].push(task);

    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.description}</span>
      <span>${task.time}</span>
      <span>${selectedDay}</span>
      <button class="delete-btn" onclick="deleteTask('${selectedDay}', ${tasksByDay[selectedDay].length - 1})">Delete</button>
    `;
    li.onclick = toggleTask;
    taskList.appendChild(li);
    taskInput.value = '';
    taskTime.value = '';

    // Save tasks to localStorage
    localStorage.setItem('tasksByDay', JSON.stringify(tasksByDay));
  }
}

function deleteTask(selectedDay, index) {
  // Remove the task from the array
  tasksByDay[selectedDay].splice(index, 1);

  // Save the updated tasks to localStorage
  localStorage.setItem('tasksByDay', JSON.stringify(tasksByDay));

  // Reload the tasks in the UI
  loadTasks();
}

function toggleTask() {
  this.classList.toggle('completed');
}

function format12HourTime(time) {
  const [hours, minutes] = time.split(':');
  const formattedHours = (hours % 12) || 12;
  const period = hours < 12 ? 'AM' : 'PM';
  return `${formattedHours}:${minutes} ${period}`;
}

// Load tasks on page load
window.onload = function () {
  loadTasks();
};

function loadTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear existing tasks

  for (const day in tasksByDay) {
    tasksByDay[day].forEach((task, index) => {
      const li = document.createElement('li');
      const dayAbbreviation = day.substring(0, 1).toUpperCase();
      li.innerHTML = `
        <span>${task.description}</span>
        <span>${task.time}</span>
        <span>${day}</span>
        <button class="delete-btn" onclick="deleteTask('${day}', ${index})">Delete</button>
      `;
      li.onclick = toggleTask;
      taskList.appendChild(li);
    });
  }
}

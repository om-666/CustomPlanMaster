```markdown
# CustomPlanMaster

CustomPlanMaster is a personalized scheduling tool that allows you to plan your entire day, hour by hour, and organize various types of regular tasks.

## Features

- Add detailed task descriptions, set specific times, and assign days for scheduling.
- Efficiently manage and visualize your daily tasks.

## How to Use

### Prerequisites

- Ensure you have a modern web browser installed.

### Running the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/om-666/CustomPlanMaster.git
   ```

2. Navigate to the project directory:

   ```bash
   cd CustomPlanMaster
   ```

3. Open `index.html` in your preferred web browser.

4. Use the provided form to add tasks, specifying the task name, time, and day.

5. Click "Add Task" to include the task in your daily schedule.

6. View and manage your tasks on the main page.

### Example

```html
<form id="taskForm">
  <label for="taskInput">New Task:</label>
  <input type="text" id="taskInput" placeholder="Enter your task" required>
  <label for="taskTime">Task Time:</label>
  <input type="time" id="taskTime" required>
  <label for="daySelector">Select Day:</label>
  <select id="daySelector" required>
    <!-- Day options here -->
  </select>
  <button type="button" onclick="addTask()">Add Task</button>
</form>

<ul id="taskList">
  <!-- Task items will appear here -->
</ul>
```

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries, you can reach out to me via email: omtanmaya2004@gmail.com
 

  
  
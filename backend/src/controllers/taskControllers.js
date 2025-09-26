import Task from './models/Task.js'

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 })
    res.status(200).json(tasks)
  } catch (error) {
    console.error('Error fetching tasks: ', error)
    res.status(500).json({ message: 'Server error' })
  }
}

export const createTask = async (req, res) => {
  try {
    const { title } = req.body
    const task = new Task({ title })
    const createTask = await task.save()
    res.status(201).json(createTask)
  } catch (error) {
    console.error('Error creating task: ', error)
    res.status(500).json({ message: 'Server error' })
  }
}

export const updateTask = async (req, res) => {
  try {
    const { title, status, completedAt } = req.body

    const updateTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, status, completedAt },
      { new: true }
    )
    if (!updateTask) {
      return res.status(404).json({ message: 'Task not found' })
    }

    res.status(200).json(updateTask)
  } catch (error) {
    console.error('Error updating task: ', error)
    res.status(500).json({ message: 'Server error' })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id)
    if (!deleteTask) {
      return res.status(404).json({ message: 'Task not found' })
    }
    res.status(204).json(deleteTask)
  } catch (error) {
    console.error('Error deleting task: ', error)
    res.status(500).json({ message: 'Server error' })
  }
}

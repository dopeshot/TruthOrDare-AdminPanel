import type { NextPage } from 'next'
import { useState } from 'react'
import TaskRow from '../components/Task'
import { fetchTasksList } from '../lib/tasks'
import { TasksType } from '../types/tasks'

const Tasks: NextPage = ({ initialData }: any) => {
  const [tasks, setTask] = useState(initialData)
  const [nextPage, setNextPage] = useState(1)

  const handleReload = async (event: any) => {
    event.preventDefault()

    const result = await fetchTasksList()
    return setTask(result.tasks);
  }

  const handleLoadMore = async (event: any) => {
    event.preventDefault()

    if (nextPage === undefined) {
      console.warn("No more pages")
      return
    }
    const result = await fetchTasksList(5, nextPage)

    setNextPage(result.paging.nextPage)
    return setTask([...tasks, ...result.tasks])
  }

  return (
    <div id="tasks" className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="h3">Tasks</h1>
        </div>
      </div>
      <div className="row bg-dark me-5 py-4 pt-4 px-3">
        <div className="col-12 grid-info mb-4">
          <form>
            <input type="password" id="search" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Search..."></input>
          </form>
          <div className="d-flex align-items-baseline">
            <p className="mb-0 pe-3">Status</p>
            <select className="form-select" aria-label="Default select example" defaultValue={'all'} style={{ width: '150px' }}>
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="active">Active</option>s
            </select>
          </div>
          <div className="d-flex align-items-baseline">
            <p className="mb-0 pe-3">Display</p>
            <select className="form-select" aria-label="Default select example" defaultValue={'all'} style={{ width: '80px' }}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
            </select>
          </div>
          <div id="add-task-button">
            <button type="submit" className="btn btn-danger mx-auto"><i aria-hidden className="fas fa-list-ul pe-3"></i>Add Task</button>
          </div>
          <div id="reload-button" className="align-self-center">
            <button className="button-text" onClick={handleReload}><i aria-hidden className="fas fa-sync-alt pe-3" ></i></button>
          </div>
        </div>
        <div className="col-12">
          <table className="table">
            <thead className="bg-secondary">
              <tr>
                <th scope="col"></th>
                <th scope="col" style={{ width: "120px" }}>Id</th>
                <th scope="col" style={{ width: "20px" }}>Type</th>
                <th scope="col-2">Content</th>
                <th scope="col">Lang</th>
                <th scope="col">Author</th>
                <th scope="col">Created at</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks && tasks.map((task: TasksType, key: number) => (
                <tr key={key}>
                  <th scope="row">{key + 1}</th>
                  <td>{task._id}</td>
                  <td><span className="badge bg-transparent-primary text-primary">{task.type}</span></td>
                  <td>{task.content.message}</td>
                  <td>{task.language.toUpperCase()}</td>
                  <td className="username">{task.author}</td>
                  <td>{task.createdAt}</td>
                  <td><span className="badge bg-success text-white">{task.status}</span></td>
                  <td>
                    <button className="button-text">
                      <i aria-hidden className="fas fa-edit pe-3"></i>
                    </button>
                    <button className="button-text">
                      <i aria-hidden className="fas fa-trash pe-3"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <div id="reload-button" className="align-self-center">
            <button className="btn btn-primary" onClick={handleLoadMore}>Load more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context: any) {
  const tasks = await fetchTasksList()

  return {
    props: {
      initialData: tasks.tasks
    }
  }
}

export default Tasks

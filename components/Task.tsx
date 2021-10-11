import { TasksType } from "../types/tasks"

const TaskRow: any = ({ task, key }: {task: TasksType, key: number}) => {
    return (
        <>
            <tr>
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
        </>
    )
}

export default TaskRow
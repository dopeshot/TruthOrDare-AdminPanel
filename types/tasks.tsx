export type TasksType = {
    status: string
    dislikes: number
    likes: number
    _id: string
    language: string
    type: string
    author: string
    content: TaskContent
    createdAt: string
    updatedAt: string
}

export type TaskContent = {
    anyoneCount: string
    femaleCount: string
    maleCount: string
    currentPlayerGender: string
    message: string
}
import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
    tasks: Task[] = [
        {id: 1, name: "Koromon",img:"https://digimon.shadowsmith.com/img/koromon.jpg", level: "In Training"},

        {id: 2, name:"Tsunomon", img:"https://digimon.shadowsmith.com/img/tsunomon.jpg", level:"In Training"},

        {id: 3, name: "Yokomon",img:"https://digimon.shadowsmith.com/img/yokomon.jpg", level: "In Training"}
    ];

    getAll() {
        return this.tasks;
    }

    getById (id: number) {
        const task = this.tasks.find((value) => value.id == id);
        return task;
        
    }

    create (task: Task){
        let lastId=0;
        if (this.tasks.length > 0 ) {
            lastId = this.tasks[this.tasks.length -1].id;
        }

        task.id = lastId + 1;
        this.tasks.push(task);

        return task;

    }

    update (task: Task) {
        const taskArray = this.getById(task.id);
        if (taskArray) {
            taskArray.name = task.name;
            taskArray.level = task.level;
            taskArray.img = task.img;
        }
        return taskArray;

    }

    delete (id: number) {
        const index = this.tasks.findIndex((value) => value.id == id)
        this.tasks.splice(index, 1);

    }
    
}

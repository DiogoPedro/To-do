export class Tarefa {
    id: string;
    name: string;
    description: string;
    finished: boolean;
    date: Date;
    priority: string;

    constructor(id: string, name: string, description: string, finished: boolean, date: Date, priority: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.finished = finished;
        this.date = date;
        this.priority = priority;
    }

    setFinished(value: boolean): void {
        if (value) {
            this.date = new Date();
        };
    }

    static tarefa_validation(tarefa: Tarefa): Object {
        if (tarefa.name == null || tarefa.finished == null || tarefa.priority == null) {
            return ["false", "Existe um campo vazio"];
        };

        if ((5 > tarefa.name.length) || (tarefa.name.length > 10)) {
            return ["false", "Tamanho do nome invalido"];
        };

        if (tarefa.description.length > 140) {
            return ["false", "Descricão com excedente de caracteres"];
        }

        if (tarefa.priority != "Baixa" && tarefa.priority != "Media" && tarefa.priority != "Alta") {
            return ["false", "A prioridade não condiz com as especificações"];
        };

        return ["true", "Sucesso em inserir uma nova tarefa"];
    }
}
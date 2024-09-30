/*
*Classe Tarefa:*
   - Atributos: descrição, prioridade (opcional), status (pendente/concluída).
   - Métodos: um construtor, método para exibir informações da tarefa.
*/

export class Tarefa {
    constructor(
        private descricao: string,
        private status: string = "Pendente"
    ) {}

    public exibir(): string { return this.descricao }
    public finish(): void { this.status = "Concluida" }
}
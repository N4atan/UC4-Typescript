import { Lista } from "./Lista";
import { Tarefa } from "./Tarefa";

import * as ask from 'readline-sync';

function mostrarPontos(): void {
    let pontos = '.'

    for (let i = 0; i < 90; i++) { // Total de iterações (30, por exemplo)
        if (i % 30 === 0) { // A cada 10 iterações, exibe os pontos
            console.log(pontos)
            pontos += "."
        }
    }
}

function main(): void {
    let toDoList = new Lista();
    let userChoice: number = 4;

    while(userChoice !== 0) {
        console.clear();

        console.log(`\
                    -     Primeira Task       -
                    - ${toDoList.getPrimeiro()}
                    ---------------------------
                    - 1. Adicionar Task       -
                    - 2. Listar Tasks         -
                    - 3. Mudar Status de Task -
                    - 0. Sair                 -
                    ---------------------------
        `);

        userChoice = ask.questionInt('- Escolha um: ');
        switch (userChoice) {
            case 0:
                break;
            
            case 1:
                let tarefa = new Tarefa(ask.question('--> Qual a task? ')) ;
                toDoList.addTarefa(tarefa);
                mostrarPontos();
                ask.question('Pressione ENTER para continuar...',
                    { hideEchoBack: true, mask: '' });
                break

            case 2: 
                toDoList.getTarefas();
                ask.question('Pressione ENTER para continuar...',
                    { hideEchoBack: true, mask: '' });
                break
            
            case 3:
                if (toDoList.empty()) {
                    ask.question('Nao ha nenhuma task para ser concluida e apagada! ',
                        { hideEchoBack: true, mask: '' });
                } else { 
                    ask.question(`--> Ela '${toDoList.getPrimeiro()}' sera marcada como concluida e depois sera excluida. Ok? (Press any key) `,
                        { hideEchoBack: true, mask: '' });
                    mostrarPontos();

                    console.log(`A task '${toDoList.getDropPrimeiro()?.exibir()}' foi concuida e apagada da lista!`);
                    ask.question('Pressione ENTER para continuar...',
                        { hideEchoBack: true, mask: '' });
                }

                break
        }
    } 
}

main()
var alunos = new Map();
var selectedID = "";
class Aluno {
    codigo;
    nome;
    dataNascimento;
    ativo = true;
    endereco;
    telefone;
    email;
}




function addAluno() {
    var nome = document.getElementById('nomeAluno');
    var dataNascimento = document.getElementById('dataNascimento');
    var endereco = document.getElementById('endereco');
    var telefone = document.getElementById('telefone');
    var email = document.getElementById('email');

    var aluno = new Aluno();
    aluno.codigo = makeid(7);
    aluno.nome = nome.value;
    aluno.dataNascimento = dataNascimento.value;
    aluno.endereco = endereco.value;
    aluno.telefone = telefone.value;
    aluno.email = email.value;

    alunos.set(aluno.codigo, aluno);
    
    clearValues();

    document.getElementsByClassName('empty-message')[0].classList.add('d-none');
    document.getElementById('tabelaAlunos').classList.remove('d-none');

    atualizaTabela();

}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function clearValues() {

    document.getElementById('nomeAluno').value = "";
    document.getElementById('dataNascimento').value = "";
    document.getElementById('endereco').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('email').value = "";
}

function atualizaTabela(){
    corpoTabelAlunos =  document.getElementById('corpo-tabelaAlunos');
    corpoTabelAlunos.innerHTML = "";


    alunos.forEach(aluno => {
        var row = document.createElement('tr');

        var codigo = document.createElement('td');
        codigo.innerText = aluno.codigo;
        row.appendChild(codigo);
        
        var nome = document.createElement('td');
        nome.innerText = aluno.nome;
        row.appendChild(nome);

        var dataNascimento = document.createElement('td');
        dataNascimento.innerText = aluno.dataNascimento;
        row.appendChild(dataNascimento);

        var ativo = document.createElement('td');
        aluno.ativo ?  ativo.innerText = 'sim' : 'não';
        row.appendChild(ativo);

        var endereco = document.createElement('td');
        endereco.innerText = aluno.endereco;
        row.appendChild(endereco);

        var telefone = document.createElement('td');
        telefone.innerText = aluno.telefone;
        row.appendChild(telefone);

        var email = document.createElement('td');
        email.innerText = aluno.email;
        row.appendChild(email);

        var editButton = document.createElement('button')
        editButton.id = aluno.codigo;
        editButton.type = 'button';
        editButton.classList.add('dark');
        editButton.classList.add('btn');
        editButton.classList.add('btn-outline-dark');
        editButton.innerText = 'Editar';
        editButton.addEventListener("click", OpenEditPlayer);
        editButton.setAttribute("data-bs-toggle", "modal")
        editButton.setAttribute("data-bs-target", "#EditModal")

        row.appendChild(editButton);

        corpoTabelAlunos.appendChild(row);
    });

}

function OpenEditPlayer(){
    selectedID = this.id;
    aluno = alunos.get(selectedID);

    document.getElementById('edit_nomeAluno').value =aluno.nome;
    document.getElementById('edit_dataNascimento').value = aluno.dataNascimento;
    document.getElementById('edit_endereco').value = aluno.endereco;
    document.getElementById('edit_telefone').value =aluno.telefone;
    document.getElementById('edit_email').value = aluno.email;
}

function SaveEditPlayer() {
    var nome = document.getElementById('edit_nomeAluno');
    var dataNascimento = document.getElementById('edit_dataNascimento');
    var endereco = document.getElementById('edit_endereco');
    var telefone = document.getElementById('edit_telefone');
    var email = document.getElementById('edit_email');

    var aluno = new Aluno();
    aluno.codigo = selectedID;
    aluno.nome = nome.value;
    aluno.dataNascimento = dataNascimento.value;
    aluno.endereco = endereco.value;
    aluno.telefone = telefone.value;
    aluno.email = email.value;

    alunos.set(selectedID, aluno)

    atualizaTabela();
}
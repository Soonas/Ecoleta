// Importar a dependencia do SQLite3
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
//     // Criar tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
//     // Inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1569254982489-93e2fdf7fd45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
//         "Colectoria",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletronicos, Lâmpadas"
//     ]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso!")
//         console.log(this)
//     }

//     // db.run(query, values, afterInsertData)

//     // Consultar os dados da tabela
//     db.all(`SELECT * FROM places`, function(err, rows){
//         if(err){
//             return console.log(err)
//         }

//         console.log("Aqui estão seus requisitos: ")
//         console.log(rows)
//     })
//     //Deletar um dado na tabela
    // db.run(`DELETE  FROM places WHERE id = ?`, [1], function(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })
})
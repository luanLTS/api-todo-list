// importa o pacote do jwt
var jwt = require("jsonwebtoken");
let token;
// cria a palavra secreta para gerar e validar os tokens
let secret = "testejwt";

// sign gera um novo token
jwt.sign(
    // payload: é o dado que vai ser transportado "criptografado"
    {
        data: "luanlts" + Date.now(),
    },

    // secret: é a palavra ou chave da "criptografia"
    secret,
    // expiresIn: é caso queira, o tempo em que o token não será mais válido
    { expiresIn: 10 },

    //callback: funcao para tratar se a geracao deu secesso ou fracasso
    (err, payload) => {
        if (!err) {
            console.log(payload);
            token = payload;

            setTimeout(() => {
                // verify: serve para verificar se é um token valido
                //token: é o token recebido do cliente
                // secret: palavra secreta que foi utilizada para gerar os tokens válidos
                //callback: funcao para tratar a validacao do token
                jwt.verify(token, secret, (err, result) => {
                    if (!err) {
                        console.log(result.data);
                    } else {
                        console.error(err);
                    }
                });
            }, 11000);
        } else {
            console.error(err);
        }
    }
);

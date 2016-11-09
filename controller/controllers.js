angular.module("App.controllers", [])
    .controller("HomeController", function($scope, $rootScope) {
        $scope.links = [{
            title: "Voluntarios",
            icon: "fa-users",
            text: "Gerenciador de Voluntarios",
            link: "/voluntarios"
        }, {
            title: "Pesquisas",
            icon: "fa-list-ol",
            text: "Consultar/Cadastrar Pesquisas",
            link: "/pesquisas"
        }];

    })
    .controller("VoluntariosController", function($scope, $rootScope) {



        $rootScope.collapseFormValuntario = true;
        $scope.newVoluntario = {};
        $scope.newDate = new Date();

        function novo() {
            $scope.newVoluntario = {};
            $scope.newVoluntario.data_cadastro = new Date();
            $scope.newVoluntario.ativo = true;
        }

        novo();

        $scope.links = [{
            title: "Cadastro",
            icon: "fa-plus-square",
            text: "Cadastro de Voluntarios",
            link: "/cadastro_voluntario"
        }, {
            title: "Consultar",
            icon: "fa-search",
            text: "Consultar Lista Voluntarios",
            link: "/cotacoes"
        }];



        $scope.visualizarFormulario = function() {
            $rootScope.collapseFormValuntario = false;
            $rootScope.voluntario = null;
        }

        $scope.visualizarVoluntario = function(voluntario) {
            console.log(">> " + voluntario);
            $rootScope.voluntario = voluntario;
            $rootScope.collapseFormValuntario = true;
        }

        $scope.salvarVoluntario = function() {


            //if (formulario.$valid) {
            $scope.newVoluntario.id = $rootScope.voluntarios.length + 1;
            $scope.newVoluntario.sexo = $scope.newVoluntario.sexo.code;
            $scope.newVoluntario.perfil = $scope.newVoluntario.perfil.code;
            $rootScope.voluntarios.push($scope.newVoluntario);
            novo();
            $scope.addVoluntario = !$scope.addVoluntario;
            //}
        }

    })
    .controller("PesquisasController", function($scope, $rootScope) {
        $scope.links = [{
            title: "Cadastro",
            icon: "fa-plus-square",
            text: "Cadastro de Pesquisa",
            link: "/cadastro_pesquisa"
        }, {
            title: "Consultar",
            icon: "fa-search",
            text: "Consultar Lista Pesquisas",
            link: "/cotacoes"
        }];

    })
    .controller("MainController", function($scope, $rootScope, $filter, $uibModal, $document, $location) {

        $rootScope.listaVoluntarioSexo = [
            { code: 'masculino', name: '' },
            { code: 'feminino', name: '' }
        ];

        $rootScope.listaVoluntarioPerfil = [
            { code: 'A', name: '' },
            { code: 'B', name: '' },
            { code: 'C', name: '' }
        ];

        $rootScope.listaTiposQuestionario = [
            { code: 'Tipo1', name: '' },
            { code: 'Tipo2', name: '' },
            { code: 'Tipo3', name: '' },
            { code: 'Tipo4', name: '' }
        ];

        $rootScope.listaCategoriaQuestionario = [
            { code: 'CategoriaD66', name: '' },
            { code: 'CategoriaXpto99', name: '' }
        ];

        $rootScope.voluntarios = [{
            id: '1',
            nome: 'Marcos Aurelio',
            data_nascimento: new Date('5/30/1988'),
            data_cadastro: new Date('06/29/2016'),
            telefone: '11 9 5155-5555',
            sexo: 'masculino',
            email: 'marcos_aurelio@gmail.com',
            rg: '99899444455',
            cpf: '77799955500',
            perfil: 'A',
            cep: '04013-010',
            rua: 'Rua jose gomes',
            numero: '21',
            complemento: '',
            bairro: 'Vila Mariana',
            cidade: 'São Paulo',
            estado: 'SP',
            pais: 'Brasil',
            obs: 'Nada',
            ativo: true,
            questionarios: [
                { id: 1, respondido: true, data: new Date('7/30/2016') },
                { id: 2, respondido: true, data: new Date('5/5/2016') },
                { id: 3, respondido: false },
                { id: 4, respondido: false },
                { id: 5, respondido: false }
            ]
        }, {
            id: '2',
            nome: 'Jose Silva',
            data_nascimento: new Date('10/2/1977'),
            data_cadastro: new Date('07/31/2016'),
            telefone: '11 9 9999-5555',
            sexo: 'masculino',
            email: 'josesilva@gmail.com',
            rg: '98798779877',
            cpf: '55566655588',
            perfil: 'B',
            cep: '04999-010',
            rua: 'Rua jose barreto',
            numero: '31',
            complemento: 'ap 2',
            bairro: 'Paraiso',
            cidade: 'São Paulo',
            estado: 'SP',
            pais: 'Brasil',
            obs: 'Nada',
            ativo: true,
            questionarios: [
                { id: 1, respondido: true, data: new Date('9/5/2016') },
                { id: 2, respondido: false },
                { id: 3, respondido: false },
                { id: 4, respondido: false },
                { id: 5, respondido: false }
            ]
        }, {
            id: '3',
            nome: 'Maria do Socorro',
            data_nascimento: new Date('5/20/1945'),
            data_cadastro: new Date('02/19/2016'),
            telefone: '71 9 8888-5555',
            sexo: 'feminino',
            email: 'maria@gmail.com',
            rg: '564564564',
            cpf: '44466644488',
            perfil: 'A',
            cep: '80555-810',
            rua: 'Rua Chico Alencar',
            numero: '999',
            complemento: '',
            bairro: 'Boa vista',
            cidade: 'Salvador',
            estado: 'BA',
            pais: 'Brasil',
            obs: '',
            ativo: false,
            questionarios: [
                { id: 1, respondido: true, data: new Date('3/15/2016') },
                { id: 2, respondido: true, data: new Date('3/25/2016') },
                { id: 3, respondido: true, data: new Date('4/12/2016') },
                { id: 4, respondido: true, data: new Date('4/20/2016') }
            ]
        }, {
            id: '4',
            nome: 'Roberto Viana',
            data_nascimento: new Date('12/5/1977'),
            data_cadastro: new Date('07/25/2016'),
            telefone: '22 9 6666-5555',
            sexo: 'masculino',
            email: 'roberto_viana@gmail.com',
            rg: '9879879798',
            cpf: '22266622299',
            perfil: 'C',
            cep: '07013-999',
            rua: 'Rua gomes lisboa',
            numero: '301',
            complemento: 'ap 22',
            bairro: 'Vila Clotilde',
            cidade: 'Rio de Janeiro',
            estado: 'RJ',
            pais: 'Brasil',
            obs: '',
            ativo: true,
            questionarios: [
                { id: 1, respondido: false },
                { id: 2, respondido: false },
                { id: 3, respondido: false }
            ]
        }];


        $rootScope.listaQuestionarios = [{
                id: '1',
                nome: 'Questionario 1',
                desc: 'Texto explicando Q1',
                perguntas: [{
                        id: '1',
                        titulo: 'Pergunta1',
                        tipo: 'Tipo1',
                        categoria: 'CategoriaD66',
                        perfil: 'A',
                        respostas: [
                            { id: '1', titulo: 'Resposta A' },
                            { id: '2', titulo: 'Resposta B' },
                            { id: '3', titulo: 'Resposta C' },
                            { id: '4', titulo: 'Resposta D' }
                        ]
                    }, {
                        id: '2',
                        titulo: 'Pergunta2',
                        tipo: 'Tipo2',
                        categoria: 'CategoriaD66',
                        perfil: 'B',
                        respostas: [
                            { id: '1', titulo: 'Resposta AA' },
                            { id: '2', titulo: 'Resposta BB' },
                            { id: '3', titulo: 'Resposta CC' },
                            { id: '4', titulo: 'Resposta DD' }
                        ]
                    }, {
                        id: '3',
                        titulo: 'Pergunta3',
                        tipo: 'Tipo1',
                        categoria: 'CategoriaXpto99',
                        perfil: 'B',
                        respostas: [
                            { id: '1', titulo: 'Resposta AAA' },
                            { id: '2', titulo: 'Resposta BBB' },
                            { id: '3', titulo: 'Resposta CCC' },
                            { id: '4', titulo: 'Resposta DDD' }
                        ]
                    }

                ]
            }, {
                id: '2',
                nome: 'Questionario 2',
                desc: 'Texto explicando Q2',
                perguntas: [{
                        id: '1',
                        titulo: 'Pergunta1',
                        tipo: 'Tipo1',
                        categoria: 'CategoriaD66',
                        perfil: 'A',
                        respostas: [
                            { id: '1', titulo: 'Resposta A' },
                            { id: '2', titulo: 'Resposta B' },
                            { id: '3', titulo: 'Resposta C' },
                            { id: '4', titulo: 'Resposta D' }
                        ]
                    }, {
                        id: '2',
                        titulo: 'Pergunta2',
                        tipo: 'Tipo2',
                        categoria: 'CategoriaD66',
                        perfil: 'B',
                        respostas: [
                            { id: '1', titulo: 'Resposta AA' },
                            { id: '2', titulo: 'Resposta BB' },
                            { id: '3', titulo: 'Resposta CC' },
                            { id: '4', titulo: 'Resposta DD' }
                        ]
                    }, {
                        id: '3',
                        titulo: 'Pergunta3',
                        tipo: 'Tipo1',
                        categoria: 'CategoriaXpto99',
                        perfil: 'B',
                        respostas: [
                            { id: '1', titulo: 'Resposta AAA' },
                            { id: '2', titulo: 'Resposta BBB' },
                            { id: '3', titulo: 'Resposta CCC' },
                            { id: '4', titulo: 'Resposta DDD' }
                        ]
                    }

                ]
            }, {
                id: '3',
                nome: 'Questionario 3',
                desc: 'Texto explicando Q3',
                perguntas: [{
                        id: '1',
                        titulo: 'Pergunta1',
                        tipo: 'Tipo1',
                        categoria: 'CategoriaD66',
                        perfil: 'A',
                        respostas: [
                            { id: '1', titulo: 'Resposta A' },
                            { id: '2', titulo: 'Resposta B' },
                            { id: '3', titulo: 'Resposta C' },
                            { id: '4', titulo: 'Resposta D' }
                        ]
                    }, {
                        id: '2',
                        titulo: 'Pergunta2',
                        tipo: 'Tipo2',
                        categoria: 'CategoriaD66',
                        perfil: 'B',
                        respostas: [
                            { id: '1', titulo: 'Resposta AA' },
                            { id: '2', titulo: 'Resposta BB' },
                            { id: '3', titulo: 'Resposta CC' },
                            { id: '4', titulo: 'Resposta DD' }
                        ]
                    }

                ]
            }, {
                id: '4',
                nome: 'Questionario 4',
                desc: 'Texto explicando Q4',
                perguntas: [{
                        id: '1',
                        titulo: 'Pergunta1',
                        tipo: 'Tipo1',
                        categoria: 'CategoriaD66',
                        perfil: 'A',
                        respostas: [
                            { id: '1', titulo: 'Resposta A' },
                            { id: '2', titulo: 'Resposta B' },
                            { id: '3', titulo: 'Resposta C' },
                            { id: '4', titulo: 'Resposta D' }
                        ]
                    }, {
                        id: '2',
                        titulo: 'Pergunta2',
                        tipo: 'Tipo2',
                        categoria: 'CategoriaD66',
                        perfil: 'B',
                        respostas: [
                            { id: '1', titulo: 'Resposta AA' },
                            { id: '2', titulo: 'Resposta BB' },
                            { id: '3', titulo: 'Resposta CC' },
                            { id: '4', titulo: 'Resposta DD' }
                        ]
                    }, {
                        id: '3',
                        titulo: 'Pergunta3',
                        tipo: 'Tipo1',
                        categoria: 'CategoriaXpto99',
                        perfil: 'B',
                        respostas: [
                            { id: '1', titulo: 'Resposta AAA' },
                            { id: '2', titulo: 'Resposta BBB' },
                            { id: '3', titulo: 'Resposta CCC' },
                            { id: '4', titulo: 'Resposta DDD' }
                        ]
                    }, {
                        id: '4',
                        titulo: 'Pergunta4',
                        tipo: 'Tipo3',
                        categoria: 'CategoriaXpto99',
                        perfil: 'C',
                        respostas: [
                            { id: '1', titulo: 'Resposta AAAA' },
                            { id: '2', titulo: 'Resposta BBBB' },
                            { id: '3', titulo: 'Resposta CCCC' },
                            { id: '4', titulo: 'Resposta DDDD' }
                        ]
                    }

                ]
            }, {
                id: '5',
                nome: 'Questionario 5',
                desc: 'Texto explicando Q5',
                perguntas: [{
                        id: '1',
                        titulo: 'Pergunta1',
                        tipo: 'Tipo1',
                        categoria: 'CategoriaD66',
                        perfil: 'A',
                        respostas: [
                            { id: '1', titulo: 'Resposta A' },
                            { id: '2', titulo: 'Resposta B' },
                            { id: '3', titulo: 'Resposta C' }
                        ]
                    }, {
                        id: '2',
                        titulo: 'Pergunta2',
                        tipo: 'Tipo2',
                        categoria: 'CategoriaD66',
                        perfil: 'B',
                        respostas: [
                            { id: '1', titulo: 'Resposta AA' },
                            { id: '2', titulo: 'Resposta BB' },
                            { id: '3', titulo: 'Resposta CC' }
                        ]
                    }, {
                        id: '3',
                        titulo: 'Pergunta3',
                        tipo: 'Tipo1',
                        categoria: 'CategoriaXpto99',
                        perfil: 'B',
                        respostas: [
                            { id: '1', titulo: 'Resposta AAA' },
                            { id: '2', titulo: 'Resposta BBB' },
                            { id: '3', titulo: 'Resposta CCC' }
                        ]
                    }, {
                        id: '4',
                        titulo: 'Pergunta4',
                        tipo: 'Tipo3',
                        categoria: 'CategoriaXpto99',
                        perfil: 'C',
                        respostas: [
                            { id: '1', titulo: 'Resposta AAAA' },
                            { id: '2', titulo: 'Resposta BBBB' },
                            { id: '3', titulo: 'Resposta CCCC' }
                        ]
                    }, {
                        id: '5',
                        titulo: 'Pergunta5',
                        tipo: 'Tipo1',
                        categoria: 'CategoriaXpto99',
                        perfil: 'C',
                        respostas: [
                            { id: '1', titulo: 'Resposta AAAAA' },
                            { id: '2', titulo: 'Resposta BBBBB' },
                            { id: '3', titulo: 'Resposta CCCCC' }
                        ]
                    }
                ]
            }

        ];


        /*$rootScope.dataValidade = function(date) {
            return date.getDate() + '/' + (date.getMonth() + 6) + '/' + date.getFullYear();
        }








        var today = new Date();

        $rootScope.dataPedido = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        $rootScope.itemPedido = {};
        $rootScope.totalTamanhos = 0;
        $rootScope.itensPedido = [];
        $rootScope.totalValorPedido = 0;
        $rootScope.estourouCota = false;
        $rootScope.estourouEstoque = false;


        $rootScope.pedido = {};
        $rootScope.listaPedidos = [{ "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "610", "anterior": "AC60" }, "regiao": { "code": "600610", "anterior": "610" }, "cliente": { "code": "100001", "anterior": "600610" }, "code": 316906, "itensPedido": [{ "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "356", "grade": "-", "value": 33 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "378", "grade": "-", "value": 33 }], "dataPrevista": "5/12/2016", "data": "10/10/2016", "valorTotal": 1089 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "620", "anterior": "AC60" }, "regiao": { "code": "600620", "anterior": "620" }, "cliente": { "code": "100003", "anterior": "600620" }, "code": 238047, "itensPedido": [{ "produto": { "code": "700005", "name": "Havaianas Simpsons", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "600800", "gnv": "770000", "grv": "33000", "zona": "1800", "tipo": "grade", "data": "2017-01-10T02:00:00.000Z", "foto": "simpsons.jpg", "valor": 25, "opcoes": [{ "tamanho": "I21", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "212", "value": 1 }, { "tamanho": "234", "value": 2 }, { "tamanho": "256", "value": 3 }, { "tamanho": "278", "value": 3 }, { "tamanho": "290", "value": 2 }, { "tamanho": "312", "value": 1 }] }, { "tamanho": "F33", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "334", "value": 1 }, { "tamanho": "356", "value": 2 }, { "tamanho": "378", "value": 3 }, { "tamanho": "390", "value": 3 }, { "tamanho": "412", "value": 2 }, { "tamanho": "434", "value": 1 }] }] }, "tamanho": "312", "grade": "I21", "value": 10 }, { "produto": { "code": "700005", "name": "Havaianas Simpsons", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "600800", "gnv": "770000", "grv": "33000", "zona": "1800", "tipo": "grade", "data": "2017-01-10T02:00:00.000Z", "foto": "simpsons.jpg", "valor": 25, "opcoes": [{ "tamanho": "I21", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "212", "value": 1 }, { "tamanho": "234", "value": 2 }, { "tamanho": "256", "value": 3 }, { "tamanho": "278", "value": 3 }, { "tamanho": "290", "value": 2 }, { "tamanho": "312", "value": 1 }] }, { "tamanho": "F33", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "334", "value": 1 }, { "tamanho": "356", "value": 2 }, { "tamanho": "378", "value": 3 }, { "tamanho": "390", "value": 3 }, { "tamanho": "412", "value": 2 }, { "tamanho": "434", "value": 1 }] }] }, "tamanho": "290", "grade": "I21", "value": 20 }, { "produto": { "code": "700005", "name": "Havaianas Simpsons", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "600800", "gnv": "770000", "grv": "33000", "zona": "1800", "tipo": "grade", "data": "2017-01-10T02:00:00.000Z", "foto": "simpsons.jpg", "valor": 25, "opcoes": [{ "tamanho": "I21", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "212", "value": 1 }, { "tamanho": "234", "value": 2 }, { "tamanho": "256", "value": 3 }, { "tamanho": "278", "value": 3 }, { "tamanho": "290", "value": 2 }, { "tamanho": "312", "value": 1 }] }, { "tamanho": "F33", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "334", "value": 1 }, { "tamanho": "356", "value": 2 }, { "tamanho": "378", "value": 3 }, { "tamanho": "390", "value": 3 }, { "tamanho": "412", "value": 2 }, { "tamanho": "434", "value": 1 }] }] }, "tamanho": "278", "grade": "I21", "value": 30 }, { "produto": { "code": "700005", "name": "Havaianas Simpsons", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "600800", "gnv": "770000", "grv": "33000", "zona": "1800", "tipo": "grade", "data": "2017-01-10T02:00:00.000Z", "foto": "simpsons.jpg", "valor": 25, "opcoes": [{ "tamanho": "I21", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "212", "value": 1 }, { "tamanho": "234", "value": 2 }, { "tamanho": "256", "value": 3 }, { "tamanho": "278", "value": 3 }, { "tamanho": "290", "value": 2 }, { "tamanho": "312", "value": 1 }] }, { "tamanho": "F33", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "334", "value": 1 }, { "tamanho": "356", "value": 2 }, { "tamanho": "378", "value": 3 }, { "tamanho": "390", "value": 3 }, { "tamanho": "412", "value": 2 }, { "tamanho": "434", "value": 1 }] }] }, "tamanho": "256", "grade": "I21", "value": 30 }, { "produto": { "code": "700005", "name": "Havaianas Simpsons", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "600800", "gnv": "770000", "grv": "33000", "zona": "1800", "tipo": "grade", "data": "2017-01-10T02:00:00.000Z", "foto": "simpsons.jpg", "valor": 25, "opcoes": [{ "tamanho": "I21", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "212", "value": 1 }, { "tamanho": "234", "value": 2 }, { "tamanho": "256", "value": 3 }, { "tamanho": "278", "value": 3 }, { "tamanho": "290", "value": 2 }, { "tamanho": "312", "value": 1 }] }, { "tamanho": "F33", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "334", "value": 1 }, { "tamanho": "356", "value": 2 }, { "tamanho": "378", "value": 3 }, { "tamanho": "390", "value": 3 }, { "tamanho": "412", "value": 2 }, { "tamanho": "434", "value": 1 }] }] }, "tamanho": "234", "grade": "I21", "value": 20 }, { "produto": { "code": "700005", "name": "Havaianas Simpsons", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "600800", "gnv": "770000", "grv": "33000", "zona": "1800", "tipo": "grade", "data": "2017-01-10T02:00:00.000Z", "foto": "simpsons.jpg", "valor": 25, "opcoes": [{ "tamanho": "I21", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "212", "value": 1 }, { "tamanho": "234", "value": 2 }, { "tamanho": "256", "value": 3 }, { "tamanho": "278", "value": 3 }, { "tamanho": "290", "value": 2 }, { "tamanho": "312", "value": 1 }] }, { "tamanho": "F33", "cor": "1002", "estoque": "15000", "grade": [{ "tamanho": "334", "value": 1 }, { "tamanho": "356", "value": 2 }, { "tamanho": "378", "value": 3 }, { "tamanho": "390", "value": 3 }, { "tamanho": "412", "value": 2 }, { "tamanho": "434", "value": 1 }] }] }, "tamanho": "212", "grade": "I21", "value": 10 }], "dataPrevista": "10/1/2017", "data": "11/10/2016", "valorTotal": 4089 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "620", "anterior": "AC60" }, "regiao": { "code": "600620", "anterior": "620" }, "cliente": { "code": "100003", "anterior": "600620" }, "code": 841381, "itensPedido": [{ "produto": { "code": "400001", "name": "Chaveiro", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "100000", "gnv": "110000", "grv": "20000", "zona": "1900", "data": "2016-11-20T02:00:00.000Z", "foto": "chaveiro.jpg", "valor": 10.5, "opcoes": [{ "tamanho": "001", "cor": "1001", "value": 0 }] }, "tamanho": "001", "grade": "-", "value": 10 }, { "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "378", "grade": "-", "value": 333 }], "dataPrevista": "10/1/2017", "data": "13/10/2016", "valorTotal": 10854 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "610", "anterior": "AC60" }, "regiao": { "code": "600610", "anterior": "610" }, "cliente": { "code": "100001", "anterior": "600610" }, "code": 307500, "itensPedido": [{ "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "378", "grade": "-", "value": 22 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "412", "grade": "-", "value": 22 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "378", "grade": "-", "value": 22 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "390", "grade": "-", "value": 22 }], "dataPrevista": "10/1/2017", "data": "13/10/2016", "valorTotal": 12306 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "630", "anterior": "AC60" }, "regiao": { "code": "600630", "anterior": "630" }, "cliente": { "code": "100004", "anterior": "600630" }, "code": 336138, "itensPedido": [{ "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "356", "grade": "-", "value": 222 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "378", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "390", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "412", "grade": "-", "value": 2 }], "dataPrevista": "10/1/2017", "data": "17/10/2016", "valorTotal": 16524 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "610", "anterior": "AC60" }, "regiao": { "code": "600610", "anterior": "610" }, "cliente": { "code": "100001", "anterior": "600610" }, "code": 172002, "itensPedido": [{ "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "334", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "356", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "378", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "390", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "412", "grade": "-", "value": 2 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "356", "grade": "-", "value": 3333 }], "dataPrevista": "10/1/2017", "data": "17/10/2016", "valorTotal": 78369.5 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "610", "anterior": "AC60" }, "regiao": { "code": "600611", "anterior": "610" }, "cliente": { "code": "100002", "anterior": "600611" }, "code": 411899, "itensPedido": [{ "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "334", "grade": "-", "value": 22 }, { "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "356", "grade": "-", "value": 22 }, { "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "378", "grade": "-", "value": 22 }, { "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "390", "grade": "-", "value": 22 }], "dataPrevista": "10/1/2017", "data": "18/10/2016", "valorTotal": 80129.5 }];
        $rootScope.listaCotacoes = [{ "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "610", "anterior": "AC60" }, "regiao": { "code": "600610", "anterior": "610" }, "cliente": { "code": "100001", "anterior": "600610" }, "code": 260704, "itensPedido": [{ "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "334", "grade": "-", "value": 33 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "356", "grade": "-", "value": 44 }, { "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "378", "grade": "-", "value": 33 }], "dataPrevista": "10/12/2016", "data": "17/10/2016", "valorTotal": 1930.5 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "610", "anterior": "AC60" }, "regiao": { "code": "600610", "anterior": "610" }, "cliente": { "code": "100001", "anterior": "600610" }, "code": 297214, "itensPedido": [{ "produto": { "code": "400001", "name": "Chaveiro", "cotaLivre": true, "tipoBloqueio": "gnv", "tipoEstoque": "geral", "estoque": "100000", "gnv": "110000", "grv": "20000", "zona": "1900", "data": "2016-11-20T02:00:00.000Z", "foto": "chaveiro.jpg", "valor": 10.5, "opcoes": [{ "tamanho": "001", "cor": "1001", "value": 0 }] }, "tamanho": "001", "grade": "-", "value": 1000 }], "dataPrevista": "10/12/2016", "data": "18/10/2016", "valorTotal": 12430.5 }, { "escritorio": { "code": "AC60", "anterior": "" }, "equipe": { "code": "630", "anterior": "AC60" }, "regiao": { "code": "600630", "anterior": "630" }, "cliente": { "code": "100004", "anterior": "600630" }, "code": 522164, "itensPedido": [{ "produto": { "code": "400004", "name": "Havaianas Color", "cotaLivre": false, "tipoBloqueio": "zona", "tipoEstoque": "tamanho", "estoque": "60000", "gnv": "50000", "grv": "3000", "zona": "800", "data": "2016-12-10T02:00:00.000Z", "foto": "color.jpg", "valor": 20, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "15000" }, { "tamanho": "356", "cor": "1002", "estoque": "10000" }, { "tamanho": "378", "cor": "1002", "estoque": "5000" }, { "tamanho": "390", "cor": "1002", "estoque": "20000" }, { "tamanho": "412", "cor": "1002", "estoque": "7000" }, { "tamanho": "434", "cor": "1002", "estoque": "3000" }] }, "tamanho": "378", "grade": "-", "value": 44 }, { "produto": { "code": "400002", "name": "Havaianas Retro", "cotaLivre": true, "tipoBloqueio": "grv", "tipoEstoque": "geral", "estoque": "20000", "gnv": "19000", "grv": "10000", "zona": "990", "data": "2016-06-10T03:00:00.000Z", "foto": "retro.jpg", "valor": 18.5, "opcoes": [{ "tamanho": "334", "cor": "1002" }, { "tamanho": "356", "cor": "1002" }, { "tamanho": "378", "cor": "1002" }, { "tamanho": "390", "cor": "1002" }, { "tamanho": "412", "cor": "1002" }, { "tamanho": "434", "cor": "1002" }] }, "tamanho": "390", "grade": "-", "value": 44 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "390", "grade": "-", "value": 4 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "390", "grade": "-", "value": 4 }, { "produto": { "code": "400003", "name": "Havaianas tradicional", "cotaLivre": false, "tipoBloqueio": "gnv", "tipoEstoque": "cor", "estoque": "20000", "gnv": "50000", "grv": "5000", "zona": "800", "data": "2016-12-05T02:00:00.000Z", "foto": "tradicional.jpg", "valor": 16.5, "opcoes": [{ "tamanho": "334", "cor": "1002", "estoque": "2000" }, { "tamanho": "356", "cor": "1002", "estoque": "2000" }, { "tamanho": "378", "cor": "1002", "estoque": "2000" }, { "tamanho": "390", "cor": "1002", "estoque": "2000" }, { "tamanho": "412", "cor": "1002", "estoque": "2000" }, { "tamanho": "434", "cor": "1002", "estoque": "2000" }, { "tamanho": "334", "cor": "1003", "estoque": "2000" }, { "tamanho": "356", "cor": "1003", "estoque": "2000" }, { "tamanho": "378", "cor": "1003", "estoque": "2000" }, { "tamanho": "390", "cor": "1003", "estoque": "1500" }, { "tamanho": "412", "cor": "1003", "estoque": "250" }, { "tamanho": "434", "cor": "1003", "estoque": "250" }] }, "tamanho": "412", "grade": "-", "value": 4 }], "dataPrevista": "10/12/2016", "data": "19/10/2016", "valorTotal": 14322.5 }];

        $rootScope.maiorData = '';


        $rootScope.listaGNV = [
            { code: 'AC60', anterior: '' }
        ];
        $rootScope.listaGRV = [
            { code: '610', anterior: 'AC60' },
            { code: '620', anterior: 'AC60' },
            { code: '630', anterior: 'AC60' }
        ];
        $rootScope.listaZONA = [
            { code: '600610', anterior: '610' },
            { code: '600611', anterior: '610' },
            { code: '600620', anterior: '620' },
            { code: '600630', anterior: '630' }
        ];
        $rootScope.listaCLIENTE = [
            { code: '100001', anterior: '600610' },
            { code: '100002', anterior: '600611' },
            { code: '100003', anterior: '600620' },
            { code: '100004', anterior: '600630' }
        ];

        $rootScope.listaBloqueio = [
            { code: 'gnv', name: '' },
            { code: 'grv', name: '' },
            { code: 'zona', name: '' }

        ];

        $rootScope.listaEstoque = [
            { code: 'geral', name: '' },
            { code: 'produto', name: '' },
            { code: 'cor', name: '' }

        ];
        $rootScope.listaFotos = [
            { code: 'hava1.jpg' },
            { code: 'hava2.jpg' },
            { code: 'hava3.jpg' }

        ];


        $rootScope.selectedGNV = '';
        $rootScope.selectedGRV = '';
        $rootScope.selectedZONA = '';
        $rootScope.selectedCLIENTE = '';



        $rootScope.listaEstrutura = [

            { nivel1: 'AC60', desc1: 'Havaianas', nivel2: '610', desc2: 'Regional Sudeste', nivel3: '600610', desc3: 'Olavo Rodrigues' },
            { nivel1: 'AC60', desc1: 'Havaianas', nivel2: '610', desc2: 'Regional Sudeste', nivel3: '600611', desc3: 'Jane Gonçalves' },
            { nivel1: 'AC60', desc1: 'Havaianas', nivel2: '620', desc2: 'Regional Nordeste', nivel3: '600620', desc3: 'José Renan Silva' },
            { nivel1: 'AC60', desc1: 'Havaianas', nivel2: '630', desc2: 'Regional Norte', nivel3: '600630', desc3: 'Hudson Medeiros' }


        ];
        $rootScope.listaClientes = [
            { nivel1: 'AC60', nivel2: '610', nivel3: '600610', codigo: '100001', desc: 'Cliente 1 do Vendedor 600610' },
            { nivel1: 'AC60', nivel2: '610', nivel3: '600611', codigo: '100002', desc: 'Cliente 2 do Vendedor 600611' },
            { nivel1: 'AC60', nivel2: '620', nivel3: '600620', codigo: '100003', desc: 'Cliente 3 do Vendedor 600620' },
            { nivel1: 'AC60', nivel2: '630', nivel3: '600630', codigo: '100004', desc: 'Cliente 4 do Vendedor 600630' }

        ];

        $rootScope.listaPlanoVendas = [
            { nivel1: '   AC60    ', nivel2: '  610 ', nivel3: '  600610  ', produto: ' 400001  ', prev: '    1.000   ' },
            { nivel1: '   AC60    ', nivel2: '  610 ', nivel3: '  600610  ', produto: ' 400002  ', prev: '    20.000  ' },
            { nivel1: '   AC60    ', nivel2: '  610 ', nivel3: '  600610  ', produto: ' 400003  ', prev: '    50.000  ' },
            { nivel1: '   AC60    ', nivel2: '  610 ', nivel3: '  600610  ', produto: ' 400004  ', prev: '    50.000  ' },
            { nivel1: '   AC60    ', nivel2: '  610 ', nivel3: '  600610  ', produto: ' 700005  ', prev: '    10.000  ' },
            { nivel1: '   AC60    ', nivel2: '  610 ', nivel3: '  600611  ', produto: ' 400001  ', prev: '    2.000   ' },
            { nivel1: '   AC60    ', nivel2: '  610 ', nivel3: '  600611  ', produto: ' 400002  ', prev: '    40.000  ' },
            { nivel1: '   AC60    ', nivel2: '  610 ', nivel3: '  600611  ', produto: ' 400003  ', prev: '    100.000 ' },
            { nivel1: '   AC60    ', nivel2: '  610 ', nivel3: '  600611  ', produto: ' 400004  ', prev: '    50.000  ' },
            { nivel1: '   AC60    ', nivel2: '  610 ', nivel3: '  600611  ', produto: ' 700005  ', prev: '    20.000  ' },
            { nivel1: '   AC60    ', nivel2: '  620 ', nivel3: '  600620  ', produto: ' 400001  ', prev: '    3.000   ' },
            { nivel1: '   AC60    ', nivel2: '  620 ', nivel3: '  600620  ', produto: ' 400002  ', prev: '    50.000  ' },
            { nivel1: '   AC60    ', nivel2: '  620 ', nivel3: '  600620  ', produto: ' 400003  ', prev: '    110.000 ' },
            { nivel1: '   AC60    ', nivel2: '  620 ', nivel3: '  600620  ', produto: ' 400004  ', prev: '    50.000  ' },
            { nivel1: '   AC60    ', nivel2: '  620 ', nivel3: '  600620  ', produto: ' 700005  ', prev: '    30.000  ' },
            { nivel1: '   AC60    ', nivel2: '  630 ', nivel3: '  600630  ', produto: ' 400001  ', prev: '    5.000   ' },
            { nivel1: '   AC60    ', nivel2: '  630 ', nivel3: '  600630  ', produto: ' 400002  ', prev: '    60.000  ' },
            { nivel1: '   AC60    ', nivel2: '  630 ', nivel3: '  600630  ', produto: ' 400003  ', prev: '    120.000 ' },
            { nivel1: '   AC60    ', nivel2: '  630 ', nivel3: '  600630  ', produto: ' 400004  ', prev: '    50.000  ' },
            { nivel1: '   AC60    ', nivel2: '  630 ', nivel3: '  600630  ', produto: ' 700005  ', prev: '    40.000  ' }

        ];

        $rootScope.listaDisponibilidade = [
            { cod: '  400001  ', cor: ' 1001    ', tam: ' 001 ', estoque: ' 2.000   ', ordemPR: ' 40.000  ', ordemPL: ' 50.000  ' },
            { cod: '  400002  ', cor: ' 1002    ', tam: ' 334 ', estoque: ' 10.000  ', ordemPR: ' 40.000  ', ordemPL: ' 50.000  ' },
            { cod: '  400002  ', cor: ' 1002    ', tam: ' 356 ', estoque: ' 10.000  ', ordemPR: ' 40.000  ', ordemPL: ' 50.000  ' },
            { cod: '  400002  ', cor: ' 1002    ', tam: ' 378 ', estoque: ' 10.000  ', ordemPR: ' 40.000  ', ordemPL: ' 50.000  ' },
            { cod: '  400002  ', cor: ' 1002    ', tam: ' 390 ', estoque: ' 10.000  ', ordemPR: ' 40.000  ', ordemPL: ' 50.000  ' },
            { cod: '  400002  ', cor: ' 1002    ', tam: ' 412 ', estoque: ' 10.000  ', ordemPR: ' 40.000  ', ordemPL: ' 50.000  ' },
            { cod: '  400002  ', cor: ' 1002    ', tam: ' 434 ', estoque: ' 10.000  ', ordemPR: ' 40.000  ', ordemPL: ' 50.000  ' },
            { cod: '  400003  ', cor: ' 1002    ', tam: ' 334 ', estoque: ' 20.000  ', ordemPR: ' 100.000 ', ordemPL: ' 150.000 ' },
            { cod: '  400003  ', cor: ' 1002    ', tam: ' 356 ', estoque: ' 20.000  ', ordemPR: ' 100.000 ', ordemPL: ' 150.000 ' },
            { cod: '  400003  ', cor: ' 1002    ', tam: ' 378 ', estoque: ' 20.000  ', ordemPR: ' 100.000 ', ordemPL: ' 150.000 ' },
            { cod: '  400003  ', cor: ' 1002    ', tam: ' 390 ', estoque: ' 20.000  ', ordemPR: ' 100.000 ', ordemPL: ' 150.000 ' },
            { cod: '  400003  ', cor: ' 1002    ', tam: ' 412 ', estoque: ' 20.000  ', ordemPR: ' 100.000 ', ordemPL: ' 150.000 ' },
            { cod: '  400003  ', cor: ' 1002    ', tam: ' 434 ', estoque: ' 20.000  ', ordemPR: ' 100.000 ', ordemPL: ' 150.000 ' },
            { cod: '  400003  ', cor: ' 1003    ', tam: ' 334 ', estoque: ' 20.000  ', ordemPR: ' 100.000 ', ordemPL: ' 150.000 ' },
            { cod: '  400003  ', cor: ' 1003    ', tam: ' 356 ', estoque: ' 20.000  ', ordemPR: ' 100.000 ', ordemPL: ' 150.000 ' },
            { cod: '  400003  ', cor: ' 1003    ', tam: ' 378 ', estoque: ' 20.000  ', ordemPR: ' 100.000 ', ordemPL: ' 150.000 ' },
            { cod: '  400003  ', cor: ' 1003    ', tam: ' 390 ', estoque: ' 20.000  ', ordemPR: ' 100.000 ', ordemPL: ' 150.000 ' },
            { cod: '  400003  ', cor: ' 1003    ', tam: ' 412 ', estoque: ' 20.000  ', ordemPR: ' 100.000 ', ordemPL: ' 150.000 ' },
            { cod: '  400003  ', cor: ' 1003    ', tam: ' 434 ', estoque: ' 20.000  ', ordemPR: ' 100.000 ', ordemPL: ' 150.000 ' },
            { cod: '  400004  ', cor: ' 1002    ', tam: ' 334 ', estoque: ' 10.000  ', ordemPR: ' 20.000  ', ordemPL: ' 20.000  ' },
            { cod: '  400004  ', cor: ' 1002    ', tam: ' 356 ', estoque: ' 10.000  ', ordemPR: ' 20.000  ', ordemPL: ' 20.000  ' },
            { cod: '  400004  ', cor: ' 1002    ', tam: ' 378 ', estoque: ' 10.000  ', ordemPR: ' 20.000  ', ordemPL: ' 20.000  ' },
            { cod: '  400004  ', cor: ' 1002    ', tam: ' 390 ', estoque: ' 10.000  ', ordemPR: ' 20.000  ', ordemPL: ' 20.000  ' },
            { cod: '  400004  ', cor: ' 1002    ', tam: ' 412 ', estoque: ' 10.000  ', ordemPR: ' 20.000  ', ordemPL: ' 20.000  ' },
            { cod: '  400004  ', cor: ' 1002    ', tam: ' 434 ', estoque: ' 10.000  ', ordemPR: ' 20.000  ', ordemPL: ' 20.000  ' },
            { cod: '  700005  ', cor: ' 1002    ', tam: ' I21 ', estoque: ' 20.000  ', ordemPR: ' 80.000  ', ordemPL: ' 120.000 ' },
            { cod: '  700005  ', cor: ' 1002    ', tam: ' F33 ', estoque: ' 30.000  ', ordemPR: ' 90.000  ', ordemPL: ' 130.000 ' }

        ]




        $rootScope.products = [{
            code: '400001',
            name: 'Chaveiro',
            cotaLivre: false,
            tipoBloqueio: 'gnv',
            tipoEstoque: 'geral',
            estoque: '100000',
            gnv: '90000',
            grv: '20000',
            zona: '1900',

            data: new Date('11/20/2016'),
            foto: 'chaveiro.jpg',
            valor: 10.5,
            opcoes: [{ tamanho: '001', cor: '1001', value: 0 }]
        }, {
            code: '400002',
            name: 'Havaianas Retro',
            cotaLivre: true,
            tipoBloqueio: 'grv',
            tipoEstoque: 'geral',
            estoque: '20000',
            gnv: '19000',
            grv: '10000',
            zona: '990',
            data: new Date('06/10/2016'),
            foto: 'retro.jpg',
            valor: 18.5,
            opcoes: [{ tamanho: '334', cor: '1002' }, { tamanho: '356', cor: '1002' }, { tamanho: '378', cor: '1002' }, { tamanho: '390', cor: '1002' }, { tamanho: '412', cor: '1002' }, { tamanho: '434', cor: '1002' }]
        }, {
            code: '400003',
            name: 'Havaianas tradicional',
            cotaLivre: false,
            tipoBloqueio: 'gnv',
            tipoEstoque: 'cor',
            estoque: '20000',
            gnv: '50000',
            grv: '5000',
            zona: '800',
            data: new Date('12/5/2016'),
            foto: 'tradicional.jpg',
            valor: 16.5,
            opcoes: [
                { tamanho: '334', cor: '1002', estoque: '20000' },
                { tamanho: '356', cor: '1002', estoque: '20000' },
                { tamanho: '378', cor: '1002', estoque: '20000' },
                { tamanho: '390', cor: '1002', estoque: '20000' },
                { tamanho: '412', cor: '1002', estoque: '20000' },
                { tamanho: '434', cor: '1002', estoque: '20000' },
                { tamanho: '334', cor: '1003', estoque: '20000' },
                { tamanho: '356', cor: '1003', estoque: '20000' },
                { tamanho: '378', cor: '1003', estoque: '20000' },
                { tamanho: '390', cor: '1003', estoque: '20000' },
                { tamanho: '412', cor: '1003', estoque: '20000' },
                { tamanho: '434', cor: '1003', estoque: '20000' }
            ]
        }, {
            code: '400004',
            name: 'Havaianas Color',
            cotaLivre: false,
            tipoBloqueio: 'zona',
            tipoEstoque: 'tamanho',
            estoque: '60000',
            gnv: '50000',
            grv: '3000',
            zona: '800',
            data: new Date('12/10/2016'),
            foto: 'color.jpg',
            valor: 20.0,
            opcoes: [
                { tamanho: '334', cor: '1002', estoque: '15000' },
                { tamanho: '356', cor: '1002', estoque: '10000' },
                { tamanho: '378', cor: '1002', estoque: '5000' },
                { tamanho: '390', cor: '1002', estoque: '20000' },
                { tamanho: '412', cor: '1002', estoque: '7000' },
                { tamanho: '434', cor: '1002', estoque: '3000' }
            ]
        }, {
            code: '700005',
            name: 'Havaianas Simpsons',
            cotaLivre: true,
            tipoBloqueio: 'gnv',
            tipoEstoque: 'geral',
            estoque: '6800',
            gnv: '7700',
            grv: '3300',
            zona: '1800',
            tipo: 'grade',
            data: new Date('01/10/2017'),
            foto: 'simpsons.jpg',
            valor: 25.0,
            opcoes: [{
                tamanho: 'I21',
                cor: '1002',
                estoque: '7700',
                grade: [
                    { tamanho: "212", value: 1 },
                    { tamanho: "234", value: 2 },
                    { tamanho: "256", value: 3 },
                    { tamanho: "278", value: 3 },
                    { tamanho: "290", value: 2 },
                    { tamanho: "312", value: 1 }
                ]
            }, {
                tamanho: 'F33',
                cor: '1002',
                estoque: '7700',
                grade: [
                    { tamanho: "334", value: 1 },
                    { tamanho: "356", value: 2 },
                    { tamanho: "378", value: 3 },
                    { tamanho: "390", value: 3 },
                    { tamanho: "412", value: 2 },
                    { tamanho: "434", value: 1 }
                ]
            }]
        }];




        $rootScope.selectProduct = function(code) {
            $rootScope.selectedProduct = $filter('filter')($rootScope.products, { code: code })[0];

            $rootScope.clear();

            $rootScope.cores = {};
            angular.forEach($rootScope.selectedProduct.opcoes, function(opcao, i) {
                $rootScope.cores[opcao.cor] = opcao;
            });

            $rootScope.tamanhos = {};
            angular.forEach($rootScope.selectedProduct.opcoes, function(opcao, i) {
                $rootScope.tamanhos[opcao.tamanho] = opcao;
            });




        }

        $rootScope.onChange = function() {
            $rootScope.totalTamanhos = 0;

            for (itemColor in $rootScope.itemPedido) {
                if (itemColor != 'code') {


                    for (itemTamanho in $rootScope.itemPedido[itemColor]) {
                        $rootScope.totalTamanhos += $rootScope.itemPedido[itemColor][itemTamanho].value;

                    }

                }

            }



            var limiteCota = $rootScope.selectedProduct[$rootScope.selectedProduct.tipoBloqueio];
            var limiteEstoque = $rootScope.selectedProduct.estoque;

            if (!$rootScope.selectedProduct.cotaLivre) {

                console.log('>>>>' + $rootScope.totalTamanhos);

                $rootScope.estourouCota = $rootScope.totalTamanhos > limiteCota;

                $rootScope.estourouEstoque = $rootScope.totalTamanhos > limiteEstoque;
            } else {



                $rootScope.estourouEstoque = $rootScope.totalTamanhos > limiteEstoque;
            }


        }

        $rootScope.clearPedido = function() {
            $rootScope.pedido = {};
            $rootScope.itensPedido = [];
            $rootScope.clear();
        }
        $rootScope.clear = function() {
            $rootScope.estourouCota = false;
            $rootScope.estourouEstoque = false;
            $rootScope.itemPedido = {};
            $rootScope.totalTamanhos = 0;
        }

        $rootScope.addItem = function() {
                $rootScope.itemPedido.total = $rootScope.totalTamanhos;



                var date = $rootScope.selectedProduct.data;


                if ($rootScope.maiorData == '') {
                    $rootScope.maiorData = date;
                } else {
                    if (date > $rootScope.maiorData) {
                        $rootScope.maiorData = date;
                    }
                }

                for (itemColor in $rootScope.itemPedido) {

                    for (itemTamanho in $rootScope.itemPedido[itemColor]) {
                        var itemLista = {};
                        itemLista.produto = $rootScope.selectedProduct;
                        itemLista.tamanho = itemTamanho;
                        itemLista.grade = '-';
                        itemLista.value = $rootScope.itemPedido[itemColor][itemTamanho].value;



                        if ($rootScope.selectedProduct.tipo == 'grade') {


                            for (var i = $rootScope.selectedProduct.opcoes.length - 1; i >= 0; i--) {


                                if ($rootScope.selectedProduct.opcoes[i].tamanho == itemTamanho) {
                                    var grade = $rootScope.selectedProduct.opcoes[i].grade
                                    for (var j = grade.length - 1; j >= 0; j--) {

                                        var itemGrade = {};
                                        itemGrade.produto = $rootScope.selectedProduct;
                                        itemGrade.tamanho = grade[j].tamanho;
                                        itemGrade.grade = itemTamanho;
                                        itemGrade.value = itemLista.value * grade[j].value;


                                        $rootScope.itensPedido.push(itemGrade);

                                        $rootScope.totalValorPedido += (itemGrade.value * itemLista.produto.valor);
                                    }

                                }

                            }


                        } else {

                            if (itemLista.value > 0) {
                                $rootScope.totalValorPedido += (itemLista.value * itemLista.produto.valor);
                                $rootScope.itensPedido.push(itemLista);

                            }
                        }

                    }

                }



                $rootScope.clear();
            }


        $scope.recarregar = function() {
            for (var i = $rootScope.listaPedidos.length - 1; i >= 0; i--) {
                var pedido = $rootScope.listaPedidos[i];

                var n = Math.floor(Math.random() * (10)) + 20;
                var n2 = Math.floor(Math.random() * (3)) + 1;


                var today = new Date();

                pedido.dataPrevista = (n) + '/' + 12 + '/' + today.getFullYear();




            }

        }

        $scope.limparCarrinho = function() {
            $rootScope.itensPedido = [];
        }
        $scope.fecharPedido = function() {
            $scope.gerarPedido();
            $rootScope.listaPedidos.push($rootScope.pedido);
            $scope.open('lg', '', 'view/modal/pedido.html', 'pedido');
        }

        $scope.fecharCotacao = function() {
            $scope.gerarPedido();
            $rootScope.listaCotacoes.push($rootScope.pedido);
            $scope.open('lg', '', 'view/modal/cotacao.html', 'cotacao');
        }

        $scope.gerarPedido = function() {
            $rootScope.pedido.code = getRandomIntInclusive();
            $rootScope.pedido.itensPedido = $rootScope.itensPedido;

            $rootScope.pedido.dataPrevista = $rootScope.maiorData.getDate() + '/' + ($rootScope.maiorData.getMonth() + 1) + '/' + $rootScope.maiorData.getFullYear();




            $rootScope.pedido.data = $rootScope.dataPedido;
            $rootScope.pedido.valorTotal = $rootScope.totalValorPedido;
        }

        function getRandomIntInclusive() {
            min = Math.ceil(100000);
            max = Math.floor(900000);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }



        $scope.open = function(size, parentSelector, page, tipo) {

            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: page,
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function() {
                        return [];
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {

                console.log('true ' + tipo);

                $rootScope.clearPedido();

            }, function() {
                if (tipo == 'cotacao') {
                    $location.path("/cotacoes");
                } else if (tipo == 'pedido') {
                    $location.path("/pedidos");
                }
                $rootScope.clearPedido();
            });
        };



        $rootScope.selectProduct($rootScope.products[2].code);*/

    });

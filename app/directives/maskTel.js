module.exports = function () {

    return {
        //pra póder interagir com o ngModel
        require: 'ngModel',

        //é executado depois do template ter sido compilado. Dá ecesso aos eventos do dom
        // link recebe três parÂmetros. 

        //Scope: pra manipular os dados do elemento
        //element: traz os eventos de click, de alteração, eventos do key
        //attr: atributos: nos possibilita ver os outros atributos do elemento (classes, ng-model, valor)
        //ctrl: colocando 'require: 'ngModel' eu posso colocar também o atributo 'ctrl', que se refere ao controller
        link: function (scope, element, attr, ctrl) {

            element.bind('keyup', function () {
                var _formatTel = function (value) {
                    value = value.replace(/[^0-9]+/g, '');
                    if (value.length > 4 && value.length <= 8) {
                        value = value.substring(0, 4) + '-' + value.substring(4, 8);
                    } else if (value.length > 4) {
                        value = value.substring(0, 5) + '-' + value.substring(5, 9);
                    }

                    return value;
                };

                //exibe o valor do input
                //console.log(scope.formClient.telClient.$viewValue);
                //consegue setar o valor
                ctrl.$setViewValue(_formatTel(ctrl.$viewValue));
                console.log('2 ', ctrl.$viewValue);
                //pra renderizar
                ctrl.$render();


            });

            //pra retirar o '-' do telefone pra salvar no banco
            ctrl.$parsers.push(function (value) {
                if (value.length > 8) {
                    value = value.replace(/[^0-9]+/g, '');
                }
                return value;
            });
        }
    };
};
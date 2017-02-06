module.exports = function () {

    return {
        template: `
         <div class="alert alert-success text-center">
            <p>{{title}} <b ng-transclude></b></p>                     
        </div>`,
        //replate true retira as tags do html
        replace: false,
        
        //'A': <div alert-msg></div>
        //'E': <alert-msg></alert-msg>
        //'C': restringe à classe: <div class='alert-msg'></div>
        restrict: 'E',
        scope: {
            //= diz que o valor vem do scope do controller (scope.msg)
            //caso deseje passar o valor dentro do html como string, usar o @
            // text: '@title'
            title: '=title'
        },
        //ele habilita a adição de um texto dentro da div da diretiva
        transclude: true
    };
}
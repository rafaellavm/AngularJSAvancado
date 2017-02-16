module.exports = function () {
<<<<<<< 248b6ac5765f6254d8ff57427b6bf111bc119c92

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
=======
    return {
        template: `
            <div class="alert alert-success text-center">
                <p>{{ title }} <b ng-transclude></b></p>
            </div>
        `,
        //replate true retira as tags do html
        replace: false,

        //'A': <div alert-msg></div>
        //'E': <alert-msg></alert-msg>
        //'C': restringe à classe: <div class='alert-msg'></div>
        restrict: "AE",

        //= diz que o valor vem do scope do controller (scope.msg)
        //caso deseje passar o valor dentro do html como string, usar o @
        // text: '@title'
        scope: {
            title: '@'
>>>>>>> Trabalhando com rotas 2
        },
        //ele habilita a adição de um texto dentro da div da diretiva
        transclude: true
    };
<<<<<<< 248b6ac5765f6254d8ff57427b6bf111bc119c92
}
=======
};
>>>>>>> Trabalhando com rotas 2

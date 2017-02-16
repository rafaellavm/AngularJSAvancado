var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    server = require('gulp-live-server'),
    browserify = require('gulp-browserify'),
    rename = require("gulp-rename");

//tarefas colocadas por default
gulp.task('default', ['browserify','watch','serve']);

//watch: ele fica observando os arquivos tem o final .js dentro da pasta /app
//se tiver mudanças ele vai executar a tarefa  browserify
gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['browserify']);
});

//servidor criado estático dentro da pasta public, ele vai reconhecer o index.html pra executar e vai abrir um servidor na porta 8700

gulp.task('serve', function() {
<<<<<<< 248b6ac5765f6254d8ff57427b6bf111bc119c92
    var serve = server.static('./public', 8700);
=======
    var serve = server.static('./public', 7500);
>>>>>>> Trabalhando com rotas 2
    serve.start();
    //watch: depois ele vai ficar observando tudo que está dentro da pasta /public com final .js, se tiver mudança ele restarta o servidor
    gulp.watch('public/js/**/*.js', function (file) {
        server.notify.apply(serve, [file]);
    });
    //watch: depois ele vai ficar observando tudo que está dentro da pasta /public com final .html, se tiver mudança ele restarta o servidor
    gulp.watch('public/**/*.html', function (file) {
        server.notify.apply(serve, [file]);
    });

});

//ele vai observar o arquivo app.js
//ele vai executar o browserify
//uglify ele vai 'mimificar' o arquivo 
//rename vai mudar o nome do arquivo 
//gulp.dest vai salvar o arquivo mudado na pasta /public/js
gulp.task('browserify', function(){
    return gulp.src(['app/app.js'])
        .pipe(browserify())
        //.pipe(uglify())
        .pipe(rename("main.js"))
        .pipe(gulp.dest('public/js/'));
});

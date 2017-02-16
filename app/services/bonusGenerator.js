module.exports = function bonusGeneratorProvider(){
<<<<<<< 248b6ac5765f6254d8ff57427b6bf111bc119c92
    
    var _length = 5;
    
=======
    var _length = 5;
>>>>>>> Trabalhando com rotas 2
    this.getLength = function(){
        return _length;
    };

    this.setLength = function(length){
        _length = length;
    };

    this.$get = function(){
        return {
            generator: function(){
                var bonus = '';
                for(var i = _length; i>0;--i){
                    bonus += Math.floor(Math.random()*10);
                }
                return bonus;
            }
        }
    };
};
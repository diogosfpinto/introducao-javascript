class Paciente {

    constructor(nome, peso, altura, gordura) {
        this._nome = nome;
        this._peso = peso;
        this._altura = altura;
        this._gordura = gordura;
        this._imc = this._calculaImc(this._peso, this._altura);
    }



    _calculaImc(peso, altura){
        var imc=0;
        imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

    get nome(){
        return this._nome;
    }

    get peso(){
        return this._peso;
    }

    get altura(){
        return this._altura;
    }

    get gordura(){
        return this._gordura;
    }

    get imc(){
        return this._imc;
    }
}
const formularioCurriculo = document.getElementById("formularioCurriculo");
const botao_maisTelefone = document.getElementById("adicionaTelefone");
const outroTelefone = document.getElementById("outroTelefone");
const botao_maisRedeSocial = document.getElementById("adicionaRedeSocial");
const outraRedeSocial = document.getElementById("outraRedeSocial");
const botao_maisCurso = document.getElementById("adicionaCurso");
const outroCurso = document.getElementById("outroCurso");
const botao_maisIdioma = document.getElementById("adicionaIdioma");
const outroIdioma = document.getElementById("outroIdioma");
const botao_maisFuncao = document.getElementById("adicionaHistoricoProfissional");
const outraFuncao = document.getElementById("outroHistoricoProfissional");
const botao_visualizar = document.getElementById("visualizar");


/* ------------------------------------------------------------------------------------------------------
   --------------------------------------------- Contadores ---------------------------------------------
   ------------------------------------------------------------------------------------------------------ */
var contTelefone = 1;
var contRedeSocial = 1;
var contCurso = 1;
var contIdioma = 1;
var contFuncao = 1;




/* ------------------------------------------------------------------------------------------------------
   -------------------------------------------- Botões Criar --------------------------------------------
   ------------------------------------------------------------------------------------------------------ */
botao_maisTelefone.addEventListener('click', function() {
    if (contTelefone < 3){
        contTelefone++;
        criarDivTelefone();
        criarLabelTelefone();
        criarInputTelefone();
        criarBotaoDeleteTelefone();
    } else {
        alert("Apenas 3 números de telefone, no máximo.");
    };
});

botao_maisRedeSocial.addEventListener('click', function() {
    if (contRedeSocial < 5){
        contRedeSocial++;
        criarDivRedeSocial();
        criarLabelRedeSocial();
        criarInputRedeSocial();
        criarBotaoDeleteRedeSocial();
    } else {
        alert("Apenas 5 redes sociais, no máximo.");
    };
});

botao_maisCurso.addEventListener('click', function() {
    if (contCurso < 6) {
        contCurso++;
        criarDivCurso();
        criarLabelNomeCurso();
        criarInputNomeCurso();
        criarBotaoDeleteCurso();
        quebrarLinhaCurso();
        criarLabelNivelCurso();
        criarSelectNivelCurso();
        criarOpcoesNivelCurso();
        criarLabelStatusCurso();
        criarSelectStatusCurso();
        criarOpcoesStatusCurso();
        quebrarLinhaCurso();
        criarLabelInstituicaoCurso();
        criarInputInstituicaoCurso();
        quebrarLinhaCurso();
        criarTituloDataInicioCurso();
        criarLabelMesInicioCurso();
        criarInputMesInicioCurso();
        criarLabelAnoInicioCurso();
        criarInputAnoInicioCurso();
        criarTituloDataGraduacaoCurso();
        criarLabelMesGraduacaoCurso();
        criarInputMesGraduacaoCurso();
        criarLabelAnoGraduacaoCurso();
        criarInputAnoGraduacaoCurso();
    } else {
        alert("Apenas 6 cursos, no máximo.");
    };
});

botao_maisIdioma.addEventListener('click', function() {
    if (contIdioma < 8){
        contIdioma++;
        criarDivIdioma();
        criarLabelIdioma();
        criarSelectIdioma();
        criarOpcoesIdioma();
        criarLabelNivelIdioma();
        criarSelectNivelIdioma();
        criarOpcoesNivelIdioma();
        criarBotaoDeleteIdioma();
    } else {
        alert("Apenas 8 idiomas, no máximo");
    };
});

botao_maisFuncao.addEventListener('click', function() {
    if (contFuncao < 3){
        contFuncao++;
        criarDivFuncao();
        criarLabelFuncao();
        criarInputFuncao();
        criarBotaoDeleteFuncao();
        quebrarLinhaFuncao();
        criarLabelEmpresa();
        criarInputEmpresa();
        CriarTituloDataInicioFuncao();
        criarLabelMesInicioFuncao();
        criarInputMesInicioFuncao();
        criarLabelAnoInicioFuncao();
        criarInputAnoInicioFuncao();
        criarTituloDataTerminoFuncao();
        criarLabelMesTerminoFuncao();
        criarInputMesTerminoFuncao();
        criarLabelAnoTerminoFuncao();
        criarInputAnoTerminoFuncao();
        quebrarLinhaFuncao();
        criarLabelDescricaoFuncao();
        quebrarLinhaFuncao();
        criarTextareaDescricaoFuncao();
    } else {
        alert("Apenas as 3 últimas experiências, no máximo.");
    };
});




/* ------------------------------------------------------------------------------------------------------
   ----------------------------- Criando novas divisões para cada sessão --------------------------------
   ------------------------------------------------------------------------------------------------------ */
function criarDivTelefone() {
    let divisao = document.createElement("div");
    divisao.setAttribute("class", "divTelefone");
    divisao.setAttribute("id", "telefone(" + contTelefone + ")");
    divisao.setAttribute("style", "margin: 0; padding: 0;");

    outroTelefone.appendChild(divisao);
};

function criarDivRedeSocial() {
    let divisao = document.createElement("div");
    divisao.setAttribute("class", "divRedeSocial");
    divisao.setAttribute("id", "redeSocial(" + contRedeSocial + ")");
    divisao.setAttribute("style", "margin: 0; padding: 0;");

    outraRedeSocial.appendChild(divisao);
};

function criarDivCurso() {
    let divisao = document.createElement("div");
    divisao.setAttribute("class", "divCurso");
    divisao.setAttribute("id", "curso(" + contCurso + ")");

    outroCurso.appendChild(divisao);
};

function criarDivIdioma() {
    let divisao = document.createElement("div");
    divisao.setAttribute("class", "divIdioma");
    divisao.setAttribute("id", "idioma(" + contIdioma + ")");
    divisao.setAttribute("style", "margin: 0; padding: 0;");

    outroIdioma.appendChild(divisao);
};

function criarDivFuncao() {
    let divisao = document.createElement("div");
    divisao.setAttribute("class", "divHistoricoProfissional");
    divisao.setAttribute("id", "historicoProfissional(" + contFuncao + ")");

    outraFuncao.appendChild(divisao);
};




/* ------------------------------------------------------------------------------------------------------
   --------------------------------------- Funções Quebrar Linha ----------------------------------------
   ------------------------------------------------------------------------------------------------------*/
function quebrarLinhaTelefone() {
    let referencia = document.getElementById("telefone(" + contTelefone + ")");
    let novaLinha = document.createElement("br");

    referencia.appendChild(novaLinha);
};

function quebrarLinhaRedeSocial() {
    let referencia = document.getElementById("redeSocial(" + contRedeSocial + ")");
    let novaLinha = document.createElement("br");

    referencia.appendChild(novaLinha);
};

function quebrarLinhaCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let novaLinha = document.createElement("br");

    referencia.appendChild(novaLinha);
};

function quebrarLinhaIdioma() {
    let referencia = document.getElementById("idioma(" + contIdioma + ")");
    let novaLinha = document.createElement("br");

    referencia.appendChild(novaLinha);
};

function quebrarLinhaFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let novaLinha = document.createElement("br");

    referencia.appendChild(novaLinha);
};




/* ------------------------------------------------------------------------------------------------------
   ------------------------------------------- Botão Delete ---------------------------------------------
   ------------------------------------------------------------------------------------------------------ */
function criarBotaoDeleteTelefone() {
    let referencia = document.getElementById("telefone(" + contTelefone + ")");
    let botao = document.createElement("img");
    botao.setAttribute("class", "deletar");
    botao.setAttribute("id", "deletarTelefone" + contTelefone);
    botao.setAttribute("src", "..//sources/images/botaoLixeira.png");
    botao.setAttribute("width", "25px");
    botao.setAttribute("onclick", "deletar('telefone(" + contTelefone + ")', 'telefone', " + contTelefone + ")");

    referencia.appendChild(botao);
};

function criarBotaoDeleteRedeSocial() {
    let referencia = document.getElementById("redeSocial(" + contRedeSocial + ")");
    let botao = document.createElement("img");
    botao.setAttribute("id", "deletarRedeSocial" + contRedeSocial);
    botao.setAttribute("class", "deletar");
    botao.setAttribute("src", "..//curriculoFacil/sources/images/botaoLixeira.png");
    botao.setAttribute("width", "25px");
    botao.setAttribute("onclick", "deletar('redeSocial(" + contRedeSocial + ")', 'redeSocial', " + contRedeSocial + ")");

    referencia.appendChild(botao);
};

function criarBotaoDeleteCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let botao = document.createElement("img");
    botao.setAttribute("id", "deletarCurso" + contCurso);
    botao.setAttribute("class", "deletar");
    botao.setAttribute("src", "..//curriculoFacil/sources/images/botaoLixeira.png");
    botao.setAttribute("width", "25px");
    botao.setAttribute("onclick", "deletar('curso(" + contCurso + ")', 'curso', " + contCurso + ")");

    referencia.appendChild(botao);
};

function criarBotaoDeleteIdioma() {
    let referencia = document.getElementById("idioma(" + contIdioma + ")");
    let botao = document.createElement("img");
    botao.setAttribute("id", "deletarIdioma" + contIdioma);
    botao.setAttribute("class", "deletar");
    botao.setAttribute("src", "..//curriculoFacil/sources/images/botaoLixeira.png");
    botao.setAttribute("width", "25px");
    botao.setAttribute("onclick", "deletar('idioma(" + contIdioma + ")', 'idioma', " + contIdioma + ")");

    referencia.appendChild(botao);
};

function criarBotaoDeleteFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let botao = document.createElement("img");
    botao.setAttribute("id", "deletarFuncao" + contFuncao);
    botao.setAttribute("class", "deletar");
    botao.setAttribute("src", "..//curriculoFacil/sources/images/botaoLixeira.png");
    botao.setAttribute("width", "25px");
    botao.setAttribute("onclick", "deletar('historicoProfissional(" + contFuncao + ")', 'funcao', " + contFuncao + ")");

    referencia.appendChild(botao);
};



/* ------------------------------------------------------------------------------------------------------
   --------------- Deletando elementos de uma seção e corrigindo os atributos dos demais ----------------
   ------------------------------------------------------------------------------------------------------ */
function deletar(id, menos, passo){
    let referencia = document.getElementById(id);
    referencia.remove();

    if (menos == "telefone") {
        if (passo < contTelefone) {
            let titulo = document.getElementById("tituloTelefone3");
            let telefone = document.getElementById("telefone3");
            let deletar = document.getElementById("deletarTelefone3");

            document.getElementById("telefone(3)").id = "telefone(2)";
            titulo.setAttribute("for", "telefone2");
            titulo.textContent = "Telefone 2: ";
            titulo.id = "tituloTelefone2";
            telefone.name = "telefone2";
            telefone.id = "telefone2";
            deletar.setAttribute("onclick", "deletar('telefone(2)', 'telefone', 2)");
            deletar.id = "deletarTelefone2";
            
            contTelefone--;

        } else {
            contTelefone--;

        };
        
    } else if (menos == "redeSocial") {
        if(passo < contRedeSocial) {
            for (i = passo; i < contRedeSocial; i++) {
                let subtrair = i + 1;

                let subsecao = document.getElementById("redeSocial(" + subtrair + ")");
                let titulo = document.getElementById("tituloRedeSocial" + subtrair);
                let redeSocial = document.getElementById("redeSocial" + subtrair);
                let deletar = document.getElementById("deletarRedeSocial" + subtrair);

                subsecao.id = "redeSocial(" + i + ")";
                titulo.setAttribute("for", "tituloRedeSocial" + i);
                titulo.textContent = "Rede Social " + i + ": ";
                titulo.id = "tituloRedeSocial" + i;
                redeSocial.name = "redeSocial" + i;
                redeSocial.id = "redeSocial" + i;
                deletar.setAttribute("onclick", "deletar('redeSocial(" + i + ")', 'redeSocial', " + i + ")");
                deletar.id = "deletarRedeSocial" + i;

            };
            contRedeSocial--;

        } else {
            contRedeSocial--;

        };
    } else if (menos == "curso") {
        if (passo < contCurso) {
            for (i = passo; i < contCurso; i++) {
                let subtrair = i + 1;

                let subsecao = document.getElementById("curso(" + subtrair + ")");
                let tCurso = document.getElementById("tituloCurso" + subtrair);
                let curso = document.getElementById("nomeCurso" + subtrair);
                let deletar = document.getElementById("deletarCurso" + subtrair);
                let tNivelCurso = document.getElementById("tituloNivelCurso" + subtrair);
                let nivelCurso = document.getElementById("nivelCurso" + subtrair);
                let tStatusCurso = document.getElementById("tituloStatusCurso" + subtrair);
                let statusCurso = document.getElementById("statusCurso" + subtrair);
                let tInstituicao = document.getElementById("tituloInstituicao" + subtrair);
                let instituicao = document.getElementById("instituicao" + subtrair);
                let tMesInicio = document.getElementById("tituloMesInicioCurso" + subtrair);
                let mesInicio = document.getElementById("mesInicioCurso" + subtrair);
                let tAnoInicio = document.getElementById("tituloAnoInicioCurso" + subtrair);
                let anoInicio = document.getElementById("anoInicioCurso" + subtrair);
                let tMesGrad = document.getElementById("tituloMesGraduacaoCurso" + subtrair);
                let mesGrad = document.getElementById("mesGraduacaoCurso" + subtrair);
                let tAnoGrad = document.getElementById("tituloAnoGraduacaoCurso" + subtrair);
                let anoGrad = document.getElementById("anoGraduacaoCurso" + subtrair);




                subsecao.id = "curso(" + i + ")";
                tCurso.setAttribute("for", "nomeCurso" + i);
                tCurso.textContent = "Nome do Curso " + i + ": ";
                tCurso.id = "tituloCurso" + i;
                curso.name = "nomeCurso" + i;
                curso.id = "nomeCurso" + i;
                deletar.setAttribute("onclick", "deletar('curso(" + i + ")', 'curso', " + i + ")");
                deletar.id = "deletarCurso" + i;
                tNivelCurso.setAttribute("for", "nivelCurso" + i);
                tNivelCurso.id = "tituloNivelCurso" + i;
                nivelCurso.id = "nivelCurso" + i;
                tStatusCurso.setAttribute("for", "statusCurso" + i);
                tStatusCurso.id = "tituloStatusCurso" + i;
                statusCurso.id = "statusCurso" + i;
                tInstituicao.setAttribute("for", "instituicao" + i);
                tInstituicao.id = "tituloInstituicao" + i;
                instituicao.name = "instituicao" + i;
                instituicao.id = "instituicao" + i;
                tMesInicio.setAttribute("for", "mesInicioCurso" + i);
                tMesInicio.id = "tituloMesInicioCurso" + i;
                mesInicio.name = "mesInicioCurso" + i;
                mesInicio.id = "mesInicioCurso" + i;
                tAnoInicio.setAttribute("for", "anoInicioCurso" + i);
                tAnoInicio.id = "tituloAnoInicioCurso" + i;
                anoInicio.name = "anoInicioCurso" + i;
                anoInicio.id = "anoInicioCurso" + i;
                tMesGrad.setAttribute("for", "mesGraduacaoCurso" + i);
                tMesGrad.id = "tituloMesGraduacaoCurso" + i;
                mesGrad.name = "mesGraduacaoCurso" + i;
                mesGrad.id = "mesGraduacaoCurso" + i;
                tAnoGrad.setAttribute("for", "anoGraduacaoCurso" + i);
                tAnoGrad.id = "tituloAnoGraduacaoCurso" + i;
                anoGrad.name = "anoGraduacaoCurso" + i;
                anoGrad.id = "anoGraduacaoCurso" + i;


            };
            contCurso--;

        } else {
            contCurso--;

        };
    } else if (menos == "idioma") {
        if (passo < contIdioma) {
            for (i = passo; i < contIdioma; i++) {
                let subtrair = i + 1;

                let subsecao = document.getElementById("idioma(" + subtrair + ")");
                let tIdioma = document.getElementById("tituloIdioma" + subtrair);
                let idioma = document.getElementById("idioma" + subtrair);
                let tNivelIdioma = document.getElementById("tituloNivelIdioma" + subtrair);
                let nivelIdioma = document.getElementById("nivelIdioma" + subtrair);
                let deletar = document.getElementById("deletarIdioma" + subtrair);

                subsecao.id = "idioma(" + i + ")";
                tIdioma.setAttribute("for", "idioma" + i);
                tIdioma.id = "tituloIdioma" + i;
                idioma.id = "idioma" + i;
                tNivelIdioma.setAttribute("for", "nivelIdioma" + i);
                tNivelIdioma.id = "tituloNivelIdioma" + i;
                nivelIdioma.id = "nivelIdioma" + i;
                deletar.setAttribute("onclick", "deletar('idioma(" + i + ")', 'idioma', " + i + ")");
                deletar.id = "deletarIdioma" + i;

            };
            contIdioma--;

        } else {
            contIdioma--;

        };
    } else if (menos == "funcao") {
        if (passo < contFuncao) {
            for (i = passo; i < contFuncao; i++) {
                let subtrair = i + 1;

                let subsecao = document.getElementById("historicoProfissional(" + subtrair + ")");
                let tFuncao = document.getElementById("tituloFuncao" + subtrair);
                let funcao = document.getElementById("funcao" + subtrair);
                let deletar = document.getElementById("deletarFuncao" + subtrair);
                let tEmpresa = document.getElementById("tituloEmpresa" + subtrair);
                let empresa = document.getElementById("empresa" + subtrair);
                let tDataInicioFuncao = document.getElementById("tituloDataInicioFuncao" + subtrair);
                let tMesInicioFuncao = document.getElementById("tituloMesInicioFuncao" + subtrair);
                let mesInicioFuncao = document.getElementById("mesInicioFuncao" + subtrair);
                let tAnoInicioFuncao = document.getElementById("tituloAnoInicioFuncao" + subtrair);
                let anoInicioFuncao = document.getElementById("anoInicioFuncao" + subtrair);
                let tDataTerminoFuncao = document.getElementById("tituloDataTerminoFuncao" + subtrair);
                let tMesTerminoFuncao = document.getElementById("tituloMesTerminoFuncao" + subtrair);
                let mesTerminoFuncao = document.getElementById("mesTerminoFuncao" + subtrair);
                let tAnoTerminoFuncao = document.getElementById("tituloAnoTerminoFuncao" + subtrair);
                let anoTerminoFuncao = document.getElementById("anoTerminoFuncao" + subtrair);
                let tDescricaoFuncao = document.getElementById("tituloDescricaoFuncao" + subtrair);
                let descricaoFuncao = document.getElementById("descricaoFuncao" + subtrair);

                subsecao.id = ("historicoProfissional(" + i + ")");
                tFuncao.textContent = "Função " + i + ": ";
                tFuncao.setAttribute("for", "funcao" + i);
                tFuncao.id = ("tituloFuncao" + i);
                funcao.name = ("funcao" + i);
                funcao.id = ("funcao" + i);
                deletar.setAttribute("onclick", "deletar('historicoProfissional(" + i + ")', 'funcao', " + i + ")");
                deletar.id = ("deletarFuncao" + i);
                tEmpresa.setAttribute("for", "empresa" + i);
                tEmpresa.id = ("tituloEmpresa" + i);
                empresa.name = ("empresa" + i);
                empresa.id = ("empresa" + i);
                tDataInicioFuncao.id = ("tituloDataInicioFuncao" + i);
                tMesInicioFuncao.setAttribute("for", "mesInicioFuncao" + i);
                tMesInicioFuncao.id = ("tituloMesInicioFuncao" + i);
                mesInicioFuncao.name = ("mesInicioFuncao" + i);
                mesInicioFuncao.id = ("mesInicioFuncao" + i);
                tAnoInicioFuncao.setAttribute("for", "anoInicioFuncao" + i);
                tAnoInicioFuncao.id = ("tituloAnoInicioFuncao" + i);
                anoInicioFuncao.name = ("anoInicioFuncao" + i);
                anoInicioFuncao.id = ("anoInicioFuncao" + i);
                tDataTerminoFuncao.id = ("tituloDataTerminoFuncao" + i);
                tMesTerminoFuncao.setAttribute("for", "mesTerminoFuncao" + i);
                tMesTerminoFuncao.id = ("tituloMesTerminoFuncao" + i);
                mesTerminoFuncao.name = ("mesTerminoFuncao" + i);
                mesTerminoFuncao.id = ("mesTerminoFuncao" + i);
                tAnoTerminoFuncao.setAttribute("for", "tituloAnoTerminoFuncao" + i);
                tAnoTerminoFuncao.id = ("tituloAnoTerminoFuncao" + i);
                anoTerminoFuncao.name = ("anoTerminoFuncao" + i);
                anoTerminoFuncao.id = ("anoTerminoFuncao" + i);
                tDescricaoFuncao.setAttribute("for", "tituloDescricaoFuncao" + i);
                tDescricaoFuncao.id = ("tituloDescricaoFuncao" + i);
                descricaoFuncao.name = ("descricaoFuncao" + i);
                descricaoFuncao.id = ("descricaoFuncao" + i);

            };
            contFuncao--;

        } else {
            contFuncao--;

        };
    } else {
        alert("ERRO: Botão não está funcionando corretamente.");
    };
};




/* ------------------------------------------------------------------------------------------------------
   ----------------------- Duplicando elementos de cada seção e seus atributos --------------------------
   ------------------------------------------------------------------------------------------------------ */

// <label class="tituloAtributo" id="tituloTelefone" for="telefone">Telefone:</label>
function criarLabelTelefone() {
    let referencia = document.getElementById("telefone(" + contTelefone + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloTelefone" + contTelefone);
    atributo.setAttribute("for", "telefone" + contTelefone);
    atributo.textContent = "Telefone " + contTelefone + ": ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="telefone" name="telefone" type="tel" size="40" maxlength="16" placeholder="(22) 9 9872 - 0232" autocomplete="off"/>
function criarInputTelefone() {
    let referencia = document.getElementById("telefone(" + contTelefone + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "telefone" + contTelefone);
    atributo.setAttribute("name", "telefone" + contTelefone);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "40");
    atributo.setAttribute("maxlength", "13");
    atributo.setAttribute("placeholder", "(22) 9 9872 - 0232");
    atributo.setAttribute("autocomplete", "off");

    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloRedeSocial" for="redeSocial">Rede Social:</label>
function criarLabelRedeSocial() {
    let referencia = document.getElementById("redeSocial(" + contRedeSocial + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloRedeSocial" + contRedeSocial);
    atributo.setAttribute("for", "redeSocial" + contRedeSocial);
    atributo.textContent = "Rede Social " + contRedeSocial + ": ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="redeSocial" name="redeSocial" type="url" size="60" maxlength="200" placeholder="https://www.facebook.com/funcionario-ideal" autocomplete="off"/>
function criarInputRedeSocial() {
    let referencia = document.getElementById("redeSocial(" + contRedeSocial + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "redeSocial" + contRedeSocial);
    atributo.setAttribute("name", "redeSocial" + contRedeSocial);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "60");
    atributo.setAttribute("maxlength", "200");
    atributo.setAttribute("placeholder", "https://www.facebook.com/funcionario-ideal");
    atributo.setAttribute("autocomplete", "off");

    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloNomeCurso" for="nomeCurso">Nome do Curso:</label>
function criarLabelNomeCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloCurso" + contCurso);
    atributo.setAttribute("for", "nomeCurso" + contCurso);
    atributo.textContent = "Nome do Curso " + contCurso + ": ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="nomeCurso" name="nomeCurso" type="text" size="90" maxlength="100" placeholder="Digitação" autocomplete="off"/>
function criarInputNomeCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "nomeCurso" + contCurso);
    atributo.setAttribute("name", "nomeCurso" + contCurso);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "90");
    atributo.setAttribute("maxlength", "100");
    atributo.setAttribute("placeholder", "Digitação");
    atributo.setAttribute("autocomplete", "off");

    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloNivelCurso" for="nivelCurso">Nível:</label>
function criarLabelNivelCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloNivelCurso" + contCurso);
    atributo.setAttribute("for", "nivelCurso" + contCurso);
    atributo.textContent = "Nível: ";

    referencia.appendChild(atributo);
};

// <select class="selecao" id="nivelCurso" name="nivelCurso" type="text">
function criarSelectNivelCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("select");
    atributo.setAttribute("class", "selecao");
    atributo.setAttribute("id", "nivelCurso" + contCurso);
    atributo.setAttribute("name", "nivelCurso");
    atributo.setAttribute("type", "text");

    referencia.appendChild(atributo);
};

// Recria as opções do select
function criarOpcoesNivelCurso() {
    let opcao = document.getElementById("nivelCurso" + contCurso);
    opcao.appendChild(new Option("Selecione uma graduação"));
    opcao.appendChild(new Option("Ensino Fundamental"));
    opcao.appendChild(new Option("Ensino Médio"));
    opcao.appendChild(new Option("Ensino Técnico"));
    opcao.appendChild(new Option("Graduação"));
    opcao.appendChild(new Option("Especialização"));
    opcao.appendChild(new Option("Mestrado"));
    opcao.appendChild(new Option("Doutorado"));
};

// <label class="tituloAtributo" id="tituloStatusCurso" for="statusCurso">Status:</label>
function criarLabelStatusCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloStatusCurso" + contCurso);
    atributo.setAttribute("for", "statusCurso" + contCurso);
    atributo.textContent = "Status: ";

    referencia.appendChild(atributo);
};

// <select class="selecao " id="statusCurso" name="statusCurso" type="text">
function criarSelectStatusCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("select");
    atributo.setAttribute("class", "selecao");
    atributo.setAttribute("id", "statusCurso" + contCurso);
    atributo.setAttribute("name", "statusCurso" + contCurso);
    atributo.setAttribute("type", "text");

    referencia.appendChild(atributo);
};

// Recria as opções do select
function criarOpcoesStatusCurso() {
    let opcao = document.getElementById("statusCurso" + contCurso);
    opcao.appendChild(new Option("Selecione o Status"));
    opcao.appendChild(new Option("Cursando"));
    opcao.appendChild(new Option("Incompleto"));
    opcao.appendChild(new Option("Completo"));
};

// <label class="tituloAtributo" id="tituloInstituicao" for="instituicao">Instituição:</label>
function criarLabelInstituicaoCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("id", "tituloInstituicao" + contCurso);
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("for", "instituicao" + contCurso);
    atributo.textContent = "Instituição: ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="instituicao" name="instituicao" type="text" size="90" maxlength="200" placeholder="E.E.E.T. Munehisa Honma" autocomplete="off"/>
function criarInputInstituicaoCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "instituicao" + contCurso);
    atributo.setAttribute("name", "instituicao" + contCurso);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "90");
    atributo.setAttribute("maxlength", "200");
    atributo.setAttribute("placeholder", "E.E.E.T. Munehisa Honma");
    atributo.setAttribute("autocomplete", "off");

    referencia.appendChild(atributo);
};

// <h4 class="tituloAtributo" id="tituloDataInicio">Data de Início:</h4>
function criarTituloDataInicioCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("h4");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloDataInicio");
    atributo.textContent = "Data de Início:";

    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloMesInicioCurso" for="mesInicioCurso">Mês: </label>
function criarLabelMesInicioCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloMesInicioCurso" + contCurso);
    atributo.setAttribute("for", "mesInicioCurso" + contCurso);
    atributo.textContent = "Mês: ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="mesInicioCurso" name="mesInicioCurso" type="text" size="2" maxlength="2" placeholder="05" autocomplete="off"/>
function criarInputMesInicioCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "mesInicioCurso" + contCurso);
    atributo.setAttribute("name", "mesInicioCurso" + contCurso);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "2");
    atributo.setAttribute("maxlength", "2");
    atributo.setAttribute("placeholder", "05");
    atributo.setAttribute("autocomplete", "off");

    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloAnoInicioCurso" for="anoInicioCurso">Ano: </label>
function criarLabelAnoInicioCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloAnoInicioCurso" + contCurso);
    atributo.setAttribute("for", "anoInicioCurso" + contCurso);
    atributo.textContent = "Ano: ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="mesInicioCurso" name="anoInicioCurso" type="text" size="4" maxlength="4" placeholder="2001" autocomplete="off"/>
function criarInputAnoInicioCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "anoInicioCurso" + contCurso);
    atributo.setAttribute("name", "anoInicioCurso" + contCurso);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "4");
    atributo.setAttribute("maxlength", "4");
    atributo.setAttribute("placeholder", "2001");
    atributo.setAttribute("autocomplete", "off");

    referencia.appendChild(atributo);
};

// <h4 class="tituloAtributo" id="tituloDataConclusao">Data de Conclusão:</h4>
function criarTituloDataGraduacaoCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("h4");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloDataConclusao");
    atributo.textContent = "Data de Conclusão";

    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloMesGraduacaoCurso" for="mesGraduacaoCurso">Mês: </label>
function criarLabelMesGraduacaoCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloMesGraduacaoCurso" + contCurso);
    atributo.setAttribute("for", "mesGraduacaoCurso" + contCurso);
    atributo.textContent = "Mês: ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="mesGraduacaoCurso" name="mesGraduacaoCurso" type="text" size="2" maxlength="2" placeholder="08" autocomplete="off"/>
function criarInputMesGraduacaoCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "mesGraduacaoCurso" + contCurso);
    atributo.setAttribute("name", "mesGraduacaoCurso" + contCurso);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "2");
    atributo.setAttribute("maxlength", "2");
    atributo.setAttribute("placeholder", "08");
    atributo.setAttribute("autocomplete", "off");

    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloAnoGraduacaoCurso" for="anoGraduacaoCurso">Ano: </label>
function criarLabelAnoGraduacaoCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloAnoGraduacaoCurso" + contCurso);
    atributo.setAttribute("for", "anoGraduacaoCurso" + contCurso);
    atributo.textContent = "Ano: ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="anoGraduacaoCurso" name="anoGraduacaoCurso" type="text" size="4" maxlength="4" placeholder="2001" autocomplete="off"/>
function criarInputAnoGraduacaoCurso() {
    let referencia = document.getElementById("curso(" + contCurso + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "anoGraduacaoCurso" + contCurso);
    atributo.setAttribute("name", "anoGraduacaoCurso" + contCurso);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "4");
    atributo.setAttribute("maxlength", "4");
    atributo.setAttribute("placeholder", "2001");
    atributo.setAttribute("autocomplete", "off");

    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloIdioma" for="idioma">Idioma:</label>
function criarLabelIdioma() {
    let referencia = document.getElementById("idioma(" + contIdioma + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloIdioma" + contIdioma);
    atributo.setAttribute("for", "idioma" + contIdioma);
    atributo.textContent = "Idioma: ";

    referencia.appendChild(atributo);
};

// <select class="selecao" id="idioma" name="idioma" type="text">
function criarSelectIdioma() {
    let referencia = document.getElementById("idioma(" + contIdioma + ")");
    let atributo = document.createElement("select");
    atributo.setAttribute("class", "selecao");
    atributo.setAttribute("id", "idioma" + contIdioma);
    atributo.setAttribute("type", "text");

    referencia.appendChild(atributo);
};

// Recria as opções do select
function criarOpcoesIdioma() {
    let opcao = document.getElementById("idioma" + contIdioma);
    opcao.appendChild(new Option("Selecione um idioma"));
    opcao.appendChild(new Option("Alemão"));
    opcao.appendChild(new Option("Árabe"));
    opcao.appendChild(new Option("Coreano"));
    opcao.appendChild(new Option("Inglês"));
    opcao.appendChild(new Option("Japonês"));
    opcao.appendChild(new Option("Latim"));
    opcao.appendChild(new Option("português"));
    opcao.appendChild(new Option("Russo"));
};

// <label class="tituloAtributo" id="tituloNivelIdioma" for="nivelIdioma">Nível:</label>
function criarLabelNivelIdioma() {
    let referencia = document.getElementById("idioma(" + contIdioma + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloNivelIdioma" + contIdioma);
    atributo.setAttribute("for", "nivelIdioma" + contIdioma);
    atributo.textContent = "Nível: ";

    referencia.appendChild(atributo);
};

// <select class="selecao" id="nivelIdioma" name="nivelIdioma" type="text" >
function criarSelectNivelIdioma() {
    let referencia = document.getElementById("idioma(" + contIdioma + ")");
    let atributo = document.createElement("select");
    atributo.setAttribute("class", "selecao");
    atributo.setAttribute("id", "nivelIdioma" + contIdioma);
    atributo.setAttribute("type", "text");

    referencia.appendChild(atributo);
};

// Recria as opções do select
function criarOpcoesNivelIdioma() {
    let opcao = document.getElementById("nivelIdioma" + contIdioma);
    opcao.appendChild(new Option("Selecione um nível"));
    opcao.appendChild(new Option("Básico"));
    opcao.appendChild(new Option("Intermediário"));
    opcao.appendChild(new Option("Avançado"));
    opcao.appendChild(new Option("Fluente"));
};
    
// <label class="tituloAtributo" id="tituloFuncao" for="funcao">Função: </label>
function criarLabelFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class","tituloAtributo");
    atributo.setAttribute("id", "tituloFuncao" + contFuncao);
    atributo.setAttribute("for", "funcao" + contFuncao)
    atributo.textContent = "Função " + contFuncao + ": ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="funcao" name="funcao" type="text" size="100" maxlength="100" placeholder="Desenvolvedor WEB júnior" autocomplete="off"/>
function criarInputFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "funcao" + contFuncao);
    atributo.setAttribute("name", "funcao" + contFuncao);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "100");
    atributo.setAttribute("maxlength", "100");
    atributo.setAttribute("placeholder", "Desenvolvedor WEB Júnior");

    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloEmpresa" for="empresa">Empresa:</label>
function criarLabelEmpresa() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloEmpresa" + contFuncao);
    atributo.setAttribute("for", "empresa" + contFuncao);
    atributo.textContent = "Empresa: ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="empresa" name="empresa" type="text" size="100" maxlength="100" placeholder="Métricas Montreal LTDA." autocomplete="off"/>
function criarInputEmpresa() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "empresa" + contFuncao);
    atributo.setAttribute("name", "empresa" + contFuncao);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "100");
    atributo.setAttribute("maclength", "100");
    atributo.setAttribute("placeholder", "Métricas Montreal LTDA.");

    referencia.appendChild(atributo);
};

// <h4 class="tituloAtributo" id="tituloDataInicioFuncao">Data de Início</h4>
function CriarTituloDataInicioFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("h4");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloDataInicioFuncao" + contFuncao);
    atributo.textContent = "Data de Início";

    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloMesInicioFuncao" for="mesInicioFuncao">Mês: </label>
function criarLabelMesInicioFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloMesInicioFuncao" + contFuncao);
    atributo.setAttribute("for", "mesInicioFuncao" + contFuncao);
    atributo.textContent = "Mês: ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="mesInicioFuncao" name="mesInicioFuncao" type="text" size="2" maxlength="2" placeholder="05" autocomplete="off"/>
function criarInputMesInicioFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "mesInicioFuncao" + contFuncao);
    atributo.setAttribute("name", "mesInicioFuncao" + contFuncao);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "2");
    atributo.setAttribute("maxlength", "2");
    atributo.setAttribute("placeholder", "05");

    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloAnoInicioFuncao" for="anoInicioFuncao">Ano: </label>
function criarLabelAnoInicioFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloAnoInicioFuncao" + contFuncao);
    atributo.setAttribute("for", "anoInicioFuncao" + contFuncao);
    atributo.textContent = "Ano: ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="anoInicioFuncao" name="anoInicioFuncao" type="text" size="4" maxlength="4" placeholder="2001" autocomplete="off"/>
function criarInputAnoInicioFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "anoInicioFuncao" + contFuncao);
    atributo.setAttribute("name", "anoInicioFuncao" + contFuncao);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "4");
    atributo.setAttribute("maxlength", "4");
    atributo.setAttribute("placeholder", "2001");

    referencia.appendChild(atributo);
};

// <h4 class="tituloAtributo" id="tituloDataTerminoFuncao">Data de Término</h4>
function criarTituloDataTerminoFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("h4");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloDataTerminoFuncao" + contFuncao);
    atributo.textContent = "Data de Término";

    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloMesTerminoFuncao" for="mesTerminoFuncao">Mês: </label>
function criarLabelMesTerminoFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloMesTerminoFuncao" + contFuncao);
    atributo.setAttribute("for", "mesTerminoFuncao" + contFuncao);
    atributo.textContent = "Mês: ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="mesTerminoFuncao" name="mesTerminoFuncao" type="text" size="2" maxlength="2" placeholder="05" autocomplete="off"/>
function criarInputMesTerminoFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "mesTerminoFuncao" + contFuncao);
    atributo.setAttribute("name", "mesTerminoFuncao" + contFuncao);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "2");
    atributo.setAttribute("maxlength", "2");
    atributo.setAttribute("placeholder", "05");
    
    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloAnoTerminoFuncao" for="anoTerminoFuncao">Ano: </label>
function criarLabelAnoTerminoFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloAnoTerminoFuncao" + contFuncao);
    atributo.setAttribute("for", "anoTerminoFuncao" + contFuncao);
    atributo.textContent = "Ano: ";

    referencia.appendChild(atributo);
};

// <input class="campoLinha" id="anoTerminoFuncao" name="anoTerminoFuncao" type="text" size="4" maxlength="4" placeholder="2001" autocomplete="off"/>
function criarInputAnoTerminoFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("input");
    atributo.setAttribute("class", "campoLinha");
    atributo.setAttribute("id", "anoTerminoFuncao" + contFuncao);
    atributo.setAttribute("name", "anoTerminoFuncao" + contFuncao);
    atributo.setAttribute("type", "text");
    atributo.setAttribute("size", "4");
    atributo.setAttribute("maxlength", "4");
    atributo.setAttribute("placeholder", "2001");
    
    referencia.appendChild(atributo);
};

// <label class="tituloAtributo" id="tituloDescricaoFuncao" for="descricaoFuncao">Descrição da Função:</label>
function criarLabelDescricaoFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("label");
    atributo.setAttribute("class", "tituloAtributo");
    atributo.setAttribute("id", "tituloDescricaoFuncao" + contFuncao);
    atributo.setAttribute("for", "descricaoFuncao" + contFuncao);
    atributo.textContent = "Descricao da Função:";

    referencia.appendChild(atributo);
};

// <textarea class="campoCaixa" id="descricaoFuncao" name="descricaoFuncao" type="text" size="200" rows="10" cols="60" maxlength="600" placeholder="Digite um breve resumo de suas responsabilidades na função que descrevestes acima." autocomplete="off"></textarea>
function criarTextareaDescricaoFuncao() {
    let referencia = document.getElementById("historicoProfissional(" + contFuncao + ")");
    let atributo = document.createElement("textarea");
    atributo.setAttribute("class", "campoCaixa");
    atributo.setAttribute("name", "descricaoFuncao" + contFuncao);
    atributo.setAttribute("id", "descricaoFuncao" + contFuncao);
    atributo.setAttribute("size", "200");
    atributo.setAttribute("rows", "10");
    atributo.setAttribute("cols", "60");
    atributo.setAttribute("maxlength", "600");
    atributo.setAttribute("placeholder", "Digite um breve resumo de suas responsabilidades na função que descrevestes acima.");

    referencia.appendChild(atributo);
};
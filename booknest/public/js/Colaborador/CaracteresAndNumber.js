const TodosCaracteres = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?', '~',
    'ç', 'á', 'à', 'â', 'ã', 'é', 'ê', 'í', 'ó', 'ô', 'õ', 'ú', 'ü', " ","-"
  ];
  
ASCII = [];
TodosCaracteres.forEach(function(variavel){
    ASCII[variavel.charCodeAt(0)] = variavel;
});
// var Keys = window.Keys; // pegando as Chaves
// var Values = window.Values; // pegando os Valores
// // transformando os dados das keys em arrays com o delimitador ","
// var KeysArraysSplit = Keys.split(",");
// // array para armazenar as chaves decodificadas
// var KeysNumericas = [];
// // decodificando as chaves
// KeysArraysSplit.forEach(function(variavel){
//     for(let i = 0; i < 1; i++)
//     {
//         variavel = atob(variavel);
//     }
//     KeysNumericas.push(variavel);
// });
// // transformando as chaves numericas em strings
// var KeysStrings = KeysNumericas.toString();
// // removendo as "," para interferirem na hora de separa-lás em dois
// KeysStrings = KeysStrings.replace(/[,]/g, "");
// // criando variavel para alocar as duplas 
// var KeysChars = [];
// // percorrendo de dois em dois ks = ks + 2
// // -> se ks for 0
// // -> ks = ks + 2 = 0 = 0 + 2 = 2
// // -> ks = ks + 2 = 2 = 2 + 2 = 4
// // -> ks = ks + 2 = 4 = 4 + 2 = 6
// // ...
// for(let ks = 0; ks < KeysStrings.length; ks = ks + 2)
// {
//     // alocando em dois em dois
//     KeysChars.push(KeysStrings.substring(ks , ks + 2));
// }
// // Array para alocar o Texto
// var KeysTexto = [];
// // percorrendo a array de valores de foram guardados em dois em dois 
// KeysChars.forEach(function(number){
//     // alocando a transcrição de número em letras
//     KeysTexto.push(String.fromCharCode(64 + Number(number)));
// });
// // transformando em string e depois tirando as virgulas 
// var KeysStringTexto = KeysTexto.toString().replace(/[,]/g , "");

// var AlocandoValuesDecodificadas = [];
// var StringForArray = Values.split(",");
// StringForArray.forEach(function(variavel){
//     for(let i = 0; i < 1; i++)
//     {
//         variavel = atob(variavel);
//     }
//     AlocandoValuesDecodificadas.push(variavel);
// });

// var AlocandoValuesNumericasLetras = [];

// AlocandoValuesDecodificadas.forEach(function(variavel){
//     AlocandoValuesNumericasLetras.push(ASCII[variavel]);
// });

// var ValuesStringTexto = AlocandoValuesNumericasLetras.join("");
// const KeysViews = [];
// var IndexKeys = 0;
// for(let kV = 0; kV < QuantidadeDeKeys.length; kV++)
// {
//     KeysViews.push(KeysStringTexto.substring(IndexKeys , IndexKeys + QuantidadeDeKeys[kV]));
//     IndexKeys = IndexKeys + QuantidadeDeKeys[kV];
// }

// const ValuesViews = [];
// var IndexValue = 0;
// for(let vV = 0; vV < QuantidadeDeValues.length; vV++)
// {
//     ValuesViews.push(ValuesStringTexto.substring(IndexValue , IndexValue + QuantidadeDeValues[vV]));
//     IndexValue = IndexValue + QuantidadeDeValues[vV];
// }
// var InformaçõesFinal = [];
// var InformaçõesTempo = {};
// if(ValuesViews.length === KeysViews.length)
// {
//     for(let KV = 0; KV < ((ValuesViews.length + KeysViews.length)/2); KV++)
//     {
//         InformaçõesTempo[KeysViews[KV]] = ValuesViews[KV];
//         if(
//             Object.keys(InformaçõesTempo).length === 14 &&
//             Object.values(InformaçõesTempo).length === 14
//         )
//         {
//             InformaçõesFinal.push(InformaçõesTempo);

//             InformaçõesTempo = {};
//         }
//     }

// }
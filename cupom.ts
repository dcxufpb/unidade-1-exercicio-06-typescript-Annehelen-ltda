let dados = {
  nome_loja: "Arcos Dourados Com. de Alimentos LTDA",
  logradouro: "Av. Projetada Leste",
  numero: 500,
  complemento: "EUC F32/33/34",
  bairro: "Br. Sta Genebra",
  municipio: "Campinas",
  estado: "SP",
  cep: "13080-395",
  telefone: "(19) 3756-7408",
  observacao: "Loja 1317 (PDP)",
  cnpj: "42.591.651/0797-34",
  inscricao_estadual: "244.898.500.113"
};
function isEmpty(str: string): boolean {
  let spaceCount = str.length - str.replace(" ", "").length;
  return str == null || spaceCount == str.length;
}
function dados_loja() {
  // Implemente aqui
  if (dados.nome_loja == "") {
    throw new Error(`O campo nome da loja é obrigatório`);
  }
  if(dados.logradouro == ""){
    throw new Error(`O campo logradouro do endereço é obrigatório`);
  }
  let num = dados.numero + ""
  if(dados.numero == 0){
    num = "s/n";
  }
  if(dados.municipio == ""){
    throw new Error(`O campo município do endereço é obrigatório`);
  }
  if(dados.estado == ""){
    throw new Error(`O campo estado do endereço é obrigatório`);
  }
  if(dados.cnpj == ""){
    throw new Error(`O campo CNPJ da loja é obrigatório`);
  }
  if(dados.inscricao_estadual == ""){
    throw new Error(`O campo inscrição estadual da loja é obrigatório`);
  }

  var part2 = `${dados.logradouro}, ${num}`;
  if (! isEmpty (dados.complemento)){
      part2 += ` ${dados.complemento}`;
    }
  var part3 = "";
  if (! isEmpty (dados.bairro)){
      part3 += `${dados.bairro} - `;
  }
  part3 += `${dados.municipio} - ${dados.estado}`;
  
  var part4 = "";
  if (! isEmpty (dados.cep)){
      part4 = `CEP:${dados.cep}`;
    }
  if (! isEmpty(dados.telefone)){
      if (! isEmpty(part4)){
        part4 += ` `;
      }
      part4 += `Tel ${dados.telefone}`;
    }
  if (! isEmpty(part4)){
      part4 += `\n`;
    }
  var part5 = "";
  if (! isEmpty(dados.observacao)){
      part5 += `${dados.observacao}`;
    }
  let output = `${dados.nome_loja}\n`;
  output += `${part2}\n`;
  output += `${part3}\n`;
  output += `${part4}`;
  output += `${part5}\n`;
  output += `CNPJ: ${dados.cnpj}\n`;
  output += `IE: ${dados.inscricao_estadual}\n`;
  return output;
}

module.exports = {
  dados: dados,
  dados_loja:  dados_loja
};

"use strict";

/*
 * Laboratório APS — Lista 05
 * 100% local: sem bibliotecas externas e sem chamadas de rede.
 * A lista original não contém um gabarito explícito. As regras abaixo
 * representam respostas didáticas de referência, e não a única solução UML.
 */

const CASE_EXERCISES = {
  "5": {
    sections: [{ id: "problemas", name: "Problemas identificados na especificação" }],
    cards: [
      { id: "c5a", text: "O objetivo de 'Fazer Reserva' não foi declarado.", section: "problemas", why: "Sem objetivo, não sabemos qual resultado o ator pretende obter." },
      { id: "c5b", text: "'Cliente escolhe' não informa o que foi escolhido.", section: "problemas", why: "Uma ação ambígua não pode ser validada adequadamente." },
      { id: "c5c", text: "'Sistema verifica' não diz o que deve ser validado.", section: "problemas", why: "Deve identificar objeto da validação e regras aplicáveis." },
      { id: "c5d", text: "'Sistema salva' não identifica o dado persistido.", section: "problemas", why: "É preciso declarar a informação registrada e o resultado esperado." },
      { id: "c5e", text: "'Sistema finaliza' não apresenta resultado claro ao cliente.", section: "problemas", why: "É necessário informar conclusão, confirmação ou motivo da falha." },
      { id: "c5f", text: "A especificação não apresenta pré-condições nem pós-condições.", section: "problemas", why: "Sem elas, não se sabe o que é necessário antes e o que deve valer depois." },
      { id: "c5g", text: "Não há fluxos alternativos nem exceções documentados.", section: "problemas", why: "Reservas podem falhar ou exigir escolha de outra opção." },
      { id: "c5h", text: "Não estão identificadas regras de negócio ou requisitos relacionados.", section: "problemas", why: "Isso dificulta verificar conformidade e rastreabilidade." },
      { id: "c5x", text: "O Caso de Uso está errado por possuir um identificador (UC01).", section: null, why: "O identificador é útil para rastreabilidade; não representa um defeito." },
      { id: "c5y", text: "O Caso de Uso está errado por possuir um ator principal.", section: null, why: "Identificar o ator principal é um elemento esperado da especificação." },
      { id: "c5z", text: "O Caso de Uso está errado por ter passos numerados.", section: null, why: "A numeração facilita leitura e referência aos passos." }
    ],
    reference: "Uma versão corrigida depende de especificar primeiro o que está sendo reservado. Exemplo HIPOTÉTICO (quarto de hotel): Cliente informa datas → sistema valida datas → consulta disponibilidade → cliente seleciona quarto → confirma → sistema registra a reserva e informa o identificador. Também precisam existir condições, regras e tratamento para indisponibilidade e falha no registro."
  },
  "6": {
    sections: [
      { id: "objetivo", name: "Objetivo" },
      { id: "ator", name: "Ator principal" },
      { id: "pre", name: "Pré-condições" },
      { id: "fluxo", name: "Fluxo principal (em ordem)" },
      { id: "alternativo", name: "Fluxo alternativo" },
      { id: "excecao", name: "Fluxo de exceção" },
      { id: "pos", name: "Pós-condições de sucesso" },
      { id: "regras", name: "Regras relacionadas ao registro" },
      { id: "requisito", name: "Requisito relacionado" }
    ],
    cards: [
      { id: "h01", text: "Registrar uma reserva válida de quarto para um cliente.", section: "objetivo", why: "O objetivo descreve o resultado de negócio desejado." },
      { id: "h02", text: "Atendente.", section: "ator", why: "RF01 determina que o atendente registra reservas." },
      { id: "h03", text: "Cliente identificado e dados iniciais da hospedagem disponíveis.", section: "pre", why: "É uma pré-condição plausível para iniciar a reserva; a lista não detalha outros pré-requisitos." },
      { id: "h04", text: "Atendente informa cliente, data de entrada e data de saída.", section: "fluxo", why: "O sistema precisa receber as informações que serão verificadas." },
      { id: "h05", text: "Sistema valida as datas e se há reserva conflitante do cliente.", section: "fluxo", why: "Atende RN02 e RN03, antes da confirmação." },
      { id: "h06", text: "Sistema consulta os quartos disponíveis para o período.", section: "fluxo", why: "Atende RN01, impedindo reserva de quarto indisponível." },
      { id: "h07", text: "Atendente seleciona um quarto disponível e confirma a operação.", section: "fluxo", why: "Define qual recurso será reservado e confirma a intenção." },
      { id: "h08", text: "Sistema registra a reserva e apresenta a confirmação.", section: "fluxo", why: "O resultado deve ser apresentado somente após registro bem-sucedido." },
      { id: "h09", text: "Se o quarto não estiver disponível, apresentar outras opções sem confirmar a reserva.", section: "alternativo", why: "Trata um caminho conhecido de negócio, sem permitir violar RN01." },
      { id: "h10", text: "Se houver falha na persistência, informar o erro e não declarar a reserva confirmada.", section: "excecao", why: "É um tratamento de falha técnica; a pós-condição de sucesso não pode ser afirmada." },
      { id: "h11", text: "Reserva confirmada e registrada para um quarto disponível.", section: "pos", why: "Expressa o estado esperado ao final do fluxo de sucesso." },
      { id: "h12", text: "RN01 — Reservar somente quartos disponíveis.", section: "regras", why: "É a restrição central de disponibilidade." },
      { id: "h13", text: "RN02 — Data de saída posterior à data de entrada.", section: "regras", why: "A validade do período deve ser verificada." },
      { id: "h14", text: "RN03 — Cliente sem reservas conflitantes no mesmo período.", section: "regras", why: "O cliente não pode possuir reservas em períodos conflitantes." },
      { id: "h15", text: "RF01 — Permitir que o atendente registre reservas.", section: "requisito", why: "É o requisito funcional informado no enunciado." },
      { id: "hx1", text: "Confirmar reserva mesmo quando o quarto estiver indisponível.", section: null, why: "Essa ação contradiz RN01." },
      { id: "hx2", text: "Aceitar data de saída anterior à entrada.", section: null, why: "Essa ação contradiz RN02." },
      { id: "hx3", text: "RN04 — Cancelar sem cobrança até 24 horas antes do check-in.", section: null, why: "RN04 pertence principalmente ao caso de uso Cancelar Reserva; ela não é necessária para confirmar Registrar Reserva." }
    ],
    order: ["h04", "h05", "h06", "h07", "h08"],
    reference: "A sequência de referência recebe as datas, valida RN02/RN03, verifica RN01, obtém a escolha do atendente e registra. A validação de datas e a consulta de disponibilidade podem ocorrer em ordem diferente, desde que ambas antecedam a confirmação. RN04 está relacionada sobretudo ao cancelamento."
  },
  "10-uc": {
    sections: [
      { id: "objetivo", name: "Objetivo" },
      { id: "ator", name: "Ator principal" },
      { id: "pre", name: "Pré-condições" },
      { id: "fluxo", name: "Fluxo principal (em ordem)" },
      { id: "alternativo", name: "Fluxo alternativo" },
      { id: "excecao", name: "Fluxo de exceção" },
      { id: "pos", name: "Pós-condição" },
      { id: "regras", name: "Regras relacionadas" },
      { id: "requisito", name: "Requisito relacionado" }
    ],
    cards: [
      { id: "m01", text: "Registrar uma consulta médica em um horário permitido.", section: "objetivo", why: "Representa o objetivo de Agendar Consulta." },
      { id: "m02", text: "Atendente.", section: "ator", why: "O enunciado diz que o atendente registra consultas." },
      { id: "m03", text: "Paciente identificado; médico, data e horário informados ou selecionáveis.", section: "pre", why: "Pré-condição proposta para o cenário especificado." },
      { id: "m04", text: "Atendente informa paciente, médico, data e horário solicitados.", section: "fluxo", why: "Dados são fornecidos para verificar a agenda." },
      { id: "m05", text: "Sistema verifica se o médico está disponível no horário.", section: "fluxo", why: "Impede conflito e respeita as duas restrições do enunciado." },
      { id: "m06", text: "Atendente confirma o agendamento válido.", section: "fluxo", why: "O ator confirma o objetivo antes do registro." },
      { id: "m07", text: "Sistema registra a consulta e apresenta a confirmação.", section: "fluxo", why: "A reserva só é confirmada depois de persistida." },
      { id: "m08", text: "Horário indisponível: apresentar impedimento e permitir escolher outro horário.", section: "alternativo", why: "Trata a condição negativa da disponibilidade." },
      { id: "m09", text: "Falha ao salvar: informar erro e não afirmar que a consulta foi agendada.", section: "excecao", why: "Uma falha técnica requer tratamento distinto do caminho de sucesso." },
      { id: "m10", text: "Consulta registrada para médico e horário sem conflito.", section: "pos", why: "Expressa o resultado da execução bem-sucedida." },
      { id: "m11", text: "RN — Um médico não pode ter duas consultas no mesmo horário.", section: "regras", why: "Restrição explícita de conflito." },
      { id: "m12", text: "RN — Somente horários disponíveis podem ser agendados.", section: "regras", why: "Restrição explícita de disponibilidade." },
      { id: "m13", text: "RF — O sistema permite ao atendente registrar consultas.", section: "requisito", why: "Requisito funcional do problema da clínica." },
      { id: "mx1", text: "Salvar a consulta antes de verificar conflitos.", section: null, why: "Contraria as regras de negócio que exigem um horário disponível." },
      { id: "mx2", text: "Agendar duas consultas com o mesmo médico no mesmo horário.", section: null, why: "Contraria a restrição explícita de conflito." }
    ],
    order: ["m04", "m05", "m06", "m07"],
    reference: "O atendente informa os dados, o sistema consulta a agenda e verifica conflito; se disponível, registra e confirma; caso contrário, solicita outro horário. A lista não especifica mecanismos concretos de persistência ou autenticação."
  }
};

CASE_EXERCISES["l03-08"] = {
  sections:[{id:"problemas",name:"Problemas no UC01 — Cadastro"}],
  cards:[
    {id:"e8a",text:"Nome 'Cadastro' não identifica qual entidade será cadastrada.",section:"problemas",why:"O objetivo precisa ser explícito."},
    {id:"e8b",text:"Ator 'Usuário' está genérico e carece de papel contextualizado.",section:"problemas",why:"Identifique o papel que realiza o cadastro."},
    {id:"e8c",text:"'Abrir a tela' descreve interface sem objetivo.",section:"problemas",why:"A especificação deve priorizar comportamento."},
    {id:"e8d",text:"'Digitar os dados' não identifica quais informações são necessárias.",section:"problemas",why:"Imprecisão nos dados de entrada."},
    {id:"e8e",text:"'Sistema verifica' é ambíguo.",section:"problemas",why:"É necessário indicar os critérios verificados."},
    {id:"e8f",text:"'Sistema salva' não indica o registro nem a confirmação.",section:"problemas",why:"O fluxo precisa atingir um resultado verificável."},
    {id:"e8g",text:"Não há fluxos alternativos ou exceções.",section:"problemas",why:"Validações e falhas precisam ser tratadas."},
    {id:"e8h",text:"Não foram especificadas pré/pós-condições nem regras ligadas.",section:"problemas",why:"A especificação está incompleta."},
    {id:"e8x",text:"A numeração dos passos é um erro de UML.",section:null,why:"Passos numerados ajudam na revisão."},
    {id:"e8y",text:"Existir um ator torna o UC inválido.",section:null,why:"Identificar o ator é necessário."}
  ],reference:"O objetivo e o domínio do cadastro não são informados no enunciado. Portanto, não é possível construir uma única versão corrigida sem escolher um contexto; esta atividade verifica a identificação dos defeitos, não inventa uma entidade."};
CASE_EXERCISES["l03-09"] = {
  sections:[{id:"pre",name:"Validações obrigatórias antes do registro"},{id:"sucesso",name:"Fluxo de sucesso / resultado"},{id:"alternativa",name:"Caminhos de impedimento/insucesso"}],
  cards:[
    {id:"l9a",text:"Conferir se o aluno possui empréstimos vencidos (RN01).",section:"pre",why:"Impedimento expresso no enunciado."},
    {id:"l9b",text:"Conferir se o aluno já possui cinco livros emprestados (RN02).",section:"pre",why:"Respeitar limite de cinco."},
    {id:"l9c",text:"Verificar se o livro está disponível (RN03).",section:"pre",why:"Não emprestar indisponível."},
    {id:"l9d",text:"Definir prazo padrão de empréstimo de 14 dias (RN04).",section:"sucesso",why:"Prazo normal indicado."},
    {id:"l9e",text:"Registrar empréstimo válido e informar prazo/resultado.",section:"sucesso",why:"Pós-condição observável."},
    {id:"l9f",text:"Recusar novo empréstimo ao aluno com devolução vencida.",section:"alternativa",why:"Caminho de impedimento pela RN01."},
    {id:"l9g",text:"Recusar empréstimo se aluno já atingiu limite de cinco.",section:"alternativa",why:"Caminho de impedimento pela RN02."},
    {id:"l9h",text:"Recusar empréstimo de exemplar indisponível.",section:"alternativa",why:"Caminho de impedimento pela RN03."},
    {id:"l9x",text:"Registrar empréstimo sem verificar situação do aluno.",section:null,why:"Ignora RN01/RN02."},
    {id:"l9y",text:"Considerar empréstimo normal de 45 dias.",section:null,why:"Contradiz RN04."}
  ],reference:"O UC dado pela lista registra o empréstimo cedo demais. É necessário avaliar todas RN01–RN04 e tratar resultados sem registrar um empréstimo inválido. A ordem interna das verificações pode variar."};
CASE_EXERCISES["l03-14"] = {
  sections:[{id:"rn",name:"Regra de Negócio"},{id:"rf",name:"Requisito Funcional derivado"},{id:"uc",name:"Caso de Uso"},{id:"alt",name:"Fluxo Alternativo"},{id:"criterio",name:"Critério de Aceitação"},{id:"teste",name:"Cenário de Teste"}],
  cards:[
    {id:"t1",text:"RN07 — Descontos superiores a 15% precisam de autorização do gerente.",section:"rn",why:"Regra dada na lista."},
    {id:"t2",text:"O sistema deve impedir desconto acima de 15% sem autorização do gerente.",section:"rf",why:"RF derivado da restrição."},
    {id:"t3",text:"UC — Aplicar Desconto ao Pedido.",section:"uc",why:"Objetivo do ator."},
    {id:"t4",text:"Ao solicitar desconto superior a 15%, pedir autorização antes de confirmar.",section:"alt",why:"Caminho condicionado pelo limite."},
    {id:"t5",text:"Sem autorização, desconto superior a 15% não é aplicado.",section:"criterio",why:"Condição verificável de aceitação."},
    {id:"t6",text:"Testar desconto de 20% sem autorização e verificar que não é aplicado.",section:"teste",why:"Cenário de teste verificável."},
    {id:"tx",text:"Todo desconto de 20% é aprovado automaticamente.",section:null,why:"Contradiz RN07."},
    {id:"ty",text:"A cor do botão deverá ser azul.",section:null,why:"Não deriva da regra de desconto."}
  ],reference:"Exemplo proposto de cadeia RN → RF → UC → alternativa → aceitação → teste. O professor pede construir a cadeia; os textos específicos não foram fornecidos como gabarito."};

const DIAGRAM_EXERCISES = {
  "7": {
    system: "Sistema de Restaurante",
    actors: [
      { id: "atendente", name: "Atendente" },
      { id: "cozinheiro", name: "Cozinheiro" },
      { id: "caixa", name: "Caixa" },
      { id: "gerente", name: "Gerente" }
    ],
    cases: [
      { id: "registrar", name: "Registrar Pedido" },
      { id: "cancelar", name: "Cancelar Pedido" },
      { id: "consultar-preparo", name: "Consultar Pedidos a Preparar" },
      { id: "pronto", name: "Marcar Pedido como Pronto" },
      { id: "pagar", name: "Registrar Pagamento" },
      { id: "relatorios", name: "Consultar Relatórios de Vendas" }
    ],
    edges: [
      ["atendente", "registrar"], ["atendente", "cancelar"],
      ["cozinheiro", "consultar-preparo"], ["cozinheiro", "pronto"],
      ["caixa", "pagar"], ["gerente", "relatorios"]
    ],
    reference: "Atendente → Registrar Pedido e Cancelar Pedido; Cozinheiro → Consultar Pedidos a Preparar e Marcar Pedido como Pronto; Caixa → Registrar Pagamento; Gerente → Consultar Relatórios de Vendas. A fronteira delimita o sistema, com atores externos e casos de uso internos."
  },
  "10-diagrama": {
    system: "Sistema da Clínica",
    actors: [
      { id: "atendente", name: "Atendente" },
      { id: "paciente", name: "Paciente" }
    ],
    cases: [
      { id: "agendar", name: "Agendar Consulta" },
      { id: "cancelar", name: "Registrar Cancelamento" },
      { id: "consultar", name: "Consultar Consultas Agendadas" },
      { id: "horarios", name: "Consultar Horários Disponíveis" }
    ],
    edges: [
      ["atendente", "agendar"], ["atendente", "cancelar"],
      ["paciente", "consultar"]
    ],
    optionalEdges: [["atendente", "horarios"], ["paciente", "horarios"]],
    reference: "Atores explicitamente previstos: Atendente (registra consultas e cancelamentos) e Paciente (consulta consultas agendadas). A consulta de horários é comportamento funcional que pode estar associado a uma consulta explícita ou integrar o agendamento. O enunciado não fixa a direção dessas interações opcionais."
  }
};

DIAGRAM_EXERCISES["l05-04"] = {
  system:"Sistema de Biblioteca",
  actors:[{id:"bibliotecario",name:"Bibliotecário"},{id:"aluno",name:"Aluno"},{id:"coordenador",name:"Coordenador"},{id:"autenticacao",name:"Serviço de Autenticação Externo"}],
  cases:[{id:"emprestimo",name:"Registrar Empréstimo"},{id:"devolucao",name:"Registrar Devolução"},{id:"catalogo",name:"Consultar Livros Disponíveis"},{id:"historico",name:"Consultar Histórico"},{id:"cadastro",name:"Cadastrar Livro"},{id:"bloquear",name:"Bloquear Usuário"},{id:"validar",name:"Validar Acesso"}],
  edges:[["bibliotecario","emprestimo"],["bibliotecario","devolucao"],["aluno","catalogo"],["aluno","historico"],["coordenador","cadastro"],["coordenador","bloquear"],["autenticacao","validar"]],
  optionalEdges:[["aluno","validar"],["coordenador","validar"],["bibliotecario","validar"]],
  reference:"Baseado nos papéis explicitamente descritos no Ex. 4 da Lista 05. Validar Acesso e sua associação ao serviço externo são uma decomposição didática; as associações dos usuários autenticados com essa função foram consideradas opcionais."};

const SEQUENCE_EXERCISES = {
  "8": {
    participants: ["Vendedor", "TelaProduto", "ProdutoController", "ProdutoService", "ProdutoRepository"],
    actions: [
      ["p1", "informarCodigo(codigo)", "Vendedor", "TelaProduto"],
      ["p2", "consultarProduto(codigo)", "TelaProduto", "ProdutoController"],
      ["p3", "buscarProduto(codigo)", "ProdutoController", "ProdutoService"],
      ["p4", "obterPorCodigo(codigo)", "ProdutoService", "ProdutoRepository"],
      ["p5", "produtoEncontrado", "ProdutoRepository", "ProdutoService"],
      ["p6", "dadosProduto", "ProdutoService", "ProdutoController"],
      ["p7", "mostrarProduto", "ProdutoController", "TelaProduto"],
      ["p8", "exibirDados", "TelaProduto", "Vendedor"]
    ],
    reference: "Vendedor → TelaProduto → ProdutoController → ProdutoService → ProdutoRepository. Depois, os resultados voltam do Repository ao Service, Controller, Tela e Vendedor. O enunciado deixa liberdade para nomes específicos das mensagens."
  },
  "9": {
    participants: ["Cliente", "TelaSaque", "SaqueController", "ContaService", "MovimentacaoRepository"],
    branches: ["saldo suficiente", "saldo insuficiente"],
    actions: [
      ["s1", "informarValor(valor)", "Cliente", "TelaSaque", "comum"],
      ["s2", "realizarSaque(valor)", "TelaSaque", "SaqueController", "comum"],
      ["s3", "consultarSaldo()", "SaqueController", "ContaService", "comum"],
      ["s4", "saldoConsultado", "ContaService", "SaqueController", "comum"],
      ["s5", "debitarValor(valor)", "SaqueController", "ContaService", "saldo suficiente"],
      ["s6", "registrarMovimentacao()", "ContaService", "MovimentacaoRepository", "saldo suficiente"],
      ["s7", "saqueRegistrado", "ContaService", "SaqueController", "saldo suficiente"],
      ["s8", "informarSucesso()", "SaqueController", "TelaSaque", "saldo suficiente"],
      ["s9", "exibirConfirmacao()", "TelaSaque", "Cliente", "saldo suficiente"],
      ["s10", "informarSaldoInsuficiente()", "SaqueController", "TelaSaque", "saldo insuficiente"],
      ["s11", "exibirImpossibilidade()", "TelaSaque", "Cliente", "saldo insuficiente"]
    ],
    reference: "Consulta de saldo antes do alt; no ramo suficiente ocorrem débito, movimentação e confirmação. No ramo insuficiente, apenas recusa, sem debitar. Os dois ramos são alternativas, não execuções consecutivas."
  },
  "10-sequencia": {
    participants: ["Atendente", "TelaAgendamento", "AgendamentoController", "AgendaService", "ConsultaRepository"],
    branches: ["horário disponível", "horário indisponível"],
    actions: [
      ["a1", "informarDadosConsulta()", "Atendente", "TelaAgendamento", "comum"],
      ["a2", "solicitarAgendamento()", "TelaAgendamento", "AgendamentoController", "comum"],
      ["a3", "consultarDisponibilidade()", "AgendamentoController", "AgendaService", "comum"],
      ["a4", "buscarConflitos()", "AgendaService", "ConsultaRepository", "comum"],
      ["a5", "resultadoDaBusca", "ConsultaRepository", "AgendaService", "comum"],
      ["a6", "situacaoDoHorario", "AgendaService", "AgendamentoController", "comum"],
      ["a7", "registrarConsulta()", "AgendamentoController", "AgendaService", "horário disponível"],
      ["a8", "salvarConsulta()", "AgendaService", "ConsultaRepository", "horário disponível"],
      ["a9", "registroConfirmado", "ConsultaRepository", "AgendaService", "horário disponível"],
      ["a10", "confirmarAgendamento()", "AgendamentoController", "TelaAgendamento", "horário disponível"],
      ["a11", "informarIndisponibilidade()", "AgendamentoController", "TelaAgendamento", "horário indisponível"]
    ],
    reference: "Atendente interage com Tela; Controller coordena; Service verifica regras; Repository consulta conflitos e salva. Apenas [horário disponível] registra, e [horário indisponível] informa impedimento."
  }
};

// Atividades novas baseadas nos três arquivos MD fornecidos. As alternativas
// têm justificativa didática, não representam gabarito oficial do professor.
const CLASSIFY_EXERCISES = {
  "l03-01": { sections:[{id:"rn",name:"Regra de Negócio"},{id:"rf",name:"Requisito Funcional"},{id:"rnf",name:"Requisito Não Funcional"}], cards:[
    ["a","Empréstimos possuem prazo máximo de 30 dias.","rn","Restrição de funcionamento da biblioteca."],
    ["b","O sistema deve permitir registrar empréstimos.","rf","Comportamento que o software oferece."],
    ["c","Administradores devem utilizar autenticação em dois fatores.","rnf","Neste exercício, tratamos a exigência como restrição de segurança; ela também pode originar RF de autenticação. A classificação depende da redação e contexto."],
    ["d","Clientes inadimplentes não podem realizar novas compras.","rn","Política do domínio, independente da tecnologia."],
    ["e","O sistema deve responder às consultas em até dois segundos.","rnf","Restrição de desempenho quantificável."]
  ], reference:"A distinção principal: regras definem políticas do domínio; RF descrevem comportamentos do software; RNF descrevem atributos ou restrições de qualidade. Autenticação em dois fatores pode gerar decisões de classificação diferentes conforme a especificação." },
  "l03-02": { sections:[{id:"rf",name:"RF — Funcionalidade"},{id:"rnf",name:"RNF — Qualidade ou restrição"}], cards:[
    ["a","Permitir empréstimo de livros.","rf","Operação do sistema."],
    ["b","Permitir consulta ao catálogo.","rf","Operação do sistema."],
    ["c","Suportar 500 usuários simultâneos.","rnf","Capacidade/desempenho."],
    ["d","Exigir autenticação em operações administrativas.","rf","A redação define um comportamento verificável de autenticação, associado à segurança; também pode ser detalhado por RNF de segurança."],
    ["e","Funcionar nos principais navegadores atuais.","rnf","Compatibilidade e portabilidade."],
    ["f","Pesquisa apresentar resultado em até 2 segundos.","rnf","Desempenho."],
  ], reference:"RF responde o que o software faz; RNF responde como deve operar ou quais restrições de qualidade deve cumprir. Segurança pode envolver tanto requisitos funcionais quanto não funcionais." },
  "l03-04": { sections:[{id:"uc",name:"Objetivo — candidato a Caso de Uso"},{id:"passo",name:"Ação de tela ou passo interno"}], cards:[
    ["a","Abrir Tela de Cliente","passo","É uma ação de navegação, não um objetivo completo."],
    ["b","Clicar em Salvar","passo","Detalhe de interface."],
    ["c","Cadastrar Cliente","uc","Resultado de negócio relevante ao ator."],
    ["d","Digitar CPF","passo","Etapa da interação."],
    ["e","Registrar Pedido","uc","Funcionalidade orientada a objetivo."],
    ["f","Selecionar Produto","passo","Etapa dentro de um processo maior neste cenário."],
    ["g","Cancelar Pedido","uc","Objetivo completo e observável."],
  ], reference:"Caso de Uso deve representar o objetivo do ator; uma tela, clique ou campo isolado costuma pertencer ao fluxo detalhado." },
  "l03-06": { sections:[{id:"rn",name:"RN — Regras de negócio"},{id:"rf",name:"RF — Funcionalidades"},{id:"rnf",name:"RNF — Proposta adicional (não explícita)"},{id:"uc",name:"UC — Objetivos do ator"}], cards:[
    ["a","Cliente conveniado recebe desconto de 20%.","rn","Percentual explicitamente definido no enunciado."],
    ["b","O sistema registra a placa e horário na entrada.","rf","Comportamento do software explicitamente descrito."],
    ["c","O sistema calcula valor conforme permanência.","rf","Operação explícita."],
    ["d","A consulta de entradas deve responder em até dois segundos.","rnf","Exemplo PROPOSTO, não informado no cenário."],
    ["e","Registrar Entrada do Veículo.","uc","Objetivo funcional completo proposto."],
    ["f","Registrar Pagamento e Liberar Saída.","uc","Objetivo de atendimento do cenário."],
    ["g","O sistema deve manter histórico das operações.","rf","Necessidade de armazenamento explícita."],
  ], reference:"A lista pede identificar RN, RF, RNF, atores e UCs. O RNF usado aqui é uma PROPOSTA didática; o enunciado não traz um requisito não funcional mensurável." },
  "l04-17": { sections:[{id:"ator",name:"Ator"},{id:"boundary",name:"Interface / boundary"},{id:"controller",name:"Controle / aplicação"},{id:"domain",name:"Domínio"},{id:"repo",name:"Persistência"}], cards:[
    ["a","Cliente que solicita a transferência","ator","Participante externo que inicia a interação."],
    ["b","TelaTransferencia","boundary","Recebe informações e mostra resultado."],
    ["c","TransferenciaController","controller","Orquestra a solicitação."],
    ["d","Conta / Transferencia","domain","Objetos de domínio envolvendo saldo, conta e movimentação."],
    ["e","MovimentacaoRepository","repo","Acesso à persistência de movimentações."],
  ],reference:"Esses nomes de classes são PROPOSTOS: a lista informa papéis, não nomes obrigatórios. A responsabilidade importa mais que o identificador exato." },
  "l04-21": { sections:[{id:"ui",name:"Interface / TelaPedido"},{id:"app",name:"Controller / Aplicação"},{id:"domain",name:"Domínio / Serviços de negócio"},{id:"infra",name:"Infraestrutura / Persistência"}], cards:[
    ["a","Coletar os dados do pedido na interface.","ui","A interface captura a intenção do usuário."],
    ["b","Orquestrar o caso de uso Registrar Pedido.","app","Coordenação da aplicação."],
    ["c","validarCliente()","domain","Verificação de regra/cadastro de negócio, coordenada pela aplicação."],
    ["d","verificarEstoque()","domain","Consulta a serviço/regra de disponibilidade."],
    ["e","calcularDesconto() / calcularTotal()","domain","Operações de domínio, não de apresentação."],
    ["f","salvarPedido() no repositório","infra","Persistência."],
    ["g","enviarEmail() por gateway/serviço externo","infra","Integração externa, acionada pela aplicação."],
  ], reference:"É uma distribuição de REFERÊNCIA: classes e fronteiras podem variar. O problema central é concentrar todas as responsabilidades na TelaPedido." },
  "l05-02": { sections:[{id:"rn",name:"RN — Regras de negócio"},{id:"rf",name:"RF — Requisitos funcionais"},{id:"rnf",name:"RNF — Requisitos não funcionais"}], cards:[
    ["a","Clientes com habilitação vencida não podem alugar veículos.","rn","Restrição da locadora."],
    ["b","O sistema deve permitir registrar uma locação.","rf","Operação de software."],
    ["c","Uma locação deve possuir período mínimo de uma diária.","rn","Restrição do domínio."],
    ["d","Veículos disponíveis apresentados em até 3 segundos.","rnf","Desempenho."],
    ["e","O sistema deve permitir registrar a devolução.","rf","Operação de software."],
    ["f","Menores de 21 anos não podem alugar veículo premium.","rn","Restrição da locadora."],
    ["g","O sistema deve exigir autenticação dos funcionários.","rf","Comportamento de autenticar requerido; relacionado à segurança."],
  ], reference:"Classificação didática conforme a redação. Exigir autenticação é tratado como RF por especificar um comportamento, embora venha acompanhado de exigências de segurança." },
  "l05-03": { sections:[{id:"rn",name:"RN — Restrições da academia"},{id:"rf",name:"RF — Funcionalidades"},{id:"rnf",name:"RNF — Desempenho"}], cards:[
    ["a","Uma aula possui limite máximo de participantes.","rn","Capacidade definida pelo negócio."],
    ["b","Um aluno não pode reservar aulas no mesmo horário.","rn","Conflito de agenda."],
    ["c","Aluno com mensalidade vencida não pode fazer novos agendamentos.","rn","Bloqueio de negócio."],
    ["d","Consultar aulas disponíveis.","rf","Operação solicitada."],
    ["e","Realizar reserva de aula.","rf","Operação solicitada."],
    ["f","Cancelar reserva de aula.","rf","Operação solicitada."],
    ["g","Consulta de aulas retorna em até 2 segundos.","rnf","Desempenho."],
  ], reference:"As três restrições podem afetar o Caso de Uso de reserva. O limite de dois segundos é um RNF explícito." },
  "l05-10a": { sections:[{id:"rn",name:"RN — Restrições"},{id:"rf",name:"RF — Funções do software"},{id:"rnf",name:"RNF — Desempenho"}], cards:[
    ["a","Um médico não pode ter duas consultas no mesmo horário.","rn","Restrição de não sobreposição."],
    ["b","Somente horários disponíveis podem ser agendados.","rn","Regra de disponibilidade."],
    ["c","Atendente deve conseguir registrar consultas.","rf","Funcionalidade explícita."],
    ["d","Atendente deve conseguir registrar cancelamentos.","rf","Funcionalidade explícita."],
    ["e","Paciente consulta suas consultas agendadas.","rf","Funcionalidade explícita."],
    ["f","Consulta dos horários disponíveis em até 2 segundos.","rnf","Desempenho explicitamente mensurável."],
  ], reference:"Esta clínica é a da Lista 05, que não estabelece limite de 24h para cancelamento. Essa regra está no cenário diferente da Lista de Diagrama de Sequência (Ex. 23)." }
};

const QUIZ_EXERCISES = {
  "l03-05": {questions:[
    {q:"Quem pode ser ator no sistema acadêmico do enunciado?",options:["Somente estudantes","Estudantes, professores, coordenadores, funcionários e serviço externo de autenticação","Somente o gerente do banco de dados","Somente classes internas"],answer:1,why:"Um ator representa um papel externo que interage com o sistema; serviços externos também podem ser atores."},
    {q:"Uma pessoa pode representar dois atores diferentes?",options:["Não, cada pessoa tem exatamente um papel","Sim, quando desempenha papéis diferentes na interação","Somente se houver dois logins","Somente no Diagrama de Sequência"],answer:1,why:"Ator é um papel, não necessariamente uma pessoa distinta."},
    {q:"O banco de dados interno costuma ser ator?",options:["Sim, sempre","Apenas quando tem mais de cinco tabelas","Normalmente não, porque faz parte da implementação interna","Somente quando está em SQL"],answer:2,why:"Atores são externos à fronteira do sistema modelado. Um banco de dados interno geralmente é componente da solução."}
  ],reference:"Baseado no Exercício 5 da Lista de Análise e Projeto."},
  "l03-11": {questions:[
    {q:"Cliente escolhe PIX em vez de cartão. Em um UC Realizar Compra, isso normalmente é:",options:["Fluxo alternativo","Falha de infraestrutura","Pós-condição","Requisito não funcional"],answer:0,why:"É um caminho válido diferente do padrão."},
    {q:"O cartão é recusado pelo processador de pagamento. Esse evento é melhor documentado como:",options:["Resultado de sucesso","Fluxo de exceção ou insucesso","Pré-condição do cliente","Diagrama de Classes"],answer:1,why:"O pagamento não foi autorizado e demanda tratamento do insucesso."},
    {q:"O cliente aplica um cupom de desconto válido durante a compra. É geralmente:",options:["Exceção técnica","Passo obrigatório de toda compra","Fluxo alternativo opcional","Falha irrecuperável"],answer:2,why:"O desconto é um caminho opcional, caso esteja permitido."},
    {q:"Produto fica indisponível antes da confirmação. O comportamento correto da especificação inclui:",options:["Ignorar a mudança de estoque","Registrar a compra mesmo sem estoque","Tratar indisponibilidade e impedir confirmação indevida","Alterar a regra de negócio sem revisão"],answer:2,why:"A classificação alternativo/insucesso pode variar conforme a convenção. O indispensável é documentar a condição e não confirmar indevidamente."},
    {q:"Um cupom informado está vencido. O sistema deve:",options:["Aceitar por ser alternativa","Tratar rejeição/invalidade do cupom sem aplicar desconto indevido","Apagar todos os itens","Permitir um desconto qualquer"],answer:1,why:"A regra de validade deve ser respeitada; pode ser documentada como um fluxo de insucesso do cupom."}
  ], reference:"A lista pede distinguir alternativas e exceções; a nomenclatura de certos insucessos de negócio pode variar. A correção privilegia o comportamento, não terminologia rígida." },
  "l04-16": {questions:[
    {q:"Qual pergunta caracteriza um Caso de Uso?",options:["Como a classe é implementada?","Qual SQL será utilizado?","Como o ator atinge um objetivo ao usar o sistema?","Quantos servidores serão necessários?"],answer:2,why:"O Caso de Uso modela objetivo e interação do ator."},
    {q:"Qual pergunta caracteriza um Diagrama de Sequência?",options:["Como participantes colaboram e trocam mensagens ao longo de um cenário?","Quais funcionários trabalham na organização?","Quais os limites legais de desconto?","Que atores existem independentemente de seus objetivos?"],answer:0,why:"A sequência detalha colaboração e ordem temporal das mensagens."},
    {q:"Por que Diagrama de Sequência não substitui a especificação do Caso de Uso?",options:["Porque o Diagrama de Sequência não tem nenhum ator","Porque têm níveis e perspectivas diferentes de representação","Porque UML proíbe usá-los juntos","Porque sequência não mostra tempo"],answer:1,why:"A especificação explicita objetivo, regras, pré/pós-condições e outros fluxos; o diagrama detalha interações de um cenário."}
  ],reference:"Questões de reconhecimento propostas para transformar a parte discursiva do Ex. 16 em assinalar."},
  "l04-22": {questions:[
    {q:"O Diagrama contém PedidoService → ClienteService: bloquearCliente(), mas a análise não menciona bloqueio. O primeiro passo adequado é:",options:["Implementar imediatamente","Investigar se é regra não documentada, requisito ausente, erro ou decisão de projeto válida","Apagar todos os Casos de Uso","Considerar qualquer mensagem entre serviços automaticamente correta"],answer:1,why:"Sem rastreabilidade, não há informação suficiente para declarar certo ou errado."},
    {q:"Se os interessados confirmarem que bloquearCliente() é uma nova regra essencial, a equipe deve:",options:["Documentar e rastrear a regra/requisito, revisar os artefatos relacionados","Ocultar a regra no código","Apagar as mensagens de retorno","Transformar a regra em RNF de desempenho"],answer:0,why:"A documentação e rastreabilidade devem refletir o comportamento legitimamente exigido."},
    {q:"A presença de uma mensagem não citada literalmente no Caso de Uso sempre significa erro?",options:["Sim, absolutamente","Não; decisões internas de projeto podem introduzir mensagens, desde que coerentes e justificáveis","Sim, se envolver Repository","Não, toda mensagem é aceitável"],answer:1,why:"O diagrama pode refinar a solução internamente; precisa manter coerência com o domínio e as regras."}
  ],reference:"Baseado na investigação de mensagens sem origem, sem pretender concluir automaticamente se a operação bloquearCliente() é adequada."},
  "l05-10e": {questions:[
    {q:"O artefato que descreve uma política de funcionamento do domínio é:",options:["Diagrama de Sequência","Regra de Negócio","Diagrama de Casos de Uso","Tela de cadastro"],answer:1,why:"RN expressa política, restrição ou cálculo do negócio."},
    {q:"O artefato 'O sistema deve permitir ao atendente registrar consultas' é:",options:["Requisito Funcional","Regra de herança","Mensagem de retorno","Requisito de desempenho"],answer:0,why:"Descreve capacidade requerida do sistema."},
    {q:"Qual artefato mostra atores associados a objetivos do sistema de forma panorâmica?",options:["Diagrama de Sequência","Tabela física do banco","Diagrama de Casos de Uso","Código da tela"],answer:2,why:"Modela o escopo e as funcionalidades acessíveis aos atores."},
    {q:"Qual artefato detalha a ordem de mensagens entre Controller, Service e Repository em Agendar Consulta?",options:["Regra de Negócio","Diagrama de Sequência","Mapa de interessados","Requisito Não Funcional"],answer:1,why:"A sequência explicita participantes e trocas de mensagens ao longo do tempo."},
    {q:"Qual afirmação diferencia especificação de Caso de Uso de Diagrama de Casos de Uso?",options:["A especificação descreve fluxos e condições; o diagrama apresenta relações panorâmicas","Ambos mostram todas as mensagens internas","A especificação só indica cores da tela","O diagrama sempre substitui a especificação"],answer:0,why:"São representações complementares com detalhes diferentes."}
  ],reference:"Versão de assinalar da Parte E da Lista 05, baseada nas perguntas indicadas no enunciado."},
  "l03-12": {questions:[
    {q:"O UC 'Cadastro' tem ator Usuário e passos 'Abrir tela → preencher → salvar'. Qual informação importante falta?",options:["Versão do CSS","Objetivo e resultado esperado verificável","Fabricante do computador","Ícone do aplicativo"],answer:1,why:"A especificação deve deixar explícito o objetivo e suas condições de sucesso."},
    {q:"A finalidade de registrar RN/RF relacionados a um UC é principalmente:",options:["Mudar o tipo de diagrama","Substituir todos os testes","Facilitar rastreabilidade e verificar conformidade","Diminuir o número de atores"],answer:2,why:"Ajuda a encontrar requisitos não cobertos e ações sem justificativa."},
    {q:"Qual cenário exemplifica corretamente uma exceção relevante em Registrar Pedido?",options:["Cliente seleciona outro produto","Falha ao salvar pedido e comunicação sem declarar sucesso","Cliente visualiza total","Usuário confirma pedido e sistema grava com sucesso"],answer:1,why:"A falha técnica impede atingir a pós-condição de sucesso."}
  ],reference:"Checklist aplicado a um cenário de referência. A Lista 03 pede aplicar o checklist ao projeto real da equipe, que não está disponível nesta atividade."}
};

SEQUENCE_EXERCISES["l04-18"] = {
  participants:["Professor","TelaReserva","ReservaController","ReservaService","ReservaRepository"],
  actions:[
    ["r1","solicitarReserva()","Professor","TelaReserva"],
    ["r2","solicitarDataHorario()","TelaReserva","Professor"],
    ["r3","informarPeriodo()","Professor","TelaReserva"],
    ["r4","consultarDisponibilidade()","TelaReserva","ReservaController"],
    ["r5","verificarSalas()","ReservaController","ReservaService"],
    ["r6","buscarReservas()","ReservaService","ReservaRepository"],
    ["r7","resultadoDisponibilidade","ReservaRepository","ReservaService"],
    ["r8","salasDisponiveis","ReservaService","ReservaController"],
    ["r9","apresentarSala()","TelaReserva","Professor"],
    ["r10","confirmarReserva()","Professor","TelaReserva"],
    ["r11","registrarReserva()","TelaReserva","ReservaController"],
    ["r12","salvarReserva()","ReservaService","ReservaRepository"],
    ["r13","reservaSalva","ReservaRepository","ReservaService"],
    ["r14","confirmarRegistro()","TelaReserva","Professor"]
  ],
  dependencies:[["r8","r9"],["r9","r10"],["r10","r11"],["r11","r12"],["r12","r13"],["r13","r14"]],
  reference:"Uma materialização DIDÁTICA dos oito passos do UC03 — Reservar Sala. Os nomes das operações não são prescritos pela lista. As mensagens intermediárias de coordenação podem ser refinadas de outras maneiras."};
SEQUENCE_EXERCISES["l04-19"] = {
  participants:["Professor","TelaReserva","ReservaController","ReservaService","ReservaRepository"],
  branches:["sala disponível","sala indisponível"],
  actions:[
    ["ra1","informarPeriodo()","Professor","TelaReserva","comum"],
    ["ra2","consultarDisponibilidade()","TelaReserva","ReservaController","comum"],
    ["ra3","verificarConflitos()","ReservaController","ReservaService","comum"],
    ["ra4","buscarReservas()","ReservaService","ReservaRepository","comum"],
    ["ra5","resultadoDaConsulta","ReservaRepository","ReservaService","comum"],
    ["ra6","periodoDisponivel","ReservaService","ReservaController","comum"],
    ["ra7","confirmarEscolha()","Professor","TelaReserva","sala disponível"],
    ["ra8","registrarReserva()","TelaReserva","ReservaController","sala disponível"],
    ["ra9","salvarReserva()","ReservaService","ReservaRepository","sala disponível"],
    ["ra10","reservaSalva","ReservaRepository","ReservaService","sala disponível"],
    ["ra11","informarConfirmacao()","TelaReserva","Professor","sala disponível"],
    ["ra12","informarIndisponibilidade()","TelaReserva","Professor","sala indisponível"]
  ],
  reference:"O fragmento alt é usado para respeitar a RN05 da Lista de Diagrama de Sequência: períodos conflitantes não podem ser reservados. Apenas o ramo disponível persiste a reserva."};
SEQUENCE_EXERCISES["l04-20"] = {
  participants:["Atendente","TelaPedido","PedidoController","PedidoService","EstoqueRepository"],
  branches:["para cada produto"], fragmentLabel:"loop",
  actions:[
    ["lo1","iniciarPedido()","Atendente","TelaPedido","comum"],
    ["lo2","verificarDisponibilidade()","PedidoService","EstoqueRepository","para cada produto"],
    ["lo3","adicionarItem()","PedidoController","PedidoService","para cada produto"],
    ["lo4","calcularSubtotal()","PedidoService","PedidoService","para cada produto"]
  ],
  reference:"O enunciado exige loop [para cada produto] sobre verificar disponibilidade, adicionar item e calcular subtotal. Participantes são propostos; o professor não fixa nomes. A ordem dos itens foi conservada conforme o exercício."};
SEQUENCE_EXERCISES["l04-23"] = {
  participants:["Paciente","TelaAgendamento","AgendamentoController","AgendaService","ConsultaRepository"],
  branches:["horário disponível","horário indisponível"],
  actions:[
    ["p23a","informarEspecialidadeProfissionalHorario()","Paciente","TelaAgendamento","comum"],
    ["p23b","consultarDisponibilidade()","TelaAgendamento","AgendamentoController","comum"],
    ["p23c","validarDisponibilidade()","AgendamentoController","AgendaService","comum"],
    ["p23d","buscarConflitos()","AgendaService","ConsultaRepository","comum"],
    ["p23e","resultadoBusca","ConsultaRepository","AgendaService","comum"],
    ["p23f","confirmarAgendamento()","Paciente","TelaAgendamento","horário disponível"],
    ["p23g","salvarConsulta()","AgendaService","ConsultaRepository","horário disponível"],
    ["p23h","consultaSalva","ConsultaRepository","AgendaService","horário disponível"],
    ["p23i","informarSucesso()","TelaAgendamento","Paciente","horário disponível"],
    ["p23j","informarConflito()","TelaAgendamento","Paciente","horário indisponível"]
  ],
  reference:"No Ex. 23 da Lista de Diagrama de Sequência, o PACIENTE escolhe especialidade, profissional, data e horário e pode cancelar até 24 horas antes. Este é um cenário distinto do Ex. 10 da Lista 05, em que ATENDENTE registra consultas."};

const EXERCISES = [
  {id:"l03-01",list:"Lista 03",number:"01",title:"RN × RF × RNF",mode:"classify",short:"Classifique as afirmações sobre empréstimos, segurança, compras e desempenho.",tags:["Classificação","Requisitos"]},
  {id:"l03-02",list:"Lista 03",number:"02",title:"Requisitos de biblioteca",mode:"classify",short:"Separe funcionalidades e características não funcionais da biblioteca.",tags:["RF","RNF"]},
  {id:"l03-04",list:"Lista 03",number:"04",title:"Caso de Uso não é tela",mode:"classify",short:"Separe objetivos do ator de ações de interface.",tags:["Caso de Uso","Interação"]},
  {id:"l03-05",list:"Lista 03",number:"05",title:"Quem são os atores?",mode:"quiz",short:"Assinale os conceitos corretos sobre papéis e sistemas externos.",tags:["Atores","Assinalar"]},
  {id:"l03-06",list:"Lista 03",number:"06",title:"Estacionamento",mode:"classify",short:"Identifique políticas, funcionalidades, UC e RNF proposto.",tags:["Estacionamento","Requisitos"]},
  {id:"l03-08",list:"Lista 03",number:"08",title:"Encontre os erros do UC",mode:"case",short:"Selecione defeitos reais no UC01 — Cadastro, sem inventar detalhes do domínio.",tags:["Validação","Caso de Uso"]},
  {id:"l03-09",list:"Lista 03",number:"09",title:"Empréstimo incompleto",mode:"case",short:"Complete as verificações RN01–RN04 antes de registrar empréstimo.",tags:["Biblioteca","Regras"]},
  {id:"l03-11",list:"Lista 03",number:"11",title:"Alternativa ou exceção?",mode:"quiz",short:"Escolha o tratamento para PIX, cupons, pagamentos e estoque.",tags:["Fluxos","Assinalar"]},
  {id:"l03-12",list:"Lista 03",number:"12",title:"Checklist do Caso de Uso",mode:"quiz",short:"Identifique falhas comuns de especificação por alternativas.",tags:["Checklist","Assinalar"]},
  {id:"l03-14",list:"Lista 03",number:"14",title:"Cadeia de rastreabilidade",mode:"case",short:"Construa RN07 → RF → UC → alternativa → aceitação → teste.",tags:["Rastreabilidade","Blocos"]},
  {id:"l04-16",list:"Lista 04",number:"16",title:"UC × Sequência",mode:"quiz",short:"Assinale o papel dos dois tipos de artefatos.",tags:["Conceitos","Assinalar"]},
  {id:"l04-17",list:"Lista 04",number:"17",title:"Participantes da transferência",mode:"classify",short:"Distribua ator, interface, aplicação, domínio e persistência.",tags:["Papéis","Classes"]},
  {id:"l04-18",list:"Lista 04",number:"18",title:"Sequência: Reservar Sala",mode:"sequence",short:"Ordene as mensagens entre Professor, Tela, Controller, Service e Repository.",tags:["Sequência","Sala"]},
  {id:"l04-19",list:"Lista 04",number:"19",title:"Reserva de Sala com alt",mode:"sequence",short:"Separe reserva possível e período conflitante, respeitando a RN05.",tags:["alt","Reserva"]},
  {id:"l04-20",list:"Lista 04",number:"20",title:"Loop de produtos",mode:"sequence",short:"Represente a repetição [para cada produto] no Diagrama de Sequência.",tags:["loop","Pedido"]},
  {id:"l04-21",list:"Lista 04",number:"21",title:"Quem deve fazer isso?",mode:"classify",short:"Redistribua responsabilidades concentradas indevidamente na TelaPedido.",tags:["Arquitetura","Responsabilidades"]},
  {id:"l04-22",list:"Lista 04",number:"22",title:"Mensagem sem origem",mode:"quiz",short:"Escolha como investigar uma operação não rastreada a requisitos.",tags:["Rastreabilidade","Assinalar"]},
  {id:"l04-23",list:"Lista 04",number:"23",title:"Clínica: Sequência do Paciente",mode:"sequence",short:"Integre a verificação de horário e os ramos de sucesso/insucesso do cenário do paciente.",tags:["Clínica","alt"]},
  {id:"l05-02",list:"Lista 05",number:"02",title:"Locação de veículos",mode:"classify",short:"Classifique os sete itens da locadora como RN, RF ou RNF.",tags:["Locadora","Requisitos"]},
  {id:"l05-03",list:"Lista 05",number:"03",title:"Academia",mode:"classify",short:"Separe regras de reserva, funcionalidades e requisito de desempenho.",tags:["Academia","Blocos"]},
  {id:"l05-04",list:"Lista 05",number:"04",title:"Biblioteca: Diagrama de UC",mode:"diagram",short:"Posicione atores e funcionalidades e conecte-os, incluindo serviço externo de autenticação.",tags:["Biblioteca","Diagrama"]},
  {id:"5",list:"Lista 05",number:"05",title:"Validar Caso de Uso",mode:"case",short:"Diagnostique os problemas na especificação incompleta de Fazer Reserva.",tags:["Caso de Uso","Ambiguidade","Checklist"]},
  {id:"6",list:"Lista 05",number:"06",title:"Especificar Caso de Uso",mode:"case",short:"Hotel: construa UC01 — Registrar Reserva a partir das regras RN01, RN02 e RN03.",tags:["Hotel","Fluxos","Regras"]},
  {id:"7",list:"Lista 05",number:"07",title:"Diagrama de Casos de Uso",mode:"diagram",short:"Restaurante: posicione atores, casos de uso e desenhe as associações.",tags:["Restaurante","Atores","Associações"]},
  {id:"8",list:"Lista 05",number:"08",title:"Diagrama de Sequência",mode:"sequence",short:"Consultar Produto: coloque as mensagens na ordem certa e defina seus participantes.",tags:["Produto","Controller","Repository"]},
  {id:"9",list:"Lista 05",number:"09",title:"Sequência com fragmento alt",mode:"sequence",short:"Realizar Saque: represente os ramos [saldo suficiente] e [saldo insuficiente].",tags:["Saque","alt","Condições"]},
  {id:"l05-10a",list:"Lista 05",number:"10A",title:"Clínica: Regras e Requisitos",mode:"classify",short:"Classifique restrições de agendamento, funcionalidades e desempenho.",tags:["Clínica","Classificação"]},
  {id:"10-uc",list:"Lista 05",number:"10B",title:"Clínica: Caso de Uso",mode:"case",short:"Especifique Agendar Consulta usando o cenário da clínica.",tags:["Clínica","Caso de Uso","Regras"]},
  {id:"10-diagrama",list:"Lista 05",number:"10C",title:"Clínica: Casos de Uso",mode:"diagram",short:"Organize os atores e funcionalidades de uma clínica.",tags:["Clínica","Atores","Associações"]},
  {id:"10-sequencia",list:"Lista 05",number:"10D",title:"Clínica: Sequência",mode:"sequence",short:"Modele Agendar Consulta com verificação de disponibilidade e alt.",tags:["Clínica","alt","Persistência"]},
  {id:"l05-10e",list:"Lista 05",number:"10E",title:"Integração dos artefatos",mode:"quiz",short:"Assinale a finalidade de RN, RF, UC e diagramas.",tags:["Síntese","Assinalar"]}
];
const KEY = "aps-lista05-lab-v1";
let saved = {};
try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (_) { saved = {}; }
let currentId = "7";
let activeList = "Lista 05";
const $ = (id) => document.getElementById(id);
const safe = (value) => String(value).replace(/[&<>"']/g, (s) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]);
const cfg = () => EXERCISES.find((e) => e.id === currentId);
const model = () => ({case:CASE_EXERCISES,diagram:DIAGRAM_EXERCISES,sequence:SEQUENCE_EXERCISES,classify:CLASSIFY_EXERCISES,quiz:QUIZ_EXERCISES})[cfg().mode][currentId];
function state() {
  if (!saved[currentId]) saved[currentId] = { placements: {}, activeSection: "", nodes: [], links: [], people: [], messages: [], choices: {} };
  saved[currentId].choices ||= {};
  return saved[currentId];
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (_) {} }
function eraseFeedback() { $("feedback").innerHTML = ""; save(); }
function button(text, attrs = "") { return `<button type="button" ${attrs}>${text}</button>`; }
function nav() {
  const active = EXERCISES.filter(e => e.list === activeList);
  $("exercise-list").innerHTML = active.map((e) => `<button class="exercise-item ${e.id === currentId ? "active" : ""}" type="button" data-ex="${e.id}"><span class="exercise-number">${e.number}</span><span class="exercise-label">${safe(e.title)}</span></button>`).join("");
  document.querySelectorAll("[data-ex]").forEach(b => b.onclick = () => { currentId = b.dataset.ex; render(); });
  document.querySelectorAll("[data-list]").forEach(b => {
    b.classList.toggle("active", b.dataset.list === activeList);
    b.setAttribute("aria-pressed", String(b.dataset.list === activeList));
    b.onclick = () => { activeList = b.dataset.list; currentId = EXERCISES.find(e => e.list === activeList).id; render(); };
  });
}
function render() {
  const e = cfg();
  activeList = e.list;
  $("exercise-id").textContent = `EXERCÍCIO ${e.number} · ${e.list.toUpperCase()}`;
  $("exercise-title").textContent = e.title;
  $("exercise-description").textContent = e.short;
  $("exercise-tags").innerHTML = e.tags.map(tag => `<span class="tag">${safe(tag)}</span>`).join("");
  $("workspace-title").textContent = ({diagram:"Construa o diagrama",sequence:"Construa o cenário e as mensagens",case:"Monte a especificação",classify:"Classifique os blocos",quiz:"Assinale a alternativa correta"})[e.mode];
  $("feedback").innerHTML = "";
  nav();
  if (e.mode === "case") renderCase();
  else if (e.mode === "diagram") renderDiagram();
  else if (e.mode === "sequence") renderSequence();
  else if (e.mode === "classify") renderClassify();
  else if (e.mode === "quiz") renderQuiz();
}

function showFeedback(points, total, problems, reference, fill) {
  const serious = problems.some((e) => e.kind !== "note");
  points = Math.max(0, Math.min(total, points));
  const percent = Math.round(100 * points / total);
  $("feedback").innerHTML = `
    <div class="feedback-summary"><div><span class="panel-eyebrow">CORREÇÃO DIDÁTICA</span>
      <h3>${serious ? "Pontos que precisam de revisão" : "Elementos essenciais identificados"}</h3></div>
      <div class="feedback-score">${points}/${total} <span style="font-size:13px;color:#7a8ca6">(${percent}%)</span></div></div>
    ${serious ? "" : '<div class="feedback-line good">✓ A construção atende aos critérios principais do exemplo de referência.</div>'}
    ${problems.slice(0, 38).map((problem) => `<div class="feedback-line ${problem.kind}">${problem.kind === "bad" ? "✕" : "!"} ${safe(problem.text)}</div>`).join("")}
    ${problems.length > 38 ? `<p class="palette-help">Há outras ${problems.length - 38} observações. Corrija as primeiras e verifique outra vez.</p>` : ""}
    <div class="reference-example"><h4>Explicação e solução de referência</h4><p>${safe(reference)}</p>
      <p style="color:#7b8ba1">Esta é uma proposta de correção didática, não o gabarito oficial (não anexado à lista). Modelagens semanticamente equivalentes podem ser válidas, mesmo quando diferem do exemplo.</p>
      <button class="btn btn-outline btn-small" id="fill" type="button">Mostrar exemplo no editor</button></div>`;
  $("fill").onclick = () => {
    if (confirm("Substituir sua construção pelo exemplo de referência?") === false) return;
    fill();
    $("feedback").innerHTML = '<div class="feedback-line good">O exemplo foi colocado no editor. Agora você pode examiná-lo ou recomeçar.</div>';
  };
  $("feedback").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ---------------------- CLASSIFICAÇÃO POR BLOCOS ----------------------
function classificationCards() {
  return model().cards.map(([id,text,section,why]) => ({id,text,section,why}));
}
function renderClassify() {
  const c = model(), s = state(), items = classificationCards();
  s.activeSection ||= c.sections[0].id;
  const placed = new Set(Object.values(s.placements).flat());
  $("workspace-layout").innerHTML = `<aside class="palette"><h3>Cartões para classificar</h3><p class="palette-help">Escolha uma categoria e toque no cartão, ou arraste-o para a categoria desejada.</p>
  ${items.map(it=>`<button class="palette-card ${placed.has(it.id)?'added':''}" data-cpick="${it.id}" draggable="true" type="button" ${placed.has(it.id)?'disabled':''}><span class="card-type">Classificação</span>${safe(it.text)}</button>`).join('')}</aside>
  <div class="board-zone"><div class="board-help"><span class="hint">${placed.size}/${items.length} cartões posicionados</span><span class="hint">Categorias selecionáveis</span></div>
  <div class="case-sections">${c.sections.map(sec=>`<div class="case-section ${s.activeSection===sec.id?'active':''}" data-csec="${sec.id}"><div class="section-heading"><strong>${safe(sec.name)}</strong><span class="section-count">${(s.placements[sec.id]||[]).length}</span></div>
   ${(s.placements[sec.id]||[]).map(id=>`<div class="case-block"><span>${safe(items.find(x=>x.id===id).text)}</span><button class="mini-btn" type="button" data-cremove="${id}" aria-label="Remover cartão">×</button></div>`).join('')}
   ${!(s.placements[sec.id]||[]).length?'<div class="section-empty">Clique nesta categoria e escolha um cartão.</div>':''}</div>`).join('')}</div></div>`;
  document.querySelectorAll('[data-cpick]').forEach(b=>{
    b.onclick=()=>putClassify(b.dataset.cpick,s.activeSection);
    b.ondragstart=e=>e.dataTransfer.setData('text/plain','class:'+b.dataset.cpick);
  });
  document.querySelectorAll('[data-csec]').forEach(el=>{
    el.onclick=e=>{if(e.target.closest('button'))return;s.activeSection=el.dataset.csec;save();renderClassify();};
    el.ondragover=e=>e.preventDefault();
    el.ondrop=e=>{e.preventDefault();const val=e.dataTransfer.getData('text/plain');if(val.startsWith('class:'))putClassify(val.slice(6),el.dataset.csec);};
  });
  document.querySelectorAll('[data-cremove]').forEach(b=>b.onclick=()=>{
    Object.keys(s.placements).forEach(k=>s.placements[k]=s.placements[k].filter(id=>id!==b.dataset.cremove));
    eraseFeedback();renderClassify();
  });
}
function putClassify(id,section){
  const s=state(),c=model();if(!c.cards.some(a=>a[0]===id)||!c.sections.some(x=>x.id===section))return;
  Object.keys(s.placements).forEach(k=>s.placements[k]=s.placements[k].filter(x=>x!==id));
  s.placements[section] ||= [];s.placements[section].push(id);s.activeSection=section;eraseFeedback();renderClassify();
}
function checkClassify(){
  const c=model(),s=state(),errors=[];let points=0;
  for(const [id,text,section,why] of c.cards){
    const target=Object.entries(s.placements).find(([k,arr])=>arr.includes(id))?.[0];
    if(target===section){points++;continue;}
    errors.push({kind:'bad',text:`${!target?'Bloco ainda não classificado':`Bloco classificado em ${c.sections.find(x=>x.id===target)?.name||target}`}: “${text}”. Categoria de referência: ${c.sections.find(x=>x.id===section).name}. ${why}`});
  }
  showFeedback(points,c.cards.length,errors,c.reference,()=>{
    s.placements={};for(const [id,text,section] of c.cards){s.placements[section]||=[];s.placements[section].push(id);}save();renderClassify();
  });
}
// ---------------------- QUESTÕES DE ASSINALAR ----------------------
function renderQuiz(){
  const c=model(),s=state();
  $("workspace-layout").innerHTML=`<div class="quiz-board"><p class="palette-help">Marque uma alternativa por pergunta. Você pode responder fora de ordem e conferir tudo ao final.</p>
  ${c.questions.map((it,i)=>`<fieldset class="quiz-question"><legend><span class="quiz-number">${i+1}</span> ${safe(it.q)}</legend>
  ${it.options.map((o,j)=>`<label class="quiz-option"><input type="radio" name="q${i}" value="${j}" data-choice="${i}" ${s.choices[i]===String(j)?'checked':''}><span><b>${String.fromCharCode(65+j)}.</b> ${safe(o)}</span></label>`).join('')}</fieldset>`).join('')}</div>`;
  document.querySelectorAll('[data-choice]').forEach(el=>el.onchange=()=>{s.choices[el.dataset.choice]=el.value;eraseFeedback();});
}
function checkQuiz(){
  const c=model(),s=state(),errors=[];let points=0;
  c.questions.forEach((it,i)=>{
    const choice=s.choices[i];if(Number(choice)===it.answer){points++;return;}
    errors.push({kind:'bad',text:`Questão ${i+1}: ${choice===undefined?'sem resposta':`você assinalou ${String.fromCharCode(65+Number(choice))}`}. Referência: ${String.fromCharCode(65+it.answer)} — ${it.options[it.answer]}. ${it.why}`});
  });
  showFeedback(points,c.questions.length,errors,c.reference,()=>{
    s.choices=Object.fromEntries(c.questions.map((it,i)=>[i,String(it.answer)]));save();renderQuiz();
  });
}

// ---------------------- CASOS DE USO ----------------------
function renderCase() {
  const c = model(), s = state();
  s.activeSection ||= c.sections[0].id;
  const placed = new Set(Object.values(s.placements).flat());
  $("workspace-layout").innerHTML = `<aside class="palette"><h3>Blocos disponíveis</h3>
    <p class="palette-help">Toque para adicionar à seção selecionada ou arraste para uma seção. Alguns blocos são enganosos.</p>
    ${c.cards.map((item) => `<button class="palette-card ${placed.has(item.id) ? "added" : ""}" type="button" draggable="true" data-pick="${item.id}" ${placed.has(item.id) ? "disabled" : ""}><span class="card-type">Bloco da análise</span>${safe(item.text)}</button>`).join("")}</aside>
    <div class="board-zone"><div class="board-help"><span class="hint">Selecione uma seção</span><span class="hint">Toque ou arraste blocos</span><span class="hint">↑/↓ para ordenar</span></div>
    <div class="case-sections">${c.sections.map((section) => {
      const cards = s.placements[section.id] || [];
      return `<div class="case-section ${s.activeSection === section.id ? "active" : ""}" data-section="${section.id}">
        <div class="section-heading"><strong>${safe(section.name)}</strong><span class="section-count">${cards.length} bloco(s)</span></div>
        ${cards.map((id, index) => `<div class="case-block" draggable="true" data-moving-card="${id}"><span>${safe(c.cards.find((v) => v.id === id).text)}</span>
          <span class="case-block-actions"><button class="mini-btn" data-up="${section.id}:${index}:-1" title="Subir">↑</button><button class="mini-btn" data-up="${section.id}:${index}:1" title="Descer">↓</button><button class="mini-btn" data-remove="${id}" title="Remover">×</button></span></div>`).join("")}
        ${cards.length ? "" : '<div class="section-empty">Arraste aqui ou selecione esta seção e toque em um bloco.</div>'}</div>`;
    }).join("")}</div></div>`;
  document.querySelectorAll("[data-pick]").forEach((b) => {
    b.onclick = () => putCase(b.dataset.pick, s.activeSection);
    b.ondragstart = (event) => event.dataTransfer.setData("text/plain", `case:${b.dataset.pick}`);
  });
  document.querySelectorAll("[data-moving-card]").forEach((el) => el.ondragstart = (event) => event.dataTransfer.setData("text/plain", `case:${el.dataset.movingCard}`));
  document.querySelectorAll("[data-section]").forEach((el) => {
    el.onclick = (event) => {
      if (event.target.closest("button")) return;
      s.activeSection = el.dataset.section;
      document.querySelectorAll("[data-section]").forEach((section) => section.classList.toggle("active", section.dataset.section === s.activeSection));
      save();
    };
    el.ondragover = (event) => event.preventDefault();
    el.ondrop = (event) => {
      event.preventDefault();
      const text = event.dataTransfer.getData("text/plain");
      if (text.startsWith("case:")) putCase(text.slice(5), el.dataset.section);
    };
  });
  document.querySelectorAll("[data-remove]").forEach((b) => b.onclick = () => {
    Object.keys(s.placements).forEach((key) => s.placements[key] = s.placements[key].filter((id) => id !== b.dataset.remove));
    eraseFeedback(); renderCase();
  });
  document.querySelectorAll("[data-up]").forEach((b) => b.onclick = () => {
    const [sec, iText, deltaText] = b.dataset.up.split(":");
    const i = Number(iText), j = i + Number(deltaText), arr = s.placements[sec];
    if (j < 0 || j >= arr.length) return;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    eraseFeedback(); renderCase();
  });
}
function putCase(id, section) {
  const s = state(), c = model();
  if (!c.cards.some((item) => item.id === id) || !c.sections.some((item) => item.id === section)) return;
  Object.keys(s.placements).forEach((key) => s.placements[key] = s.placements[key].filter((v) => v !== id));
  s.placements[section] ||= [];
  s.placements[section].push(id);
  s.activeSection = section;
  eraseFeedback(); renderCase();
}
function checkCase() {
  const c = model(), s = state(), problems = [];
  const placed = new Map();
  Object.entries(s.placements).forEach(([section, ids]) => ids.forEach((id) => placed.set(id, section)));
  let points = 0;
  c.cards.forEach((card) => {
    const location = placed.get(card.id);
    if (card.section === location) { points++; return; }
    if (card.section === null && !location) { points++; return; }
    if (card.section === null) problems.push({ kind: "bad", text: `Bloco enganoso incluído: "${card.text}". ${card.why}` });
    else if (!location) problems.push({ kind: "bad", text: `Falta: "${card.text}". ${card.why}` });
    else problems.push({ kind: "bad", text: `Bloco na seção incorreta: "${card.text}". Deveria estar em: ${c.sections.find((s) => s.id === card.section).name}. ${card.why}` });
  });
  if (c.order) {
    const steps = s.placements.fluxo || [];
    // No hotel a verificação de datas e a consulta de disponibilidade
    // podem ocorrer em ordens diferentes. Validamos dependências, não
    // um único fluxo linear arbitrário.
    const dependencies = currentId === "6"
      ? [["h04", "h05"], ["h04", "h06"], ["h05", "h08"], ["h06", "h07"], ["h07", "h08"]]
      : c.order.slice(0, -1).map((id, i) => [id, c.order[i + 1]]);
    for (const [a, b] of dependencies) {
      if (steps.includes(a) && steps.includes(b) && steps.indexOf(a) > steps.indexOf(b)) {
        problems.push({ kind: "bad", text: `Ordem do fluxo: "${c.cards.find((v) => v.id === a).text}" deve vir antes de "${c.cards.find((v) => v.id === b).text}" neste exemplo.` });
        points = Math.max(0, points - 1);
      }
    }
  }
  showFeedback(points, c.cards.length, problems, c.reference, () => {
    s.placements = {};
    c.cards.filter((card) => card.section).forEach((card) => {
      s.placements[card.section] ||= [];
      s.placements[card.section].push(card.id);
    });
    save(); renderCase();
  });
}

// ---------------------- DIAGRAMA DE CASOS DE USO ----------------------
function diagramFind(id) {
  const c = model();
  let item = c.actors.find((v) => v.id === id);
  if (item) return { ...item, kind: "actor" };
  item = c.cases.find((v) => v.id === id);
  return item ? { ...item, kind: "case" } : null;
}
const actorImage = `<svg width="34" height="62" viewBox="0 0 50 83" aria-hidden="true"><circle cx="25" cy="13" r="9" stroke="#456894" stroke-width="3" fill="#fff"/><path d="M25 23 V54 M8 37 L42 37 M25 54 L10 77 M25 54 L40 77" stroke="#456894" stroke-width="3" stroke-linecap="round" fill="none"/></svg>`;
function renderDiagram() {
  const c = model(), s = state();
  const pal = (entry, kind) => `<button type="button" draggable="true" data-dpick="${entry.id}" class="palette-card ${s.nodes.some((v) => v.id === entry.id) ? "added" : ""}" ${s.nodes.some((v) => v.id === entry.id) ? "disabled" : ""}><span class="card-type">${kind}</span>${safe(entry.name)}</button>`;
  $("workspace-layout").innerHTML = `<aside class="palette"><h3>Blocos UML</h3><p class="palette-help">Arraste para a área de desenho ou toque para adicionar. O botão Conectar permite criar associações.</p>
    <div class="palette-split-title">ATORES</div>${c.actors.map((v) => pal(v, "Ator")).join("")}
    <div class="palette-split-title">CASOS DE USO</div>${c.cases.map((v) => pal(v, "Funcionalidade")).join("")}</aside>
    <div class="board-zone"><div class="board-help"><button id="connect" type="button" class="btn btn-outline ${s.connectMode?"connect-active":""}">↗ Conectar: ${s.connectMode?"ativo":"desativado"}</button><span class="hint">Toque no ator → toque no caso</span><span class="hint">Arraste para posicionar</span></div>
    <div class="diagram-scroller"><div class="diagram-stage" id="diagram-stage"><div class="system-boundary"><div class="system-label">${safe(c.system)}</div></div>
    <svg class="connection-svg" id="wires" width="985" height="605" viewBox="0 0 985 605"></svg>
    ${s.nodes.map((node) => {
      const n = diagramFind(node.id);
      return `<div class="canvas-node ${n.kind}" tabindex="0" style="left:${node.x}px;top:${node.y}px" data-node="${n.id}">${n.kind === "actor" ? actorImage : ""}<span>${safe(n.name)}</span></div>`;
    }).join("")}</div></div><div class="inline-links" id="link-list"></div></div>`;
  document.querySelectorAll("[data-dpick]").forEach((b) => {
    b.onclick = () => addDiagram(b.dataset.dpick);
    b.ondragstart = (event) => event.dataTransfer.setData("text/plain", `node:${b.dataset.dpick}`);
  });
  const stage = $("diagram-stage");
  stage.classList.toggle("linking",!!s.connectMode);
  stage.ondragover = (event) => event.preventDefault();
  stage.ondrop = (event) => {
    event.preventDefault();
    const payload = event.dataTransfer.getData("text/plain");
    if (!payload.startsWith("node:")) return;
    const bounds = stage.getBoundingClientRect();
    addDiagram(payload.slice(5), event.clientX - bounds.left - 75, event.clientY - bounds.top - 35);
  };
  $("connect").onclick = () => {
    const on = !stage.classList.contains("linking");
    s.connectMode = on; save();
    stage.classList.toggle("linking", on);
    stage.dataset.selected = "";
    $("connect").textContent = on ? "↗ Conectar: ativo" : "↗ Conectar: desativado";
    $("connect").classList.toggle("connect-active", on);
    stage.querySelectorAll(".canvas-node").forEach((v) => v.classList.remove("selected"));
  };
  stage.querySelectorAll("[data-node]").forEach((node) => bindDragNode(node, stage));
  drawWires();
}
function addDiagram(id, x, y) {
  const s = state(), n = diagramFind(id);
  if (!n || s.nodes.some((v) => v.id === id)) return;
  const count = s.nodes.filter((v) => diagramFind(v.id).kind === n.kind).length;
  s.nodes.push({ id,
    x: Math.max(0, Math.min(985 - (n.kind === "actor" ? 148 : 168), x ?? (n.kind === "actor" ? 12 : 285 + Math.floor(count / 5) * 200))),
    y: Math.max(0, Math.min(605 - (n.kind === "actor" ? 103 : 65), y ?? (65 + (count % 5) * (n.kind === "actor" ? 125 : 94))))
  });
  eraseFeedback(); renderDiagram();
}
function bindDragNode(el, stage) {
  el.onpointerdown = (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    const s = state(), data = s.nodes.find((v) => v.id === el.dataset.node), n = diagramFind(data.id);
    const startX = event.clientX, startY = event.clientY, x = data.x, y = data.y;
    let moved = false;
    el.setPointerCapture(event.pointerId);
    function onmove(e) {
      const dx = e.clientX - startX, dy = e.clientY - startY;
      if (Math.abs(dx) + Math.abs(dy) > 5) moved = true;
      if (!moved) return;
      data.x = Math.max(0, Math.min(985 - (n.kind === "actor" ? 148 : 168), x + dx));
      data.y = Math.max(0, Math.min(605 - (n.kind === "actor" ? 103 : 65), y + dy));
      el.style.left = data.x + "px";
      el.style.top = data.y + "px";
      el.classList.add("moving");
      drawWires();
    }
    function onup() {
      el.removeEventListener("pointermove", onmove);
      el.classList.remove("moving");
      save();
      if (moved) eraseFeedback();
      else if (stage.classList.contains("linking")) linkDiagram(data.id, stage);
    }
    el.addEventListener("pointermove", onmove);
    el.addEventListener("pointerup", onup, { once: true });
    el.addEventListener("pointercancel", onup, { once: true });
  };
  el.onkeydown = (event) => {
    if (["Enter", " "].includes(event.key) && stage.classList.contains("linking")) {
      event.preventDefault(); linkDiagram(el.dataset.node, stage);
    }
  };
}
function linkDiagram(id, stage) {
  const s = state(), first = stage.dataset.selected;
  if (!first) {
    stage.dataset.selected = id;
    stage.querySelectorAll("[data-node]").forEach((v) => v.classList.toggle("selected", v.dataset.node === id));
    return;
  }
  stage.dataset.selected = "";
  stage.querySelectorAll("[data-node]").forEach((v) => v.classList.remove("selected"));
  if (first === id) return;
  const left = diagramFind(first), right = diagramFind(id);
  if (left.kind === right.kind) {
    $("feedback").innerHTML = '<div class="feedback-line note">Nesta atividade, crie associações entre um ator e um caso de uso. Não foram solicitadas relações entre dois casos de uso.</div>';
    return;
  }
  const actor = left.kind === "actor" ? first : id;
  const usecase = left.kind === "case" ? first : id;
  if (!s.links.some((link) => link[0] === actor && link[1] === usecase)) s.links.push([actor, usecase]);
  eraseFeedback(); renderDiagram();
}
function drawWires() {
  const s = state();
  const layer = $("wires");
  if (!layer) return;
  layer.innerHTML = s.links.map(([a, b]) => {
    const actor = s.nodes.find((v) => v.id === a), usecase = s.nodes.find((v) => v.id === b);
    if (!actor || !usecase) return "";
    return `<line x1="${actor.x + 74}" y1="${actor.y + 51}" x2="${usecase.x + 84}" y2="${usecase.y + 33}" stroke="#5c81b3" stroke-width="2"/>`;
  }).join("");
  $("link-list").innerHTML = `<span class="hint">${s.links.length} associação(ões)</span>` + s.links.map(([a, b]) => `<span class="link-pill">${safe(diagramFind(a).name)} → ${safe(diagramFind(b).name)} <button data-unlink="${a}|${b}" title="Remover">×</button></span>`).join("") +
    (s.nodes.length ? '<button class="btn btn-subtle btn-small" id="remove-last">Remover último bloco</button>' : "");
  document.querySelectorAll("[data-unlink]").forEach((b) => b.onclick = () => {
    const [a, c] = b.dataset.unlink.split("|");
    s.links = s.links.filter((pair) => pair[0] !== a || pair[1] !== c);
    eraseFeedback(); drawWires();
  });
  $("remove-last")?.addEventListener("click", () => {
    const removed = s.nodes.pop();
    s.links = s.links.filter((link) => !link.includes(removed.id));
    eraseFeedback(); renderDiagram();
  });
}
function checkDiagram() {
  const c = model(), s = state(), problems = [], required = [...c.actors, ...c.cases];
  let points = 0;
  required.forEach((item) => {
    if (s.nodes.some((v) => v.id === item.id)) points++;
    else problems.push({ kind: "bad", text: `Elemento ausente: ${item.name}. O cenário inclui este papel ou objetivo.` });
  });
  c.edges.forEach(([a, b]) => {
    if (s.links.some((pair) => pair[0] === a && pair[1] === b)) points++;
    else problems.push({ kind: "bad", text: `Associação ausente: ${diagramFind(a).name} → ${diagramFind(b).name}. Verifique quem executa essa funcionalidade.` });
  });
  s.links.forEach(([a, b]) => {
    if (![...c.edges, ...(c.optionalEdges || [])].some((pair) => pair[0] === a && pair[1] === b)) {
      problems.push({ kind: "bad", text: `Associação não sustentada no cenário: ${diagramFind(a).name} → ${diagramFind(b).name}.` });
      points = Math.max(0, points - 1);
    }
  });
  s.nodes.forEach((node) => {
    const n = diagramFind(node.id);
    if (n.kind === "actor" && node.x + 140 > 195 && node.x < 960 && node.y + 85 > 35 && node.y < 580) {
      problems.push({kind:"bad", text:`O ator ${n.name} deve ser colocado fora da fronteira do sistema.`});
      points=Math.max(0,points-1);
    }
    if (n.kind === "case" && (node.x < 195 || node.x + 168 > 960 || node.y < 35 || node.y + 65 > 580)) {
      problems.push({kind:"bad", text:`O Caso de Uso ${n.name} deve ficar dentro da fronteira.`});
      points=Math.max(0,points-1);
    }
  });
  showFeedback(points, required.length + c.edges.length, problems, c.reference, () => {
    s.nodes = [
      ...c.actors.map((entry, i) => ({ id: entry.id, x: i>=4 ? 824 : 12, y: 60 + (i%4) * 124 })),
      ...c.cases.map((entry, i) => ({ id: entry.id, x: i>=4?610:285, y: 75 + (i%4)*113 }))
    ];
    s.links = c.edges.map((pair) => [...pair]);
    save(); renderDiagram();
  });
}

// ---------------------- DIAGRAMA DE SEQUÊNCIA ----------------------
// As respostas de operação usam linhas tracejadas, conforme a notação UML.
// Nem toda mensagem no sentido inverso é um retorno: a classificação depende
// da intenção da interação. Os IDs abaixo são específicos da referência didática.
const RETURN_MESSAGE_IDS = {
  "l04-18":new Set(["r7","r8","r13"]),
  "l04-19":new Set(["ra5","ra6","ra10"]),
  "l04-20":new Set([]),
  "l04-23":new Set(["p23e","p23h"]),
  "8": new Set(["p5", "p6", "p7"]),
  "9": new Set(["s4", "s7", "s8", "s10"]),
  "10-sequencia": new Set(["a5", "a6", "a9", "a10", "a11"])
};
function isReturnMessage(id) {
  return RETURN_MESSAGE_IDS[currentId]?.has(id) ?? false;
}
function actionOf(id) {
  const a = model().actions.find((row) => row[0] === id);
  return a ? { id: a[0], label: a[1], from: a[2], to: a[3], guard: a[4] || "comum" } : null;
}
function renderSequence() {
  const c = model(), s = state();
  const used = new Set(s.messages.map((item) => item.id));
  const participants = s.people.length ? s.people : c.participants;
  const selectHtml = (value) => '<option value="">Escolha...</option>' + participants.map((name) => `<option value="${safe(name)}" ${name === value ? "selected" : ""}>${safe(name)}</option>`).join("");
  $("workspace-layout").innerHTML = `<aside class="palette"><h3>Linhas de vida</h3>
    <p class="palette-help">Toque para adicionar os participantes. Use ← e → para reorganizá-los.</p>
    ${c.participants.map((name) => `<button type="button" class="palette-card ${s.people.includes(name) ? "added" : ""}" draggable="true" data-person="${safe(name)}" ${s.people.includes(name) ? "disabled" : ""}><span class="card-type">Participante</span>${safe(name)}</button>`).join("")}
    <div class="palette-split-title">MENSAGENS</div><p class="palette-help">Arraste para a lista ou toque para adicionar. Complete emissor, destinatário e condição.</p>
    ${c.actions.map((data) => { const a = actionOf(data[0]); return `<button class="palette-card ${used.has(a.id) ? "added" : ""}" type="button" draggable="true" data-message="${a.id}" ${used.has(a.id) ? "disabled" : ""}><span class="card-type">Operação</span>${safe(a.label)}</button>`; }).join("")}</aside>
    <div class="board-zone"><div class="board-help"><span class="hint">Adicione participantes</span><span class="hint">Escolha mensagens e ordene</span><span class="hint">Defina setas e alt</span></div>
    <h3 style="font-size:13px;margin:4px 0 6px">Participantes do cenário</h3>
    <div class="participants-row" id="participant-strip">${s.people.map((name, i) => `<div class="participant-tile" draggable="true" data-ptile="${safe(name)}">${safe(name)}<div class="participant-actions"><button type="button" data-move-person="${i}:-1">←</button><button type="button" data-move-person="${i}:1">→</button><button type="button" data-drop-person="${safe(name)}">×</button></div></div>`).join("")}
    ${s.people.length ? "" : '<div class="step-empty" style="width:100%">Escolha participantes na lista lateral.</div>'}</div>
    <h3 style="font-size:13px;margin:15px 0 7px">Diagrama gerado automaticamente</h3>
    <div class="message-legend" aria-label="Legenda dos tipos de mensagem UML">
      <span><svg width="48" height="16" viewBox="0 0 48 16" aria-hidden="true"><path d="M2 8 H45 M39 3 L45 8 L39 13" fill="none" stroke="currentColor" stroke-width="1.5"/></svg> Chamada</span>
      <span><svg width="48" height="16" viewBox="0 0 48 16" aria-hidden="true"><path d="M2 8 H45 M39 3 L45 8 L39 13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/></svg> Retorno</span>
    </div>
    <div class="sequence-preview" id="sequence-preview"></div>
    <h3 style="font-size:13px;margin:17px 0 8px">Ordem das mensagens</h3>
    <ol class="step-list" id="step-list">${s.messages.map((message, i) => `<li class="step-row" draggable="true" data-step="${i}">
      <span class="step-number">${i + 1}.</span><span class="step-action">${safe(actionOf(message.id).label)}</span>
      <select data-field="${i}:from" aria-label="Emissor">${selectHtml(message.from)}</select>
      <select data-field="${i}:to" aria-label="Destinatário">${selectHtml(message.to)}</select>
      <select data-field="${i}:guard" aria-label="Condição"><option value="comum" ${message.guard === "comum" ? "selected" : ""}>Fora do ${c.fragmentLabel||"alt"}</option>
      ${(c.branches || []).map((guard) => `<option value="${safe(guard)}" ${message.guard === guard ? "selected" : ""}>[${safe(guard)}]</option>`).join("")}</select>
      <select data-field="${i}:kind" aria-label="Tipo de mensagem"><option value="call" ${(message.kind || "call")==="call"?"selected":""}>Chamada —</option><option value="return" ${message.kind==="return"?"selected":""}>Retorno - -</option></select>
      <span class="step-controls"><button data-move-step="${i}:-1" title="Subir" type="button">↑</button><button data-move-step="${i}:1" title="Descer" type="button">↓</button><button data-drop-step="${i}" title="Remover" type="button">×</button></span></li>`).join("")}
      ${s.messages.length ? "" : '<li class="step-empty">Arraste uma mensagem para cá ou clique nela na lista lateral.</li>'}</ol>
    <p class="palette-help">Reorganize por arraste ou use ↑/↓. Escolha os participantes de cada seta. Use alt para condições alternativas e loop para repetição (conforme o exercício).</p></div>`;
  document.querySelectorAll("[data-person]").forEach((b) => {
    b.onclick = () => addPerson(b.dataset.person);
    b.ondragstart = (event) => event.dataTransfer.setData("text/plain", `person:${b.dataset.person}`);
  });
  document.querySelectorAll("[data-ptile]").forEach((el) => el.ondragstart = (event) => event.dataTransfer.setData("text/plain", `move-person:${el.dataset.ptile}`));
  $("participant-strip").ondragover = (event) => event.preventDefault();
  $("participant-strip").ondrop = (event) => {
    event.preventDefault();
    const payload = event.dataTransfer.getData("text/plain");
    if (payload.startsWith("person:")) addPerson(payload.slice(7));
    if (payload.startsWith("move-person:")) {
      const name = payload.slice(12), target = event.target.closest("[data-ptile]")?.dataset.ptile;
      if (!target || name === target) return;
      const from = s.people.indexOf(name), to = s.people.indexOf(target);
      if (from < 0 || to < 0) return;
      s.people.splice(from, 1); s.people.splice(to, 0, name);
      eraseFeedback(); renderSequence();
    }
  };
  document.querySelectorAll("[data-move-person]").forEach((b) => b.onclick = () => {
    const [i, delta] = b.dataset.movePerson.split(":").map(Number), j = i + delta;
    if (j < 0 || j >= s.people.length) return;
    [s.people[i], s.people[j]] = [s.people[j], s.people[i]];
    eraseFeedback(); renderSequence();
  });
  document.querySelectorAll("[data-drop-person]").forEach((b) => b.onclick = () => {
    s.people = s.people.filter((name) => name !== b.dataset.dropPerson);
    eraseFeedback(); renderSequence();
  });
  document.querySelectorAll("[data-message]").forEach((b) => {
    b.onclick = () => addMessage(b.dataset.message);
    b.ondragstart = (event) => event.dataTransfer.setData("text/plain", `message:${b.dataset.message}`);
  });
  document.querySelectorAll("[data-step]").forEach((el) => el.ondragstart = (event) => {
    if (event.target.tagName === "SELECT") return event.preventDefault();
    event.dataTransfer.setData("text/plain", `move-step:${el.dataset.step}`);
  });
  $("step-list").ondragover = (event) => event.preventDefault();
  $("step-list").ondrop = (event) => {
    event.preventDefault();
    const text = event.dataTransfer.getData("text/plain");
    const target = event.target.closest("[data-step]")?.dataset.step;
    if (text.startsWith("message:")) addMessage(text.slice(8), target === undefined ? undefined : Number(target));
    if (text.startsWith("move-step:")) {
      const from = Number(text.slice(10));
      if (target === undefined || from === Number(target)) return;
      const [item] = s.messages.splice(from, 1);
      s.messages.splice(Number(target), 0, item);
      eraseFeedback(); renderSequence();
    }
  };
  document.querySelectorAll("[data-move-step]").forEach((b) => b.onclick = () => {
    const [i, delta] = b.dataset.moveStep.split(":").map(Number), j = i + delta;
    if (j < 0 || j >= s.messages.length) return;
    [s.messages[i], s.messages[j]] = [s.messages[j], s.messages[i]];
    eraseFeedback(); renderSequence();
  });
  document.querySelectorAll("[data-drop-step]").forEach((b) => b.onclick = () => {
    s.messages.splice(Number(b.dataset.dropStep), 1);
    eraseFeedback(); renderSequence();
  });
  document.querySelectorAll("[data-field]").forEach((field) => field.onchange = () => {
    const [i, key] = field.dataset.field.split(":");
    s.messages[Number(i)][key] = field.value;
    eraseFeedback(); drawSequence();
  });
  drawSequence();
}
function addPerson(name) {
  const s = state();
  if (!model().participants.includes(name) || s.people.includes(name)) return;
  s.people.push(name); eraseFeedback(); renderSequence();
}
function addMessage(id, position) {
  const s = state();
  if (!actionOf(id) || s.messages.some((item) => item.id === id)) return;
  const message = { id, from: "", to: "", guard: "comum", kind: "call" };
  if (position === undefined) s.messages.push(message);
  else s.messages.splice(position, 0, message);
  eraseFeedback(); renderSequence();
}
function drawSequence() {
  const s = state(), c = model();
  const width = Math.max(940, 190 * s.people.length + 60), stepHeight = 57;
  const height = Math.max(230, 140 + s.messages.length * stepHeight + 50);
  const x = Object.fromEntries(s.people.map((name, i) => [name, 65 + (i + .5) * (width - 130) / s.people.length]));
  let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Diagrama de sequência de mensagens" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrow" markerWidth="9" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L7 4 L0 8" fill="none" stroke="#5077ad" stroke-width="1.2"/></marker></defs><rect width="100%" height="100%" fill="#fff"/>`;
  s.people.forEach((name) => {
    svg += `<rect x="${x[name] - 78}" y="17" width="156" height="39" fill="#eaf1fe" stroke="#9eb5d9" rx="6"/>
      <text x="${x[name]}" y="41" text-anchor="middle" fill="#28415e" font-size="11" font-weight="700">${safe(name)}</text>
      <line x1="${x[name]}" x2="${x[name]}" y1="56" y2="${height - 20}" stroke="#9baecb" stroke-dasharray="6 5"/>`;
  });
  const indexes = s.messages.flatMap((m, i) => m.guard !== "comum" ? [i] : []);
  if (c.branches && indexes.length) {
    const top = 93 + indexes[0] * stepHeight, bottom = 100 + (indexes.at(-1) + 1) * stepHeight;
    svg += `<rect x="10" y="${top}" width="${width - 20}" height="${bottom - top}" stroke="#ab926b" fill="#fff7e8" fill-opacity=".25" rx="5"/>
      <rect x="10" y="${top}" width="80" height="20" fill="#fff0d6" stroke="#ab926b"/>
      <text x="23" y="${top + 14}" font-size="12" font-weight="800" fill="#845d30">${safe(c.fragmentLabel||"alt")}</text>`;
    let prior = s.messages[indexes[0]].guard;
    indexes.forEach((index) => {
      const current = s.messages[index].guard;
      if (current !== prior) svg += `<line x1="10" y1="${100 + index * stepHeight}" x2="${width - 10}" y2="${100 + index * stepHeight}" stroke="#bd9963" stroke-dasharray="7 5"/>`;
      prior = current;
    });
  }
  s.messages.forEach((message, i) => {
    const { label } = actionOf(message.id);
    const returnDash = (message.kind || (isReturnMessage(message.id) ? "return" : "call")) === "return" ? ' stroke-dasharray="7 5"' : '';
    const src = x[message.from], dst = x[message.to], y = 140 + i * stepHeight;
    const labelText = (message.guard !== "comum" ? `[${message.guard}] ` : "") + label;
    if (!src || !dst) {
      svg += `<text x="18" y="${y}" font-size="12" fill="#b34d44">${i + 1}. ${safe(label)} — indique emissor e destinatário</text>`;
    } else if (src === dst) {
      svg += `<path d="M${src} ${y} h42 v22 h-42" fill="none" stroke="#5077ad" stroke-width="2"${returnDash} marker-end="url(#arrow)"/>
        <text x="${src + 47}" y="${y - 8}" fill="#314d72" font-size="11">${safe(labelText)}</text>`;
    } else {
      svg += `<line x1="${src}" y1="${y}" x2="${dst + (dst > src ? -8 : 8)}" y2="${y}" stroke="#5077ad" stroke-width="2"${returnDash} marker-end="url(#arrow)"/>
        <text x="${(src + dst) / 2}" y="${y - 9}" fill="#314d72" text-anchor="middle" font-size="11" font-weight="600">${safe(labelText)}</text>`;
    }
  });
  if (!s.people.length) svg += '<text x="470" y="110" text-anchor="middle" fill="#9aa9bb" font-size="13">Adicione os participantes para visualizar o cenário.</text>';
  $("sequence-preview").innerHTML = svg + "</svg>";
}
function checkSequence() {
  const c = model(), s = state(), errors = [];
  let points = 0;
  c.participants.forEach((name) => {
    if (s.people.includes(name)) points++;
    else errors.push({ kind: "bad", text: `Falta a linha de vida de ${name}. Considere seu papel no cenário.` });
  });
  c.actions.forEach((record) => {
    const a = actionOf(record[0]), item = s.messages.find((msg) => msg.id === a.id);
    if (!item) {
      errors.push({ kind: "bad", text: `Falta a mensagem ${a.label}. A resposta de referência inclui ${a.from} → ${a.to}.` });
      return;
    }
    points++;
    if (item.from === a.from) points++;
    else errors.push({ kind: "bad", text: `Emissor de ${a.label}: esperado ${a.from}. Pense em quem inicia ou retorna esta operação.` });
    if (item.to === a.to) points++;
    else errors.push({ kind: "bad", text: `Destinatário de ${a.label}: esperado ${a.to}. Lembre-se das responsabilidades de Tela, Controller, Service e Repository.` });
    if ((item.kind || "call") !== (isReturnMessage(a.id) ? "return" : "call")) {
      errors.push({kind:"bad",text:`Tipo da mensagem ${a.label}: escolha ${isReturnMessage(a.id)?"Retorno (tracejada)":"Chamada (contínua)"}. Uma seta apontando para a esquerda não é necessariamente retorno.`});
      points = Math.max(0, points - 1);
    }
    if (item.guard !== a.guard) {
      errors.push({ kind: "bad", text: `Condição de ${a.label}: ${a.guard === "comum" ? "mensagem compartilhada, antes do alt" : `somente no ramo [${a.guard}]`}.` });
      points = Math.max(0, points - 1);
    }
  });
  const indices = Object.fromEntries(s.messages.map((item, i) => [item.id, i]));
  for (const group of ["comum", ...(c.branches || [])]) {
    const ordered = c.actions.map((record) => actionOf(record[0])).filter((item) => item.guard === group);
    for (let i = 0; i < ordered.length - 1; i++) {
      if (indices[ordered[i].id] !== undefined && indices[ordered[i + 1].id] !== undefined && indices[ordered[i].id] > indices[ordered[i + 1].id]) {
        errors.push({ kind: "bad", text: `Ordem incorreta: ${ordered[i].label} deve preceder ${ordered[i + 1].label} no caminho [${group}].` });
        points = Math.max(0, points - 1);
      }
    }
  }
  if (c.branches) {
    const common = s.messages.map((msg, i) => msg.guard === "comum" ? i : -1).filter((v) => v >= 0);
    const alt = s.messages.map((msg, i) => msg.guard !== "comum" ? i : -1).filter((v) => v >= 0);
    if (common.length && alt.length && common.at(-1) > alt[0]) {
      errors.push({ kind: "bad", text: "Neste exercício, as mensagens comuns devem anteceder o fragmento." });
      points = Math.max(0, points - 1);
    }
    c.branches.forEach((branch) => {
      const list = s.messages.map((msg, i) => msg.guard === branch ? i : -1).filter((v) => v >= 0);
      if (list.length && list.at(-1) - list[0] + 1 !== list.length) {
        errors.push({ kind: "bad", text: `As mensagens sob [${branch}] estão intercaladas com as de outro ramo. Mantenha os blocos agrupados.` });
        points = Math.max(0, points - 1);
      }
    });
  }
  showFeedback(points, c.participants.length + c.actions.length * 3, errors, c.reference, () => {
    s.people = [...c.participants];
    s.messages = c.actions.map((record) => ({ id: record[0], from: record[2], to: record[3], guard: record[4] || "comum", kind:isReturnMessage(record[0])?"return":"call" }));
    save(); renderSequence();
  });
}

$("check-button").onclick = () => {
  if (cfg().mode === "case") checkCase();
  else if (cfg().mode === "diagram") checkDiagram();
  else if (cfg().mode === "sequence") checkSequence();
  else if (cfg().mode === "classify") checkClassify();
  else checkQuiz();
};
$("reset-button").onclick = () => {
  if (!confirm("Apagar sua resposta deste exercício e recomeçar?")) return;
  delete saved[currentId]; save(); render();
};
render();

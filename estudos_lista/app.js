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

const EXERCISES = [
  { id: "5", number: "05", title: "Validar Caso de Uso", mode: "case", short: "Diagnostique os problemas na especificação incompleta de Fazer Reserva.", tags: ["Caso de Uso", "Ambiguidade", "Checklist"] },
  { id: "6", number: "06", title: "Especificar Caso de Uso", mode: "case", short: "Hotel: construa UC01 — Registrar Reserva a partir das regras RN01, RN02 e RN03.", tags: ["Hotel", "Fluxos", "Regras"] },
  { id: "7", number: "07", title: "Diagrama de Casos de Uso", mode: "diagram", short: "Restaurante: posicione atores, casos de uso e desenhe as associações.", tags: ["Restaurante", "Atores", "Associações"] },
  { id: "8", number: "08", title: "Diagrama de Sequência", mode: "sequence", short: "Consultar Produto: coloque as mensagens na ordem certa e defina seus participantes.", tags: ["Produto", "Controller", "Repository"] },
  { id: "9", number: "09", title: "Sequência com fragmento alt", mode: "sequence", short: "Realizar Saque: represente os ramos [saldo suficiente] e [saldo insuficiente].", tags: ["Saque", "alt", "Condições"] },
  { id: "10-uc", number: "10B", title: "Clínica: Caso de Uso", mode: "case", short: "Especifique Agendar Consulta usando o cenário da clínica.", tags: ["Clínica", "Caso de Uso", "Regras"] },
  { id: "10-diagrama", number: "10C", title: "Clínica: Casos de Uso", mode: "diagram", short: "Organize os atores e funcionalidades de uma clínica.", tags: ["Clínica", "Atores", "Associações"] },
  { id: "10-sequencia", number: "10D", title: "Clínica: Sequência", mode: "sequence", short: "Modele Agendar Consulta com verificação de disponibilidade e alt.", tags: ["Clínica", "alt", "Persistência"] }
];

const KEY = "aps-lista05-lab-v1";
let saved = {};
try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (_) { saved = {}; }
let currentId = "7";
const $ = (id) => document.getElementById(id);
const safe = (value) => String(value).replace(/[&<>"']/g, (s) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]);
const cfg = () => EXERCISES.find((e) => e.id === currentId);
const model = () => cfg().mode === "case" ? CASE_EXERCISES[currentId] : cfg().mode === "diagram" ? DIAGRAM_EXERCISES[currentId] : SEQUENCE_EXERCISES[currentId];
function state() {
  if (!saved[currentId]) saved[currentId] = { placements: {}, activeSection: "", nodes: [], links: [], people: [], messages: [] };
  return saved[currentId];
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (_) {} }
function eraseFeedback() { $("feedback").innerHTML = ""; save(); }
function button(text, attrs = "") { return `<button type="button" ${attrs}>${text}</button>`; }
function nav() {
  $("exercise-list").innerHTML = EXERCISES.map((e) => `<button class="exercise-item ${e.id === currentId ? "active" : ""}" type="button" data-ex="${e.id}"><span class="exercise-number">${e.number}</span><span class="exercise-label">${safe(e.title)}</span></button>`).join("");
  $("exercise-list").querySelectorAll("[data-ex]").forEach((b) => b.onclick = () => { currentId = b.dataset.ex; render(); });
}
function render() {
  const e = cfg();
  $("exercise-id").textContent = `EXERCÍCIO ${e.number} · LISTA 05`;
  $("exercise-title").textContent = e.title;
  $("exercise-description").textContent = e.short;
  $("exercise-tags").innerHTML = e.tags.map((tag) => `<span class="tag">${safe(tag)}</span>`).join("");
  $("workspace-title").textContent = e.mode === "diagram" ? "Construa o diagrama" : e.mode === "sequence" ? "Construa o cenário e as mensagens" : "Monte a especificação";
  $("feedback").innerHTML = "";
  nav();
  if (e.mode === "case") renderCase();
  if (e.mode === "diagram") renderDiagram();
  if (e.mode === "sequence") renderSequence();
}
function showFeedback(points, total, problems, reference, fill) {
  const serious = problems.some((e) => e.kind !== "note");
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
    <div class="board-zone"><div class="board-help"><button id="connect" type="button" class="btn btn-outline">↗ Conectar: desativado</button><span class="hint">Toque no ator → toque no caso</span><span class="hint">Arraste para posicionar</span></div>
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
    if (n.kind === "actor" && node.x >= 195 && node.x < 800 && node.y >= 35 && node.y < 475) problems.push({ kind: "note", text: `O ator ${n.name} normalmente deve ficar fora da fronteira do sistema.` });
    if (n.kind === "case" && (node.x < 195 || node.x > 792 || node.y < 35 || node.y > 515)) problems.push({ kind: "note", text: `O Caso de Uso ${n.name} deve ficar dentro da fronteira.` });
  });
  showFeedback(points, required.length + c.edges.length, problems, c.reference, () => {
    s.nodes = [
      ...c.actors.map((entry, i) => ({ id: entry.id, x: 12, y: 60 + i * 124 })),
      ...c.cases.map((entry, i) => ({ id: entry.id, x: 260 + (i >= 3 ? 325 : 0), y: 75 + (i % 3) * 154 }))
    ];
    s.links = c.edges.map((pair) => [...pair]);
    save(); renderDiagram();
  });
}

// ---------------------- DIAGRAMA DE SEQUÊNCIA ----------------------
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
    <h3 style="font-size:13px;margin:15px 0 7px">Diagrama gerado automaticamente</h3><div class="sequence-preview" id="sequence-preview"></div>
    <h3 style="font-size:13px;margin:17px 0 8px">Ordem das mensagens</h3>
    <ol class="step-list" id="step-list">${s.messages.map((message, i) => `<li class="step-row" draggable="true" data-step="${i}">
      <span class="step-number">${i + 1}.</span><span class="step-action">${safe(actionOf(message.id).label)}</span>
      <select data-field="${i}:from" aria-label="Emissor">${selectHtml(message.from)}</select>
      <select data-field="${i}:to" aria-label="Destinatário">${selectHtml(message.to)}</select>
      <select data-field="${i}:guard" aria-label="Condição"><option value="comum" ${message.guard === "comum" ? "selected" : ""}>Fora do alt</option>
      ${(c.branches || []).map((guard) => `<option value="${safe(guard)}" ${message.guard === guard ? "selected" : ""}>[${safe(guard)}]</option>`).join("")}</select>
      <span class="step-controls"><button data-move-step="${i}:-1" title="Subir" type="button">↑</button><button data-move-step="${i}:1" title="Descer" type="button">↓</button><button data-drop-step="${i}" title="Remover" type="button">×</button></span></li>`).join("")}
      ${s.messages.length ? "" : '<li class="step-empty">Arraste uma mensagem para cá ou clique nela na lista lateral.</li>'}</ol>
    <p class="palette-help">Reorganize por arraste ou use ↑/↓. Escolha os participantes de cada seta. As condições do alt aparecem nos exercícios 9 e 10D.</p></div>`;
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
  const message = { id, from: "", to: "", guard: "comum" };
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
      <text x="23" y="${top + 14}" font-size="12" font-weight="800" fill="#845d30">alt</text>`;
    let prior = s.messages[indexes[0]].guard;
    indexes.forEach((index) => {
      const current = s.messages[index].guard;
      if (current !== prior) svg += `<line x1="10" y1="${100 + index * stepHeight}" x2="${width - 10}" y2="${100 + index * stepHeight}" stroke="#bd9963" stroke-dasharray="7 5"/>`;
      prior = current;
    });
  }
  s.messages.forEach((message, i) => {
    const { label } = actionOf(message.id);
    const src = x[message.from], dst = x[message.to], y = 140 + i * stepHeight;
    const labelText = (message.guard !== "comum" ? `[${message.guard}] ` : "") + label;
    if (!src || !dst) {
      svg += `<text x="18" y="${y}" font-size="12" fill="#b34d44">${i + 1}. ${safe(label)} — indique emissor e destinatário</text>`;
    } else if (src === dst) {
      svg += `<path d="M${src} ${y} h42 v22 h-42" fill="none" stroke="#5077ad" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="${src + 47}" y="${y - 8}" fill="#314d72" font-size="11">${safe(labelText)}</text>`;
    } else {
      svg += `<line x1="${src}" y1="${y}" x2="${dst + (dst > src ? -8 : 8)}" y2="${y}" stroke="#5077ad" stroke-width="2" marker-end="url(#arrow)"/>
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
      errors.push({ kind: "bad", text: "As mensagens compartilhadas devem preceder as mensagens dentro do fragmento alt." });
      points = Math.max(0, points - 1);
    }
    c.branches.forEach((branch) => {
      const list = s.messages.map((msg, i) => msg.guard === branch ? i : -1).filter((v) => v >= 0);
      if (list.length && list.at(-1) - list[0] + 1 !== list.length) {
        errors.push({ kind: "bad", text: `As mensagens sob [${branch}] estão intercaladas com as de outro ramo. Mantenha cada operando do alt agrupado.` });
        points = Math.max(0, points - 1);
      }
    });
  }
  showFeedback(points, c.participants.length + c.actions.length * 3, errors, c.reference, () => {
    s.people = [...c.participants];
    s.messages = c.actions.map((record) => ({ id: record[0], from: record[2], to: record[3], guard: record[4] || "comum" }));
    save(); renderSequence();
  });
}

$("check-button").onclick = () => {
  if (cfg().mode === "case") checkCase();
  else if (cfg().mode === "diagram") checkDiagram();
  else checkSequence();
};
$("reset-button").onclick = () => {
  if (!confirm("Apagar sua resposta deste exercício e recomeçar?")) return;
  delete saved[currentId]; save(); render();
};
render();

# Laboratório APS — 3 Listas (versão 2)

Aplicação web estática, offline e sem dependências externas, voltada à prática visual de Análise e Projeto de Software.

## Fontes usadas

- `ATIVIDADE03_analise_projeto.md` — Lista 03, exercícios de RN/RF/RNF, UCs, atores, checklist e rastreabilidade.
- `ATIVIDADE04_DIAGRAMA_SEQUENCIA.MD` — Lista 04, exercícios 16–24 (partes de sequência, alternativas, repetição e responsabilidades).
- `atividade05_revisao_master_class.md` — Lista 05, exercícios 1–10 (partes modeláveis visualmente).

**Atenção:** esses materiais não fornecem gabarito oficial completo. A ferramenta usa **modelos de referência didáticos**, com esclarecimentos para pontos que dependem de escolhas de projeto. Se uma modelagem diferente satisfizer as regras, pode estar correta mesmo que o verificador mostre divergência com o exemplo.

## Funcionalidades

- 31 atividades: 10 da Lista 03; 8 da Lista 04; 13 da Lista 05.
- Classificação de cartões por categorias (clique ou arraste).
- Questões de assinalar, com explicação na correção.
- Construção guiada de especificações de Caso de Uso.
- Diagramas de Casos de Uso com atores, elipses, associações e fronteira.
- Diagramas de Sequência com ordenação de mensagens, emissor, destinatário, chamada/retorno e guardas.
- Fragmentos `alt` e `loop` desenhados quando adequados ao exercício.
- Avisos de elementos ausentes, relações indevidas, mensagens trocadas, tipos de seta, ordem, condições e posicionamento.
- Exemplo no editor depois de solicitar a correção.
- Salva automaticamente respostas em `localStorage` do navegador quando disponível.

## Abrir

Opção A: abrir `laboratorio_aps_3_listas.html` diretamente no navegador — HTML com CSS e JavaScript internos, sem instalar nada.

Opção B: extrair o ZIP, manter `index.html`, `style.css` e `app.js` juntos, e abrir `index.html`.

Para publicar com GitHub Pages, copie os três arquivos da opção B para o diretório servido pelo Pages (renomear a pasta ou ajustar a URL conforme o repositório). O `index.html` deve permanecer junto dos arquivos CSS/JS.

## Limitações

- Avaliação automática por referência, **não validação universal de UML**. A notação e a modelagem podem admitir outras soluções corretas.
- Nomes de classes como Tela*, *Controller, *Service e *Repository são propostos onde o enunciado não fornece nomes obrigatórios.
- A Lista 04 trata de uma clínica com paciente operando o sistema e a Lista 05 de uma clínica cujo atendente registra consultas; esses exercícios são mantidos separados.
- Algumas perguntas discursivas que dependem do projeto real do grupo não foram digitalizadas integralmente, pois não existe resposta única conferível sem o projeto.

## Testes executados

- Verificação de sintaxe do JavaScript.
- 31 modelos de referência: pontuação máxima na correção lógica.
- Testes negativos nas cinco modalidades de correção.
- Testes de interface no Chromium via conteúdo local em memória, para os diferentes formatos.

## Licença/uso

Material didático adaptado dos enunciados fornecidos para prática pessoal. Não é um gabarito do professor.

# Laboratório APS — Lista 05

Ferramenta didática offline construída em HTML, CSS e JavaScript.

## Como usar

1. Abra `index.html` em um navegador atualizado (Chrome ou Edge recomendado no computador).
2. Escolha o exercício na barra lateral.
3. Toque nos cartões ou arraste os blocos para montar a resposta.
4. Em Diagramas de Casos de Uso, ative **Conectar** e selecione um ator e um Caso de Uso.
5. Em Diagramas de Sequência, acrescente as mensagens, ajuste sua ordem, selecione emissor e destinatário e, quando aplicável, a condição do fragmento `alt`.
6. Clique em **Verificar resposta** para obter correção, pontuação e comentários.
7. O botão **Mostrar exemplo no editor** fica disponível após uma verificação, para comparar uma solução de referência.

## Exercícios contemplados

- **5:** identificar problemas em uma especificação vaga de Caso de Uso.
- **6:** compor um Caso de Uso de hotel com objetivo, ator, pré/pós-condições, fluxos e regras.
- **7:** construir o Diagrama de Casos de Uso do restaurante.
- **8:** construir o Diagrama de Sequência de consulta de produto.
- **9:** construir o Diagrama de Sequência de saque bancário com `alt`.
- **10B, 10C e 10D:** especificar o Caso de Uso e construir os diagramas da clínica.

Os exercícios 1 a 4 e 10A/10E (parte conceitual/regras/requisitos) não estão automatizados nesta primeira versão.

## Sobre o gabarito

O arquivo `atividade05_revisao_master_class.md` não fornece gabarito explícito. As respostas de referência foram elaboradas a partir dos enunciados e dos materiais de aula, e servem como **correção didática**, não como gabarito oficial.

É possível obter um modelo UML ou especificação diferente e ainda correto. O verificador procura os elementos e relações previstos nos exemplos incluídos no programa; por isso, soluções equivalentes mas estruturalmente diferentes podem ser marcadas como divergentes. A ordem entre validação de datas e consulta de disponibilidade no Caso de Uso de hotel é flexível, desde que ambas antecedam o registro da reserva.

O Exercício 5, que não define o tipo de reserva, mostra uma reescrita **hipotética** para reserva de quarto apenas como ilustração.

## Tecnologia e privacidade

- Sem servidor, sem dependências externas, sem contas.
- O progresso é armazenado somente no `localStorage` do navegador/dispositivo utilizado, quando permitido.
- Blocos arrastáveis no computador; tocar para adicionar e usar os botões de movimentação no celular.

## Estrutura

- `index.html`: interface.
- `style.css`: apresentação responsiva.
- `app.js`: exercícios, interações, desenho SVG, validação e explicações.

Para o arquivo que funciona sozinho, use `laboratorio_aps_lista05.html` fornecido separadamente.

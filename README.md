# Poker Evaluator Hexagonal

Seja bem-vindo! Esse  repositório contém o projeto de teste para a vaga de Desenvolvedor Back-end. Se trata e uma API que recebe uma mão de poker,
retornando a jogada realizada com tal mão.

## Sobre o projeto

É uma API contruida utilizando Node.js, com o framework Express para o roteamento web. Além disso, o projeto utiliza de uma arquitetura hexagonal,
permitindo a modularidade entre frameworks e até mesmo avaliadores da mão de poker, dependendo da variante de poker a ser jogado. O avaliador presente
neste projeto é para o clássico Texas Hold'em, verificando as 10 mãos possíveis dentro dessa modalidade. Ademais, a API utiliza de Docker Compose para
garantir uma inicialização mais eficaz e padronizada, além de contar com testes unitários e de integração, com validações para os valores e naipes das
cartas, assim como a quantidade delas presente na mão informada.

## Requisitos

- **Docker compose**: Obrigatório para utilizar a api;
- **Make**: Opcional, visto que gera alias para executar os comandos do projeto, mas não é necessário para o funcionamento do mesmo.

## Execução

Clonar repositório:
```bash
git clone git@github.com:Denjiwe/poker-evaluator-hexagonal.git
```
Navegar até o projeto:
```bash
cd poker-evaluator-hexagonal
```

#### Usando Make

Para iniciar o projeto:
```bash
make start
```

Para realizar testes:
```bash
make test
```

*lembrando que para executar os testes, o container do docker deve estar em execução*

Para parar execução do projeto:
```bash
make stop
```

### Usando sintaxe Docker

Para iniciar o projeto:
```bash
docker-compose -f .docker/docker-compose.yml up -d
```

Para realizar testes:
```bash
docker exec -it poker-evaluator npm run test
```

Para parar execução do projeto:
```bash
docker-compose -f .docker/docker-compose.yml down
```

## Logs do validator

Os logs da execução do validator, usando 100k de requisições pode ser encontrado em `validator-log.txt`, segue abaixo as principais informações presentes nesse log:

Completed all 100000 tests in 9.176751191s
Average: 10897.10 requests/second

=== VALIDATION RESULTS ===

Known Test Cases: <br>
✅ Test 0: [cards] -> Royal Flush (Expected: Royal Flush) <br>
✅ Test 1: [cards] -> Straight Flush (Expected: Straight Flush) <br>
✅ Test 2: [cards] -> Four of a Kind (Expected: Four of a Kind) <br>
✅ Test 3: [cards] -> Full House (Expected: Full House) <br>
✅ Test 4: [cards] -> Flush (Expected: Flush) <br>
✅ Test 5: [cards] -> Straight (Expected: Straight) <br>
✅ Test 6: [cards] -> Three of a Kind (Expected: Three of a Kind) <br>
✅ Test 7: [cards] -> Two Pair (Expected: Two Pair) <br>
✅ Test 8: [cards] -> Pair (Expected: Pair) <br>
✅ Test 9: [cards] -> High Card (Expected: High Card) <br>

=== SUMMARY === 
Known test cases: 10 passed, 0 failed <br>
Total requests: 100000 <br>
Successful: 100000 (100.00%) <br>
Failed: 0 (0.00%) <br>

=== HAND DISTRIBUTION (Random Tests) ===
High Card: 50376 (50.38%) <br>
Pair: 41950 (41.95%) <br>
Two Pair: 4896 (4.90%) <br>
Three of a Kind: 2055 (2.06%) <br>
Straight: 346 (0.35%) <br>
Flush: 177 (0.18%) <br>
Full House: 165 (0.17%) <br>
Four of a Kind: 24 (0.02%) <br>
Straight Flush: 0 (0.00%) <br>
Royal Flush: 1 (0.00%) <br>

✅ All known test cases passed! API is working correctly.
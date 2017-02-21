#Bolt
Sugestão de "kickoff" para camada frontend de novos microservices.

##Missão
- Aumentar a produtividade dos desenvolvedores frontend
- Simplificar a inserção de novos pacotes
- Gerar uma distribution simples, que pode ser usada em qualquer ambiente
- Diminuir a quantidade de requests necessários para a aplicação rodar
- Migrar para um task runner mais performático
- Simplificar ao máximo o início do desenvolvimento de interfaces
para novos projetos
- IDE's free

##Instalação
- Clonar repositório

```
git clone git@github.com:DomPhysis/bolt.git
```

- Instalando dependências

```npm install```

Ao finalizar, ele roda também o comando ```bower install``` para dependências do browser

- Erguer server de desenvolvimento

```npm run server```

##Build desenvolvimento ( não minificada )
- Gerar www

```npm run compile```

##Build Liberação ( minificada )
- Gerar distribution

```npm run build```

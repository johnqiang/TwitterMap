<<<<<<< HEAD
# Twitter Map

- Twitter API
- Elastic Search

## Quickstart

- Download [ElasticSearch](https://www.elastic.co/downloads/elasticsearch) [1]

- Install [Marvel](https://www.elastic.co/downloads/marvel) (optional)

- Start elasticsearch
```bash
$ bin/elasticsearch
```

- start marvel (optional)
```bash
$ bin/kibana
```

- Start server
```bash
$ npm start
```

- Test Searching Query with url localhost:3000/TwitterAPI/search

- Test ElasticSearch with http://localhost:3000/documents/suggest/hit ('hit' is the keyword you want to search)

## Reference:
1. [ElasticSearchDemo](https://blog.raananweber.com/2015/11/24/simple-autocomplete-with-elasticsearch-and-node-js/)

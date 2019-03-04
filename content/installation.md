---
path: /documentation/installation
title: Installation
section: 1. Running a GeneNoteBook server
order: 1
---

Bioconda
```
conda install -c bioconda genenotebook
```

<br/>

Docker

```
docker pull genenotebook/genenotebook
```

<br/>

Build from source (this requires node.js)
```
git clone https://github.com/genenotebook/genenotebook
cd genenotebook
npm install && npm run bundle
```

---
section: 2. Adding data
path: /documentation/adding-genome
title: Genome sequence
order: 1
---
```
genenotebook add genome [options] <genome fasta file>
```

Open a connection to a running GeneNoteBook daemon and add a DNA fasta formatted genome sequence

<br/>

_Genome options_
- `-n, --name <genome name>` Reference genome name. Default: fasta file name

<br/>

_Connection options_
- `--port <port>` Port on which the GeneNoteBook daemon is serving

<br/>

_Security options_

Only admin accounts are allowed to connect to a running daemon and add data

- `-u, --username <username>` Admin username
- `-p, --password <password>` Admin password
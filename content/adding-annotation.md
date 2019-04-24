---
section: 2. Adding data
path: /documentation/adding-annotation
title: Genome annotation
order: 2
---
```
genenotebook add annotation [options] <annotation GFF3 file>
```

<br/>

Open a connection to a running GeneNoteBook daemon and add a GFF formatted genome annotation to a previously loaded reference genome

<br/>

_Genome options_
- `-n, --name <genome name>` Reference genome name. Genome must be loaded into the database first using `genenotebook add genome`

<br/>

_Connection options_
- `--port <port>` Port on which the GeneNoteBook daemon is serving

<br/>

_Security options_

Only admin accounts are allowed to connect to a running daemon and add data

- `-u, --username <username>` Admin username
- `-p, --password <password>` Admin password
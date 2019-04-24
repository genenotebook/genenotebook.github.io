---
section: 2. Adding data
path: /documentation/adding-testdata
title: GeneNoteBook test data
order: 5
---

To quickly test GeneNoteBook functionality, the GeneNoteBook repository contains a small test dataset  of 100 genes from _Medicago truncatula_, along with predicted protein domains and quantified gene expression from several publicly available transcriptomes.

<br/>

__Download testdata__
```
wget https://github.com/genenotebook/genenotebook/raw/master/testdata.tgz &&\
tar xvxzf testdata.tgz
```

<br/>

__Load test data into running GeneNoteBook daemon__

_Run the following commands from the testdata folder_

<br/>

Add reference genome
```
genenotebook add genome -u admin -p admin -n test testdata.fasta
```
<br/>

Add gene annotations
```
genenotebook add annotation -u admin -p admin -n test testdata.gff3
```
<br/>

Add InterProScan protein domain predictions
```
genenotebook add interproscan -u admin -p admin testdata.iprscan.gff3 
```
<br/>

Add transcriptomes
```
find . -name "*abundance.tsv" |\
xargs -n 1 -P 1 -I % sh -c "genenotebook add transcriptome -u admin -p admin %"
```


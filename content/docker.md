---
path: /documentation/docker
title: Docker
section: 1. Running a GeneNoteBook server
order: 3
---

 ```
 docker run -p 3000:3000 genenotebook/genenotebook
 ```

<br/>

 This runs a GeneNoteBook server in a Docker container, and publishes the container's port 3000 to port 3000 on the host. In order to publish to a different host port, change the second port number. (The format is `-p <container port>:<host port>`)

 <br />

 Loading data is the same as when running a GeneNoteBook server directly.
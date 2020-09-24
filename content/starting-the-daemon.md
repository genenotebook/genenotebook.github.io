---
path: /documentation/starting-the-daemon
title: Starting the GeneNoteBook daemon
section: 1. Running a GeneNoteBook server
order: 2
---

```
genenotebook run [options]
```

<br/>

Use `genenotebook run` to run with default options. Alternatively, specify one or more of the following options:

<br/>

_Connection options_
- `--port <port>` Port on which GeneNoteBook will be served
- `-r, --root-url <url>` Root URL on which GeneNoteBook will be accessed. Default: `http://localhost`. Example: The root url for the public example server is `http://www.bioinformatics.nl/genenotebook`.

<br/>

_Database options_

There are two mutually exclusive options to connect to MongoDB. If neither is specified, GeneNoteBook starts a MongoDB daemon and stores datafiles in `./data/db`.

<br/>

- `-d, --db-path <path>` GeneNoteBook starts a MongoDB daemon and looks for datafiles in `<path>`
- `-m, --mongo-url <url>` GeneNoteBook attempts to connect to a running MongoDB daemon at `<url>`. Example: `mongodb://localhost:27017`

<br/>

_Performance options_

When working with large (eukaryotic) genomes, increase the memory available to genenotebook by using an environment variable: `NODE_OPTIONS="--max-old-space-size=8192"`

_User accounts_

Two default user accounts are created on first startup, `admin` and `guest`. You can customize this by creating a `settings.json` file in your working directory.

The default `settings.json` looks like that:


```
{
    "accounts": [
        {
            "username": "admin",
            "email": "admin@admin.com",
            "password": "admin",
            "profile": {
                "first_name": "admin",
                "last_name": "admin"
            },
            "role": "admin"
        },
        {
            "username": "guest",
            "email": "guest@guest.com",
            "password": "guest",
            "profile": {
                "first_name": "guest",
                "last_name": "guest"
            },
            "role": "registered"
        }
    ]
}
```

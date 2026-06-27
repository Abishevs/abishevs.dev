+++
title       = '{{ replace .File.ContentBaseName "-" " " | title }}'
date        = {{ .Date }}
draft       = true
description = ""
keywords    = []

# Classification — see data/projects/statuses.toml and data/projects/domains.toml
status      = "prototype"
projectType = [""]

# Thumbnail image path (relative to /static/)
thumbnail   = ""

# Links — omit or leave empty to hide
sourceCodeUrl = ""
demoUrl       = ""
liveUrl       = ""
reportUrl     = ""
journalUrl    = ""

# Set to true to make the project card link directly to sourceCodeUrl
linkToSource = false
+++

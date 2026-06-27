+++
draft = true
date = 2025-10-16T23:40:09+02:00

title = "chipledger.app"
description = "A simple ledger that tracks buy-ins, manages balances, and calculates who owes whom. Built for the person who runs the game."
keywords = []

status = "deployed"
projectType = ["web-app"]
thumbnail = ""

demoUrl = ""
liveUrl = "https://chipledger.app"
reportUrl = ""
journalUrl = ""

sourceCodeUrl = ""
linkToSource = false  # the card becomes a button to sourceCodeUrl
+++

# Background
Dealing with accounting stuff for home poker games (microstakes especially) is a
tedious process and you also have to get it correct! And because it is microstakes it is not always
neccery to deal-out cashouts directly, it could roll-over for the
next poker session.

That's where the idea to build an app that would take care of most accounting emerged.

## Disclaimer
The project started off as a random evening playing around with Lovable.dev some of the first UIs emerged and I was like: Darn it should I build real backend and frontend for this?

TL;DR This is heavily vibe coded project both FE and BE mostly because this was a side project, I did not have that much time and I got obbsossed so I had to finnish it to feel normal again.

Later I thought shit this is a real product and could be used by many other friend poker groups. Then I thought why not pivot into tenant based architecture to be able to allow multiple groups playing at the same time.

# Overview
ChipLedger is a multitenant, multiuser per tenant web application. Tenant is a
group of friends who lend out a spot on the platform, within each group there
can be multiple users logged in with different roles (One Owner, multiple Admins
and Player roles). Each tenant is a isolated entitity.

It also supports multiple subscription tiers to gain access to more advanced features but also to help support the project.

# Features

* Automatic settlement generation

# How It Works
comming sooon

# Challenges
comming sooon

# Current Status
Currently in production without Stripe integration. Users cannot buy higher tiers.

# Lessons Learned
This one will be a long list, currently is being currated but takes time.

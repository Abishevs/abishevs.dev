# Theme Design Rules

Project pages should automatically detect:

- status
- projectType
- sourceCodeUrl # This is used as fallback on projects/ page incase there doesn't exist  a deticated projects/<name> page with addional info,Card is clickable and takes you to the sourceCodeUrl instead of projects/<name> internall page.
- journalUrl

and render appropriate badges and links.

Examples:

status = "active"

renders:

[ ACTIVE ]

status = "prototype"

renders:

[ PROTOTYPE ]

## Project Journals

Project journal pages contain:

# Notes

## Entry

## Entry

## Entry

The theme should visually distinguish each Entry section.

Possible presentation:

- timeline
- engineering logbook
- notebook entries

without changing content structure.

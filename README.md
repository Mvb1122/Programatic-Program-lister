# Programatic-Program-lister
Lists the projects that I've worked on.


# Setup

To setup the bot, create a file called "token.json" in the directory you've extracted the bot's files to.

It should hold this content:
```
{
  "token": "YOURBOTTOKENHERE"
}
```
Where YOURBOTTOKENHERE is replaced with your discord bot token.

Then, replace the files in the programs folder with your own projects.

For each project, create a JSON file, with the name of the project as the name, then with this content
```
{
  "name": "YOURPROJECTNAMEHERE",
  "purpose": "THE PURPOSE OF YOUR PROJECT",
}
```
If you add additional properties, they'll be given fields in the embed, with the name being the name of the field and the content being set to the content of the field.

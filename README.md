# Sleeptime App

A simple web application similar to [sleepyti.me](https://sleepyti.me/) but limited to suggesting "wake up" times based on calculating sleep cycles.

- A sleep cycle lasts about 90 minutes, and a good night's sleep consists of 5-6 sleep cycles.
- If you wake up in the middle of a sleep cycle, you will feel groggy even if you've completed several cycles before waking up.

The SleepTime App is made using basic HTML, CSS, and JavaScript.

== Git & Commands ==

git: version control system; staging and commit; track changes

github: post & host repositories

————

git init -b main // tell git to track changes in this folder

git log --pretty=oneline // simple version of log

git diff commit_id1 commit_id2 // look at differences of two commits

git reset --hard commit_id_previous // go back to the previous version

git add . // add & stage all

touch .gitignore // tell git to ignore system files, etc.

————

ls -al // show all folders, including the hidden ones (don’t work with hidden ones!)

rm -rf .git // remove .git

touch README.md // create README file

code -r index.html // open index.html file in vscode

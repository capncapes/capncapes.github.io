---
layout: default
title: Git Reference
permalink: /git/
---

Git is an open source version control system, allowing web developers to manage new, variant, and historical versions of their projects. Here are only a few of the common commands.

### add

Updates the index using the current content found in the working tree.

`git add -A` Stages all files in the working tree.

`git add .` Stages new and modified files in the working tree, excluding deleted files (ignores actions that remove files).

`git add -u` Stages modified and deleted files in the working tree, excluding new files (ignores actions that add files).

### branch

Lists, creates, or deletes branches.

`git branch --list` Lists existing branches, highlighting the current branch with an asterisk.

`git branch -a` Displays all local and remote branches.

`git branch -r` Displays all remote branches.

`git branch -m old-branch new-branch` Changes the name of the existing _old-branch_ to _new-branch_.

`git branch -d branch-name` Deletes _branch-name_.

### checkout

Moves from the current branch to the specified branch.

`git checkout -b new-branch-name` Creates a new branch named _new-branch-name_ and makes it the current active branch.

`git checkout branch-name` Moves onto _branch-name_.

`git checkout master` Moves onto the master branch.

`git checkout -- file.md` Discards changes made to _file.md_ since beginning work with the current directory.

### clean

Cleans the working tree by removing untracked files.

`git clean -fd` Removes untracked directories and untracked files from the current branch.

### commit

Stores the current content of the index in a new commit. A message must be added describing the commit using the syntax git commit -m "message", with the message string wrapped in quotes.

`git commit -m "message here"` Identifies a commit message to follow (in quotes).

### log

Shows the commit log for the working tree, including the commit ID and message.

### merge

Merges the specified branch with the current branch.

`git merge recent-branch` Merges _recent-branch_ with the current branch, like master.

### pull

Fetches from a remote repository and integrates changes into the current branch.

`git pull origin master` Fetches and merges changes from the origin repository into the local master branch.

### push

Pushes changes in the specified branch to the specified remote repository.

`git push origin recent-branch` Pushes the local version of _recent-branch_ to origin.

`git push origin master` Pushes the master branch to the origin remote repository and checks out the master branch.

### remote

Manages a set of tracked repositories.

`git remote add name url` Adds a remote named _name_ for the repository located at _url_.

`git remote -v` Displays a list of all configured remote urls.

### reset

Resets the current HEAD to the specified state.

`git reset --hard some-commit` Points the current branch to some-commit and exchanges the local working directory files and the index with versions of those committed in some-commit.

### status

Displays the working tree status, showing paths that have differences between the index–staging area–and the current HEAD commit, paths that have differences between the working tree and index, and paths in the working tree that are not being tracked.

### Remove all instances of a file

To remove all occurences of a specific file, use the following command. This is useful for Mac users who constantly battle the `.DS_Store` file that creeps into project directories.

`find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch`
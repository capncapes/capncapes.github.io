---
layout: post
title: "Remove .DS_Store with Git"
date: 2022-06-25 23:14:39 -0500
featured_image: {
  src: "git-remove-ds-store.webp",
  fallback: "git-remove-ds-store.png",
  title: "Remove .DS_Store with Git",
  alt: ".DS_Store file on a Mac computer",
  position: "left" }
description: "Don't worry; .DS_Store is harmless. But let's remove it and prevent it from showing up again."
category: MarTech
tags: ["web development", "Git"]
howto: {
	title: "How to remove .DS_Store files from a Git repository",
	description: "Remove existing .DS_Store files from your Git repository and prevent them from being saved in the future.",
	time: "P0DT0H2M",
	steps: [
		{
			name: "Project Root",
			text: "Make sure you are in the root of your project folder."
		},
		{
			name: "Remove .DS_Store",
			text: "Use the terminal command 'find . -name .DS_Store -print0 | xargs -0 git rm --ignore-unmatch' to find all previously committed .DS_Store files and remove them from your project."
		},
		{
			name: "Add to .gitignore",
			text: "To prevent .DS_Store from entering your project code again, add '**/.DS_Store' to your .gitignore file. If it does not exist, create the .gitignore file in the root folder of your project."
		},
		{
			name: "Commit Changes",
			text: "Commit your changes and push them to your remote repository."
		}
	]
}
featured: false
published: true
---

Every developer with a Mac computer has encountered the `.DS_Store` file in their Git code. If you don't know what it is, this file could be alarming. Don't worry; `.DS_Store` is harmless. But it can be annoying when it shows up in every folder.

## What is the `.DS_Store` file?

`.DS_Store` is a hidden metadata file exclusive to Mac computers, though you could possibly come across it on a Windows PC that is sharing project code with a Mac. The file simply contains information specific to the folder it's in: folder color, icon size, window size, file order, etc. The file is created the first time you select any View Options for a folder, but it's hidden using the `.` prefix. However, you can see it in the terminal using the `ls` command. And of course, it also shows up in Git repositories.

## How to remove `.DS_Store` files from a Git repository

To remove (and prevent) `.DS_Store` from your project code, I recommend first checking out a new branch with the following command: `git checkout -b [BRANCH-NAME]`. Then make sure you're in the root of your project folder so that your changes will affect the whole project.

### Remove `.DS_Store`

Use the following terminal command to find all previously committed `.DS_Store` files and remove them from your project. If `git rm` makes you uneasy, you can perform a dry run to check the files that would be removed, without actually removing anything. To do this, add either `-n` or `--dry-run` as a flag following `rm`, like this: `... git rm -n --ignore-unmatch`. Once you've seen what will be removed, repeat the full command without the flag to remove `.DS_Store` from your project.

{% highlight console %}
find . -name .DS_Store -print0 | xargs -0 git rm --ignore-unmatch
{% endhighlight %}

### Add to `.gitignore`

To prevent `.DS_Store` from entering your project's code again, add `**/.DS_Store` to your `.gitignore` file. If it does not exist, create the `.gitignore` file in the root of your project folder and add `**/.DS_Store` on its own line. The `**` part of the command tells Git that `.DS_Store` files should be ignored in every folder of your project.

### Commit changes

Commit your changes and push them to your remote repository. If you review the changes made in your version control host, you'll notice that the updates remove all the instances of `.DS_Store`, along with adding that line to your `.gitignore` file.
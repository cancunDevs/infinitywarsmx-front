# Git Contributing Guidelines

Follow these guidelines to contribute to a repository,  whether is a code update, commit message, branch, issue, pull request, or git tactics.

### Table of Contents
- [Branching Model](#branching-model)
- [Commit Messages](#commit-messages)
- [Pull Requests](#pull-requests)
- [Git Tactics](#git-tactics)

## Branching Model

Branches keep the code organized. Following the convention _branch-per-feature_, create a new branch whether you are developing and pushing a WIP, feature, bug fix, or an experiment.

### Branch Naming Conventions

Git branches must follow the next conventions when working or developing over them.

1. Start the branch name with a [_Grouping Token_](#grouping-tokens)
2. Add the [_Issue Tracker Number_](#issue-tracker-number) after the Grouping Token, if available
3. End the branch name with [_Description Tokens_](#description-tokens)
4. Separate branch parts by slashes (`/`)
5. Don't use numbers to start your branch name
6. Use short nouns for Grouping and Description Tokens

```
<grouping-token>/<tracker-number>/<description-tokens>
```

Examples: 

```
group1/XXXX/lead-foo
group1/YYYY/lead-baz
group2/lead-bar
group3/lead-foo
```

#### Grouping Tokens

Grouping Tokens are the ones in front of the branch name. Use one of the next defined tokens to group the branches.

* `feat`  - Feature, I'm adding or expanding
* `bug` - Bug fix, experiment or monkey patch
* `test` - Integration of tests
* `junk` - Throwaway branch for experiments
* `doc` - README and/or documentation only

#### Issue Tracker Number

Issue Tracker Number is the one after the Grouping Token, if exists. It is the issue number assigned to the feature or bug in the project's issue tracking tool.

Examples:

```
feat/RSSI-12/order-blueprints
bug/RSEM-10/sticky-navbar
test/RCMY-9/post-model-attributes
junk/RUMS-49/login-bug-test
```

#### Description Tokens

Description Tokens are the ones at the end of the branch name. These tokens must match your flow and are personalized depending of your code addition or subtraction.

Examples:

```
feat/order-blueprints
bug/sticky-navbar
test/post-model-attributes
junk/login-bug-test
```

## Commit Messages

**Avoid this**

![Not this](https://imgs.xkcd.com/comics/git_commit.png)

Commit messages must be understandable for future reference, bug tracking, or code history. 

## Pull Requests

Before making a Pull Request, check that the correct base branch is selected, it usually is `development`.
To have a more organized, documented, and easy to review Pull Requests, follow the next convention for Pull Request titles and description.

### Title

Title must be clear and up to 75 characters. It should include the [Grouping Token](#grouping-token), as the branch specifies, the [Issue Tracking Number](#issue-tracking-number), if available, and a short description of the PR.

```
<grouping-token> - <tracker-number> - <Short description>
```

If a PR is not completed, add the tag `[WIP]` at the beginning of its title.

```
[WIP] <grouping-token> - <tracker-number> - <Short description>
```

## Merging Pull Requests

To merge a Pull Request, it should have at least _two_ positive reviews and no pending change or fix requests.

It is responsibility of the PR author to ask for reviews if nobody has taken a look at the PR, but it is also responsibility of the team to be responsive to these requests.

PRs shouldn't last more than 3 days without activity, either have comments and change requests or get merged.

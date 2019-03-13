### git checkout [-b...] <branch name>
* including the -b option will create a new branch
* no option will switch to the named branch
* `git checkout -b my_cool_branch master` creates a branch based on master

## git feature branch workflow

 - enabled pull request reviews before
   merging a branch back into master

1. create a new branch
 * git checkout -b `branch name`
 * -b creates a new branch, without -b switches to branch of that name
2. when ready to be merged in
 * talk to everyone first
 * https://stackoverflow.com/questions/5601931/what-is-the-best-and-safest-way-to-merge-a-git-branch-into-master
 * git checkout master
 * git pull origin master -- (updates your local master to the remote master, aka master in repo)
 * git merge `branch name` -- (merge your branch into local master)
 * git push origin master -- (update the remote master to your local master's state)

 1. git fetch (get latest snapshot of remote branches)
 2. checkout master, git pull master
 3. master is up to date
 4. checkout feature branch
 5. merge master into feature locally
 6. resolve git conflicts locally and test
 7. push merged feature branch up to remote feature
 8. merge remote feature branch into remote master
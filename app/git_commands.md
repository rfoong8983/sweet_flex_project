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
2. add and commit
3. git checkout master
 * switch to the master branch
4. git pull origin master 
 * pull the most recent master branch to the local repository
5. git checkout `branch name`
 * switch back to the feature's branch
6. git merge master
 * merge latest master into your branch's code
7. git push origin add-address
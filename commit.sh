# LAST_WORK_DONE=$(tail -n 1 work_done.txt)

# MESSAGE="Auto commit: $(date +"%Y-%m-%d %H:%M:%S")Work done: ${LAST_WORK_DONE}"
# cd ${1}
# git add .
# git commit -m "${MESSAGE}"
# git push

LAST_WORK_DONE=$(tail -n 1 work_done.txt)

MESSAGE="Auto commit: $(date +"%Y-%m-%d %H:%M:%S") Work done: ${LAST_WORK_DONE}"
cd ${1}

# Initialize a new Git repository if not already initialized
if [ ! -d .git ]; then
    git init
fi

# Check if a remote repository is already added
if ! git remote | grep origin
then
    # Add a new remote repository
    git commit -m "first commit"
    git remote add origin https://github.com/prostodennik/BeManApp.git
    git branch -M main
fi

git add .
git commit -m "${MESSAGE}"
git push origin master
*Welcome, and thank you for contributing to this project. Please take your time to study this document carefully before making any changes to the codebase, to ensure you're on the same page with the rest of the team and we can all collaborate seamlessly.*   

# Workflow
This project uses the [Fork & Pull Model](https://help.github.com/en/articles/about-collaborative-development-models) 
for receiving contributions. Read about the Fork & Pull Model 
[here](https://help.github.com/en/articles/about-collaborative-development-models).     

## Branch Structure
### Upstream
The main / original / upstream (hereinafter upstream) repository will have only two (2) branches - master and develop. Additional hotfix branches may be created to work on critical bugs in the deployment.    
__'*develop*' - The Integration branch.__ This is where features from the different forks are brought together. Group leads, submit your pull requests here. This is the default branch. An integration team will be responsible for bringing it all together and resolving any possible merge conflicts that may arise.        
__'*master*' - The deployment branch.__ The code on this branch goes live to our hosting servers and must be kept in pristine condition. When the integration (develop) branch reaches a milestone, the deployment (master) branch is updated via pull request.       
__Hotfix branches.__ In the event that a bug slips past the integration team and makes it into deployment, a hotfix branch is created off of *master*. Prefix hotfix branch names with "hf__". On completion, this branch is merged with master, and also with *develop* so the fixes are reflected in all future deployments.

### Forks
Each fork represents work on a specific feature or task. Fork this repository to your own account and do all your work there. Do your work on the develop branch or create a new branch for yourself, then create a pull request to the `develop` branch of the main (upstream) repo. You may choose to rename your forked repo to include a description of what feature you are working on. Example: node-url-shortener__feature-name.       

### Staying Updated
When working with many people on the same codebase, sometimes others make changes that affect your work. While great care has been taken to create a modular team workflow to keep this to a minimum, merge conflicts are inevitable. It would _suck_ to finish working on a task or feature, only to find that the codebase has evolved and you need to rework everything to conform to the new changes. This is managed in two ways.       
__*First*__, make sure your work is in line with our specifications. Understand the folder structure and stick to it. Study the tasks list on Pivotal Tracker and identify any tasks that your work may depend on or that relates to yours in some way. Contact the team leads or project managers if you need any clarification. Do your due dilligence to make sure you are on the same page with everyone else. This is your responsibility. Your submission may be rejected if it's non-compliant.      
__*Second*__, each team member needs to make sure that at every given time, their working directory is up-to-date with the latest changes from the upstream *develop* branch. This is achieved with a two-fold process.       
#### Pulling Upstream
After setting up your fork on github and cloning it locally on your system, you'll need to run a command just once to create a connection between your local repository and the remote upstream repository. Note that there's automatically a remote 'origin' repository set up when you clone. This points to your fork. Now you need to set up 'upstream' which will point to the central upstream repo.

0. Open a terminal and go into the directory for the newly cloned repo. Now add the upstream remote like so:        
    <pre>git remote add upstream git://github.com/TEAM-NAME/REPO-NAME.git</pre>
PS: *You may get an error saying the `upstream` remote has already been configured. If so, then you are good to go.*   

Now you're all set up.      
__*The following steps must be run periodically to keep your work up-to-date! You can run these commands as often as every hour. You want to fetch any new changes as soon as possible. Each time you want to begin working, or take a break from your work, run these first.*__     
Be sure to [stash](https://dev.to/neshaz/how-to-git-stash-your-work-the-correct-way-cna) 
or commit all local changes first. 

1. Switch to the develop branch        
    <pre>git checkout develop</pre>     
2. Get all remote upstream changes into your local computer.        
    <pre>git fetch upstream</pre>     
3. Merge changes fetched with your local develop branch. ('develop' must be the currently checked-out branch)       
    <pre>git merge upstream/develop</pre>    
4. Push the newly merged changes to your fork's remote (online) repo. This is configured as 'origin' by default.    
    <pre>git push origin develop</pre>      

If you've created a new branch to work on rather than working directly on `develop`, then run the next steps.

5. Switch to your feature branch.        
    <pre>git checkout your-feature-branch</pre>        
6. Merge the changes on the newly merged develop branch, into your feature branch.        
    <pre>git merge develop</pre>
    *You may encounter merge conflicts here.
    [Resolve them](https://help.github.com/en/articles/resolving-a-merge-conflict-using-the-command-line),
    then come back and complete the merge. If you merge often enough, any conflicts would be trivial and very few.*

7. Finally, push your newly merged feature branch to the remote github server for backup.
    <pre>git push origin your-feature-branch</pre>   

## Code Structrure
If you go through the repo, there is a code structure and sample implementation of the login feature. This is to demonstrate how all implementations should be carried out. Study all the files in every folder, and pay special attention to the ones in the helpers folder as they are important for successful task delivery.

### FOLDER STRUCTURE
**Config** – This folder keeps the constant.js file this file is reasponsible for any in app globla constants. Notable example is the .env environment variables. If you want to declare a constant whose value is immutable, use this file.

**Controllers** – This folder holds all objects actions. An object is determined by the Model structure. In this application, we will have model objects like, JobInvites, User, Comment. A typical example object is a User object hence, userController.

**Database** – This file holds db.js file, for connecting to mongoose database.

**Helpers** – This folder holds reusable files because we need a DRY codebase

**Middleware** – These are mainly routes validation functions that gets run before the main controller function.

**Models** – These are database collections/tables and they define an object. JobInvites, User, Comment are collections we will be using

**Routes** – All application routes are rendered here.DO NOT PUT ANY ROUTE INSIDE THE index.js file.

**Services** – This folder will be used to interact with database and its models. Don’t call database collections/tables directly from the controllers, helpers or middlewares.

**Test** – Mocha test files through Chai assertion library.

**Views** – This folder holds scripts that will be rendered on the webpage. It has a partials folder that will hold reusable components like header and footer.
For more details on folder structure, check the README.md file

### VS CODE
**Install Plugins** – Below plugins is recommende for installation
1. ESLint
2. Editor Config For VS Code

We expect that all team members use VS Code as we have a .editorconfig file that helps all team members maintain a similar code structure

### DATABASE
For those working on the backend, a database entity relation diagram will be drawn up for us to know what properties each collection/table will have.
**ERD:** https://drive.google.com/open?id=119d5e1394LzNlogR1S0I5yXSQ298fdGj

### NAMING CONVENTION
Every team member should adhere to pascalCase naming for all variables and functions. We will frown with snake_case naming. E.g it should be createdAt and not created_at

### RESOLVING MERGE CONFLICT
Files coming from the develop branch are not to be adjusted or modified without prior notice to the team or TL. If you feel a function or line should be changed, discuss with the team or TL first and state your rational behind the change.

### COMMITING YOUR WORK
Endeavour to have at most 2 commits when you are raising PR, you must squash all your other commits.

### HOW TO CONTRIBUTE
Goto the repo and read the CONTRIBUTING.md file to get started



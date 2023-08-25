# 👾 How to Make a Pull Request

Follow these steps to create a pull request on GitHub and contribute to a repository:

1. **Fork the Repository**
   - Navigate to the GitHub page of the repository you want to contribute to.
   - Click on the "Fork" button at the top right corner of the page.
   - This will create a copy (fork) of the repository under your GitHub account.

2. **Clone the Forked Repository**
   - Open your terminal (command prompt) on your local machine.
   - Clone your forked repository to work with it locally:
     ```
     git clone https://github.com/your-github-username/repository-name.git
     ```
   - Change into the cloned repository directory:
     ```
     cd repository-name
     ```
   - Add the original repository (the one you forked) as the upstream remote:
     ```
     git remote add upstream https://github.com/original-owner/repository-name.git
     ```
     This allows you to keep your local fork up-to-date with any changes made to the original repository.

3. **Create a New Branch**
   - Fetch the latest changes from the upstream repository:
     ```
     git fetch upstream
     ```
   - Switch to the master branch of your fork:
     ```
     git checkout master
     ```
   - Update your local master branch with changes from the original repository:
     ```
     git rebase upstream/master
     ```
   - Push the updated master branch to your fork on GitHub:
     ```
     git push origin master
     ```
   - Create a new branch to work on your changes:
     ```
     git checkout -b your-branch-name
     ```

4. **Make and Commit Your Changes**
   - Make the necessary changes to the files in your local repository using your preferred text editor or IDE.
   - Use `git status` to see the modified files and check their status.
   - Use `git add <file>` to stage the changes you want to include in your commit.
   - Once you've staged the changes, commit them with a descriptive commit message:
     ```
     git commit -m "Your remarks about the changes you made"
     ```
   - Push your branch to your fork on GitHub:
     ```
     git push origin your-branch-name
     ```

5. **Open a Pull Request**
   - Visit your forked repository's GitHub page.
   - Click on the "Compare & pull request" button at the top of the page.
   - Provide the necessary information for your pull request, including a clear title and description of the changes you made.
   - Click on "Create pull request" to submit your changes for review.

6. **Review and Merge**
   - The repository maintainers will review your pull request and may request further changes or clarifications.
   - Once your pull request is approved, it will be merged into the original repository, and your contribution will become a part of the project.

Remember, if you are new to contributing to open-source projects, it's always a good idea to familiarize yourself with the project's guidelines and the specific contribution process they follow. Happy contributing! 👍🏽

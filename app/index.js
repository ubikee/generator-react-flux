var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  projectName: this.appname,
  projectDescription: '',
  authorName: '',

  prompting: function() {
    var done = this.async();
    this.prompt([
        { type: 'input', name: 'name', message: 'Project Name', default: this.appname},
        { type: 'input', name: 'description', message: 'Project Description', default: ''},
        { type: 'input', name: 'author', message: 'Author', default: ''}
      ], function (answers) {
        this.projectName = answers.name;
        this.projectDescription = answers.description;
        this.authorName = answers.author
        done();
      }.bind(this)
    );
  },

  writting: function () {
    this.template(this.templatePath('package.json'), this.destinationPath('package.json'), this);
    this.copy(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'));
    this.directory(this.templatePath('src'), this.destinationPath('src'));
    this.directory(this.templatePath('dist'), this.destinationPath('dist'));
  },

  install: function () {
    this.npmInstall();
  }

});

var generators = require('yeoman-generator');

module.exports = generator.Base.extend({

  projectName: this.appname,
  projectDescription: '',
  authorName: '',

  prompting: function() {
    var done = thtis.async();
    this.prompt([
        { type: 'input', name: 'name', message: 'Project Name', default: this.appname},
        { type: 'input', name: 'description', message: 'Project Description', default: ''},
        { type: 'input', name: 'author', message: 'Author', default: ''}
      ], function (answers) {
        this.projectName = answers.name;
        this.projectDescription = answers.description;
        this.authorName = answers.author
        done();
      }.bind(this);
    );
  },

  writting: function () {
    this.template(this.templatePath('package.json'), this.destinationPath('package.json'), this);
    this.directory(this.templatePath('src'), this.destinationPath('src'));
    this.directory(this.templatePath('dist'), this.destinationPath('dist'));
  },

  install: funtion () {
    this.npmInstall();
  }

});

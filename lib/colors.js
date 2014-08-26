module.exports = function (expect) {
    expect.output.addStyle('error', function (content) {
        this.text(content, 'red, bold');
    });
    expect.output.addStyle('strings', function (content) {
        this.text(content, '#00A0A0');
    });
    expect.output.addStyle('key', function (content) {
        this.text(content);
    });
    expect.output.addStyle('comment', function (content) {
        this.gray(content);
    });
    expect.output.addStyle('regexp', function (content) {
        this.green(content);
    });
    // Intended to be redefined by a plugin that offers syntax highlighting:
    expect.output.addStyle('code', function (content, language) {
        this.text(content);
    });
};
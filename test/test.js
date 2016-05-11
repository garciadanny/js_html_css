'use strict';

var expect = chai.expect;
chai.should();

describe('meets', function() {
  describe('quotes', function() {
    it('should be an array', function() {
      expect(quotes).to.be.an('array');
    });
    it('should contain objects with quote and source properties', function() {
      quotes.forEach(function (quote, index, array) {
        expect(quote).to.include.keys('quote','source');
      });
    });
    it('should contain at least 5 quotes', function() {
      expect(quotes.length).to.be.at.least(5);
    });
  });

  describe('getRandomQuote', function() {

    it('should return a quote object from the quotes array', function() {
      var quote = getRandomQuote();
      expect(quotes).to.include(quote);
    });
    it('should return a random object from the quotes array', function() {
      // psuedo random check :)
      var quote1 = getRandomQuote();
      var quote2 = getRandomQuote();
      var quote3 = getRandomQuote();
      expect(quote1 == quote2 && quote1 == quote3).to.be.false;
    });
  });

  describe('printQuote', function() {
    var stub;
    var sandbox = sinon.sandbox.create();

    before(function() {  
      stub = sandbox.stub(window, "getRandomQuote");
      stub.returns({ 
        quote: "quote",
        source: "source",
        citation: "citation",
        year: 1000
      });
    });

    it('should call getRandomQuote', function() {
      printQuote();
      stub.called.should.be.true;
    });

    it('should return HTML format', function() {
      var template='<p class="quote">quote</p><p class="source">source<span class="citation">citation</span><span class="year">1000</span></p>';
      printQuote();
      var content = document.getElementById('quote-box').innerHTML;
      expect(template).to.equal(content);
    });

    after(function() {
      sandbox.restore();
    });
  });
});
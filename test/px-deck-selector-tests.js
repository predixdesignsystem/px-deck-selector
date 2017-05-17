// This will be an automatically-generated variable based on the component
// name provided to the pxtestkit yeoman generator
var fixture;

// Wrapper for base automation tests.  This function is automatically
// generated by the pxtestkit yeoman generator
function runBaseTests() {
  fixture = document.getElementById('fixture');

  suite('Base Automation Tests for px-app-nav', function() {

    test('Polymer exists', function() {
      assert.isTrue(Polymer !== null);
    });
    test('px-app-nav fixture is created', function() {
      assert.isTrue(document.getElementById('fixture') !== null);
    });

  });
}

function runCustomTests() {
  fixture = document.getElementById('fixture');

  suite('Check icon size', function() {

    test('Dropdown icon is correct size', function() {
      var iconEl = Polymer.dom(fixture.root).querySelector('iron-icon');
      assert.equal(window.getComputedStyle(iconEl).width, '15px');
    });

    test('First deck is selected by default', function() {
      var label = Polymer.dom(fixture.root).querySelector('.dropdown-text').innerText;
      assert.equal(fixture.selectedDeck.name, 'First Deck');
      assert.equal(label, 'First Deck');
    });

    test('Deck can be selected programmatically', function() {
      fixture.set('selectedDeck', {"name": "Second Deck","url": "/deck2"});
      var label = Polymer.dom(fixture.root).querySelector('.dropdown-text').innerText;
      assert.equal(fixture.selectedDeck.name, 'Second Deck');
      assert.equal(label, 'Second Deck');
    });

  });
}

// This is the bootstrapping function that will run the base and custom tests
// upon the completion of web components construction by Polymer
document.addEventListener("WebComponentsReady", function() {
  runBaseTests();
  runCustomTests();
});

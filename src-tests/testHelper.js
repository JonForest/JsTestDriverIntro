DemoHelper = TestCase("Helper");  
  
DemoHelper.prototype.test_getANumber = function() {
    assertTrue("wrong result returned",getANumber() === 4);
};

DemoHelper.prototype.test_getAString = function() {
    assertTrue("wrong result returned",getAString() === 'Hello, World.');
};

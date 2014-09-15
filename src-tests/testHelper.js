DemoHelper = TestCase("Helper");  
  
DemoHelper.prototype.test_Helper = function() {  
    assertTrue("wrong result returned",Helper() === 4); 
};  

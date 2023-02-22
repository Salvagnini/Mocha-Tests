let assert = chai.assert;

// 1
// describe("describe", function() {
//   it('test', function() {

//   });
// })

// 2
describe("validateEmail", function () {
  describe("valid string", function () {
    it("not an empty string", function () {
      assert.equal(validateEmail(""), false);
    });
    it("typeof string", function () {
      assert.equal(validateEmail(222), false, "number error");
      assert.equal(validateEmail(true), false, "boolean error");
      assert.equal(validateEmail({}), false, "object error");
    });
    it("not all spaces", function () {
      assert.equal(validateEmail("     "), false);
    });

    //2
    it("length more than 5 characters", function () {
      assert.equal(validateEmail("rt"), false);
    });

  });
  
  describe("valid data", function () {
    it("Don\'t have the @ or @ the first character", function () {
      assert.isFalse(validateEmail("emailgmail.com"), "Don\'t have the @");
      assert.isFalse(validateEmail("@emailgmail.com"), "@ the first character");
    });
  });
});
//3
describe("valid email", function () {
  it("Don\'t have more than one @", function () {
    assert.isFalse(validateEmail("@gmail.com"), "Don\'t have more than one @"); // 3 task
  });
//4
  it('have "." after the @', function () {    
      assert.isTrue(validateEmail("e.mail@gmail.com"), 'Have "." after the @');    
      assert.isFalse(validateEmail("e.mail@gmailcom"),'Don\'t have "." after the @');
    });
  it('Don\'t have "." before @ (".@")', function () {
      assert.isFalse(validateEmail("email.@gmailcom"),'Don\'t have "." before @');
    });     
});
const { add, subtract, bankAccount } = require('./math');

// To Be
test("Should get correct sum of numbers", () => {
  expect(add(1, 3)).toBe(4)
});

// Not To Be
test('Should not get zero', () => {
  expect(subtract(2, 3)).not.toBe(0)
})

// toBeNull
test('Should get null', () => {
  const number = null
  expect(number).toBeNull()
})

// toBeLessThan
test("Should get sum less tan 50", () => {
  expect(add(20, 30)).toBeLessThanOrEqual(50)
});

// toBeTruthy
// toBeFalsy
test("Username should be admin", () => {
  const username = "admind";
  // expect(username === "admin").toBeTruthy()
  expect(username === "admin").toBeFalsy()
});

// toEqual
test("Balane equals 500", () => {
  expect(bankAccount.getBalance()).toEqual({ balance: 500 })
});

// ToContain 判斷某個element 是否存在某個array裏面
test('Admin should in be usernames', () => {
  const usernames = ['John', 'Admin', 'Smith'];
  expect(usernames).toContain('John')
})

// ToMatch /insensitive /i 比較大小寫
test('Phunker should include p', () => {
  expect('Phunker').toMatch(/p/i); 
})

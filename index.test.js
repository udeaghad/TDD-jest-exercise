//Task 1
const  stringLength = (string) => {
    if(string.length > 0 && string.length <= 10){ 
    return string.length
    }else {
        return 'Error'
    }
  }

  test(`check the length of string`, () => {
      expect(stringLength('abcde')).toBe(5)
  })

  test(`check the length of string`, () => {
    expect(stringLength('abcdefghijklmnop')).toBe('Error')
})

//Task 2

const reverseString = (string) => {
    return string.split('').reverse('').join('')
}

test(`check if reverse string is correct`, () => {
    expect(reverseString('racecar')).toBe('racecar')
})

//Task 3

class Calculator {
    constructor (valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
    }

add(valueA, valueB){
  return valueA + valueB;
}

subtract(valueA, valueB){
    return valueA - valueB;
}

multiply(valueA, valueB){
    return valueA * valueB;
}

divide(valueA, valueB){
    return valueA/valueB;
}
}

let calculate = new Calculator(this.a,this.b);

describe(`Additions`, ()=> {
    test(`calculation by adding`, ()=> {
        expect(calculate.add(5,5)).toBe(10)
    })

    test(`calculation by adding`, ()=> {
        expect(calculate.add(7,3)).toBe(10)
    })

    test(`calculation by adding`, ()=> {
        expect(calculate.add(2,8)).toBe(10)
    })
    
})

describe(`Subtraction`, ()=> {
    test(`calculation by subtraction`, ()=> {
        expect(calculate.subtract(20,5)).toBe(15)
    })

    test(`calculation by subtraction`, ()=> {
        expect(calculate.subtract(7,3)).toBe(4)
    })

    test(`calculation by subtraction`, ()=> {
        expect(calculate.subtract(2,8)).toBe(-6)
    })
    
})

describe(`multiplications`, ()=> {
    test(`calculation by multiplication`, ()=> {
        expect(calculate.multiply(20,5)).toBe(100)
    })

    test(`calculation by multiplication`, ()=> {
        expect(calculate.multiply(7,3)).toBe(21)
    })

    test(`calculation by multiplication`, ()=> {
        expect(calculate.multiply(2,8)).toBe(16)
    })
    
})

describe(`divisions`, ()=> {
    test(`calculation by division`, ()=> {
        expect(calculate.divide(20,5)).toBe(4)
    })

    test(`calculation by division`, ()=> {
        expect(calculate.divide(21,3)).toBe(7)
    })

    test(`calculation by division`, ()=> {
        expect(calculate.divide(8,2)).toBe(4)
    })
    
})

//Task 4

test(`Capitalize the first letter`, () => {
    expect(capitalize('string')).toBe('String')
})

const capitalize = (string) => {
    return string[0].toUpperCase() + string.split('').slice(1).join('');
}


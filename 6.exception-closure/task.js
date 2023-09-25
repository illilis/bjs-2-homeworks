// Задача 1

function parseCount (parsedValue) {
  let parsedResult = Number.parseFloat(parsedValue);
  let parsedError = new Error("Невалидное значение");

  if (Number.isNaN(parsedResult)) {
    throw parsedError;
  } else {
    return parsedResult;
  }
}

function validateCount (parsedValue) {
  try {
    return parseCount(parsedValue);
  } catch (parsedError) {
    return parsedError;
  }
}

// Задача 2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
	this.b = b;
	this.c = c;

    if (
      (this.a + this.b) <= this.c || 
      (this.a + this.c) <= this.b || 
      (this.b + this.c) <= this.a
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }

  get area() {
    let p = this.perimeter / 2;

    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(area.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    let triangle = new Triangle(a, b, c);
    return triangle;
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }
    }
  }  
}
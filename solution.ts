const formatValue = (
  newValue: string | number | boolean
): string | number | boolean | undefined => {
  if (typeof newValue === "string") {
    return newValue.toUpperCase();
  } else if (typeof newValue === "number") {
    return newValue * 10;
  } else if (typeof newValue === "boolean") {
    return !newValue;
  }
};

const getLength = (value: string | number[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    throw new Error("undefined");
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type RatingType = {
  title: string;
  rating: number;
};

const filterByRating = (input: RatingType[]): RatingType[] => {
  const filterRatings = input.filter(
    (value) => value.rating >= 4 && value.rating <= 5
  );
  return filterRatings;
};

type UserType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: UserType[]): UserType[] => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (value: Book): void => {
  const { title, author, publishedYear, isAvailable } = value;

  const updatedAvailable = isAvailable ? "Yes" : "No";

  const formattedString = ` Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${updatedAvailable}`;

  console.log(formattedString);
};

type ArrayType = number | string | undefined;

const getUniqueValues = (arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] => {
  const newArr = [...arr1];
  let newArrIdx = newArr.length;

  for (let i = 0; i < arr2.length; i++) {
    let notFound = false;

    for (let j = 0; j < newArr.length; j++) {
      if (arr2[i] === newArr[j]) {
        notFound = false;
        break;
      } else {
        notFound = true;
      }
    }
    if (notFound) {
      newArr[newArrIdx] = arr2[i];
      newArrIdx++;
    }
  }

  return newArr;
};

interface IProduct {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: IProduct[]): number => {
  const totalPrice = products.reduce((prev, item) => {
    const { discount, price, quantity } = item;

    const discountPercentage = discount ?? 0;
    const itemPrice = price * quantity;

    const discountAmount = itemPrice * (discountPercentage / 100);

    return prev + itemPrice - discountAmount;
  }, 0);

  return totalPrice;
};

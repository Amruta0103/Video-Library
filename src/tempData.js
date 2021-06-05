import faker from "faker";

faker.seed(123);

export const data = [...Array(10)].map((item) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  brand: faker.lorem.word(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
}));
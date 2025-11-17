# Blog Post

### 1. What are some differences between interfaces and types in TypeScript?

টাইপস্ক্রিপ্টে আমরা প্রায়ই Interface এবং Type Alias ব্যবহার করি। প্রথম নজরে মনে হতে পারে দুইটি টপিক একই জিনিস, কারণ দুটোই অবজেক্টের কাঠামো বা টাইপ নির্ধারণে ব্যবহার করা হয়। কিন্তু এই দুটির মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে নিম্নে তাই আলোচনা করা হলঃ

## Interface:

সহজভাষায় Interface হলো একটি blueprint যা অবজেক্ট বা ক্লাসের কাঠামো নির্ধারণ করে। Interface ব্যবহার করে আমরা বলতে পারি: এই অবজেক্টে কোন প্রপার্টি থাকবে, তার টাইপ কী হবে, এবং কোন ফাংশন থাকবে কি না। Interface শুধুমাত্র non-primitive ডেটা টাইপ এর জন্যে কাজ করে। Interface সহজে extend করা যায় যা type alias করা যায় না।

উদাহরণ:

```ts
interface Iuser {
  id: number;
  name: string;
  city: string;
  postCode?: number; //optional type
}

const user: Iuser = {
  id: 1,
  name: "lupin",
  city: "Dhaka",
};
console.log(user);
```

## Type Alias:

Type Alias হলো একটি পদ্ধতি যেখানে কাস্টম নাম দিয়ে টাইপকে সংজ্ঞায়িত করা যায়। Type Alias দিয়ে শুধু অবজেক্ট নয়, string, union, tuple, অথবা যেকোনো কমপ্লেক্স টাইপকেও সংজ্ঞায়িত করা যায়। Type Alias দিয়ে শুধু অবজেক্ট নয়, union, intersection, tuple বা primitive টাইপকেও সংজ্ঞায়িত করা যায়। Type Alias সাধারণত extend করতে পারি না কিন্তু intersection (&) ব্যবহার করা যায়।

উদাহরণঃ

```ts
type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address?: string;
};

const user: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "Y",
  },
  gender: "female",
  contactNo: "01999",
  address: “Dhaka”,
};
```

<hr>

### 3. Explain the difference between any, unknown, and never types in TypeScript.

আমরা জানি জাভাস্ক্রিপ্টের ডেটা টাইপ দুই ধরনের হয়ে থাকে Primitive টাইপ এবং Non-Primitive টাইপ। জাভাস্ক্রিপ্টে এই Primitive টাইপ এর মধ্যে মূলত ৭ ধরনের টাইপ হয় যেমন number, string, boolean, null, undefined, bigint, symbol।

জাভাস্ক্রিপ্টের এর মতো টাইপস্ক্রিপ্টেও এই ৭ ধরনের টাইপ রয়েছে, তবে আমরা কিন্তু জানি টাইপস্ক্রিপ্ট অনেক স্মার্ট সুতরাং টাইপস্ক্রিপ্ট এই সব জাভাস্ক্রিপ্ট টাইপের সাথে আরও কিছু শক্তিশালী টাইপ আমাদেরকে দেয় যেমন any, unknown, never। এই টাইপ গুলো আমাদের কোডকে আরও টাইপ secure, readable, maintainable করতে সাহায্য করে।

এই ব্লগে আমরা টাইপস্ক্রিপ্টের এই তিনটি গুরুত্বপূর্ণ টাইপ any, unknown, এবং never সহ তাদের ব্যবহার, পার্থক্য এবং বাস্তব উদাহরণ দেখব।

Any Type:

---

সব ধরনের ভ্যালু নিতে পারে, তার মানে টাইপ যেকোনো কিছুই হতে পারে। টাইপস্ক্রিপ্ট কোনো ধরনের ভুল বা সতর্কবার্তা দেখায় না যেটি একদমই নিরাপদ না। সুতরাং any টাইপস্ক্রিপ্টের টাইপ সেফটি পুরোপুরি সরিয়ে দেয়।

উদাহরণ:

```ts
let data: any;
data = 10;
data = "hello";
data = true;
data.toUpperCase(); // TypeScript কোনো error দেবে না
```

## Unknown Type:

টাইপস্ক্রিপ্টে unknown টাইপ হলো any এর নিরাপদ বিকল্প।এই টাইপেও যেকোনো ধরনের মান রাখা যায় কিন্তু পার্থক্য হলো ব্যবহার করার আগে টাইপ চেক করা বাধ্যতামূলক। মানে কোনো অপারেশন করার আগে স্পষ্টভাবে টাইপ narrow করা প্রয়োজন, যাতে টাইপস্ক্রিপ্ট compile-time এ বুঝতে পারে।
সুতরাং, unknown ব্যবহার করলে typeof, instanceof অথবা কাস্টম টাইপ গার্ড ইত্যাদি ব্যবহার করে টাইপ যাচাই করতে হবে।

উদাহরণ:

```ts
const findDiscountAmount = (input: unknown) => {
  if (typeof input === "number") {
    console.log(input * 0.1);
  } else if (typeof input === "string") {
    const [discountAmount] = input.split(" ");
    console.log(Number(discountAmount) * 0.1);
  } else {
    console.log("invalid input");
  }
};

findDiscountAmount(100);
findDiscountAmount("100 Tk");
```

## Never Type:

never হলো এমন একটি বিশেষ টাইপ, যা এমন মানকে নির্দেশ করে যা “কখনোই ঘটে না. সহজভাবে কোনো ফাংশন বা expression যদি কখনোই কোনো value produce না করে, তখন তার টাইপ হয় never

উদাহরণ:

```ts
//never
const throwError = (msg: string): never => {
  throw new Error(msg);
};
```

এখানে উপরের ফাংশনে কোনো value return করতে পারে না তাই টাইপ never।

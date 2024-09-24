import React from "react";
import CardsContainer from "../components/CardsContainer";
import Header from "../components/Header";
import Wraper from "../components/Wraper";

const cards = [
  {
    img: "https://coatsandcolors.com/wp-content/uploads/2023/05/Japanese-Akita-Inu-Coat-Colors-_-red-Akita-puppy-1152x1536.jpg",
    title: "MO102 -  Pomeranian Grey",
    gender: "gender",
    age: "age",
    price: "5456456465 AAA",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1gEHbVrSFLhmPucXSldZxqjMSXico-MS2Q&s",
    title: "MO102 -  Pomeranian Grey",
    gender: "gender",
    age: "age",
    price: "5456456465 AAA",
  },
  {
    img: "https://dinoanimals.com/wp-content/uploads/2020/12/Caucasian-Shepherd-Dog-18.jpg",
    title: "MO202 -  Caucasian Shepherd",
    gender: "gender",
    age: "age",
    price: "5456456465 AAA",
  },
  {
    img: "https://dogtime.com/wp-content/uploads/sites/12/2024/04/GettyImages-1451526081-e1713534887441.jpg?w=1024",
    title: "MO102 -  Pomeranian Grey",
    gender: "gender",
    age: "age",
    price: "5456456465 AAA",
  },
  {
    img: "https://dogsbestlife.com/wp-content/uploads/2019/02/Alaskan-malamute-e1700603578552.jpeg",
    title: "MO102 -  Pomeranian Grey",
    gender: "gender",
    age: "age",
    price: "5456456465 AAA",
  },
  {
    img: "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/chihuahua-dog-breed-info.jpeg",
    title: "MO102 -  Pomeranian Grey",
    gender: "gender",
    age: "age",
    price: "5456456465 AAA",
  },
];

function Home() {
  return (
    <>
      <Header />
      <Wraper>
        <CardsContainer cards={cards} />
      </Wraper>
    </>
  );
}

export default Home;

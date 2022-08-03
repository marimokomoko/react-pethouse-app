import { async } from "@firebase/util";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import "./styles/Home.css";

const Home = () => {
  // type RecruitmentList = {
  //   id: string;
  //   animalType: string;
  //   background: string;
  //   currentStatus: string;
  //   position: string;
  //   remarks: string;
  //   title: string;
  //   transferPlan: string;
  // };
  const [recruitmentList, setRecruitmentList] = useState<
    { [key: string]: string }[]
  >([]);

  useEffect(() => {
    const getPosts = async () => {
      const { docs } = await getDocs(collection(db, "recruitment_posts"));
      setRecruitmentList(docs.map((doc) => ({ ...doc.data() })));
    };
    getPosts();
  }, []);

  return (
    <>
      <div className="homePage">
        {recruitmentList.map((item: any) => {
          return (
            <div className="postContents" key={item.id}>
              <div className="postHeader">
                <h1>{item.title}</h1>
                <p>種類：{item.animalType}</p>
                <p>経緯：{item.background}</p>
                <p>状況：{item.currentStatus}</p>
                <p>場所：{item.position}</p>
                <p>備考：{item.remarks}</p>
                <p>引き渡し方法：{item.transferPlan}</p>
              </div>
              <div className="postTextContainer"></div>
              <div className="nameAndDeleteButton">
                <h3>@name</h3>
                {/* <h3>@{item.author.username}</h3> */}
                <button>削除</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;

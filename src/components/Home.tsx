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
      // console.log(recruitmentList);
    };
    getPosts();
  }, []);

  return (
    <div className="homePage">
      {recruitmentList.map((item: any) => {
        return (
          <div className="postContents">
            <div className="postHeader">
              <h1>{item.title}</h1>
              <p>{item.animalType}</p>
              <p>{item.background}</p>
              <p>{item.currentStatus}</p>
              <p>{item.position}</p>
              <p>{item.remarks}</p>
              <p>{item.remarks}</p>
              <p>{item.transferPlan}</p>
            </div>
            <div className="postTextContainer"></div>
            <div className="nameAndDeleteButton">
              <h3>aaa</h3>
              <button>削除</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase";
import "./styles/Recruitment.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { idText } from "typescript";

const Recruitment = () => {
  const [id, setId] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [title, setTitle] = useState("");
  const [position, setPosition] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [background, setBackground] = useState("");
  const [transferPlan, setTransferPlan] = useState("");
  const [remarks, setremarks] = useState("");
  // const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "recruitment_posts"), {
      id: id,
      currentStatus: currentStatus,
      title: title,
      position: position,
      animalType: animalType,
      background: background,
      transferPlan: transferPlan,
      remarks: remarks,
      // author: {
      //   username: auth.currentUser.displayName,
      //   id: auth.currentUser.uid
      // }
    });

    navigate("/");
  };

  return (
    <div className="recruitmentPage">
      <h1>里親を募集する</h1>
      <div className="container">
        <h2>1.基本データを入力してください</h2>
        <div className="inputPost">
          <div className="inputItem">
            <FontAwesomeIcon className="fontIcon" icon={faPaw} />
            id
            <input type="text" onChange={(e) => setId(e.target.value)} />
          </div>
          <div className="inputItem">
            <FontAwesomeIcon className="fontIcon" icon={faPaw} />
            募集状況
          </div>
          <select onChange={(e) => setCurrentStatus(e.target.value)}>
            <option value="募集中">募集中</option>
            <option value="募集終了">募集終了</option>
          </select>
          <div className="inputItem">
            <FontAwesomeIcon className="fontIcon" icon={faPaw} />
            タイトル
          </div>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
          <div className="inputItem">
            <FontAwesomeIcon className="fontIcon" icon={faPaw} />
            ペット現在所在地
          </div>
          <select onChange={(e) => setPosition(e.target.value)}>
            <option value="北海道">北海道</option>
            <option value="青森県">青森県</option>
            <option value="岩手県">岩手県</option>
            <option value="宮城県">宮城県</option>
            <option value="秋田県">秋田県</option>
            <option value="山形県">山形県</option>
            <option value="福島県">福島県</option>
            <option value="茨城県">茨城県</option>
            <option value="栃木県">栃木県</option>
            <option value="群馬県">群馬県</option>
            <option value="埼玉県">埼玉県</option>
            <option value="千葉県">千葉県</option>
            <option value="東京都">東京都</option>
            <option value="神奈川県">神奈川県</option>
            <option value="新潟県">新潟県</option>
            <option value="山梨県">山梨県</option>
            <option value="長野県">長野県</option>
            <option value="富山県">富山県</option>
            <option value="石川県">石川県</option>
            <option value="福井県">福井県</option>
            <option value="岐阜県">岐阜県</option>
            <option value="静岡県">静岡県</option>
            <option value="愛知県">愛知県</option>
            <option value="三重県">三重県</option>
            <option value="滋賀県">滋賀県</option>
            <option value="京都府">京都府</option>
            <option value="大阪府">大阪府</option>
            <option value="兵庫県">兵庫県</option>
            <option value="奈良県">奈良県</option>
            <option value="和歌山県">和歌山県</option>
            <option value="鳥取県">鳥取県</option>
            <option value="島根県">島根県</option>
            <option value="岡山県">岡山県</option>
            <option value="広島県">広島県</option>
            <option value="山口県">山口県</option>
            <option value="徳島県">徳島県</option>
            <option value="香川県">香川県</option>
            <option value="愛媛県">愛媛県</option>
            <option value="高知県">高知県</option>
            <option value="福岡県">福岡県</option>
            <option value="佐賀県">佐賀県</option>
            <option value="長崎県">長崎県</option>
            <option value="熊本県">熊本県</option>
            <option value="大分県">大分県</option>
            <option value="宮崎県">宮崎県</option>
            <option value="鹿児島県">鹿児島県</option>
            <option value="沖縄県">沖縄県</option>
          </select>
          <div className="inputItem">
            <FontAwesomeIcon className="fontIcon" icon={faPaw} />
            ペット種類
          </div>
          <input type="text" onChange={(e) => setAnimalType(e.target.value)} />
        </div>
      </div>
      <div className="container">
        <h2>2.詳細を入力してください</h2>
        <div className="inputPost">
          <div className="inputItem">
            <FontAwesomeIcon className="fontIcon" icon={faPaw} />
            募集の経緯
          </div>
          <textarea onChange={(e) => setBackground(e.target.value)}></textarea>
          <div className="inputItem">
            <FontAwesomeIcon className="fontIcon" icon={faPaw} />
            引き渡し方法
          </div>
          <textarea
            onChange={(e) => setTransferPlan(e.target.value)}
          ></textarea>
          <div className="inputItem">
            <FontAwesomeIcon className="fontIcon" icon={faPaw} />
            その他備考
          </div>
          <textarea onChange={(e) => setremarks(e.target.value)}></textarea>
        </div>
      </div>
      <div className="container">
        <h2>3.写真をアップロード</h2>
        <div className="inputPost">
          <div className="inputItem">
            <FontAwesomeIcon className="fontIcon" icon={faPaw} />
            ペット写真
          </div>
        </div>
      </div>
      <button className="postButton" onClick={createPost}>
        投稿する
      </button>
    </div>
  );
};

export default Recruitment;

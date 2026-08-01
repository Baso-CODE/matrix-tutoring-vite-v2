// LesPrivateBahasaList.js
import { CheckCircle } from "lucide-react";
import "./LesPrivateBahasaList.css";

const LesPrivateBahasaList = () => {
  const subjects = [
    "Les Privat Bahasa Inggris Conversation & Umum",
    "Privat Bahasa Mandarin (Cina)",
    "Les Privat Bahasa Jepang",
    "Privat Bahasa Korea",
    "Les Privat Bahasa Inggris",
    "Privat Bahasa Prancis",
    "Les Privat Bahasa Arab",
    "Privat Bahasa Jerman",
    "Les Privat Bahasa Indonesia untuk Penutur Asing (BIPA)",
    "Privat Persiapan TOEFL, IELTS, dan TOEIC",
    "Dan les privat bahasa asing lainnya akan kami upayakan pengajarnya.",
  ];

  return (
    <div className="les-private-bahasa-list-container">
      <h2>
        Kami melayani les privat datang ke rumah dan les privat online untuk
        bahasa seluruh Indonesia. Berikut beberapa mata kuliah yang dapat kami
        upayakan tutornya:
      </h2>
      <ul className="subject-list-les-private-bahasa">
        {subjects.map((subject, index) => (
          <li key={index} className="subject-list-les-private-bahasa-item">
            <CheckCircle className="subject-list-les-private-bahasa-icon" />
            <span className="subject-text">{subject} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LesPrivateBahasaList;

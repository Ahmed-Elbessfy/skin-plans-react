import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/GlobalContext";
import { BsCheck } from "react-icons/bs";

const SkinTypeRoutine = () => {
  const { skinType } = useContext(AppContext);
  const [skinTypeRoutine, setSkinTypeRoutine] = useState({});

  const content = [
    {
      val: "5",
      head: "روتين البشرة الجافة",
      listItems: [
        "تحتاجين لشرب 5 أكواب مياه إضافية يوميا كحد أدني",
        "تناولي مشروب الشمندر الأحمر يوميا فهو يحتوي على مضادات الأكسدة لمقاومة تجاعيد البشرة",
        "تناولي المزيد من الخضراوات والورقيات لاحتوائها على الماء والمعادن التي تحافظ على رطوبة البشرة",
        "جهزي زجاجة من الماء منقوع بها الليمون والنعناع والعسل الأبيض والتفاح مساءًا و تناوليها صباحًا لطرد سموم البشرة والحفاظ على نقائها",
        "اغسلي وجهك مرتان فقط يوميًا بالماء الفاتر للحفاظ على زيوت البشرة",
        "تجنبي التعرض لأشعة الشمس بدون واقي شمس من العاشرة صباحًا وحتى الرابعة عصرًا",
      ],
    },
    {
      val: "20",
      head: "روتين البشرة الدهنية",
      listItems: [
        "تحتاجين لشرب 4 أكواب مياه إضافية يوميا",
        "تناولي مشروب التفاح والبنجر يوميا لتعطيل الإنزيم المسئول عن ظهور البقع الداكنة وعلامات الشيخوخة",
        "استخدمي منقوع البقدونس مرتين أسبوعيًا لتنظيف وتنقية البشرة الدهنية من السموم.",
        "احرصي على تناول الفواكه ذات اللون الأحمر كالعنب والرمان لاحتوائها على مركب الانثوسيانين للحد من ظهور التجاعيد المبكرة",
        "اغسلي وجهك ثلاث مرات يوميًا بالماء الفاتر للتخلص من الدهون المتراكمة على البشرة والتي تبطئ عملية دوران الخلايا",
        "تجنبي التعرض لأشعة الشمس بدون واقي شمس من العاشرة صباحًا وحتى الرابعة عصرًا",
      ],
    },
    {
      val: "10",
      head: "روتين البشرة العادية",
      listItems: [
        "تحتاجين لشرب 3 أكواب مياه إضافية يوميا كحد أدني",
        "احرصي على تناول مشروب الشاي الأخضر بانتظام لتعطيل الإنزيم المسئول عن ظهور البقع وعلامات التقدم في السن",
        "استخدمي منقوع النعناع البارد مرتين أسبوعيًا كغسول للبشرة",
        "تناولي الأفوكادو و البروكلي والتوت لتعزيز مرونة الجلد و إمداده بمضادات الأكسدة التي تقاوم علامات الشيخوخة",
        "اغسلي وجهك مرتان فقط يوميًا بالماء الفاتر",
        "تجنبي التعرض لأشعة الشمس بدون واقي شمس من العاشرة صباحًا وحتى الرابعة عصرًا",
      ],
    },
    {
      val: "15",
      head: "روتين البشرة المختلطة",
      listItems: [
        "تحتاجين لشرب 4 أكواب مياه إضافية يوميا كحد أدني",
        "احرصي على تناول مشروب الجزر والشمندر يوميًا لتنقية الدم في البشرة وإعطائها الحيوية.",
        "استخدمي منقوع القرنفل البارد ثلاث مرات أسبوعيًا كغسول للبشرة",
        "احرصي على تناول السبانخ والبنجر لاحتوائهم على فيتامين هـ الذي يساعد على ترطيب البشرة وتأخير علامات الشيخوخة",
        "اغسلي وجهك مرتان فقط يوميًا بالماء الفاتر",
        "تجنبي التعرض لأشعة الشمس بدون واقي شمس من العاشرة صباحًا وحتى الرابعة عصرًا",
      ],
    },
  ];

  useEffect(() => {
    const res = content.filter((c) => c.val === skinType);
    setSkinTypeRoutine(res[0]);
  }, []);

  return (
    <>
      {skinTypeRoutine && (
        <div className="text-right result_comp_style mb-4">
          <div
            className="card text-center my-3"
            style={{
              borderRadius: "2rem",
              border: "2px solid #363873",
            }}
          >
            <div
              className="card-header bg-prime text-white"
              style={{ borderRadius: "1.7rem 1.7rem 0 0" }}
            >
              {skinTypeRoutine.head}
            </div>
            <div className="card-body">
              <p
                className="card-text"
                style={{ color: "rgb(95, 100, 226)" }}
              ></p>
              <ul className="my-3 w-100 text-right">
                {console.log(skinTypeRoutine.listItems)}
                {skinTypeRoutine.listItems &&
                  skinTypeRoutine.listItems.map((c, i) => {
                    return (
                      <li key={i} className="pb-2" style={listStyle}>
                        <BsCheck className="bg-prime text-white ml-3" />
                        {c}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const listStyle = {
  listStyle: "none",
  paddingRight: "1rem",
};

export default SkinTypeRoutine;
